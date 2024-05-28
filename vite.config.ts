import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': './src', // alias @ to src directory
    },
  },
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})