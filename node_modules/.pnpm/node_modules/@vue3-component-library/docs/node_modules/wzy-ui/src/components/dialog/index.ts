import { App } from 'vue'
import Dialog from './Dialog.vue'

Dialog.install = (app: App) => {
    app.component('Dialog', Dialog)
}

export default Dialog
export { Dialog } 