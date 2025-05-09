import { createApp } from 'vue'
import App from './App.vue'
import Vue3ComponentLibrary from '@vue3-component-library/components'
import '@vue3-component-library/components/style.css'

const app = createApp(App)
app.use(Vue3ComponentLibrary)
app.mount('#app') 