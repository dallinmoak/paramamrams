import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        showList: resolve(__dirname, 'showList.html'),
      },
      output: {
        // Ensure that /index.html is served at / and /showList.html at /showList
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.facadeModuleId.endsWith('index.html')) {
            return 'index.html';
          }
          if (chunkInfo.facadeModuleId.endsWith('showList.html')) {
            return 'showList/index.html';
          }
          return '[name].js';
        }
      }
    }
  }
});
