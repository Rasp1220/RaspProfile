<script setup>
import { computed } from 'vue'
import RevealTitle from './RevealTitle.vue'
import ShowcaseCard from './ShowcaseCard.vue'

const props = defineProps({
  // 見出しの上の小ラベル
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  items: { type: Array, default: () => [] },
  // カードの登場アニメ（reveal.css の variant）
  variant: { type: String, default: 'rise' },
  // 詳細ページURLの接頭辞（指定するとカードは詳細ページへ遷移）
  base: { type: String, default: '' },
  // カードの「開く」ボタンの文言
  cta: { type: String, default: 'ひらく' },
  // 項目が無いときの表示
  emptyText: { type: String, default: '準備中です。' },
  // コンパクト表示（アイコン＋名前のみ）
  compact: { type: Boolean, default: false },
})

// カードが2件以上あるときだけ、スマホでは横3つ表示＋スワイプの
// スライダーにする（1件しかない場合は今までどおりの表示のまま）。
const isSlider = computed(() => props.items.length > 1)
</script>

<template>
  <section class="section">
    <div class="section__head">
      <span v-if="eyebrow" class="eyebrow" v-reveal="{ variant: 'wipe' }">{{
        eyebrow
      }}</span>
      <RevealTitle :text="title" tag="h2" class="section__title" />
      <p v-if="subtitle" class="section__sub" v-reveal>{{ subtitle }}</p>
    </div>

    <div
      v-if="items.length"
      :class="['grid', compact && 'grid--compact', isSlider && 'grid--scroll']"
    >
      <ShowcaseCard
        v-for="(item, i) in items"
        :key="item.url + i"
        :item="item"
        :variant="variant"
        :index="i"
        :base="base"
        :cta="cta"
        :compact="compact"
      />
    </div>

    <p v-else class="empty" v-reveal>{{ emptyText }}</p>
  </section>
</template>

<style scoped>
.section {
  max-width: 64rem;
  margin: 0 auto;
  padding: clamp(4rem, 12vh, 8rem) 1.25rem;
}

.section__head {
  margin-bottom: 2.5rem;
  text-align: center;
}

.eyebrow {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.section__title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.01em;
}

.section__sub {
  margin: 1rem auto 0;
  max-width: 36rem;
  color: var(--text-muted);
  line-height: 1.7;
}

/* 1つでも複数でも常に中央寄せで横並び。多いときは折り返す。 */
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
}

/* 各カード（子コンポーネントのルート）の横幅。伸びすぎず中央に集まる。 */
.grid > * {
  flex: 0 1 19rem;
  max-width: 100%;
  min-width: 0;
}

/* コンパクトグリッド（Discord Bot など） */
.grid--compact {
  gap: 0.85rem;
}

.grid--compact > * {
  flex: 0 1 auto;
}

.empty {
  color: var(--text-muted);
}

/* ---- スマホ：横3つ表示のスワイプスライダー ---- */
@media (max-width: 640px) {
  .grid--scroll {
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 0.6rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    margin-inline: -1.25rem;
    padding: 0.15rem 1.25rem 0.75rem;
  }

  .grid--scroll::-webkit-scrollbar {
    display: none;
  }

  .grid--scroll > * {
    scroll-snap-align: start;
    flex: 0 0 calc((100% - 2 * 0.6rem) / 3);
    min-width: 0;
    max-width: none;
  }

  /* 通常カード：3つ並ぶ幅に収まるよう文字・余白を詰める（中身はそのまま表示） */
  .grid--scroll:not(.grid--compact) :deep(.scard__body) {
    padding: 0.6rem;
    gap: 0.3rem;
  }

  .grid--scroll:not(.grid--compact) :deep(.scard__name) {
    font-size: 0.78rem;
  }

  .grid--scroll:not(.grid--compact) :deep(.scard__stat) {
    font-size: 0.62rem;
  }

  .grid--scroll:not(.grid--compact) :deep(.scard__desc) {
    font-size: 0.68rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .grid--scroll:not(.grid--compact) :deep(.scard__tags) {
    gap: 0.25rem;
  }

  .grid--scroll:not(.grid--compact) :deep(.scard__tag) {
    font-size: 0.6rem;
    padding: 0.15rem 0.4rem;
  }

  .grid--scroll:not(.grid--compact) :deep(.scard__cta) {
    font-size: 0.68rem;
  }

  /* コンパクトカード（アイコン＋名前）：アイコンサイズをカード幅に合わせる */
  .grid--scroll.grid--compact > * {
    min-width: 0;
    max-width: none;
  }

  .grid--scroll.grid--compact :deep(.scard__icon) {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
  }
}
</style>
