import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'docs'
  },
  server: {
    port: 1234
  }
})
