<script setup>
// Minecraft Plugins カテゴリ：GriefDetector の詳細ページ。
// 画像は仮画像（public/shots/placeholders/）。実画像ができたら差し替えてください。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('minecraft', 'grief-detector')

const blocks = [
  {
    heading: '概要',
    body: ['荒らし行為を検知した瞬間に Discord へ通知する、単体で動く Paper プラグイン（GriefDetector）です。',
      '防御はWorldGuard、アンチチートはGrim、ロールバックはCoreProtectに任せ、「異常の検知と通知」に絞っています。'],
  },
  {
    heading: '検知できるもの',
    body: ['TNTの連続使用・放火・速度超過・不正飛行・高速ブロック破壊・近接戦闘のチート挙動',
      '貴重鉱石の異常な採掘頻度（Xray疑い。warning扱い）'],
    image: '/shots/placeholders/grief-detector-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '検知できるもの（仮画像）',
    reverse: true,
  },
  {
    heading: '通知内容',
    body: '検知時間・プレイヤーID・座標・IPアドレス・荒らし種別を、重要度で色分けしたEmbedで送信します。GrimACがあれば違反フラグを利用し、無ければ自前ロジックにフォールバックします。',
    image: '/shots/placeholders/grief-detector-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '通知内容（仮画像）',
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
    hero-image="/shots/placeholders/grief-detector-hero.svg"
    :blocks="blocks"
  />
</template>
