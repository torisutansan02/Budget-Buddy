import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Optional: alias for cleaner imports
    },
  },
  build: {
    outDir: 'frontend/dist', // Ensure this matches with Vercel settings
    emptyOutDir: true,
  },
  server: {
    port: 3000, // Local server port
    proxy: {
      // Proxy API requests to backend server
      '/api': 'http://localhost:4000', 
    },
  },
});
