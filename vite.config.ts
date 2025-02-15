import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimizeDeps: {
    include: ['pdfjs-dist'],
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'pdf-worker',
          transform(code, id) {
            if (id.includes('pdf.worker.min.js')) {
              return {
                code: code,
                map: null,
              };
            }
          }
        }
      ]
    }
  }
});