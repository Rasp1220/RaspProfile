// =============================================================
//  v-reveal ディレクティブ
// -------------------------------------------------------------
//  要素が画面に入ったら IntersectionObserver で検知し、
//  is-visible クラスを付与してアニメーションさせます。
//
//  使い方:
//    v-reveal                       … デフォルト(rise)
//    v-reveal="{ variant: 'flip-x' }"
//    v-reveal="{ variant: 'mask-up', delay: 120 }"
//
//  variant の種類は src/styles/reveal.css を参照。
// =============================================================

const VISIBLE = 'is-visible'

let observer

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // clip-path を使う variant（wipe / mask-up）は要素の描画領域が
          // ゼロになり intersectionRect が 0 → ratio が 0.18 を超えられず
          // 発火しなくなる。その場合は isIntersecting だけで判定する。
          const clipped =
            entry.intersectionRect.width === 0 ||
            entry.intersectionRect.height === 0
          if (
            entry.isIntersecting &&
            (entry.intersectionRatio >= 0.18 || clipped)
          ) {
            entry.target.classList.add(VISIBLE)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: [0, 0.18], rootMargin: '0px 0px -8% 0px' },
    )
  }
  return observer
}

export const reveal = {
  mounted(el, binding) {
    const { variant = 'rise', delay = 0 } = binding.value || {}
    el.classList.add('reveal')
    el.dataset.reveal = variant
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)

    // モーション軽減設定の場合は即表示してアニメを無効化
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduce) {
      el.classList.add(VISIBLE)
      return
    }

    getObserver().observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}
