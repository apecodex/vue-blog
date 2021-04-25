import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from "vite-plugin-mock";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteMockServe({supportTs: false})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'common': path.resolve(__dirname, 'src/common'),
      'components': path.resolve(__dirname, 'src/components'),
      'lib': path.resolve(__dirname, 'src/lib'),
      'scripts': path.resolve(__dirname, 'src/scripts'),
      'network': path.resolve(__dirname, 'src/network'),
      'views': path.resolve(__dirname, 'src/views'),
      'utils': path.resolve(__dirname, 'src/utils')
    }
  }
})
