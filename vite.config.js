import { defineConfig } from 'vite';

// Open the app at http://localhost:5173
// localhost is a secure context (mic works) and an authorised Firebase domain.
export default defineConfig({
  server: { host: 'localhost', port: 5173, strictPort: true }
});
