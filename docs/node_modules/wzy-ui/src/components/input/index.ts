import type { App } from 'vue'
import Input from './Input.vue'

const VInput = {
    name: 'VInput',
    ...Input,
    install: (app: App) => {
        app.component('VInput', Input)
    }
}

export default VInput
export { Input } 