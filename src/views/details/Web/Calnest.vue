<script setup>
// Web カテゴリ：Calnest の詳細ページ。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'calnest')

// 画面キャプチャは public/shots/sites/ に置いています。
const blocks = [
  {
    heading: '概要',
    body: [
      '複数人でスケジュール管理と情報共有を行うグループウェアです。カレンダー単位で予定を管理し、日ごとのMarkdownメモをリアルタイムに共同編集できます。',
      '予定の時刻が近づくとLINEに通知を飛ばせるようにしていて、身内での予定合わせに使うことを想定しています。',
    ],
  },
  {
    heading: 'トップページ',
    body: [
      'ログインするとそのまま月表示のカレンダーが開きます。左側で「チーム共有」「個人メモ」のようにカレンダーを切り替えられ、予定はカレンダーごとの色分けで表示されます。',
      '右上のボタンで月／週／日の表示を切り替えられ、日付をクリックするとその場で予定を追加できます。繰り返し予定や終日予定にも対応しています。',
    ],
    image: '/shots/sites/calnest-top.webp',
    imageAlt: 'Calnestのトップページ（月表示のカレンダー）',
  },
  {
    heading: '使っている技術',
    body: 'フロントエンドはVue 3 + Vite + Pinia、バックエンドはフレームワークを使わないPHP 8 + PDO、データベースはMySQLです。メモの共同編集はWorkerman製のWebSocketサーバーと簡易OTで実現しています。',
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
    hero-image="/shots/sites/calnest-top-hero.webp"
    :blocks="blocks"
  />
</template>
