<script setup>
// Web カテゴリ：ゆるかけ の詳細ページ。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'yurukake')

// 画面キャプチャは public/shots/sites/ に置いています。
const blocks = [
  {
    heading: '概要',
    body: [
      'YouTubeの紹介動画から、目的に合ったお出かけスポットを探せるサイトです。気になったスポットは「行きたいリスト」に保存して、お出かけプランに組み込めます。',
      'クリーム色の背景にオレンジをアクセントにした、やわらかい配色でまとめています。',
    ],
  },
  {
    heading: 'トップページ',
    body: [
      '「行きたい場所、SNSからサクッと集めよう」のコピーの下に、東京・大阪・北海道…とエリアごとのおすすめ動画が横スクロールのカードで並びます。',
      '一番上には保存したスポットの傾向から選ばれる「あなたへのおすすめ」枠があり、各エリアの「もっと見る」から検索ページへ移動できます。',
    ],
    image: '/shots/sites/yurukake-top.webp',
    imageAlt: 'ゆるかけのトップページ',
  },
  {
    heading: 'プロフィールページ',
    body: [
      'ブログを書いている人の公開プロフィールページです。プロフィール画像・自己紹介・エリアのタグ・SNSリンクをまとめて表示します。',
      '下には新着ブログを横スクロールの一覧で並べていて、「もっと見る」からそのユーザーの全ブログ一覧へ移動できます。ログインしていなくても閲覧できます。',
    ],
    image: '/shots/sites/yurukake-profile.webp',
    imageAlt: 'ゆるかけのプロフィールページ',
    reverse: true,
  },
  {
    heading: 'ブログ詳細ページ',
    body: [
      '実際に訪れたスポットのレポートを読むページです。本文はテキスト・画像・動画のパーツを好きな順番で組み合わせて作れます。',
      'ブログは既定では下書きとして本人にだけ見え、「公開する」を選んではじめて他のユーザーからも読めるようになります。',
    ],
    image: '/shots/sites/yurukake-blog.webp',
    imageAlt: 'ゆるかけのブログ詳細ページ',
  },
  {
    heading: '使っている技術',
    body: 'Next.js 14（App Router）+ React + TypeScript + Tailwind CSSで、認証とデータベースはSupabaseです。動画はYouTube Data API v3で定期的に取り込み、サイト側はその蓄積したデータから検索しています。',
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
    hero-image="/shots/sites/yurukake-top-hero.webp"
    :blocks="blocks"
  />
</template>
