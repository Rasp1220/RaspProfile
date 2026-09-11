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
    body: 'ひまつどサーバーの公式サイトです。サーバーの紹介やイベント情報を掲載しています。',
  },
  {
    heading: 'トップページ',
    body: 'サーバーの雰囲気が伝わるビジュアルと、直近のイベント情報をまとめて掲載しています。',
    image: '/shots/himatsudo-top.svg',
  },
  {
    heading: '記事詳細ページ',
    body: 'お知らせやイベントレポートなど、個別の記事を読めるページです。',
    image: '/shots/himatsudo-article.svg',
    reverse: true,
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
