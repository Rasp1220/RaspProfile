<script setup>
// 画面上部のヘッダー。
//   - 左：サイト名（Rasp Profile）。クリックでホームへ。
//   - 右：これまで通りのハンバーガーメニューボタン。
// 表示する中身は config（site / nav / sections）から生成します。
import HamburgerMenu from './HamburgerMenu.vue'
import { site } from '../data/profile.js'

defineProps({
  // 現在のルート（'/' や '/web/my-website'）
  current: { type: String, default: '/' },
})
</script>

<template>
  <!-- ヘッダーバー（左：ブランド名）。
       backdrop-filter で固定要素の包含ブロックになるため、
       ハンバーガー（内部に固定配置のパネル/オーバーレイを持つ）は
       header の外＝兄弟として配置する。 -->
  <header class="header">
    <a class="header__brand" href="#/">{{ site.brand }}</a>
  </header>

  <!-- 右：ハンバーガーメニュー（従来通り。固定配置で右上に表示） -->
  <HamburgerMenu :current="current" />
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 105;
  display: flex;
  align-items: center;
  height: 4.25rem;
  padding: 0 1.25rem;
  background: color-mix(in srgb, var(--bg) 72%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--card-border) 70%, transparent);
  backdrop-filter: blur(12px);
}

.header__brand {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text);
  transition: color 0.18s ease;
}

.header__brand:hover {
  color: var(--accent);
}
</style>
