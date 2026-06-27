// =============================================================
//  サイトに表示する内容はこのファイルを編集するだけで変更できます。
//  各セクションは配列に項目を足すだけでカードが増えます。
// =============================================================

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
//  運用しているWebサイト
//  emoji と accent でカードの色味・アイコンが変わります（画像なしでもOK）
//  image を指定するとスクリーンショットを表示します。
// -------------------------------------------------------------
export const websites = [
  {
    name: 'My Website',
    url: 'https://example.com',
    description: '運用しているWebサイトの説明をここに書きます。',
    emoji: '🌐',
    accent: '#c98a5e', // キャラメル
    tags: ['Web', 'Vue'],
    // image: '/shots/website.png',
  },
  {
    name: 'Another Site',
    url: 'https://example.com',
    description: 'もう一つのサイトの紹介文。',
    emoji: '✨',
    accent: '#8a9a6b', // セージグリーン
    tags: ['Blog'],
  },
]

// -------------------------------------------------------------
//  運用 / 開発している Discord Bot
// -------------------------------------------------------------
export const discordBots = [
  {
    name: 'My Discord Bot',
    url: 'https://discord.com/',
    description: 'Botでできることを説明します。',
    emoji: '🤖',
    accent: '#6f7f9c', // くすんだダスティブルー
    tags: ['Moderation', 'Music'],
    // 任意の数値（サーバー数など）。空にすると非表示
    stat: '1,200 servers',
  },
]

// -------------------------------------------------------------
//  作っている Minecraft Plugin
// -------------------------------------------------------------
export const minecraftPlugins = [
  {
    name: 'My Plugin',
    url: 'https://www.spigotmc.org/',
    description: 'プラグインの機能を説明します。',
    emoji: '🧱',
    accent: '#7d9b6f', // モスグリーン
    tags: ['Paper', 'Spigot'],
    stat: '10k downloads',
  },
]
