import { createApp } from 'vue'
import App from './App.vue'
import { reveal } from './directives/reveal.js'
import './styles/main.css'
import './styles/reveal.css'

createApp(App).directive('reveal', reveal).mount('#app')
