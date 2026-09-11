<script setup>
// Web カテゴリ：Notely の詳細ページ（ベース）。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'notely')

const blocks = [
  {
    heading: '概要',
    body: 'タスク管理や議事録の作成を行うWebアプリです。',
  },
  {
    heading: 'タスク一覧',
    body: 'やるべきことをリスト化して、進捗状況をひと目で管理できます。',
    image: '/shots/notely-tasks.svg',
  },
  {
    heading: '議事録一覧',
    body: '過去の議事録をまとめて確認・共有できます。',
    image: '/shots/notely-minutes.svg',
    reverse: true,
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
