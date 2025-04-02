import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Optional: alias for cleaner imports
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:4000', // Proxy API requests to backend
    },
  },
})
