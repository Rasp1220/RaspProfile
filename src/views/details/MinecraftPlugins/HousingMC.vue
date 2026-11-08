<script setup>
// Minecraft Plugins カテゴリ：HousingMC の詳細ページ。
// 画像は仮画像（public/shots/placeholders/）。実画像ができたら差し替えてください。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('minecraft', 'housing-mc')

const blocks = [
  {
    heading: '概要',
    body: ['素材を集め、家具作業台で製作し、家に設置して、実際に使う——ハウジング・家具システムです。',
      '家具タイプ77種・家具ID474種（木材12種・16色・スタイル違いを含む）を用意しています。'],
  },
  {
    heading: '家具の設置と編集',
    body: ['Display Entityとリソースパックのモデルで描画する専用3D家具です。移動・回転・1/16ブロック単位の微調整・撤去ができます。',
      '椅子・ソファは複数人が座れ、テーブルや棚には実アイテムを置けます。'],
    image: '/shots/placeholders/housing-mc-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '家具の設置と編集（仮画像）',
    reverse: true,
  },
  {
    heading: '使える家具',
    body: ['冷蔵庫や本棚などの収納、コンロ・オーブンなどのキッチン、テレビ、PC、照明、ピアノなど。',
      '料理はテーブル上で食べられます。'],
    image: '/shots/placeholders/housing-mc-hero.svg', // 仮画像（差し替え予定）
    imageAlt: '使える家具（仮画像）',
  },
  {
    heading: '動作環境',
    body: 'Minecraft 26.3（Paper）。データはSQLiteに保存。権限は himatsudoLife の土地権限に従います。',
    image: '/shots/placeholders/housing-mc-hero.svg', // 仮画像（差し替え予定）
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
    hero-image="/shots/placeholders/housing-mc-hero.svg"
    :blocks="blocks"
  />
</template>
