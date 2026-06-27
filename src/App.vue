<script setup>
import { computed } from 'vue'
import ScrollProgress from './components/ScrollProgress.vue'
import HeroSection from './components/HeroSection.vue'
import ShowcaseSection from './components/ShowcaseSection.vue'
import { site, profile, socials, sections } from './data/profile.js'

const year = new Date().getFullYear()
// フッターの名前は site.copyright を優先し、無ければ profile.name
const copyrightName = computed(() => site.copyright || profile.name)
</script>

<template>
  <ScrollProgress />

  <main>
    <!-- プロフィール（画像・名前・称号） -->
    <HeroSection
      :profile="profile"
      :socials="socials"
      :scroll-hint="site.scrollHint"
    />

    <!-- 各セクション（config の sections を順番に表示） -->
    <ShowcaseSection
      v-for="section in sections"
      :key="section.title"
      :eyebrow="section.eyebrow"
      :title="section.title"
      :subtitle="section.subtitle"
      :items="section.items"
      :variant="section.variant"
      :cta="site.cardCta"
    />

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
