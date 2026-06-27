<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ScrollProgress from './components/ScrollProgress.vue'
import SiteNav from './components/SiteNav.vue'
import HomeView from './views/HomeView.vue'
import SkillView from './views/SkillView.vue'
import { site, profile } from './data/profile.js'

// 依存を増やさない軽量なハッシュルーティング（#/ と #/skill）
const parseRoute = () => window.location.hash.replace(/^#/, '') || '/'
const route = ref(parseRoute())

const onHashChange = () => {
  route.value = parseRoute()
  window.scrollTo(0, 0)
}
onMounted(() => window.addEventListener('hashchange', onHashChange))
onBeforeUnmount(() => window.removeEventListener('hashchange', onHashChange))

const year = new Date().getFullYear()
const copyrightName = computed(() => site.copyright || profile.name)
</script>

<template>
  <ScrollProgress />
  <SiteNav :current="route" />

  <main>
    <SkillView v-if="route === '/skill'" />
    <HomeView v-else />

    <footer class="footer">© {{ year }} {{ copyrightName }}</footer>
  </main>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 3rem 1.25rem 4rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
