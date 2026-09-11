<script setup>
// Web カテゴリ：Another Site の詳細ページ（ベース）。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'another-site')

const blocks = [
  {
    heading: '概要',
    body: 'ノリで作った占いサイトです。毎日の運勢を手軽にチェックできます。',
  },
  {
    heading: 'トップページ',
    body: 'その日の気分でボタンを押すだけで占いを開始できます。',
    image: '/shots/fortune-top.svg',
  },
  {
    heading: '結果ページ',
    body: '大吉から凶までの運勢をひと目でわかるように表示します。',
    image: '/shots/fortune-result.svg',
    reverse: true,
  },
  {
    heading: '履歴ページ',
    body: '過去に占った結果を一覧で振り返ることができます。',
    image: '/shots/fortune-history.svg',
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
