<script setup>
// Web カテゴリ：Notely の詳細ページ。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'notely')

// 画面キャプチャは public/shots/sites/ に置いています。
const blocks = [
  {
    heading: '概要',
    body: [
      'プロジェクト単位でタスク管理と議事録作成を行うWebアプリです。左のサイドバーからタスク・議事録・ステータス管理・チームを行き来できます。',
      '動きのある装飾は入れず、業務ツールとして読みやすさと一覧性を優先した見た目にしています。',
    ],
  },
  {
    heading: 'タスク一覧',
    body: [
      'タスクをタイトル・ステータス・優先度・担当者・期限日の表形式で一覧できます。ステータスはプロジェクトごとに自由に定義でき、色つきのバッジで表示されます。',
      '上部の検索ボックスと優先度・担当者のセレクト、ステータスのチップで絞り込みができます。',
    ],
    image: '/shots/sites/notely-tasks.webp',
    imageAlt: 'Notelyのタスク一覧ページ',
  },
  {
    heading: '議事録一覧',
    body: [
      '会議ごとの議事録をタイトル・作成者・作成日・更新日で一覧できます。本文はMarkdownで書けるので、決定事項やTODOを見出しとリストで整理できます。',
      '一覧から議事録を開くとそのまま閲覧・編集でき、チームのメンバー間で共有できます。',
    ],
    image: '/shots/sites/notely-minutes.webp',
    imageAlt: 'Notelyの議事録一覧ページ',
    reverse: true,
  },
  {
    heading: '使っている技術',
    body: 'フロントエンドはVue 3 + Vite + Pinia、バックエンドはExpress、データベースはSQLite互換のlibSQL（Turso）です。認証はJWTで、タスクの更新はDiscordにも通知できます。',
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
    hero-image="/shots/sites/notely-tasks-hero.webp"
    :blocks="blocks"
  />
</template>
