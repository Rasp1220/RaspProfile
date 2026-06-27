<script setup>
import ScrollProgress from './components/ScrollProgress.vue'
import HeroSection from './components/HeroSection.vue'
import ShowcaseSection from './components/ShowcaseSection.vue'
import {
  profile,
  socials,
  websites,
  discordBots,
  minecraftPlugins,
} from './data/profile.js'

const year = new Date().getFullYear()
</script>

<template>
  <ScrollProgress />

  <main>
    <!-- 1. プロフィール（画像・名前・称号） -->
    <HeroSection :profile="profile" :socials="socials" />

    <!-- 2. 運用しているWebサイト -->
    <ShowcaseSection
      eyebrow="Websites"
      title="運用しているWebサイト"
      subtitle="制作・運用しているサイトの紹介です。"
      :items="websites"
      variant="flip-x"
    />

    <!-- 3. Discord Bot -->
    <ShowcaseSection
      eyebrow="Discord Bots"
      title="Discord Bot"
      subtitle="開発・運用しているDiscord Botの紹介です。"
      :items="discordBots"
      variant="mask-up"
    />

    <!-- 4. Minecraft Plugin -->
    <ShowcaseSection
      eyebrow="Minecraft Plugins"
      title="Minecraft Plugin"
      subtitle="作っているMinecraftプラグインの紹介です。"
      :items="minecraftPlugins"
      variant="zoom-rotate"
    />

    <footer class="footer">© {{ year }} {{ profile.name }}</footer>
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
