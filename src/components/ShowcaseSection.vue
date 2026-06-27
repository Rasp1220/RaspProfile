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
      />
    </div>

    <p v-else class="empty" v-reveal>準備中です。</p>
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
}

.eyebrow {
  display: inline-block;
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
  margin: 1rem 0 0;
  max-width: 36rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 18rem), 1fr));
  gap: 1.25rem;
}

.empty {
  color: var(--text-muted);
}
</style>
