import { createApp } from 'vue'
import App from './App.vue'
import { reveal } from './directives/reveal.js'
import { site } from './data/profile.js'
import './styles/main.css'
import './styles/reveal.css'

// config（site）の内容をページのメタ情報へ反映
if (site.title) document.title = site.title
if (site.lang) document.documentElement.lang = site.lang
if (site.description) {
  let meta = document.querySelector('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', site.description)
}

createApp(App).directive('reveal', reveal).mount('#app')
