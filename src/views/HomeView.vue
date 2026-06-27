<script setup>
import HeroSection from '../components/HeroSection.vue'
import ShowcaseSection from '../components/ShowcaseSection.vue'
import { site, profile, socials, sections } from '../data/profile.js'
</script>

<template>
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
    :base="section.base"
    :cta="site.cardCta"
  />
</template>
