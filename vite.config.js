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
})
