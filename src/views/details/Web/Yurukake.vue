<script setup>
// Web カテゴリ：ゆるかけ の詳細ページ（ベース）。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'yurukake')

const blocks = [
  {
    heading: '概要',
    body: '目的に合ったお出かけスポットを検索できるサイトです。',
  },
  {
    heading: 'トップページ',
    body: '気分やシーンに合わせて、おすすめのお出かけスポットを検索できます。',
    image: '/shots/yurukake-top.svg',
  },
  {
    heading: 'プロフィールページ',
    body: '投稿したスポットやお気に入りなど、自分の活動をまとめて確認できます。',
    image: '/shots/yurukake-profile.svg',
    reverse: true,
  },
  {
    heading: 'ブログ詳細ページ',
    body: '実際に訪れたスポットのレポートを記事として読むことができます。',
    image: '/shots/yurukake-blog.svg',
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
