import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches with your build directory
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Optional: alias for cleaner imports
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:4000', // Proxy API requests to the backend
    },
  },
});
