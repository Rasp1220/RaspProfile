<script setup>
// 各カテゴリ（Web / Discord Bot / Minecraft Plugin）の詳細ページ共通レイアウト。
// 見出し・本文・画像を組み合わせたベースだけを用意しています。
// 中身（説明文）は各詳細ページ側の blocks / スロットで差し替えてください。
import { computed } from 'vue'
import RevealTitle from './RevealTitle.vue'

const props = defineProps({
  // 見出し上の小ラベル（カテゴリ名など）
  category: { type: String, default: '' },
  // 大見出し
  title: { type: String, required: true },
  // リード文（見出し下の一言）
  tagline: { type: String, default: '' },
  // このページのテーマ色（任意）
  accent: { type: String, default: '' },
  accent2: { type: String, default: '' },
  // ヒーロー画像（任意）。未指定なら絵文字プレースホルダーを表示
  heroImage: { type: String, default: '' },
  emoji: { type: String, default: '🔗' },
  // 外部リンク（任意。指定すると「ひらく」ボタンを表示）
  url: { type: String, default: '' },
  cta: { type: String, default: 'ひらく' },
  // タグ（任意）
  tags: { type: Array, default: () => [] },
  // 本文ブロック。各要素 { heading, body, image, imageAlt, reverse }
  //   - heading : 小見出し
  //   - body    : 本文（改行は配列でも文字列でもOK）
  //   - image   : 画像パス（public/ 起点）。あると見出し/本文と横並び
  //   - reverse : true で画像を左に
  blocks: { type: Array, default: () => [] },
})

const accentVars = computed(() => {
  const v = {}
  if (props.accent) v['--accent'] = props.accent
  if (props.accent2) v['--accent-2'] = props.accent2
  return v
})

// body は文字列でも配列でも段落として扱えるように正規化
const paragraphs = (body) =>
  Array.isArray(body) ? body : body ? [body] : []
</script>

<template>
  <article class="detail" :style="accentVars">
    <!-- 戻る -->
    <a class="detail__back" href="#/">
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      Home
    </a>

    <!-- ヒーロー -->
    <header class="detail__hero">
      <span v-if="category" class="eyebrow">{{ category }}</span>
      <RevealTitle :text="title" tag="h1" class="detail__title" />
      <p v-if="tagline" class="detail__tagline">{{ tagline }}</p>

      <div v-if="tags.length" class="detail__tags">
        <span v-for="t in tags" :key="t" class="detail__tag">{{ t }}</span>
      </div>

      <a
        v-if="url"
        class="detail__cta"
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ cta }}
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </a>
    </header>

    <!-- ヒーロー画像（プレースホルダー） -->
    <div class="detail__cover" v-reveal="{ variant: 'unblur' }">
      <img v-if="heroImage" :src="heroImage" :alt="title" />
      <span v-else class="detail__cover-emoji">{{ emoji }}</span>
    </div>

    <!-- 本文ブロック（見出し＋本文＋画像の組み合わせ） -->
    <section class="detail__body">
      <template v-if="blocks.length">
        <div
          v-for="(block, i) in blocks"
          :key="i"
          class="block"
          :class="{ 'block--media': block.image, 'block--reverse': block.reverse }"
          v-reveal="{ variant: 'rise', delay: i * 80 }"
        >
          <div class="block__text">
            <h2 v-if="block.heading" class="block__heading">
              {{ block.heading }}
            </h2>
            <p
              v-for="(p, j) in paragraphs(block.body)"
              :key="j"
              class="block__p"
            >
              {{ p }}
            </p>
          </div>
          <div v-if="block.image" class="block__media">
            <img :src="block.image" :alt="block.imageAlt || block.heading || title" />
          </div>
        </div>
      </template>

      <!-- blocks 未指定なら、書き込み用のプレースホルダーを表示 -->
      <div v-else class="block" v-reveal>
        <div class="block__text">
          <h2 class="block__heading">準備中</h2>
          <p class="block__p">
            ここに説明を書きます。見出し・本文・画像を組み合わせて、
            このページの内容を紹介してください。
          </p>
        </div>
      </div>

      <!-- 追加コンテンツ用スロット -->
      <slot />
    </section>
  </article>
</template>

<style scoped>
.detail {
  --accent-grad: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
  --glow: color-mix(in srgb, var(--accent) 32%, transparent);
  max-width: 56rem;
  margin: 0 auto;
  padding: clamp(4.5rem, 12vh, 7rem) 1.25rem clamp(4rem, 12vh, 8rem);
}

.detail__back {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: color 0.18s ease;
}

.detail__back:hover {
  color: var(--accent);
}

/* ---- ヒーロー ---- */
.detail__hero {
  text-align: center;
  margin-bottom: 2.5rem;
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

.detail__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 6vw, 3.4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.05;
  justify-content: center;
}

.detail__tagline {
  margin: 1.25rem auto 0;
  max-width: 34rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.detail__tags {
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
}

.detail__tag {
  font-size: 0.72rem;
  padding: 0.22rem 0.7rem;
  border-radius: 999px;
  color: var(--text-muted);
  background: var(--bg-soft);
  border: 1px solid var(--card-border);
}

.detail__cta {
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: var(--accent-grad);
  box-shadow: 0 10px 26px -10px var(--glow);
  transition: transform 0.18s ease;
}

.detail__cta:hover {
  transform: translateY(-2px);
}

/* ---- ヒーロー画像 ---- */
.detail__cover {
  aspect-ratio: 16 / 8;
  display: grid;
  place-items: center;
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 3rem;
  background:
    radial-gradient(
      120% 120% at 0% 0%,
      color-mix(in srgb, var(--accent) 36%, transparent),
      transparent 60%
    ),
    color-mix(in srgb, var(--accent) 12%, var(--bg-soft));
  border: 1px solid var(--card-border);
}

.detail__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail__cover-emoji {
  font-size: 4rem;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
}

/* ---- 本文ブロック ---- */
.detail__body {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.block__heading {
  margin: 0 0 0.8rem;
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 3.5vw, 1.7rem);
  font-weight: 600;
}

.block__p {
  margin: 0 0 0.8rem;
  color: var(--text-muted);
  line-height: 1.8;
}

.block__p:last-child {
  margin-bottom: 0;
}

/* 画像つきブロックは横並び（狭い画面では縦積み） */
.block--media {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1.75rem;
}

.block--media.block--reverse .block__text {
  order: 2;
}

.block__media {
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: var(--bg-soft);
  border: 1px solid var(--card-border);
}

.block__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 640px) {
  .block--media {
    grid-template-columns: 1fr;
  }
  .block--media.block--reverse .block__text {
    order: 0;
  }
}
</style>
