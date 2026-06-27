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
  // アバター画像（public/ に置いてパス指定。未設定ならイニシャル表示）
  avatar: '',
}

// -------------------------------------------------------------
//  ヘッダーの小さなソーシャルアイコン（任意・空配列で非表示）
//  icon: github / x / instagram / youtube / discord / mail / link
// -------------------------------------------------------------
export const socials = [
  { label: 'GitHub', url: 'https://github.com/', icon: 'github' },
  { label: 'X', url: 'https://x.com/', icon: 'x' },
  { label: 'Discord', url: 'https://discord.com/', icon: 'discord' },
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
    accent: '#38bdf8',
    tags: ['Web', 'Vue'],
    // image: '/shots/website.png',
  },
  {
    name: 'Another Site',
    url: 'https://example.com',
    description: 'もう一つのサイトの紹介文。',
    emoji: '✨',
    accent: '#a855f7',
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
    accent: '#5865f2',
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
    accent: '#22c55e',
    tags: ['Paper', 'Spigot'],
    stat: '10k downloads',
  },
]
