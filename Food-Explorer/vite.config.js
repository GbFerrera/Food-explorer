import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Este é o diretório base em que seu aplicativo será hospedado
  build: {
    outDir: 'dist', // Este é o diretório de saída dos arquivos de build
    assetsDir: 'assets', // Diretório onde os assets (como imagens) serão colocados dentro de outDir
    sourcemap: true, // Gere sourcemaps para facilitar a depuração
    minify: 'terser', // Minificar os arquivos de build usando o Terser
  },
  server: {
    port: 3000, // Porta em que o servidor Vite irá rodar localmente
  },
});
