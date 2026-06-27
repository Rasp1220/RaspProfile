// =============================================================
//  サイトに表示する内容はこのファイルを編集するだけで変更できます。
//  人によって変わるもの（名前・リンク・各セクションの中身）は
//  すべてここ（config）に集約しています。コンポーネントは触りません。
// =============================================================

// -------------------------------------------------------------
//  サイト全体の設定（ブラウザのタブ・言語・フッターなど）
// -------------------------------------------------------------
export const site = {
  // ブラウザのタブ／検索結果に出るタイトル
  title: 'Your Name — Profile',
  // 検索エンジンなどに渡す説明文
  description: 'Webサイト・Discord Bot・Minecraft Plugin をつくっています。',
  // ページの言語（<html lang> に反映）
  lang: 'ja',
  // フッターの著作権表記に使う名前（空なら profile.name を使用）
  copyright: '',
  // ヒーロー下のスクロール案内（空文字にすると非表示）
  scrollHint: 'Scroll',
  // カードの「開く」ボタンの文言
  cardCta: 'ひらく',
}

// -------------------------------------------------------------
//  ナビゲーション（ページ上部のリンク）
//  to はハッシュルート。ページを足したら 1 行追加するだけ。
// -------------------------------------------------------------
export const nav = [
  { label: 'Home', to: '/' },
  { label: 'SKILL', to: '/skill' },
]

// -------------------------------------------------------------
//  プロフィール（ヒーロー部分）
// -------------------------------------------------------------
export const profile = {
  name: 'Your Name',
  // 称号 / 肩書き（名前の下のバッジ）
  title: 'Creator & Developer',
  // ひとことキャッチ
  tagline: 'Webサイト・Discord Bot・Minecraft Plugin をつくっています。',
  // アバター画像。public/ に画像を置いてそのパスを指定します。
  //   例: public/avatar.png を置いたら avatar: '/avatar.png'
  // 未設定（空文字）なら名前の頭文字を表示します。
  avatar: '',
}

// -------------------------------------------------------------
//  プロフィール上部のソーシャルリンク（任意・空配列で非表示）
//  Discord・X・GitHub など、人によって変わるリンクをここに並べます。
//  アイコンの指定方法は 2 通り:
//   1) icon: 組み込みアイコン名を使う
//      github / x / twitter / instagram / youtube / linkedin /
//      discord / mail / link
//   2) image: public/ に置いた画像のパスを使う（icon より優先）
//      例: public/icons/github.svg を置いたら image: '/icons/github.svg'
// -------------------------------------------------------------
export const socials = [
  { label: 'GitHub', url: 'https://github.com/', icon: 'github' },
  { label: 'X', url: 'https://x.com/', icon: 'x' },
  { label: 'Discord', url: 'https://discord.com/', icon: 'discord' },
  // 画像アイコンを使う例（public/ に置いたパスを指定）:
  // { label: 'Booth', url: 'https://booth.pm/', image: '/icons/booth.svg' },
]

// -------------------------------------------------------------
//  各セクションのカード一覧
//  emoji と accent でカードの色味・アイコンが変わります（画像なしでもOK）。
//  image を指定すると public/ のスクリーンショット等を表示します。
//  1 つでも複数でも、カードは中央寄せで横に並びます。
// -------------------------------------------------------------

// 運用しているWebサイト
//   slug … 詳細ページのURL（#/web/<slug>）に使う識別子。
//          詳細ページのファイル（src/views/details/Web/）と対応させます。
const websites = [
  {
    name: 'My Website',
    slug: 'my-website',
    url: 'https://example.com',
    description: '運用しているWebサイトの説明をここに書きます。',
    emoji: '🌐',
    accent: '#c98a5e', // キャラメル
    tags: ['Web', 'Vue'],
    // image: '/shots/website.png', // public/ に置いた画像を表示
  },
  {
    name: 'Another Site',
    slug: 'another-site',
    url: 'https://example.com',
    description: 'もう一つのサイトの紹介文。',
    emoji: '✨',
    accent: '#8a9a6b', // セージグリーン
    tags: ['Blog'],
  },
]

// 運用 / 開発している Discord Bot
const discordBots = [
  {
    name: 'My Discord Bot',
    slug: 'my-discord-bot',
    url: 'https://discord.com/',
    description: 'Botでできることを説明します。',
    emoji: '🤖',
    accent: '#6f7f9c', // くすんだダスティブルー
    tags: ['Moderation', 'Music'],
    // 任意の数値（サーバー数など）。空にすると非表示
    stat: '1,200 servers',
  },
]

// 作っている Minecraft Plugin
const minecraftPlugins = [
  {
    name: 'My Plugin',
    slug: 'my-plugin',
    url: 'https://www.spigotmc.org/',
    description: 'プラグインの機能を説明します。',
    emoji: '🧱',
    accent: '#7d9b6f', // モスグリーン
    tags: ['Paper', 'Spigot'],
    stat: '10k downloads',
  },
]

// -------------------------------------------------------------
//  表示するセクション（順番・見出し・中身をここで定義）
//  セクションを足す/消す/並べ替えるのもこの配列を編集するだけ。
//   eyebrow  : 見出しの上の小ラベル
//   title    : 見出し
//   subtitle : 見出し下の説明（空で非表示）
//   variant  : カードの登場アニメ
//              rise / flip-x / mask-up / zoom-rotate / skew / unblur / wipe
//   items    : 上で定義したカード配列
// -------------------------------------------------------------
//   key      : カテゴリ識別子（内部用）
//   base     : 詳細ページのURL接頭辞（カードは base + '/' + item.slug へ遷移）
//   menuLabel: ハンバーガーメニューに出すカテゴリ名
export const sections = [
  {
    key: 'web',
    base: '/web',
    menuLabel: 'Web',
    eyebrow: 'Websites',
    title: '運用しているWebサイト',
    subtitle: '制作・運用しているサイトの紹介です。',
    variant: 'flip-x',
    items: websites,
  },
  {
    key: 'discord',
    base: '/discord',
    menuLabel: 'Discord Bot',
    eyebrow: 'Discord Bots',
    title: 'Discord Bot',
    subtitle: '開発・運用しているDiscord Botの紹介です。',
    variant: 'mask-up',
    items: discordBots,
  },
  {
    key: 'minecraft',
    base: '/minecraft',
    menuLabel: 'Minecraft Plugins',
    eyebrow: 'Minecraft Plugins',
    title: 'Minecraft Plugin',
    subtitle: '作っているMinecraftプラグインの紹介です。',
    variant: 'zoom-rotate',
    items: minecraftPlugins,
  },
]

// -------------------------------------------------------------
//  詳細ページ用ヘルパー。カテゴリ key と slug からカード情報を取得します。
//  各詳細ページ（src/views/details/...）が name / accent / tags などを
//  ここから引くことで、ホームのカードと内容が一致します。
// -------------------------------------------------------------
export const getDetailItem = (key, slug) => {
  const section = sections.find((s) => s.key === key)
  return section ? section.items.find((it) => it.slug === slug) : undefined
}

// =============================================================
//  SKILL ページ（#/skill）
// =============================================================

// -------------------------------------------------------------
//  SKILL ページのヘッダー（ヒーローと同じスタイルを適用）
//  accent / accent2 でこのページだけ色味を変えられます。
// -------------------------------------------------------------
export const skillPage = {
  // 上の小ラベル
  eyebrow: 'Skills',
  // 大きな見出し（profile.name と同じ表示スタイル）
  name: 'Skill Set',
  // ひとことキャッチ（見出し周りはシンプルに：バッジは廃止）
  tagline: '普段つかっている技術スタックをまとめています。',
  // このページのテーマ色（プロフィールのキャラメルから少し変える）
  accent: '#6d7fa6', // ダスティブルー
  accent2: '#9aa9c9', // ライトブルーグレー
}

// -------------------------------------------------------------
//  スキル一覧（カテゴリごとに複数定義できます）
//   category : 見出し（Languages / Frameworks / Infra など）
//   emoji    : 見出し横のアイコン
//   items    : スキル名の配列
//              文字列だけ、もしくは { name, note } で補足を付けられます。
//                'TypeScript'                     … 名前だけ
//                { name: 'AWS', note: 'メイン' }  … 補足つき
// -------------------------------------------------------------
export const skills = [
  {
    category: 'Languages',
    emoji: '💬',
    items: [
      { name: 'TypeScript', note: 'メイン' },
      'JavaScript',
      'Python',
      'Java',
      'Go',
    ],
  },
  {
    category: 'Frameworks',
    emoji: '🧩',
    items: [
      { name: 'Vue', note: 'メイン' },
      'React',
      'Node.js',
      'discord.js',
      'Paper / Spigot',
    ],
  },
  {
    category: 'Infrastructure',
    emoji: '🛠️',
    items: ['Docker', 'AWS', 'Cloudflare', 'GitHub Actions', 'Linux'],
  },
]
