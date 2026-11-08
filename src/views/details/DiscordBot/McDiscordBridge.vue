<script setup>
// Discord Bot カテゴリ：McDiscordBridge の詳細ページ。
// 画像は仮画像（public/shots/placeholders/）。実画像ができたら差し替えてください。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('discord', 'mc-discord-bridge')

const blocks = [
  {
    heading: '概要',
    body: ['MinecraftサーバーとDiscordをつなぐ連携システムです。チャットの双方向同期と、サーバーの起動・停止通知を行います。',
      'Paper用プラグイン・Velocity用プラグイン・discord.py製Botの3つで構成され、WebSocket（共通トークン認証）で接続します。'],
  },
  {
    heading: 'チャット同期・通知',
    body: ['マイクラ⇄Discord のチャットを相互に転送します（メンション等はエスケープ済みで誤爆しません）。',
      '起動／停止、プレイヤーの入退室を指定チャンネルへEmbedで通知します。'],
    image: '/shots/placeholders/mc-discord-bridge-hero.svg', // 仮画像（差し替え予定）
    imageAlt: 'チャット同期・通知（仮画像）',
    reverse: true,
  },
  {
    heading: 'Discordコマンド',
    body: ['/players … 現在の参加者一覧を表示',
      '/link /unlink /linkinfo … MCIDとDiscordアカウントの紐づけ（運営用）'],
    image: '/shots/placeholders/mc-discord-bridge-hero.svg', // 仮画像（差し替え予定）
    imageAlt: 'Discordコマンド（仮画像）',
  },
  {
    heading: '運営向け機能',
    body: ['Velocity側で不正アクセスの疑いを検知し、専用チャンネルへ通知します（自動BANはせず、/accessban で手動アク禁）。',
      'himatsudoLife連携で、動的VCの自動削除やエリア連動のロール付与も行います。'],
    image: '/shots/placeholders/mc-discord-bridge-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '運営向け機能（仮画像）',
    reverse: true,
  },
  {
    heading: '使っている技術',
    body: 'Java（Paper / Velocity プラグイン）、Python 3.10+ / discord.py。',
    image: '/shots/placeholders/mc-discord-bridge-hero.svg', // 仮画像（差し替え予定）
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
    hero-image="/shots/placeholders/mc-discord-bridge-hero.svg"
    :blocks="blocks"
  />
</template>
