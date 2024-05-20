import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: './static/',
  resolve: {
    alias: {
      'css/': './.storybook/static/dist/css',
    },
    preserveSymlinks: true,
  },
});
