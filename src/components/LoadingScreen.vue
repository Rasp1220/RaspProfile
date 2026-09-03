<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { profile } from '../data/profile.js'

const emit = defineEmits(['finished'])

// タイピング表示する文字列（例: "Rasp／らすぷ" → "Rasp"）
const text = computed(() => (profile.name || 'Rasp').split(/[／/]/)[0].trim() || 'Rasp')

const command = ref('')
const showCursor = ref(true)
const enterPressed = ref(false)
const zoomOut = ref(false)
const visible = ref(true)

const timers = []
const setTimer = (fn, ms) => timers.push(setTimeout(fn, ms))

function typeChar(i) {
  if (i < text.value.length) {
    command.value += text.value.charAt(i)
    // 人間らしさを出すランダムな打鍵速度
    setTimer(() => typeChar(i + 1), 80 + Math.random() * 120)
  } else {
    setTimer(showEnter, 200)
  }
}

function showEnter() {
  enterPressed.value = true
  setTimer(() => {
    showCursor.value = false
    zoomOut.value = true
    // ターミナルがズームアウトして消えるアニメーション後に完全に取り除く
    setTimer(finish, 700)
  }, 400)
}

function finish() {
  visible.value = false
  emit('finished')
}

onMounted(() => {
  document.body.style.overflow = 'hidden'

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    command.value = text.value
    showCursor.value = false
    setTimer(() => {
      zoomOut.value = true
      setTimer(finish, 300)
    }, 200)
    return
  }

  typeChar(0)
})

onBeforeUnmount(() => {
  timers.forEach(clearTimeout)
  document.body.style.overflow = ''
})
</script>

<template>
  <div v-if="visible" class="loader" :class="{ 'loader--exit': zoomOut }" aria-hidden="true">
    <div class="terminal">
      <span class="prompt">&gt;</span>
      <span class="command">{{ command }}</span>
      <span v-if="showCursor" class="cursor"></span>
      <span class="enter-badge" :class="{ 'enter-badge--pressed': enterPressed }">↵ Enter</span>
    </div>
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  inset: 0;
  background-color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.55s ease 0.15s;
}

.loader--exit {
  opacity: 0;
}

.terminal {
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(1.4rem, 5vw, 2.2rem);
  font-weight: bold;
  color: #38bdf8;
  display: flex;
  align-items: center;
  gap: 10px;
  transition:
    transform 0.5s cubic-bezier(0.55, 0, 1, 0.45),
    opacity 0.5s ease;
}

/* ターミナルがカメラを引くようにズームアウトして消える */
.loader--exit .terminal {
  transform: scale(0.35);
  opacity: 0;
}

.prompt {
  color: #f43f5e;
}

.cursor {
  display: inline-block;
  width: 0.5em;
  height: 1.2em;
  background-color: #38bdf8;
  animation: blink 0.6s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.enter-badge {
  font-size: 0.5em;
  padding: 4px 10px;
  border: 1px solid #38bdf8;
  border-radius: 4px;
  color: #38bdf8;
  background-color: transparent;
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.2s ease;
}

.enter-badge--pressed {
  opacity: 1;
  transform: scale(1);
  background-color: #38bdf8;
  color: #0f172a;
  box-shadow: 0 0 12px #38bdf8;
}

@media (prefers-reduced-motion: reduce) {
  .cursor {
    animation: none;
  }
}
</style>
