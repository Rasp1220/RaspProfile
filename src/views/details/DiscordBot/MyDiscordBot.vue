<script setup>
// Discord Bot カテゴリ：My Discord Bot の詳細ページ（ベース）。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('discord', 'my-discord-bot')

const blocks = [
  {
    heading: '概要',
    body: 'どんな Bot かを書きます。',
  },
  {
    heading: 'できること',
    body: 'コマンドや機能を紹介します。',
    // image: '/shots/my-discord-bot.png',
  },
  {
    heading: '導入方法',
    body: 'サーバーへの追加方法を案内します。',
  },
]
</script>

<template>
  <DetailPage
    category="Discord Bot"
    :title="item.name"
    :tagline="item.description"
    :accent="item.accent"
    :accent2="item.accent"
    :emoji="item.emoji"
    :url="item.url"
    :tags="item.tags"
    :blocks="blocks"
  />
</template>
