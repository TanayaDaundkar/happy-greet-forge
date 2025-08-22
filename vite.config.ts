import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { componentTagger } from "lovable-tagger";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: { host: "::", port: 8080 },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    VitePWA({
      // This enables the virtual:pwa-register import and auto updates
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // allow SW in dev so you can test install/offline
      },
      includeAssets: [
        "favicon.ico",
        "robots.txt"
      ],
      manifest: {
        name: "Gurukul Code",
        short_name: "Gurukul",
        description: "AI-powered career guidance and skill-building platform",
        start_url: "/?source=pwa",
        scope: "/",
        display: "standalone",
        theme_color: "#1a73e8",
        background_color: "#ffffff",
        icons: [
          { src: "/icons/icon-72x72.png",  sizes: "72x72",  type: "image/png" },
          { src: "/icons/icon-96x96.png",  sizes: "96x96",  type: "image/png" },
          { src: "/icons/icon-128x128.png", sizes: "128x128", type: "image/png" },
          { src: "/icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
          { src: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
          { src: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/icons/icon-384x384.png", sizes: "384x384", type: "image/png" },
          { src: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "any" },
          { src: "/icons/maskable-icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ]
      },
      workbox: {
        navigateFallback: "/offline.html",
        navigateFallbackDenylist: [/^\/api\//],
        runtimeCaching: [
          // HTML/doc/app shell
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "html-pages",
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 7 }
            }
          },
          // JS/CSS
          {
            urlPattern: ({ request }) =>
              request.destination === "script" || request.destination === "style",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-resources",
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 }
            }
          },
          // Images
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "images",
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 }
            }
          },
          // Fonts
          {
            urlPattern: ({ request }) => request.destination === "font",
            handler: "CacheFirst",
            options: {
              cacheName: "fonts",
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          },
          // API calls (adjust domain if you have an API)
          {
            urlPattern: /^https?:\/\/(.*\.)?gurukulcode\.com\/api\/.*$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 }
            }
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") }
  }
}));
