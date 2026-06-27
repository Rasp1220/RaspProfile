<script setup>
import { computed } from 'vue'
import RevealTitle from '../components/RevealTitle.vue'
import { skillPage, skills } from '../data/profile.js'

// このページだけテーマ色を差し替える（config の accent / accent2 から）
const accentVars = computed(() => ({
  '--accent': skillPage.accent,
  '--accent-2': skillPage.accent2,
}))

// 文字列・オブジェクトどちらでも扱えるように正規化
const normalize = (it) => (typeof it === 'string' ? { name: it } : it)
</script>

<template>
  <section class="skill-page" :style="accentVars">
    <!-- ヒーローと同じスタイルの見出し -->
    <header class="skill-hero">
      <span v-if="skillPage.eyebrow" class="eyebrow">{{ skillPage.eyebrow }}</span>
      <RevealTitle :text="skillPage.name" tag="h1" class="skill-name" />
      <span v-if="skillPage.badge" class="title-badge">{{ skillPage.badge }}</span>
      <p v-if="skillPage.tagline" class="tagline">{{ skillPage.tagline }}</p>
    </header>

    <!-- スキル一覧（カテゴリごとのカードを中央寄せで横並び） -->
    <div class="skill-grid">
      <article
        v-for="(group, i) in skills"
        :key="group.category"
        class="skill-card"
        v-reveal="{ variant: 'rise', delay: i * 110 }"
      >
        <h2 class="skill-card__title">
          <span v-if="group.emoji" class="skill-card__emoji">{{ group.emoji }}</span>
          {{ group.category }}
        </h2>
        <ul class="chips">
          <li v-for="it in group.items" :key="normalize(it).name" class="chip">
            {{ normalize(it).name }}
            <span v-if="normalize(it).note" class="chip__note">{{
              normalize(it).note
            }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
/* ページ単位でテーマ色を上書き（グラデ・グローは accent から自動生成） */
.skill-page {
  --accent-grad: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
  --glow: color-mix(in srgb, var(--accent) 32%, transparent);
  max-width: 64rem;
  margin: 0 auto;
  padding: clamp(5rem, 14vh, 9rem) 1.25rem clamp(4rem, 12vh, 8rem);
}

/* ---- ヒーローと同じ見出しスタイル ---- */
.skill-hero {
  text-align: center;
  margin-bottom: 3rem;
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

.skill-name {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.05;
}

.title-badge {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  background: var(--accent-grad);
  box-shadow: 0 8px 24px -8px var(--glow);
}

.tagline {
  margin: 1.25rem auto 0;
  max-width: 32rem;
  color: var(--text-muted);
  line-height: 1.7;
}

/* ---- スキルカード（1つでも複数でも中央寄せ） ---- */
.skill-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
}

.skill-card {
  flex: 0 1 19rem;
  max-width: 100%;
  min-width: 0;
  padding: 1.5rem;
  border-radius: var(--radius);
  background: var(--card);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(10px);
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: color-mix(in srgb, var(--accent) 55%, transparent);
  box-shadow: 0 26px 50px -26px color-mix(in srgb, var(--accent) 70%, transparent);
}

.skill-card__title {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0 0 1.1rem;
  font-size: 1.15rem;
  font-weight: 700;
}

.skill-card__emoji {
  font-size: 1.4rem;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.25));
}

.chips {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  color: var(--text);
  background: color-mix(in srgb, var(--accent) 12%, var(--bg-soft));
  border: 1px solid color-mix(in srgb, var(--accent) 28%, transparent);
}

.chip__note {
  font-size: 0.68rem;
  font-weight: 700;
  color: #fff;
  padding: 0.08rem 0.4rem;
  border-radius: 999px;
  background: var(--accent-grad);
}
</style>
