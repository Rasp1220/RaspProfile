<script setup>
// Minecraft Plugins カテゴリ：HimatsudoCore の詳細ページ。
// 画像は仮画像（public/shots/placeholders/）。実画像ができたら差し替えてください。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('minecraft', 'himatsudo-core')

const blocks = [
  {
    heading: '概要',
    body: ['サーバー基盤機能をモジュール単位でまとめたプラグインです。1つのモジュールが例外を出しても他は動き続けます。',
      'Citizens連携のNPCショップ・サーバー転送（HimatsudoNpc）や、宝探しイベント（HimatsudoEvents）も同梱しています。'],
  },
  {
    heading: '主なモジュール',
    body: ['Discord連携・お知らせ・スコアボード・AFK・チャット（ランク）・タブリスト',
      'メニュー・プロフィール・ウォードローブ・参加メッセージ・セキュリティ通知・サーバー転送など'],
    image: '/shots/placeholders/himatsudo-core-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '主なモジュール（仮画像）',
    reverse: true,
  },
  {
    heading: '動作環境',
    body: 'Paper 1.21.1向け Spigotプラグイン、Java 21。設定は config.yml のセクションごとに有効／無効を切り替えられます。',
    image: '/shots/placeholders/himatsudo-core-hero.svg', // 仮画像（差し替え予定）
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
    hero-image="/shots/placeholders/himatsudo-core-hero.svg"
    :blocks="blocks"
  />
</template>
