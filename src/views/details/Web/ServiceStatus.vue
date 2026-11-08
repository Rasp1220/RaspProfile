<script setup>
// Web カテゴリ：ServiceStatus の詳細ページ。
// 画像は仮画像（public/shots/placeholders/）。実画像ができたら差し替えてください。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'server-status')

const blocks = [
  {
    heading: '概要',
    body: ['himatsudo.com 関連サービスの稼働状況をリアルタイムに確認できるステータスページです。',
      '監視対象は himatsudo.com・占い・Notely・Calnest・ゆるかけの5サイトです。'],
  },
  {
    heading: '仕組み',
    body: ['サーバー側（/api/status）が各サイトへGETリクエストを送り、HTTPステータスと応答時間を集計して返します（タイムアウト10秒・キャッシュなし）。',
      '画面は初回取得後60秒ごとに自動更新され、「今すぐ更新」ボタンで手動更新もできます。'],
    image: '/shots/placeholders/server-status-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '仕組み（仮画像）',
    reverse: true,
  },
  {
    heading: 'サイトの追加・削除',
    body: '監視対象は設定ファイル（MONITORED_SITES）を編集するだけで増減できます。',
    image: '/shots/placeholders/server-status-hero.svg', // 仮画像（差し替え予定）
    imageAlt: 'サイトの追加・削除（仮画像）',
  },
  {
    heading: '使っている技術',
    body: 'Next.js 14（App Router）+ React 18 + TypeScript + Tailwind CSS。',
    image: '/shots/placeholders/server-status-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '使っている技術（仮画像）',
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
    hero-image="/shots/placeholders/server-status-hero.svg"
    :blocks="blocks"
  />
</template>
