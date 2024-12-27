import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'three-vendor': ['three', 'three-stdlib']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['three-stdlib']
  },
  esbuild: {
    exclude: ['three-stdlib'],
    logOverride: {
      'this-is-undefined-in-esm': 'silent'
    }
  },
  ssr: {
    noExternal: ['@nextui-org/react']
  }
})
