<script setup>
// Web カテゴリ：Calnest の詳細ページ（ベース）。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'calnest')

const blocks = [
  {
    heading: '概要',
    body: 'Calnestについて紹介します。予定をやさしく整理できるカレンダーサービスです。',
  },
  {
    heading: 'トップページ',
    body: '予定やイベントをカードでまとめて確認できるトップページです。',
    image: '/shots/calnest-top.svg',
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
