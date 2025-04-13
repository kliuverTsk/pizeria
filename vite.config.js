import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pizeria/',
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        format: 'systemjs',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    modulePreload: {
      polyfill: true
    }
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  }
})