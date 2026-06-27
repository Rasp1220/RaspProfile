import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 静的サイトとしてビルドします。GitHub Pages 等にデプロイする場合は
// base をリポジトリ名に合わせて変更してください（例: '/RaspProfile/'）。
export default defineConfig({
  plugins: [vue()],
  base: './',
})
