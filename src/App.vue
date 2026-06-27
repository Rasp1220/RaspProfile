<script setup>
import ProfileHeader from './components/ProfileHeader.vue'
import LinkCard from './components/LinkCard.vue'
import { profile, links, skills } from './data/profile.js'

const year = new Date().getFullYear()
</script>

<template>
  <main class="page">
    <div class="card-shell">
      <ProfileHeader :profile="profile" />

      <!-- スキル / タグ（profile.js の skills を編集） -->
      <section v-if="skills.length" class="skills">
        <span v-for="skill in skills" :key="skill" class="chip">{{
          skill
        }}</span>
      </section>

      <!-- リンク一覧（profile.js の links を編集すると増減） -->
      <section v-if="links.length" class="links">
        <LinkCard v-for="link in links" :key="link.url" :link="link" />
      </section>

      <!-- リンクがまだ無い場合のプレースホルダー -->
      <p v-else class="empty">リンクは準備中です。</p>
    </div>

    <footer class="footer">© {{ year }} {{ profile.name }}</footer>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.25rem;
}

.card-shell {
  width: 100%;
  max-width: 40rem;
  padding: clamp(1.75rem, 5vw, 3rem);
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  backdrop-filter: blur(16px);
  animation: rise 0.6s ease both;
}

.skills {
  margin-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.chip {
  font-size: 0.8rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--card-border);
}

.links {
  margin-top: 1.75rem;
  display: grid;
  gap: 0.75rem;
}

.empty {
  margin-top: 1.75rem;
  text-align: center;
  color: var(--text-muted);
}

.footer {
  margin-top: 2rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
