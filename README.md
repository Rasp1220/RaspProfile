# RaspProfile

Vue 3 + Vite で作った、静的なプロフィール／ポートフォリオサイトです。
下にスクロールすると、各セクションが少し変わった動きで次々に現れます。

## 構成

1. **ヒーロー** — プロフィール画像・名前・称号
2. **運用しているWebサイト**
3. **Discord Bot**
4. **Minecraft Plugin**

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
| `profile`   | 名前・称号・キャッチ・アバター                             |
| `socials`   | プロフィール上部のソーシャルリンク（Discord・X・GitHub …） |
| `sections`  | 各セクション（見出し＋カード一覧）。**足す・消す・並べ替え自由** |

各セクションは `sections` 配列の 1 要素で、`eyebrow` / `title` / `subtitle` /
`variant`（登場アニメ）と、表示するカードの配列 `items` を持ちます。カードは
**1 つでも複数でも常に中央寄せ** で横に並び、多いときは折り返します。

```js
export const sections = [
  {
    eyebrow: 'Websites',
    title: '運用しているWebサイト',
    subtitle: '制作・運用しているサイトの紹介です。',
    variant: 'flip-x',
    items: websites, // カード配列
  },
  // ここに項目を足すとセクションが増えます
]
```

### アイコン・画像は `public/` から読み込む

画像（アバター・ソーシャルアイコン・カードのスクリーンショット）は
`public/` ディレクトリに置き、`/` から始まるパスで指定します。

| 指定          | 例                            | 置き場所            |
| ------------- | ----------------------------- | ------------------- |
| アバター      | `avatar: '/avatar.png'`       | `public/avatar.png` |
| ソーシャル    | `image: '/icons/github.svg'`  | `public/icons/`     |
| カード画像    | `image: '/shots/website.png'` | `public/shots/`     |

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
