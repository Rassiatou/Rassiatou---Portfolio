import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { SITE_TITLE } from './src/siteMeta.js'

export default defineConfig({
  plugins: [
    {
      name: 'inject-site-title',
      transformIndexHtml(html) {
        return html.replace(
          /<title>[\s\S]*?<\/title>/,
          `<title>${SITE_TITLE}</title>`,
        )
      },
    },
    react(),
    tailwindcss(),
  ],
  server: {
    headers: {
      'Cache-Control': 'no-store',
    },
  },
  preview: {
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})