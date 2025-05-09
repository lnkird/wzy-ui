import { App } from 'vue'
import Button from './components/button'
import Input from './components/input'
import Message from './components/message'
import Tree from './components/tree'
import Dialog from './components/dialog'
import Select from './components/select'
import Preview from './components/preview'

const components = [
    Button,
    Input,
    Message,
    Tree,
    Dialog,
    Select,
    Preview
]

const install = (app: App) => {
    components.forEach(component => {
        if (component.name) {
            app.component(component.name, component)
        }
    })
}

export {
    Button,
    Input,
    Message,
    Tree,
    Dialog,
    Select,
    Preview
}

export default {
    install
} 