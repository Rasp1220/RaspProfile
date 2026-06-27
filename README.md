# RaspProfile

Vue + Vite で作った、静的なプロフィールサイトのベースです。
ダークでモダンな見た目になっています。

## セットアップ

```bash
npm install      # 依存関係をインストール
npm run dev      # 開発サーバを起動（http://localhost:5173）
npm run build    # 静的ファイルを dist/ に出力
npm run preview  # ビルド結果をローカルで確認
```

## カスタマイズ

表示する内容は **`src/data/profile.js` を編集するだけ** で変更できます。
コードに触れる必要はありません。

| 編集対象     | 内容                                       |
| ------------ | ------------------------------------------ |
| `profile`    | 名前・肩書き・自己紹介・アバター・所在地    |
| `links`      | 他サイトへのリンク（**ここに足すだけで増える**） |
| `skills`     | スキル / 興味タグ（`[]` にすると非表示）    |

### リンクを後から追加する

`src/data/profile.js` の `links` 配列に項目を追加します。

```js
{
  label: 'YouTube',
  url: 'https://youtube.com/@you',
  icon: 'youtube',          // github / x / instagram / youtube / linkedin / mail / link
  description: '動画コンテンツ',
}
```

対応アイコンを増やしたい場合は `src/components/IconLink.vue` の
`icons` に SVG パスを 1 行追加してください。未対応のキーは
汎用のリンクアイコンで表示されます。

### アバター画像

`public/` に画像を置き、`profile.avatar` にパス（例: `/avatar.jpg`）を
指定します。未設定の場合は名前の頭文字が表示されます。

### 色テーマ

`src/styles/main.css` の `:root` にあるカラー変数を変更すると、
サイト全体の色味が変わります。

## デプロイ

`npm run build` で生成される `dist/` を任意の静的ホスティング
（GitHub Pages / Netlify / Vercel など）に配置するだけです。
GitHub Pages のサブパスに置く場合は `vite.config.js` の `base` を
リポジトリ名（例: `'/RaspProfile/'`）に変更してください。
