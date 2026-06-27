<script setup>
// ページ最上部に表示されるスクロール進捗バー。
import { ref, onMounted, onBeforeUnmount } from 'vue'

const progress = ref(0)
let onScroll

onMounted(() => {
  onScroll = () => {
    const h = document.documentElement
    const max = h.scrollHeight - h.clientHeight
    progress.value = max > 0 ? (h.scrollTop / max) * 100 : 0
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <div class="progress" aria-hidden="true">
    <div class="progress__bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<style scoped>
.progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 100;
  background: transparent;
}

.progress__bar {
  height: 100%;
  background: var(--accent-grad);
  box-shadow: 0 0 12px var(--glow);
  transition: width 0.1s linear;
}
</style>
