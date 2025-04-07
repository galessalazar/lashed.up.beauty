import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // backend server
        target: 'http://localhost:5000',
        // allows the proxy server to work with the cors errors, changes the origin
        changeOrigin: true,
        
      }
    }
  },

  build: {
    rollupOptions: {
      external: ['express', 'safe-bufffer', 'buffer'],
    }
  }
});
