<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: { type: Object, required: true },
  // 登場アニメの種類（reveal.css の variant）
  variant: { type: String, default: 'rise' },
  // グリッド内での順番。stagger（時間差）に使用
  index: { type: Number, default: 0 },
  // 詳細ページURLの接頭辞（item.slug と合わせて遷移先を作る）
  base: { type: String, default: '' },
  // 「開く」ボタンの文言
  cta: { type: String, default: 'ひらく' },
})

// base と slug があれば詳細ページ（内部リンク）へ、無ければ外部URLへ。
const detailHref = computed(() =>
  props.base && props.item.slug
    ? '#' + props.base + '/' + props.item.slug
    : '',
)
const href = computed(() => detailHref.value || props.item.url)
const isInternal = computed(() => !!detailHref.value)
</script>

<template>
  <a
    class="scard"
    :href="href"
    :target="isInternal ? undefined : '_blank'"
    :rel="isInternal ? undefined : 'noopener noreferrer'"
    :style="{ '--accent': item.accent || 'var(--accent)' }"
    v-reveal="{ variant, delay: index * 110 }"
  >
    <div class="scard__media">
      <img v-if="item.image" :src="item.image" :alt="item.name" />
      <span v-else class="scard__emoji">{{ item.emoji || '🔗' }}</span>
    </div>

    <div class="scard__body">
      <div class="scard__head">
        <h3 class="scard__name">{{ item.name }}</h3>
        <span v-if="item.stat" class="scard__stat">{{ item.stat }}</span>
      </div>

      <p class="scard__desc">{{ item.description }}</p>

      <div v-if="item.tags && item.tags.length" class="scard__tags">
        <span v-for="t in item.tags" :key="t" class="scard__tag">{{ t }}</span>
      </div>

      <span class="scard__cta">
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
      </span>
    </div>
  </a>
</template>

<style scoped>
.scard {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--card);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(10px);
  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;
}

.scard:hover {
  transform: translateY(-6px);
  border-color: color-mix(in srgb, var(--accent) 55%, transparent);
  box-shadow: 0 26px 50px -26px color-mix(in srgb, var(--accent) 70%, transparent);
}

.scard__media {
  position: relative;
  aspect-ratio: 16 / 9;
  display: grid;
  place-items: center;
  background:
    radial-gradient(
      120% 120% at 0% 0%,
      color-mix(in srgb, var(--accent) 40%, transparent),
      transparent 60%
    ),
    color-mix(in srgb, var(--accent) 14%, var(--bg-soft));
  overflow: hidden;
}

.scard__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scard__emoji {
  font-size: 3rem;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.35));
  transition: transform 0.3s ease;
}

.scard:hover .scard__emoji {
  transform: scale(1.12) rotate(-6deg);
}

.scard__body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.scard__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
}

.scard__name {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
}

.scard__stat {
  font-size: 0.72rem;
  color: var(--accent);
  font-weight: 600;
  white-space: nowrap;
}

.scard__desc {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.scard__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.scard__tag {
  font-size: 0.72rem;
  padding: 0.22rem 0.6rem;
  border-radius: 999px;
  color: var(--text-muted);
  background: var(--bg-soft);
  border: 1px solid var(--card-border);
}

.scard__cta {
  margin-top: 0.4rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
}

.scard:hover .scard__cta svg {
  transform: translate(2px, -2px);
  transition: transform 0.2s ease;
}
</style>
