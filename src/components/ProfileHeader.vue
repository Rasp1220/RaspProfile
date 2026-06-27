<script setup>
import { computed } from 'vue'

const props = defineProps({
  profile: { type: Object, required: true },
})

// アバター未設定時に表示する頭文字
const initials = computed(() => {
  const n = (props.profile.name || '?').trim()
  return n.charAt(0).toUpperCase()
})

const bioLines = computed(() => (props.profile.bio || '').split('\n'))
</script>

<template>
  <header class="header">
    <div class="avatar">
      <img v-if="profile.avatar" :src="profile.avatar" :alt="profile.name" />
      <span v-else class="avatar__initials">{{ initials }}</span>
    </div>

    <h1 class="name">{{ profile.name }}</h1>
    <p v-if="profile.tagline" class="tagline">{{ profile.tagline }}</p>

    <p v-if="profile.location" class="location">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path
          d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
        />
      </svg>
      {{ profile.location }}
    </p>

    <div v-if="profile.bio" class="bio">
      <p v-for="(line, i) in bioLines" :key="i">{{ line }}</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  text-align: center;
}

.avatar {
  width: 112px;
  height: 112px;
  margin: 0 auto 1.25rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--accent-grad);
  padding: 3px;
  box-shadow: 0 12px 40px -12px rgba(124, 92, 255, 0.6);
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
  font-size: 2.6rem;
  font-weight: 800;
  color: var(--text);
}

.name {
  margin: 0;
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.tagline {
  margin: 0.4rem 0 0;
  font-weight: 600;
  background: var(--accent-grad);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.location {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0.75rem 0 0;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.bio {
  margin: 1.25rem auto 0;
  max-width: 34rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.bio p {
  margin: 0.2rem 0;
}
</style>
