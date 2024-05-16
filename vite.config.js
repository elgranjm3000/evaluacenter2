import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: false,
    port : 3000,
    proxy: {
        '/api': {
            target: 'http://epp3.ovh:5000',
            changeOrigin: true
        }
    }
    
},
})