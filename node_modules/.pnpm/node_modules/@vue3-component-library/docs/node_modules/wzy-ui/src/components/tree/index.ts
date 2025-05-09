import type { App } from 'vue'
import Tree from './Tree.vue'

const VTree = {
    name: 'VTree',
    ...Tree,
    install: (app: App) => {
        app.component('VTree', Tree)
    }
}

export default VTree
export { Tree } 