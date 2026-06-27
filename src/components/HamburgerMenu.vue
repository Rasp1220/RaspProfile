<script setup>
// 画面右上のハンバーガーボタンから開くスライドメニュー。
//   - Home / SKILL への単純リンク
//   - Web / Discord Bot / Minecraft Plugins は ▼ で各詳細ページを展開
// 表示する中身は config（nav / sections）から生成します。
//   nav      … Home / SKILL などの単純リンク
//   sections … カテゴリ（▼で各詳細ページを展開）
import { ref, watch } from 'vue'
import { nav, sections } from '../data/profile.js'

const props = defineProps({
  // 現在のルート（'/' や '/web/my-website'）
  current: { type: String, default: '/' },
})

// メニューの開閉
const open = ref(false)
const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)

// 各カテゴリ（▼）の展開状態。現在地を含むカテゴリは最初から開く。
const expanded = ref(
  Object.fromEntries(
    sections.map((s) => [s.key, props.current.startsWith(s.base + '/')]),
  ),
)
const toggleCategory = (key) => (expanded.value[key] = !expanded.value[key])

// ルートが変わったらメニューは閉じる
watch(
  () => props.current,
  () => close(),
)

const isActive = (to) => props.current === to
</script>

<template>
  <div class="menu">
    <!-- 開閉ボタン（ハンバーガー / × ） -->
    <button
      class="menu__btn"
      :class="{ 'is-open': open }"
      :aria-expanded="open"
      aria-label="メニュー"
      @click="toggle"
    >
      <span class="menu__bar"></span>
      <span class="menu__bar"></span>
      <span class="menu__bar"></span>
    </button>

    <!-- 背景のオーバーレイ（クリックで閉じる） -->
    <transition name="fade">
      <div v-if="open" class="menu__scrim" @click="close"></div>
    </transition>

    <!-- スライドするパネル -->
    <transition name="slide">
      <nav v-if="open" class="panel" aria-label="サイトナビゲーション">
        <!-- 単純リンク（config の nav から） -->
        <a
          v-for="link in nav"
          :key="link.to"
          class="panel__link"
          :class="{ 'is-active': isActive(link.to) }"
          :href="'#' + link.to"
          @click="close"
          >{{ link.label }}</a
        >

        <!-- カテゴリ（▼で詳細ページ一覧を展開） -->
        <div v-for="section in sections" :key="section.key" class="group">
          <button
            class="panel__link group__head"
            :class="{ 'is-expanded': expanded[section.key] }"
            :aria-expanded="expanded[section.key]"
            @click="toggleCategory(section.key)"
          >
            {{ section.menuLabel }}
            <svg
              class="group__caret"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <transition name="collapse">
            <ul v-show="expanded[section.key]" class="group__list">
              <li v-for="item in section.items" :key="item.slug">
                <a
                  class="group__item"
                  :class="{
                    'is-active': isActive(section.base + '/' + item.slug),
                  }"
                  :href="'#' + section.base + '/' + item.slug"
                  @click="close"
                >
                  <span v-if="item.emoji" class="group__emoji">{{
                    item.emoji
                  }}</span>
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </transition>
        </div>
      </nav>
    </transition>
  </div>
</template>

<style scoped>
/* ---- 開閉ボタン ---- */
.menu__btn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 110;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  gap: 5px;
  padding: 0;
  border-radius: 14px;
  cursor: pointer;
  background: color-mix(in srgb, var(--card) 82%, transparent);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(12px);
  box-shadow: var(--shadow);
}

.menu__bar {
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background: var(--text);
  transition:
    transform 0.28s ease,
    opacity 0.2s ease;
}

/* × へ変形 */
.menu__btn.is-open .menu__bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.menu__btn.is-open .menu__bar:nth-child(2) {
  opacity: 0;
}
.menu__btn.is-open .menu__bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ---- オーバーレイ ---- */
.menu__scrim {
  position: fixed;
  inset: 0;
  z-index: 95;
  background: color-mix(in srgb, var(--text) 28%, transparent);
  backdrop-filter: blur(2px);
}

/* ---- パネル ---- */
.panel {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: min(82vw, 20rem);
  height: 100%;
  padding: 5rem 1.25rem 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background: color-mix(in srgb, var(--card) 92%, transparent);
  border-left: 1px solid var(--card-border);
  backdrop-filter: blur(16px);
  box-shadow: -24px 0 60px -30px rgba(80, 55, 35, 0.5);
}

.panel__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.7rem 0.85rem;
  border: 0;
  border-radius: 12px;
  font: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: left;
  color: var(--text);
  background: transparent;
  cursor: pointer;
  transition:
    color 0.18s ease,
    background 0.18s ease;
}

.panel__link:hover {
  background: var(--bg-soft);
}

.panel__link.is-active {
  color: #fff;
  background: var(--accent-grad);
}

/* ---- カテゴリ（展開グループ） ---- */
.group__caret {
  transition: transform 0.22s ease;
}

.group__head.is-expanded .group__caret {
  transform: rotate(180deg);
}

.group__list {
  list-style: none;
  margin: 0.15rem 0 0.35rem;
  padding: 0 0 0 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  border-left: 2px solid var(--card-border);
}

.group__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.75rem;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-muted);
  transition:
    color 0.18s ease,
    background 0.18s ease;
}

.group__item:hover {
  color: var(--text);
  background: var(--bg-soft);
}

.group__item.is-active {
  color: var(--accent);
  font-weight: 700;
}

.group__emoji {
  font-size: 1rem;
}

/* ---- トランジション ---- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.collapse-enter-active,
.collapse-leave-active {
  transition: opacity 0.2s ease;
}
.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .menu__bar,
  .group__caret,
  .slide-enter-active,
  .slide-leave-active,
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>
