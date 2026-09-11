// =============================================================
//  詳細ページのルート登録
//  ルート（例: '/web/my-website'）と詳細ページコンポーネントの対応表。
//  カテゴリごとにディレクトリを分けています。
//   - Web              → src/views/details/Web/
//   - DiscordBot       → src/views/details/DiscordBot/
//   - MinecraftPlugins → src/views/details/MinecraftPlugins/
//   - FiveM            → src/views/details/FiveM/
//
//  詳細ページを増やすときは
//   1) 該当ディレクトリに <Name>.vue を作る
//   2) profile.js の items に { name, slug, ... } を追加する
//   3) ここに `'/<base>/<slug>': コンポーネント` を 1 行足す
//  の 3 つだけです。
// =============================================================
import WebMyWebsite from './Web/MyWebsite.vue'
import WebAnotherSite from './Web/AnotherSite.vue'
import WebNotely from './Web/Notely.vue'
import WebCalnest from './Web/Calnest.vue'
import DiscordMyDiscordBot from './DiscordBot/MyDiscordBot.vue'
import MinecraftMyPlugin from './MinecraftPlugins/MyPlugin.vue'
import FiveMMyFiveMScript from './FiveM/MyFiveMScript.vue'

export const detailPages = {
  '/web/my-website': WebMyWebsite,
  '/web/another-site': WebAnotherSite,
  '/web/notely': WebNotely,
  '/web/calnest': WebCalnest,
  '/discord/my-discord-bot': DiscordMyDiscordBot,
  '/minecraft/my-plugin': MinecraftMyPlugin,
  '/fivem/my-fivem-script': FiveMMyFiveMScript,
}

// ルートに対応する詳細ページを返す（無ければ undefined）
export const resolveDetail = (route) => detailPages[route]
