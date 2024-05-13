import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('custom-')
      }
    }
  })],
  build: {
    target: 'esnext',
    minify: 'terser',
    lib: {
      entry: 'src/CustomElement',
      formats: ['es', 'cjs', 'iife'],
      name: 'CustomElement'
    },
    rollupOptions: {
      external: ['vue', 'element-plus'] // 手动指定 Vue.js 为外部依赖
    }
  }
})

