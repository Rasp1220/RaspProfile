<script setup>
// Web カテゴリ：ひまつど公式 の詳細ページ。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'my-website')

// 画面キャプチャは public/shots/sites/ に置いています。
const blocks = [
  {
    heading: '概要',
    body: [
      'ひまつどサーバーの公式サイトです。お知らせ・ブログ・YouTube動画をジャンルごとに集めて、ひとつの場所から読めるようにしたメディア型のサイトです。',
      '「ひまな時間が、楽しみに変わる。」をコンセプトに、明朝体と余白を効かせた落ち着いた見た目にまとめています。',
    ],
  },
  {
    heading: 'トップページ',
    body: [
      'ファーストビューでコンセプトを伝えたあと、サイト紹介・新着記事・カテゴリ別の記事一覧が順に並びます。',
      '記事はカテゴリごとに横スクロールのカルーセルで表示され、スクロールに合わせて各セクションがふわりと現れます。',
    ],
    image: '/shots/sites/himatsudo-top.webp',
    imageAlt: 'ひまつど公式サイトのトップページ',
  },
  {
    heading: '記事詳細ページ',
    body: [
      'お知らせやイベントレポートを読むページです。本文は見出し・テキスト・画像・YouTube動画をブロックとして自由に組み合わせられます。',
      'ページ下部にはSNSシェアボタンと前後の記事へのリンクを用意し、続けて読めるようにしています。',
    ],
    image: '/shots/sites/himatsudo-article.webp',
    imageAlt: 'ひまつど公式サイトの記事詳細ページ',
    reverse: true,
  },
  {
    heading: '使っている技術',
    body: 'PHP（BearSunday）+ Qiqテンプレートのサーバーサイドレンダリング、データベースはMySQLです。記事の登録・編集は別途CMSから行い、サイト側はAPI経由で取得した記事を表示しています。',
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
    hero-image="/shots/sites/himatsudo-top-hero.webp"
    :blocks="blocks"
  />
</template>
