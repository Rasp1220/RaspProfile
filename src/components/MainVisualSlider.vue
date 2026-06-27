<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  // config の mainVisual.images（文字列 / { src, alt } のどちらでもOK）
  images: { type: Array, default: () => [] },
  // 自動再生の間隔(ミリ秒)。0 以下で自動再生オフ
  interval: { type: Number, default: 5000 },
})

// 文字列でもオブジェクトでも扱えるように正規化
const slides = computed(() =>
  props.images
    .map((img, i) =>
      typeof img === 'string'
        ? { src: img, alt: `Main visual ${i + 1}` }
        : { src: img.src, alt: img.alt || `Main visual ${i + 1}` },
    )
    .filter((s) => s.src),
)

const index = ref(0)
const count = computed(() => slides.value.length)

const go = (i) => {
  if (count.value === 0) return
  index.value = (i + count.value) % count.value
}
const next = () => go(index.value + 1)
const prev = () => go(index.value - 1)

// ---- 自動再生（ホバー中は一時停止） ----
let timer = null
const stop = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}
const start = () => {
  stop()
  if (props.interval > 0 && count.value > 1) {
    timer = setInterval(next, props.interval)
  }
}

onMounted(start)
onBeforeUnmount(stop)
</script>

<template>
  <section
    v-if="count"
    class="mv"
    aria-roledescription="carousel"
    aria-label="Main visual"
    @mouseenter="stop"
    @mouseleave="start"
  >
    <div class="mv__viewport">
      <div class="mv__track" :style="{ transform: `translateX(-${index * 100}%)` }">
        <figure v-for="(s, i) in slides" :key="s.src" class="mv__slide">
          <img
            :src="s.src"
            :alt="s.alt"
            class="mv__img"
            :loading="i === 0 ? 'eager' : 'lazy'"
            draggable="false"
          />
        </figure>
      </div>

      <!-- 前後ボタン（画像が複数あるときだけ表示） -->
      <template v-if="count > 1">
        <button class="mv__nav mv__nav--prev" type="button" aria-label="前へ" @click="prev">
          ‹
        </button>
        <button class="mv__nav mv__nav--next" type="button" aria-label="次へ" @click="next">
          ›
        </button>

        <!-- インジケーター（ドット） -->
        <div class="mv__dots" role="tablist">
          <button
            v-for="(s, i) in slides"
            :key="`dot-${i}`"
            class="mv__dot"
            :class="{ 'is-active': i === index }"
            type="button"
            :aria-label="`${i + 1} 枚目へ`"
            :aria-selected="i === index"
            @click="go(i)"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.mv {
  max-width: 64rem;
  margin: 0 auto;
  padding: clamp(1rem, 4vh, 3rem) 1.25rem clamp(2rem, 6vh, 4rem);
}

.mv__viewport {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--bg-soft);
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow);
}

.mv__track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.mv__slide {
  flex: 0 0 100%;
  margin: 0;
}

.mv__img {
  display: block;
  width: 100%;
  /* 16:9 を基準に、画面幅に応じて高さを調整 */
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* ---- 前後ボタン ---- */
.mv__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid var(--card-border);
  border-radius: 50%;
  background: color-mix(in srgb, var(--card) 80%, transparent);
  backdrop-filter: blur(6px);
  color: var(--text);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease;
}

.mv__nav--prev {
  left: 0.85rem;
}
.mv__nav--next {
  right: 0.85rem;
}

.mv__nav:hover {
  background: var(--card);
  border-color: color-mix(in srgb, var(--accent) 45%, transparent);
  transform: translateY(-50%) scale(1.08);
}

/* ---- ドット ---- */
.mv__dots {
  position: absolute;
  left: 50%;
  bottom: 0.9rem;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  padding: 0.4rem 0.6rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--card) 55%, transparent);
  backdrop-filter: blur(6px);
}

.mv__dot {
  width: 9px;
  height: 9px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: color-mix(in srgb, var(--text) 35%, transparent);
  cursor: pointer;
  transition:
    transform 0.18s ease,
    background 0.18s ease;
}

.mv__dot.is-active {
  background: var(--accent);
  transform: scale(1.3);
}

@media (max-width: 560px) {
  .mv__nav {
    width: 38px;
    height: 38px;
    font-size: 1.3rem;
  }
}
</style>
