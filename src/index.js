/**
 * khukir-bagan-assets Worker
 * ---------------------------------------------------------------
 * Sits in front of an R2 bucket and does two jobs:
 *
 * 1. GET  /<key>            -> public read (audio files, gallery images)
 * 2. POST /upload/gallery   -> authenticated write (kid drawings)
 *
 * Firebase Auth/Firestore are untouched — this Worker only replaces
 * Firebase *Storage*. The upload endpoint verifies the same Firebase
 * ID token the app already gets from `auth.currentUser.getIdToken()`,
 * by checking its signature against Google's public JWKS. No Firebase
 * Admin SDK needed (Workers can't run it), no service account key to
 * leak.
 */

import { jwtVerify, createRemoteJWKSet } from 'jose';

// Google's JWKS for Firebase ID tokens. `jose` caches this internally
// per-isolate, so we don't re-fetch on every request.
const JWKS = createRemoteJWKSet(
  new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com')
);

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024; // 5MB — plenty for a canvas PNG
const ALLOWED_TYPES = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/webp': 'webp',
};

function corsHeaders(origin, allowedOriginsCsv) {
  const allowed = allowedOriginsCsv.split(',').map((o) => o.trim()).filter(Boolean);
  const allowOrigin = allowed.includes(origin) ? origin : allowed[0];
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

async function verifyFirebaseToken(token, projectId) {
  const { payload } = await jwtVerify(token, JWKS, {
    issuer: `https://securetoken.google.com/${projectId}`,
    audience: projectId,
  });
  if (!payload.sub) throw new Error('token missing sub (uid)');
  return payload.sub;
}

function json(body, status, extraHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin') || '';
    const cors = corsHeaders(origin, env.ALLOWED_ORIGIN);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors });
    }

    // ---------------------------------------------------------------
    // GET /<key> — public read. Used for both audio/* and gallery/*.
    // Point AUDIO_MAP and <img> tags at:  PUBLIC_BASE_URL + '/' + key
    // ---------------------------------------------------------------
    if (request.method === 'GET') {
      const key = decodeURIComponent(url.pathname.replace(/^\/+/, ''));
      if (!key) return new Response('Not found', { status: 404, headers: cors });

      const obj = await env.ASSETS.get(key);
      if (!obj) return new Response('Not found', { status: 404, headers: cors });

      const headers = new Headers(cors);
      obj.writeHttpMetadata(headers);
      headers.set('etag', obj.httpEtag);
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      return new Response(obj.body, { headers });
    }

    // ---------------------------------------------------------------
    // POST /upload/gallery — authenticated write.
    // Body: raw image bytes. Header: Authorization: Bearer <firebase-id-token>
    // ---------------------------------------------------------------
    if (request.method === 'POST' && url.pathname === '/upload/gallery') {
      const authHeader = request.headers.get('Authorization') || '';
      const token = authHeader.replace(/^Bearer\s+/i, '').trim();
      if (!token) return json({ error: 'missing bearer token' }, 401, cors);

      let uid;
      try {
        uid = await verifyFirebaseToken(token, env.FIREBASE_PROJECT_ID);
      } catch (e) {
        return json({ error: 'invalid or expired token' }, 401, cors);
      }

      const contentType = (request.headers.get('Content-Type') || '').split(';')[0].trim();
      const ext = ALLOWED_TYPES[contentType];
      if (!ext) return json({ error: `unsupported content-type: ${contentType}` }, 415, cors);

      const buf = await request.arrayBuffer();
      if (buf.byteLength === 0) return json({ error: 'empty body' }, 400, cors);
      if (buf.byteLength > MAX_UPLOAD_BYTES) return json({ error: 'file too large' }, 413, cors);

      // Path is derived entirely from the verified uid — a user can only
      // ever write into their own folder, never someone else's.
      const key = `gallery/${uid}/${Date.now()}-${crypto.randomUUID()}.${ext}`;

      await env.ASSETS.put(key, buf, {
        httpMetadata: { contentType },
      });

      const publicUrl = `${env.PUBLIC_BASE_URL}/${key}`;
      return json({ url: publicUrl, key }, 200, cors);
    }

    return new Response('Not found', { status: 404, headers: cors });
  },
};
