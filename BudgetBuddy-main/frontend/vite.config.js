import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Optional: alias for cleaner imports
      '@': path.resolve(__dirname, './src'), 
    },
  },
  build: {
    // Customize build output directory if necessary
    outDir: 'dist',
  },
  server: {
    port: 3000, // Local server port
    proxy: {
      // Proxy API requests to backend server
      '/api': 'http://localhost:4000', 
    },
  },
})
