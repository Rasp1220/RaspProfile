<script setup>
// ページ上部のナビゲーション。リンクは config の nav から生成。
import { nav } from '../data/profile.js'

defineProps({
  // 現在のルート（'/' や '/skill'）
  current: { type: String, default: '/' },
})
</script>

<template>
  <nav v-if="nav.length" class="nav">
    <a
      v-for="item in nav"
      :key="item.to"
      class="nav__link"
      :class="{ 'is-active': current === item.to }"
      :href="'#' + item.to"
    >
      {{ item.label }}
    </a>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 90;
  display: flex;
  gap: 0.25rem;
  padding: 0.3rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--card) 80%, transparent);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow);
}

.nav__link {
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  transition:
    color 0.18s ease,
    background 0.18s ease;
}

.nav__link:hover {
  color: var(--text);
}

.nav__link.is-active {
  color: #fff;
  background: var(--accent-grad);
}
</style>
