<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ScrollProgress from './components/ScrollProgress.vue'
import HamburgerMenu from './components/HamburgerMenu.vue'
import HomeView from './views/HomeView.vue'
import SkillView from './views/SkillView.vue'
import { resolveDetail } from './views/details/index.js'
import { site, profile } from './data/profile.js'

// 依存を増やさない軽量なハッシュルーティング
//   #/         → Home
//   #/skill    → Skill
//   #/web/...  などのカテゴリ詳細ページ
const parseRoute = () => window.location.hash.replace(/^#/, '') || '/'
const route = ref(parseRoute())

// 現在のルートに対応する詳細ページ（無ければ undefined）
const detailPage = computed(() => resolveDetail(route.value))

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
  <HamburgerMenu :current="route" />

  <main>
    <component :is="detailPage" v-if="detailPage" :key="route" />
    <SkillView v-else-if="route === '/skill'" />
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
