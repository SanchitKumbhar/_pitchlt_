
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: true, 
    port: 5173,
    proxy: {
      // Forward API requests to your backend
      '/api': {
        target: 'http://localhost:3000', // backend server
        changeOrigin: true,
        secure: false,
      }
    } 
  }
})

