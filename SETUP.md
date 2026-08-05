# খুকির বাগান — R2 asset Worker setup

What this adds, on top of the existing Firebase setup (unchanged):

- **Firebase Auth** — still logs parents in, still issues ID tokens.
- **Firestore** — still stores `childData` (stars, level, `galleryUrls`, etc).
- **NEW: Cloudflare R2 + this Worker** — replaces *Firebase Storage* only.
  Audio files and gallery drawings now live in R2. The Worker is the only
  thing allowed to write to the bucket, and it only lets a user write into
  their own `gallery/{uid}/` folder (checked by verifying their Firebase ID
  token — no separate login system to build).

## 1. One-time Cloudflare setup

```bash
npm install -g wrangler
wrangler login

cd r2-worker
npm install
wrangler r2 bucket create khukir-bagan-assets
```

## 2. Edit `wrangler.toml`

- `FIREBASE_PROJECT_ID` — already set to `hiya-2cd78` (matches `firebaseConfig.projectId`).
- `ALLOWED_ORIGIN` — add every domain the app runs on (comma-separated, no spaces
  needed but fine either way). This is what stops other sites from calling
  your upload endpoint.
- `PUBLIC_BASE_URL` — leave the `workers.dev` placeholder for now; you'll
  get the real one after the first deploy (step 3), or point it at a custom
  domain (step 4) if you want `cdn.handsandhead.com`-style URLs instead.

## 3. Deploy

```bash
wrangler deploy
```

This prints your Worker URL, e.g. `https://khukir-bagan-assets.<you>.workers.dev`.
Put that into `PUBLIC_BASE_URL` in `wrangler.toml` and redeploy once
(`wrangler deploy` again) so uploaded files resolve to the right base URL.

## 4. (Optional) Custom domain instead of workers.dev

In the Cloudflare dashboard → Workers & Pages → khukir-bagan-assets →
Settings → Domains & Routes → Add a custom domain, e.g.
`assets.handsandhead.com`. Then set `PUBLIC_BASE_URL` to that domain instead
and redeploy.

## 5. Uploading audio files

Audio is read-only from the app's side (`AUDIO_MAP` just holds URLs), so
there's no upload endpoint for it — you push files directly:

```bash
wrangler r2 object put khukir-bagan-assets/audio/rhymes/humpty.mp3 \
  --file ./humpty.mp3 --content-type audio/mpeg
```

Then in `content-data.js`:

```js
const AUDIO_MAP = {
  humpty: 'https://khukir-bagan-assets.<you>.workers.dev/audio/rhymes/humpty.mp3',
  // or, with a custom domain:
  // humpty: 'https://assets.handsandhead.com/audio/rhymes/humpty.mp3',
};
```

Nothing else needs to change — `tryPlayAudio()` in `index.html` already reads
whatever URL is in `AUDIO_MAP`, regardless of where it's hosted.

## 6. Gallery uploads (already wired in index.html)

`index.html` now POSTs the drawing blob straight to
`R2_UPLOAD_ENDPOINT` (`/upload/gallery`) with the user's Firebase ID token
in the `Authorization` header. The Worker verifies that token against
Google's public keys, derives the uid, and writes to
`gallery/{uid}/{timestamp}-{uuid}.png`. The returned URL is then saved into
Firestore exactly as the old `getDownloadURL()` result was — Firestore's
schema doesn't change at all.

Set `R2_UPLOAD_ENDPOINT` near the top of `index.html` (next to
`firebaseConfig`) to your deployed Worker URL + `/upload/gallery`.

## 7. Local testing

```bash
wrangler dev
```

This runs the Worker locally against a local R2 emulation. Point
`R2_UPLOAD_ENDPOINT` at `http://127.0.0.1:8787/upload/gallery` while testing,
and add `http://localhost:5500` (or whatever port Spck's preview uses) to
`ALLOWED_ORIGIN`.

## Notes / things to double check later

- **Max upload size** is capped at 5MB in the Worker (`MAX_UPLOAD_BYTES`) —
  a canvas PNG will be well under this, but bump it if you add photo uploads.
- **Content types** allowed for upload: `image/png`, `image/jpeg`,
  `image/webp`. Add more to `ALLOWED_TYPES` in `src/index.js` if needed.
- **Cache-Control** on reads is set to a 1-year immutable cache, which is
  fine since filenames are unique per upload (timestamp + uuid) — nothing
  ever gets overwritten at the same key, so there's no stale-cache risk.
- **Firestore `galleryUrls`** will now contain a mix of old
  `firebasestorage.app` URLs (existing users) and new Worker URLs (new
  uploads) — both are just plain URLs to an `<img src>`, so this is safe
  and doesn't need a migration.
