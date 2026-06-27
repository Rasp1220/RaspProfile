<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'
import IconLink from './IconLink.vue'

const props = defineProps({
  profile: { type: Object, required: true },
  socials: { type: Array, default: () => [] },
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
          v-for="s in socials"
          :key="s.url"
          class="social"
          :href="s.url"
          :aria-label="s.label"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconLink :name="s.icon" />
        </a>
      </div>
    </div>

    <div class="scroll-hint" aria-hidden="true">
      <span>Scroll</span>
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
  animation: hero-in 1s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.avatar {
  width: 132px;
  height: 132px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--accent-grad);
  padding: 3px;
  box-shadow: 0 18px 50px -14px rgba(124, 92, 255, 0.65);
  animation: float 6s ease-in-out infinite;
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
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
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
  box-shadow: 0 8px 24px -8px rgba(124, 92, 255, 0.7);
}

.tagline {
  margin: 1.25rem auto 0;
  max-width: 32rem;
  color: var(--text-muted);
  line-height: 1.7;
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
  transition:
    transform 0.18s ease,
    color 0.18s ease,
    border-color 0.18s ease;
}

.social:hover {
  transform: translateY(-3px);
  color: var(--text);
  border-color: rgba(124, 92, 255, 0.5);
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

@keyframes scroll-dot {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>
