import { App } from 'vue'
import Preview from './Preview.vue'

Preview.install = (app: App) => {
    app.component('Preview', Preview)
}

export default Preview
export { Preview } 