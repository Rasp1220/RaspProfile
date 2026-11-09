<script setup>
// Minecraft Plugins カテゴリ：HimatsudoLife の詳細ページ。
// 画像は仮画像（public/shots/placeholders/）。実画像ができたら差し替えてください。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('minecraft', 'himatsudo-life')

const blocks = [
  {
    heading: '概要',
    body: ['生活サーバー向けの総合プラグインです。土地保護・実績・スキル・称号・銀行・お墓・ショップ・ランキングなどをひとつにまとめています。',
      '統合版（Bedrock）プレイヤーも遊べるよう、一般向け機能はすべてGUIで完結します。'],
  },
  {
    heading: '暮らしの機能',
    body: ['土地の購入・保護・公開管理、銀行（共有口座）、お墓（デスチェスト）、無人ショップ、NPC買取ショップ、個人ロックなど。',
      '料理や有人店、経験値貯蔵庫といった生活向けの要素も備えています。'],
    image: '/shots/placeholders/himatsudo-life-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '暮らしの機能（仮画像）',
    reverse: true,
  },
  {
    heading: '成長・コミュニティ',
    body: ['実績の達成でスキル（一括破壊・範囲採掘・作物の一括成長など）が解放され、称号や独自エンチャントも楽しめます。',
      'フレンド／パーティ、フレンド限定DM、メンション、処分履歴などの機能もあります。'],
    image: '/shots/placeholders/himatsudo-life-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '成長・コミュニティ（仮画像）',
  },
  {
    heading: '動作環境',
    body: 'Paper / Purpur 26.3、Java 25。WorldGuard・WorldEdit・Vault が必須です。データはSQLiteに保存し、自動バックアップも行います。',
    image: '/shots/placeholders/himatsudo-life-hero.svg', // 仮画像（差し替え予定）
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
    hero-image="/shots/placeholders/himatsudo-life-hero.svg"
    :blocks="blocks"
  />
</template>
