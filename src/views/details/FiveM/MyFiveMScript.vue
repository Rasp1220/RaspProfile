<script setup>
// FiveM Scripts カテゴリ：My FiveM Script の詳細ページ（ベース）。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('fivem', 'my-fivem-script')

const blocks = [
  {
    heading: '概要',
    body: 'どんなスクリプトかを書きます。',
  },
  {
    heading: '機能',
    body: 'コマンドや設定について紹介します。',
    // image: '/shots/my-fivem-script.png',
  },
  {
    heading: '対応環境',
    body: '対応する FiveM / フレームワークを記載します。',
  },
]
</script>

<template>
  <DetailPage
    category="FiveM Scripts"
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
