<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'
import IconLink from './IconLink.vue'

const props = defineProps({
  profile: { type: Object, required: true },
  socials: { type: Array, default: () => [] },
  // スクロールを促すヒント文言（空文字で非表示）
  scrollHint: { type: String, default: 'Scroll' },
})

const initials = computed(() =>
  (props.profile.name || '?').trim().charAt(0).toUpperCase(),
)

// スクロール量に応じてヒーローをゆっくり奥へ（パララックス）
let onScroll
onMounted(() => {
  const el = document.documentElement
  onScroll = () => {
    const y = window.scrollY
    el.style.setProperty('--scroll', String(y))
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <section class="hero">
    <div class="hero__inner">
      <div class="avatar">
        <img v-if="profile.avatar" :src="profile.avatar" :alt="profile.name" />
        <span v-else class="avatar__initials">{{ initials }}</span>
      </div>

      <h1 class="name">{{ profile.name }}</h1>

      <span v-if="profile.title" class="title-badge">{{ profile.title }}</span>

      <p v-if="profile.tagline" class="tagline">{{ profile.tagline }}</p>

      <div v-if="socials.length" class="socials">
        <a
          v-for="(s, i) in socials"
          :key="s.url"
          class="social"
          :style="{ '--i': i }"
          :href="s.url"
          :aria-label="s.label"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLink :name="s.icon" :src="s.image" :alt="s.label" />
        </a>
      </div>
    </div>

    <div v-if="scrollHint" class="scroll-hint" aria-hidden="true">
      <span>{{ scrollHint }}</span>
      <span class="scroll-hint__line"></span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
  padding: 4rem 1.25rem;
  text-align: center;
}

.hero__inner {
  /* スクロールで少しだけフェード＆奥へ（パララックス） */
  transform: translateY(calc(var(--scroll, 0) * 0.12px));
  opacity: clamp(0, calc(1 - var(--scroll, 0) / 600), 1);
}

.avatar {
  position: relative;
  width: clamp(160px, 26vw, 200px);
  height: clamp(160px, 26vw, 200px);
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--accent-grad);
  padding: 3px;
  box-shadow: 0 18px 50px -14px var(--glow);
  animation:
    avatar-pop 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both,
    float 6s ease-in-out infinite 0.9s;
}

/* 初期表示時のみ、アバターの背後に光の輪が一瞬だけ弾ける */
.avatar::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--accent-grad);
  z-index: -1;
  animation: glow-burst 1.3s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.avatar__initials {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--bg-soft);
  display: grid;
  place-items: center;
  font-size: 3rem;
  font-weight: 800;
}

.name {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.05;
  background: linear-gradient(
    100deg,
    var(--text) 40%,
    var(--accent-2) 50%,
    var(--text) 60%
  );
  background-size: 300% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation:
    hero-in 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both,
    name-shimmer 1.8s ease-out 0.6s both;
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
  animation: badge-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s both;
}

.tagline {
  margin: 1.25rem auto 0;
  max-width: 32rem;
  color: var(--text-muted);
  line-height: 1.7;
  animation: hero-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.75s both;
}

.socials {
  margin-top: 1.75rem;
  display: flex;
  gap: 0.6rem;
  justify-content: center;
}

.social {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: var(--text-muted);
  background: var(--card);
  border: 1px solid var(--card-border);
  animation: badge-pop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)
    calc(0.85s + var(--i, 0) * 0.08s) both;
  transition:
    transform 0.18s ease,
    color 0.18s ease,
    border-color 0.18s ease;
}

.social:hover {
  transform: translateY(-3px);
  color: var(--accent);
  border-color: color-mix(in srgb, var(--accent) 45%, transparent);
}

.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.scroll-hint__line {
  width: 1px;
  height: 42px;
  background: linear-gradient(var(--text-muted), transparent);
  position: relative;
  overflow: hidden;
}

.scroll-hint__line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--accent);
  animation: scroll-dot 1.8s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes hero-in {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

/* アバターが弾みながら勢いよく登場 */
@keyframes avatar-pop {
  0% {
    opacity: 0;
    transform: scale(0.2) rotate(-30deg);
  }
  60% {
    opacity: 1;
    transform: scale(1.12) rotate(6deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* アバター背後の光の輪が一瞬だけ弾ける */
@keyframes glow-burst {
  0% {
    opacity: 0.9;
    transform: scale(0.6);
    filter: blur(0);
  }
  100% {
    opacity: 0;
    transform: scale(2.6);
    filter: blur(6px);
  }
}

/* 名前のグラデーションが左から右へ一度だけ流れる */
@keyframes name-shimmer {
  from {
    background-position: 100% 0;
  }
  to {
    background-position: 0 0;
  }
}

/* バッジやソーシャルアイコンが弾みながらポップイン */
@keyframes badge-pop {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(12px);
  }
  70% {
    opacity: 1;
    transform: scale(1.08) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes scroll-dot {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

/* モーション軽減設定では派手な演出を無効化 */
@media (prefers-reduced-motion: reduce) {
  .avatar,
  .avatar::before,
  .name,
  .title-badge,
  .tagline,
  .social {
    animation: none !important;
  }

  .avatar::before {
    display: none;
  }

  .name {
    background: none;
    color: var(--text);
  }
}
</style>
