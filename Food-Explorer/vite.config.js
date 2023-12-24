import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', 
  build: {
    target: 'es2015',
    outDir: 'dist', 
    assetsDir: 'assets', 
    sourcemap: true, 
    minify: 'terser', 
    assetsInclude: ['/**/*.js'],
  },
  server: {
    port: 3000, 
  },
});
