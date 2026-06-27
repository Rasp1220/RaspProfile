<script setup>
import RevealTitle from './RevealTitle.vue'
import ShowcaseCard from './ShowcaseCard.vue'

defineProps({
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
})
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

    <div v-if="items.length" class="grid">
      <ShowcaseCard
        v-for="(item, i) in items"
        :key="item.url + i"
        :item="item"
        :variant="variant"
        :index="i"
        :base="base"
        :cta="cta"
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

.empty {
  color: var(--text-muted);
}
</style>
