<script setup>
import { computed } from 'vue'
import RevealTitle from '../components/RevealTitle.vue'
import { skillPage, skills } from '../data/profile.js'
import IconSpeechBalloon from '~icons/noto/speech-balloon'
import IconPuzzlePiece from '~icons/noto/puzzle-piece'
import IconHammerAndWrench from '~icons/noto/hammer-and-wrench'
import IconRobot from '~icons/noto/robot'

// OSごとに絵文字の見た目が変わらないよう、Iconify（Noto）のアイコンで統一する
const icons = {
  'speech-balloon': IconSpeechBalloon,
  'puzzle-piece': IconPuzzlePiece,
  'hammer-and-wrench': IconHammerAndWrench,
  robot: IconRobot,
}

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
    <!-- 見出し（シンプルに：小ラベル＋タイトル＋一言だけ） -->
    <header class="skill-hero">
      <span v-if="skillPage.eyebrow" class="eyebrow">{{ skillPage.eyebrow }}</span>
      <RevealTitle :text="skillPage.name" tag="h1" class="skill-name" />
      <p v-if="skillPage.tagline" class="tagline">{{ skillPage.tagline }}</p>
    </header>

    <!-- スキル一覧（横長カードを縦に積む） -->
    <div class="skill-list">
      <article
        v-for="(group, i) in skills"
        :key="group.category"
        class="skill-row"
        v-reveal="{ variant: 'rise', delay: i * 90 }"
      >
        <h2 class="skill-row__title">
          <component :is="icons[group.icon]" v-if="icons[group.icon]" class="skill-row__emoji" />
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

/* ---- 見出し（シンプル版） ---- */
.skill-hero {
  text-align: center;
  margin-bottom: 3.5rem;
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

.skill-name {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.05;
  justify-content: center;
}

.tagline {
  margin: 1rem auto 0;
  max-width: 32rem;
  color: var(--text-muted);
  line-height: 1.7;
}

/* ---- スキル：横長カードを縦に並べる ---- */
.skill-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-row {
  display: grid;
  grid-template-columns: 12rem 1fr;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius);
  background: var(--card);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(10px);
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;
}

.skill-row:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--accent) 55%, transparent);
  box-shadow: 0 26px 50px -26px color-mix(in srgb, var(--accent) 70%, transparent);
}

.skill-row__title {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.skill-row__emoji {
  width: 1.35rem;
  height: 1.35rem;
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

/* 狭い画面では見出しを上、チップを下に縦積み */
@media (max-width: 560px) {
  .skill-row {
    grid-template-columns: 1fr;
    gap: 0.9rem;
  }
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
