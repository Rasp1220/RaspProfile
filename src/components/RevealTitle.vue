<script setup>
// 文字を1つずつマスクの裏から立ち上げて見せるタイトル。
// 画面に入ったタイミングで順番にアニメーションします。
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  text: { type: String, required: true },
  tag: { type: String, default: 'h2' },
})

const root = ref(null)
const chars = computed(() => Array.from(props.text))

let io
onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    root.value.classList.add('is-visible')
    return
  }
  io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        root.value.classList.add('is-visible')
        io.disconnect()
      }
    },
    { threshold: 0.4 },
  )
  io.observe(root.value)
})
onBeforeUnmount(() => io && io.disconnect())
</script>

<template>
  <component :is="tag" ref="root" class="split">
    <span
      v-for="(c, i) in chars"
      :key="i"
      class="split__mask"
      :style="{ '--i': i }"
    >
      <span class="split__char">{{ c === ' ' ? ' ' : c }}</span>
    </span>
  </component>
</template>

<style scoped>
.split {
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
}

.split__mask {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  line-height: 1.1;
}

.split__char {
  display: inline-block;
  transform: translateY(110%) rotate(8deg);
  opacity: 0;
  transition:
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.7s ease;
  transition-delay: calc(var(--i) * 38ms);
}

.split.is-visible .split__char {
  transform: translateY(0) rotate(0);
  opacity: 1;
}
</style>
