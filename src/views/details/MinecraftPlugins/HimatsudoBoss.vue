<script setup>
// Minecraft Plugins カテゴリ：HimatsudoBoss の詳細ページ。
// 画像は仮画像（public/shots/placeholders/）。実画像ができたら差し替えてください。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('minecraft', 'himatsudo-boss')

const blocks = [
  {
    heading: '概要',
    body: ['生活サーバー向けの、独自ボス（独自モブ）専用プラグインです。以前は himatsudoLife の一機能でしたが、独立させました。',
      '運営用コマンド /boss custommob で召喚します。'],
  },
  {
    heading: 'ボスの特徴',
    body: ['どのボスも技の前に「予告」（色付きの円や線・文字・効果音）が出るので、見てから動けばかわせます。',
      'ブロックを壊さず、プレイヤーだけを狙います。複数人なら技ごとに狙う相手が替わります。'],
    image: '/shots/placeholders/himatsudo-boss-hero.svg', // 仮画像（差し替え予定）
    imageAlt: 'ボスの特徴（仮画像）',
    reverse: true,
  },
  {
    heading: 'ボス一覧',
    body: ['氷・炎・水・磁力・時空・音など、属性ごとに技の違う15体のボスがいます。代表的なボスは次のとおりです。',
      '記憶の管理人・ナンダッケ … 衝撃波をジャンプでかわす地上ボス',
      '天翔ける射手・ドコダッケ … 空を飛び、弓で戦うボス',
      '彗星・ハヤイッケ … 空を飛ぶ龍のボス',
      'らすぷ／覚醒・らすぷ … 最強のボスとその上位版',
      '紅月に舞う影・ルナヴェール … ブロック表示で組んだ大型の竜'],
    image: '/shots/placeholders/himatsudo-boss-hero.svg', // 仮画像（差し替え予定）
    imageAlt: 'ボス一覧（仮画像）',
  },
  {
    heading: '動作環境',
    body: 'Paper / Purpur 26.3、Java 25。連携プラグインは不要（himatsudoLifeは任意）。',
    image: '/shots/placeholders/himatsudo-boss-hero.svg', // 仮画像（差し替え予定）
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
    hero-image="/shots/placeholders/himatsudo-boss-hero.svg"
    :blocks="blocks"
  />
</template>
