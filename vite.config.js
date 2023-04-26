import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import eslintPlugin from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';
import vitePluginCompress from 'vite-plugin-compression';
import { resolve } from 'path';

export default defineConfig({
  publicDir: './public',
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true,
  },

  plugins: [
    vue(),
    glsl.default(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue'],
    }),
    vitePluginCompress(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  }
});
