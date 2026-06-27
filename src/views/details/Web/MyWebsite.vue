<script setup>
// Web カテゴリ：My Website の詳細ページ（ベース）。
// 文章はまだ未確定なので、見出し・本文・画像の枠だけ用意しています。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'my-website')

// ここに見出し／本文／画像を書き足してください（image は public/ 起点）。
const blocks = [
  {
    heading: '概要',
    body: 'このサイトがどんなものかを書きます。',
  },
  {
    heading: '主な機能',
    body: '機能や特徴を箇条書き的に紹介します。',
    // image: '/shots/my-website-feature.png',
  },
  {
    heading: '使っている技術',
    body: '構成や技術スタックについて触れます。',
  },
]
</script>

<template>
  <DetailPage
    category="Web"
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
