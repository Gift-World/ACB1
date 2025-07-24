import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'acb2.png'],
      manifest: {
        name: "Africa's Campus Battle",
        short_name: 'ACB',
        description: 'Africa’s Campus Battle official app',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'acb2.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'acb2.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'acb2.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ]
})
