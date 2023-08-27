import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
   base: 'task-mern',
   server: {
      proxy: {
         '/api': {
            target: 'https://task-mern-be.vercel.app',
            changeOrigin: true,
         },
      },
   },
});
