import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Build optimizations for performance
  build: {
    // Minify using terser for better compression than esbuild default
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,     // Remove console.logs in production
        drop_debugger: true,    // Remove debugger statements
        pure_funcs: ['console.log'] // Remove specific functions
      }
    },
    
    // Rollup options for chunk splitting (289 KiB JS reduction)
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          charts: ['chart.js', 'react-chartjs-2'],
          maps: ['leaflet', 'react-leaflet'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
