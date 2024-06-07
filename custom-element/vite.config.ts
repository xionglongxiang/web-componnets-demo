import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';
import cleanPlugin from 'vite-plugin-clean-pattern';
import ViteCompression from 'vite-plugin-compression';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { viteExternalsPlugin } from 'vite-plugin-externals';

import vue from '@vitejs/plugin-vue';

const fileContents = fs.readFileSync('./info.yaml', 'utf8');
const info = yaml.load(fileContents) as any;

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('custom-')
        }
      }
    }),
    cssInjectedByJsPlugin(),
    viteExternalsPlugin({
      "vue": "Vue",
      "lodash": "Lodash",
      "element-plus": "ElementPlus",
    }),
    ViteCompression(),
    cleanPlugin(
      {
        targetFiles: [{ dirPath: `${info.name}}`}]
      }
    ),
    copy({
      targets: [
        { src: 'info.json', dest: `${info.name}}` },
      ],
      hook: 'writeBundle',
      verbose: true
    })
  ],
  resolve: {
    alias: [{find: 'src', replacement: path.resolve(__dirname, 'src')}]
  },
  server: {
    port: 8080
  },
  build: {
    target: 'modules',
    outDir: `${info.name}`,
    minify: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main-lib.ts'),
      name: `${info.name}`,
      fileName: (format: string) => `${info.name}-${info.version}.${format}.js`,
      formats: ['umd']
    }
    ,rollupOptions: {
      external: ['vue', 'lodash', 'element-plus'],
      output: {
        globals: {
          'vue': 'Vue',
          'lodash': '_',
          'element-plus': "ElementPlus"
        },
        manualChunks: undefined
      }
    }
  }
})
