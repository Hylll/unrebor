import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import path from "node:path";

export default defineConfig({
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
  plugins: [
    vue(),
    svgLoader({ svgo: false }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
