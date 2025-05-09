import type { App } from 'vue'
import Button from './Button.vue'

const VButton = {
    name: 'VButton',
    ...Button,
    install: (app: App) => {
        app.component('VButton', Button)
    }
}

export default VButton
export { Button } 