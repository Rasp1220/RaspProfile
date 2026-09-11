// =============================================================
//  サイトに表示する内容はこのファイルを編集するだけで変更できます。
//  人によって変わるもの（名前・リンク・各セクションの中身）は
//  すべてここ（config）に集約しています。コンポーネントは触りません。
// =============================================================

// -------------------------------------------------------------
//  サイト全体の設定（ブラウザのタブ・言語・フッターなど）
// -------------------------------------------------------------
export const site = {
  // ページ上部ヘッダー左に表示するブランド名（サイト名）
  brand: 'Rasp Profile',
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
  { label: 'GEAR', to: '/gear' },
]

// -------------------------------------------------------------
//  メインビジュアルのスライダー（ヒーローの下・Scroll マークの先）
//  カルーセル形式で複数の画像を順に表示します。
//   images   : 表示する画像。public/ に置いた画像のパスを指定します。
//              あとから何枚でも登録／削除できます（空配列なら非表示）。
//                例: public/visuals/01.jpg を置いたら '/visuals/01.jpg'
//              文字列だけでも { src, alt } でも指定できます。
//                '/visuals/01.jpg'
//                { src: '/visuals/01.jpg', alt: '説明テキスト' }
//   interval : 自動でスライドが切り替わる間隔(ミリ秒)。0 で自動再生オフ
// -------------------------------------------------------------
export const mainVisual = {
  interval: 5000,
  images: [
    // サンプル画像（横長・縦長・正方形）。実際の画像に差し替えてください。
    // 縦長・正方形の画像はエリアサイズを保ったまま左右に余白を付けて全体表示します。
    { src: '/visuals/landscape.svg', alt: '横長サンプル (16:9)' },
    { src: '/visuals/portrait.png', alt: '縦長サンプル (9:16)' },
    { src: '/visuals/square.png', alt: '正方形サンプル (1:1)' },
  ],
}

// -------------------------------------------------------------
//  プロフィール（ヒーロー部分）
// -------------------------------------------------------------
export const profile = {
  name: 'Rasp／らすぷ',
  // 称号 / 肩書き（名前の下のバッジ）
  title: 'Creator & Developer',
  // ひとことキャッチ
  tagline: 'Webサイト・Discord Bot・Minecraft Plugin をつくっています。',
  // アバター画像。public/ に画像を置いてそのパスを指定します。
  //   例: public/avatar.png を置いたら avatar: '/avatar.png'
  // 未設定（空文字）なら名前の頭文字を表示します。
  avatar: 'avatar.png',
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
    name: 'ひまつど公式',
    slug: 'my-website',
    url: 'https://himatsudo.com',
    description: 'ひまつどサーバーの公式サイトです。サーバーの紹介やイベント情報を掲載しています。',
    accent: '#c98a5e', // キャラメル
    tags: ['Web', 'blog'],
    image: '/shots/server-icon.png', // public/ に置いた画像を表示
  },
  {
    name: 'ひまつど占い',
    slug: 'another-site',
    url: 'https://fortune.himatsudo.com',
    description: 'ノリで作った占いサイトです。',
    accent: '#8a9a6b', // セージグリーン
    tags: ['fortune'],
    image: '/shots/fortune-icon.png', // public/ に置いた画像を表示
  },
  {
    name: 'Notely',
    slug: 'notely',
    description: 'プロジェクト単位でタスク管理と議事録作成ができるWebアプリです。',
    accent: '#6b8d9a', // セージグリーン
    tags: ['task', 'todo'],
    image: '/shots/notely-icon.png', // public/ に置いた画像を表示
  },
  {
    name: 'Calnest',
    slug: 'calnest',
    description: '複数人で予定とメモを共有できるグループウェアです。',
    accent: '#c2a37c', // ナチュラルベージュ
    tags: ['calendar', 'group'],
    image: '/shots/calnest-icon.jpeg', // public/ に置いた画像を表示
  },
  {
    name: 'ゆるかけ',
    slug: 'yurukake',
    url: 'https://yurukake.himatsudo.com',
    description: '目的に合ったお出かけスポットを検索できるサイトです。',
    accent: '#5e8ba0', // ダスティブルー
    tags: ['Web', 'blog'],
    image: '/shots/yurukake-icon.webp', // public/ に置いた画像を表示
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
    // Bot のアバター画像。公開 URL か public/ に置いたパスを指定します。
    // 自分のBotの画像に差し替えてください。
    image: '/icons/bot-default.jpg',
    accent: '#5865F2', // Discord ブルー
    tags: ['Moderation', 'Music'],
    // 任意の数値（サーバー数など）。空にすると非表示
    stat: '1,200 servers',
  },
]

// 作っている Minecraft Plugin
const minecraftPlugins = [
  {
    name: 'coming soon...',
    slug: 'my-plugin',
    url: 'https://www.spigotmc.org/',
    description: 'coming soon...',
    emoji: '🧱',
    accent: '#7d9b6f', // モスグリーン
    tags: [],
  },
]

// 作っている FiveM Script
const fivemScripts = [
  {
    name: 'coming soon...',
    slug: 'my-fivem-script',
    description: 'coming soon...',
    emoji: '🚓',
    accent: '#b06d7d', // ダスティローズ
    tags: [],
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
    compact: true,
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
  {
    key: 'fivem',
    base: '/fivem',
    menuLabel: 'FiveM Scripts',
    eyebrow: 'FiveM Scripts',
    title: 'FiveM Scripts',
    subtitle: '作っているFiveMスクリプトの紹介です。',
    variant: 'skew',
    items: fivemScripts,
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
    items: ['Java', 'PHP', 'JavaScript', 'Python', 'C言語', 'SQL'],
  },
  {
    category: 'Frameworks',
    emoji: '🧩',
    items: ['BearSunday', 'Vue', 'Node.js', 'discord.py', 'Spring MVC', 'Spigot / Paper'],
  },
  {
    category: 'Infrastructure',
    emoji: '🛠️',
    items: ['Docker', 'AWS', 'Cloudflare', 'GitHub Actions', 'Linux'],
  },
  {
    category: 'AI',
    emoji: '🤖',
    items: ['Claude', 'Gemini', 'GPT'],
  },
]

// =============================================================
//  GEAR ページ（#/gear）使用機材・ツール紹介
//  SKILL ページと同じスタイル（横長カードを縦に積む）で表示します。
// =============================================================

// -------------------------------------------------------------
//  GEAR ページのヘッダー（ヒーローと同じスタイルを適用）
//  accent / accent2 でこのページだけ色味を変えられます。
// -------------------------------------------------------------
export const gearPage = {
  // 上の小ラベル
  eyebrow: 'Gear',
  // 大きな見出し（profile.name と同じ表示スタイル）
  name: 'Gear & Tools',
  // ひとことキャッチ
  tagline: '普段つかっている機材・ツールをまとめています。',
  // このページのテーマ色
  accent: '#8a6db0', // ダスティパープル
  accent2: '#b59ad0', // ライトラベンダー
}

// -------------------------------------------------------------
//  機材・ツール一覧（カテゴリごとに複数定義できます）
//   category : 見出し（マウス / キーボード / ヘッドセット など）
//   emoji    : 見出し横のアイコン
//   items    : 機材名の配列
//              文字列だけ、もしくは { name, note } で補足を付けられます。
//                'Logicool MX'                       … 名前だけ
//                { name: 'VS Code', note: 'メイン' } … 補足つき
// -------------------------------------------------------------
export const gear = [
  {
    category: 'マウス',
    emoji: '🖱️',
    items: ['Logicool G703'],
  },
  {
    category: 'キーボード',
    emoji: '⌨️',
    items: ['Razer Blackwidow ultimate 2018'],
  },
  {
    category: 'ヘッドセット',
    emoji: '🎧',
    items: ['Razer Blackshark V2'],
  },
  {
    category: 'エディタ',
    emoji: '📝',
    items: ['Vscode', 'Eclipse', 'Intelli IDEA'],
  },
  {
    category: 'モニター',
    emoji: '🖥️',
    items: ['Dell U2723QE', 'LG UltraGear', 'BenQ EW2780'],
  },
  {
    category: 'その他',
    emoji: '🪑',
    items: ['Herman Aeron', 'Stream Deck', 'Yeti マイク'],
  },
]
