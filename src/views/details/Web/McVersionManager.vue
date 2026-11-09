<script setup>
// Web カテゴリ：McVersionManager の詳細ページ。
// 画像は仮画像（public/shots/placeholders/）。実画像ができたら差し替えてください。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'mc-version-manager')

const blocks = [
  {
    heading: '概要',
    body: ['Minecraftサーバーコア（Paper / Purpur / Velocity）とプラグイン（GitHub・Modrinth）のバージョンを一元管理・監視する、ローカル実行用のWebアプリです。',
      'Docker不要で、Node.js と SQLite だけで動作します。'],
  },
  {
    heading: 'ダッシュボード',
    body: ['管理しているコアやプラグインの現在バージョンと最新バージョンを一覧で確認できます。',
      '定期チェック（既定は毎時）で更新を検知し、Discord Webhook へ通知することもできます。'],
    image: '/shots/placeholders/mc-version-manager-hero.svg', // 仮画像（差し替え予定）
    imageAlt: 'ダッシュボード（仮画像）',
    reverse: true,
  },
  {
    heading: '使っている技術',
    body: 'バックエンドは Node.js（Express + better-sqlite3 + node-cron）、フロントエンドは Vue 3 + Vite です。GitHub API のレート制限対策としてトークンも設定できます。',
    image: '/shots/placeholders/mc-version-manager-hero.svg', // 仮画像（差し替え予定）
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
    hero-image="/shots/placeholders/mc-version-manager-hero.svg"
    :blocks="blocks"
  />
</template>
