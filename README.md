# RaspProfile

Vue 3 + Vite で作った、静的なプロフィール／ポートフォリオサイトです。
下にスクロールすると、各セクションが少し変わった動きで次々に現れます。

## 構成

**Home ページ（`#/`）**

1. **ヒーロー** — プロフィール画像・名前・称号
2. **運用しているWebサイト**
3. **Discord Bot**
4. **Minecraft Plugin**

**Skill ページ（`#/skill`）**

- 言語・フレームワーク・インフラなどの技術スタック一覧
- 横長カードを縦に積むレイアウト（見出しは左、スキルバッジは右）

**詳細ページ（`#/web/...` `#/discord/...` `#/minecraft/...`）**

- Web / Discord Bot / Minecraft Plugin の各項目の詳細ページ
- 見出し・本文・画像を組み合わせたベース（中身は後から書き足せます）
- カテゴリごとに `src/views/details/` 配下のディレクトリへ分けています

ページの切り替えは右上のハンバーガーメニュー（依存ライブラリ不要の軽量
ハッシュルーティング）で行います。メニューでは Web / Discord Bot /
Minecraft Plugins を `▼` で開くと各詳細ページへ移動できます。

## セットアップ

```bash
npm install      # 依存関係をインストール
npm run dev      # 開発サーバを起動（http://localhost:5173）
npm run build    # 静的ファイルを dist/ に出力
npm run preview  # ビルド結果をローカルで確認
```

## カスタマイズ

表示内容は **`src/data/profile.js` を編集するだけ** で変更できます。

人によって変わるもの（名前・リンク・各セクションの中身・タブのタイトルなど）は
すべて config にまとまっています。

| 編集対象    | 内容                                                       |
| ----------- | ---------------------------------------------------------- |
| `site`      | タブのタイトル・説明・言語・フッター名・スクロール文言など  |
| `nav`       | メニューの単純リンク（Home / SKILL など。1 行追加で増やせる）|
| `profile`   | 名前・称号・キャッチ・アバター                             |
| `mainVisual`| ヒーロー下のメインビジュアル・スライダー（`images` / `interval`）。画像を足すだけでカルーセルになります |
| `socials`   | プロフィール上部のソーシャルリンク（Discord・X・GitHub …） |
| `sections`  | 各セクション（`key` / `base` / `menuLabel` ＋ カード一覧）。**足す・消す・並べ替え自由** |
| `skillPage` | Skill ページの見出し・キャッチ・テーマ色（`accent` / `accent2`） |
| `skills`    | Skill ページのスキル一覧（カテゴリごとに複数定義）         |

各セクションは `sections` 配列の 1 要素で、`eyebrow` / `title` / `subtitle` /
`variant`（登場アニメ）と、表示するカードの配列 `items` を持ちます。カードは
**1 つでも複数でも常に中央寄せ** で横に並び、多いときは折り返します。

```js
export const sections = [
  {
    key: 'web',                // カテゴリ識別子
    base: '/web',              // 詳細ページURLの接頭辞
    menuLabel: 'Web',          // メニューに出すカテゴリ名
    eyebrow: 'Websites',
    title: '運用しているWebサイト',
    subtitle: '制作・運用しているサイトの紹介です。',
    variant: 'flip-x',
    items: websites, // カード配列。各カードは slug を持つ
  },
  // ここに項目を足すとセクションが増えます
]
```

### 詳細ページを増やす

詳細ページはカテゴリごとに `src/views/details/` 配下へ分けています。

```
src/views/details/
├─ index.js              ルート → 詳細ページの対応表
├─ Web/                  Web カテゴリ
├─ DiscordBot/           Discord Bot カテゴリ
└─ MinecraftPlugins/     Minecraft Plugins カテゴリ
```

各詳細ページは共通レイアウト `src/components/DetailPage.vue` を使い、
`blocks`（見出し・本文・画像の組み合わせ）を渡すだけで中身を組み立てられます。
ページを 1 つ足すときは次の 3 ステップです。

1. `profile.js` の該当 `items` に `{ name, slug, ... }` を追加
2. 該当ディレクトリ（例: `Web/`）に `<Name>.vue` を作成
3. `details/index.js` に `'/<base>/<slug>': コンポーネント` を 1 行追加

`base + '/' + slug` がそのページのルートになり（例: `#/web/my-website`）、
ホームのカードとメニューの `▼` の両方から自動的にリンクされます。

### Skill ページ

`skillPage` で見出しとテーマ色を、`skills` でスキルをカテゴリごとに定義します。
スキルは文字列だけ、または `{ name, note }` で補足バッジを付けられます。

```js
export const skillPage = {
  eyebrow: 'Skills',
  name: 'Skill Set',                       // 大きな見出し
  tagline: '普段つかっている技術スタックをまとめています。',
  accent: '#6d7fa6',                       // このページだけ色を変える
  accent2: '#9aa9c9',
}

export const skills = [
  {
    category: 'Languages',
    emoji: '💬',
    items: [{ name: 'TypeScript', note: 'メイン' }, 'Python', 'Go'],
  },
  // カテゴリを足すとカードが増えます
]
```

### アイコン・画像は `public/` から読み込む

画像（アバター・ソーシャルアイコン・カードのスクリーンショット）は
`public/` ディレクトリに置き、`/` から始まるパスで指定します。

| 指定          | 例                            | 置き場所            |
| ------------- | ----------------------------- | ------------------- |
| アバター      | `avatar: '/avatar.png'`       | `public/avatar.png` |
| メインビジュアル | `images: ['/visuals/01.jpg']` | `public/visuals/`   |
| ソーシャル    | `image: '/icons/github.svg'`  | `public/icons/`     |
| カード画像    | `image: '/shots/website.png'` | `public/shots/`     |

メインビジュアルは `mainVisual.images` に画像パスを並べるだけで、複数登録すると
自動再生のカルーセル（前後ボタン・ドット付き）になります。`interval` で切り替え
間隔(ミリ秒)を、`0` にすると自動再生を止められます。`images` が空ならスライダー
自体を非表示にします。

ソーシャルアイコンは `image`（`public/` のパス）を指定するとその画像を、
未指定なら `icon`（`github` / `x` / `discord` …）で組み込みSVGを表示します。
サンプルとして `public/icons/example.svg` を同梱しています。

### 項目を後から追加する

各配列に項目を追加するだけでカードが増えます。画像が無くても
`emoji` と `accent`（テーマ色）でカードが成立します。

```js
{
  name: 'My Site',
  url: 'https://example.com',
  description: '説明文',
  emoji: '🌐',
  accent: '#38bdf8',     // カードのテーマ色
  tags: ['Web', 'Vue'],
  stat: '10k users',      // 任意。右上に表示
  // image: '/shots/site.png', // public/ に置いた画像を表示
}
```

## 登場アニメーション

スクロールで要素を表示する仕組みは `v-reveal` ディレクティブ
（`src/directives/reveal.js`）です。`variant` を変えると動きが変わります。

| variant       | 動き                          |
| ------------- | ----------------------------- |
| `rise`        | 下からふわっと                |
| `flip-x`      | 上端を軸に立ち上がる（3D）    |
| `mask-up`     | 下からめくれて出現            |
| `zoom-rotate` | 回転しながら拡大して着地      |
| `skew`        | 歪みながら横スライド          |
| `unblur`      | ピントが合う（ブラー→クリア） |
| `wipe`        | 左から右へワイプ              |

セクションごとに `App.vue` で `variant` を割り当てています。
見出しは1文字ずつ立ち上がる `RevealTitle.vue` を使用。
モーション軽減設定（prefers-reduced-motion）の環境では自動で無効化されます。

## アバター画像

`public/` に画像を置き、`profile.avatar` にパス（例: `/avatar.jpg`）を
指定します。未設定の場合は名前の頭文字が表示されます。

## 色テーマ

`src/styles/main.css` の `:root` のカラー変数を変更すると全体の色味が変わります。

## デプロイ

`npm run build` で生成される `dist/` を任意の静的ホスティングに配置するだけです。
GitHub Pages のサブパスに置く場合は `vite.config.js` の `base` を
リポジトリ名（例: `'/RaspProfile/'`）に変更してください。
