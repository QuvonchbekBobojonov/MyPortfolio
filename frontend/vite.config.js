import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, fileURLToPath(new URL('.', import.meta.url)), 'VITE_')
  // Production'da /cv/ ni vercel.json backend'ga yo'naltiradi; lokalda xuddi shuni proxy qiladi.
  const proxy = {
    '/cv/': { target: env.VITE_API_URL || 'https://api.moorfo.uz', changeOrigin: true },
  }

  return {
    plugins: [react()],
    server: { proxy },
    preview: { proxy },
  }
})
