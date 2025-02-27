import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:'/',
  server: {  
    proxy: {
        '/api': {
            target: 'http://epp3.ovh:5000',
            changeOrigin: true
        }
    }
    
},
})