<script setup>
// Web カテゴリ：ひまつど占い の詳細ページ。
import DetailPage from '../../../components/DetailPage.vue'
import { getDetailItem } from '../../../data/profile.js'

const item = getDetailItem('web', 'another-site')

// 画面キャプチャは public/shots/sites/ に置いています。
const blocks = [
  {
    heading: '概要',
    body: [
      'ノリで作りはじめた占いサイトです。毎日の運勢・タロット・数秘術・相性占い・おみくじの5種類をまとめて楽しめます。',
      '夜空をイメージした紺色と金色の配色で、星が流れる背景の上に各コンテンツを並べています。',
    ],
  },
  {
    heading: 'トップページ',
    body: [
      '「夜空が導く、あなたの物語」のキャッチコピーから始まり、今日の一言・今月の運勢・占い一覧のカルーセルが続きます。',
      'その下にはおすすめの占い、人気ランキング、最新コラム、12星座の運勢へのリンクを配置しています。初回訪問時はお知らせのモーダルが開きます。',
    ],
    image: '/shots/sites/fortune-top.webp',
    imageAlt: 'ひまつど占いのトップページ',
  },
  {
    heading: '毎日の運勢',
    body: [
      '星座を選んでボタンを押すと、その日の運勢をスコア付きで表示します。恋愛運・仕事運・金運・健康運の内訳を星とバーで表し、開運アクションとラッキーカラー／ナンバー／アイテム／フード／スポットも合わせて出します。',
      '結果はX・LINEでシェアしたり、リンクをコピーして共有できます。',
    ],
    image: '/shots/sites/fortune-daily.webp',
    imageAlt: 'ひまつど占いの毎日の運勢ページ',
    reverse: true,
  },
  {
    heading: 'タロット占い',
    body: [
      'スプレッド（スリーカードなど）と占いたいことを指定してカードを引きます。引いたカードは正位置・逆位置つきでキーワードと意味を表示します。',
      '最後に全体を通した総合リーディングをまとめて読めるようにしています。',
    ],
    image: '/shots/sites/fortune-tarot.webp',
    imageAlt: 'ひまつど占いのタロット占いページ',
  },
  {
    heading: '12星座詳細',
    body: '12星座それぞれのカードを一覧で並べたページです。期間とエレメント（火・土・風・水）を添えていて、カードを開くとその星座の基本性格と今月の運勢を読めます。',
    image: '/shots/sites/fortune-horoscopes.webp',
    imageAlt: 'ひまつど占いの12星座詳細ページ',
    reverse: true,
  },
  {
    heading: '占いコラム',
    body: 'タロットや数秘術の基礎知識、開運の豆知識などを連載しているコラムの一覧ページです。タグと公開日つきのカードで並び、詳細ページで本文を読めます。',
    image: '/shots/sites/fortune-columns.webp',
    imageAlt: 'ひまつど占いの占いコラム一覧ページ',
  },
  {
    heading: '人気ランキング',
    body: '閲覧数をもとにした占いの人気ランキングページです。どの占いがよく使われているかがひと目で分かります。',
    image: '/shots/sites/fortune-ranking.webp',
    imageAlt: 'ひまつど占いの人気ランキングページ',
    reverse: true,
  },
  {
    heading: '使っている技術',
    body: '占いロジックはPHPのService層に集約し、画面はVue.jsがREST API経由で取得して描画するAPIファースト構成です。同じAPIを使って、他サイトに埋め込めるウィジェットとしても提供しています。',
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
    hero-image="/shots/sites/fortune-top-hero.webp"
    :blocks="blocks"
  />
</template>
