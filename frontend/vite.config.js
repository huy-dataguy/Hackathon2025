import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      // Chuyển các yêu cầu đến đường dẫn '/chat' đến cổng 4000 (dự án web chat)

      '/salus': 'http://localhost:8501', // Chuyển các yêu cầu đến '/salus' đến cổng 8501
    },   
  },
}); 