<script setup>
// Minecraft Plugins カテゴリ：My Plugin の詳細ページ（ベース）。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('minecraft', 'my-plugin')

const blocks = [
  {
    heading: '概要',
    body: 'どんなプラグインかを書きます。',
  },
  {
    heading: '機能',
    body: 'コマンドや設定について紹介します。',
    // image: '/shots/my-plugin.png',
  },
  {
    heading: '対応バージョン',
    body: '対応する Minecraft / サーバーソフトを記載します。',
  },
]
</script>

<template>
  <DetailPage
    category="Minecraft Plugins"
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
