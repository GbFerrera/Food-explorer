import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Food_explorer-Front/",
  server: {
    fs: {
      allow: [
        '/Users/gabrielferreira/node_modules/slick-carousel/slick/fonts',
        '/Users/gabrielferreira/Desktop/TCC-FRONT/Food-Explorer'
      ]
    }
  },
  build: {
    outDir: 'dist', // opcional: especifica o diretório de saída para a build de produção
  }
});
  