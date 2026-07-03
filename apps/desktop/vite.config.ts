import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import electron from 'vite-plugin-electron';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron([
      {
        entry: 'electron/main/index.ts',
      },
      {
        entry: 'electron/preload/index.ts',
        onstart(options) {
          options.reload();
        },
      },
    ]),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@vidyaflow/api': path.resolve(__dirname, '../../packages/api/src/index.ts'),
      '@vidyaflow/ui': path.resolve(__dirname, '../../packages/ui/src/index.ts'),
      '@vidyaflow/types': path.resolve(__dirname, '../../packages/types/src/index.ts'),
      '@vidyaflow/utils': path.resolve(__dirname, '../../packages/utils/src/index.ts'),
      '@vidyaflow/constants': path.resolve(__dirname, '../../packages/constants/src/index.ts'),
      '@vidyaflow/hooks': path.resolve(__dirname, '../../packages/hooks/src/index.ts'),
    },
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
  },
});
