<script setup>
// Minecraft Plugins カテゴリ：HimaCasino の詳細ページ。
// 画像は仮画像（public/shots/placeholders/）。実画像ができたら差し替えてください。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('minecraft', 'hima-casino')

const blocks = [
  {
    heading: '概要',
    body: ['Display Entityベースのカジノプラグインです。スロット・ルーレット・HIGH & LOW・HORSE WHEEL・ブラックジャック・ポーカーの6種類を収録しています。'],
  },
  {
    heading: 'ゲーム',
    body: ['スロット … 看板を右クリックして開始。7が揃うとジャックポット',
      'ルーレット … ヨーロピアン式（0〜36）、複数数字へ同時ベット可',
      'HIGH & LOW … 次のカードが高いか低いかを当てる',
      'ブラックジャック／ポーカー（Sow）／HORSE WHEEL'],
    image: '/shots/placeholders/hima-casino-hero.svg', // 仮画像（差し替え予定）
    imageAlt: 'ゲーム（仮画像）',
    reverse: true,
  },
  {
    heading: 'コマンド・設定',
    body: '/casino でヘルプ、/casino help <ゲーム名> で詳細を表示。管理者は台の登録やスロット設定ができ、倍率は config.yml で変更できます。',
    image: '/shots/placeholders/hima-casino-hero.svg', // 仮画像（差し替え予定）
    imageAlt: 'コマンド・設定（仮画像）',
  },
  {
    heading: '動作環境',
    body: 'Purpur 26.3（Paper互換）、Java 25以上。Vault + 経済プラグインがあると通貨機能が使えます（任意）。',
    image: '/shots/placeholders/hima-casino-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '動作環境（仮画像）',
  },
]
</script>

<template>
  <DetailPage
    category="Minecraft Plugins"
    :title="item.name"
    :tagline="item.description"
    :accent="item.accent"
    :accent2="item.accent"
    :emoji="item.emoji"
    :url="item.url"
    :tags="item.tags"
    hero-image="/shots/placeholders/hima-casino-hero.svg"
    :blocks="blocks"
  />
</template>
