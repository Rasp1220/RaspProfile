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
import WebYurukake from './Web/Yurukake.vue'
import WebServiceStatus from './Web/ServiceStatus.vue'
import WebMcVersionManager from './Web/McVersionManager.vue'
import DiscordDisasterBot from './DiscordBot/DisasterBot.vue'
import DiscordMcDiscordBridge from './DiscordBot/McDiscordBridge.vue'
import MinecraftHimatsudoLife from './MinecraftPlugins/HimatsudoLife.vue'
import MinecraftHimatsudoBoss from './MinecraftPlugins/HimatsudoBoss.vue'
import MinecraftHousingMC from './MinecraftPlugins/HousingMC.vue'
import MinecraftHimaCasino from './MinecraftPlugins/HimaCasino.vue'
import MinecraftOnigokko from './MinecraftPlugins/Onigokko.vue'
import MinecraftGriefDetector from './MinecraftPlugins/GriefDetector.vue'
import MinecraftHimatsudoCore from './MinecraftPlugins/HimatsudoCore.vue'
import FiveMMyFiveMScript from './FiveM/MyFiveMScript.vue'

export const detailPages = {
  '/web/my-website': WebMyWebsite,
  '/web/another-site': WebAnotherSite,
  '/web/notely': WebNotely,
  '/web/calnest': WebCalnest,
  '/web/yurukake': WebYurukake,
  '/web/server-status': WebServiceStatus,
  '/web/mc-version-manager': WebMcVersionManager,
  '/discord/weather-bot': DiscordDisasterBot,
  '/discord/mc-discord-bridge': DiscordMcDiscordBridge,
  '/minecraft/himatsudo-life': MinecraftHimatsudoLife,
  '/minecraft/himatsudo-boss': MinecraftHimatsudoBoss,
  '/minecraft/housing-mc': MinecraftHousingMC,
  '/minecraft/hima-casino': MinecraftHimaCasino,
  '/minecraft/onigokko': MinecraftOnigokko,
  '/minecraft/grief-detector': MinecraftGriefDetector,
  '/minecraft/himatsudo-core': MinecraftHimatsudoCore,
  '/fivem/my-fivem-script': FiveMMyFiveMScript,
}

// ルートに対応する詳細ページを返す（無ければ undefined）
export const resolveDetail = (route) => detailPages[route]
