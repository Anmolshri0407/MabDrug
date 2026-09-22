import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  preview: {
    allowedHosts: [
      "miraculous-light-production-e025.up.railway.app",
    ],
  },
})
