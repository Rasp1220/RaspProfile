<script setup>
// Discord Bot カテゴリ：DisasterBot の詳細ページ。
// 画像は仮画像（public/shots/placeholders/）。実画像ができたら差し替えてください。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('discord', 'weather-bot')

const blocks = [
  {
    heading: '概要',
    body: ['日本全域を対象にした、防災・気象情報通知 Discord Bot です。',
      '地震速報・気象警報の自動通知と、天気・気温の確認コマンドを備えています。'],
  },
  {
    heading: '地震速報の自動通知',
    body: ['P2P地震情報 API（WebSocket）から震度4以上の地震を自動受信し、揺れを観測した地方のロール（例: @関東）をメンションして通知します。',
      '/earthquake-preview で、実際の地震を待たずに通知画像の見た目を確認できます。'],
    image: '/shots/placeholders/weather-bot-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '地震速報の自動通知（仮画像）',
    reverse: true,
  },
  {
    heading: '気象警報・特別警報の通知',
    body: '気象庁の警報データを定期取得し、警戒レベル3以上（警報・特別警報）の新規発表だけを差分検知して、地方ロールへメンション通知します。注意報は通知しません。',
    image: '/shots/placeholders/weather-bot-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '気象警報・特別警報の通知（仮画像）',
  },
  {
    heading: 'コマンド',
    body: ['/weather <都道府県名> … 時間別の天気・気温を表示',
      '/config … 通知先チャンネルや地方ごとのロール紐付けを変更（管理権限）',
      '/help … 機能一覧を表示'],
    image: '/shots/placeholders/weather-bot-hero.svg', // 仮画像（差し替え予定）
    imageAlt: 'コマンド（仮画像）',
    reverse: true,
  },
  {
    heading: '使っている技術',
    body: 'Node.js + TypeScript、discord.js v14、ws、Open-Meteo API。',
    image: '/shots/placeholders/weather-bot-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '使っている技術（仮画像）',
  },
]
</script>

<template>
  <DetailPage
    category="Discord Bot"
    :title="item.name"
    :tagline="item.description"
    :accent="item.accent"
    :accent2="item.accent"
    :emoji="item.emoji"
    :url="item.url"
    :tags="item.tags"
    hero-image="/shots/placeholders/weather-bot-hero.svg"
    :blocks="blocks"
  />
</template>
