import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.raw({ type: 'image/*', limit: '10mb' }));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', app: 'khukir-bagan' });
});

// Local / mock gallery upload endpoint
app.post('/upload/gallery', (req, res) => {
  // In-memory / mock URL response
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
  res.json({
    url: `data:image/png;base64,placeholder`,
    key: `gallery/local/${id}.png`
  });
});

// Serve static assets from project directory
app.use(express.static(__dirname));

// Fallback for SPA/routing to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Khukir Bagan server running at http://${HOST}:${PORT}`);
});
