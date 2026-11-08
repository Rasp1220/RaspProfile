<script setup>
// Minecraft Plugins カテゴリ：Onigokko の詳細ページ。
// 画像は仮画像（public/shots/placeholders/）。実画像ができたら差し替えてください。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('minecraft', 'onigokko')

const blocks = [
  {
    heading: '概要',
    body: ['複数のゲームモードを切り替えて遊べる鬼ごっこプラグインです。'],
  },
  {
    heading: 'ゲームモード',
    body: ['normal … 一定間隔でミッション（アイテム納品／エリア踏破）が課され、失敗すると発光＋鈍化',
      'small … 逃走者が小さくなる最小化鬼ごっこ',
      'ice … タッチで凍結、仲間のタッチで解凍する氷鬼'],
    image: '/shots/placeholders/onigokko-hero.svg', // 仮画像（差し替え予定）
    imageAlt: 'ゲームモード（仮画像）',
    reverse: true,
  },
  {
    heading: 'コマンド',
    body: '/tag で、エリア設定・開始（モードと鬼の人数を指定）・鬼の事前指名・終了・緊急強制終了ができます。',
    image: '/shots/placeholders/onigokko-hero.svg', // 仮画像（差し替え予定）
    imageAlt: 'コマンド（仮画像）',
  },
  {
    heading: '動作環境',
    body: 'Minecraft 26.3 / Paper、Java 25。',
    image: '/shots/placeholders/onigokko-hero.svg', // 仮画像（差し替え予定）
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
    hero-image="/shots/placeholders/onigokko-hero.svg"
    :blocks="blocks"
  />
</template>
