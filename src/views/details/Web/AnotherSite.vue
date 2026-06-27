<script setup>
// Web カテゴリ：Another Site の詳細ページ（ベース）。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'another-site')

const blocks = [
  {
    heading: '概要',
    body: 'このサイトがどんなものかを書きます。',
  },
  {
    heading: '主な機能',
    body: '機能や特徴を紹介します。',
    // image: '/shots/another-site-feature.png',
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
