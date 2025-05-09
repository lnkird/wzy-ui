import { App, createVNode, render } from 'vue'
import MessageConstructor from './Message.vue'

let messageInstance: any = null
const messageContainer = document.createElement('div')

const Message = (options: any) => {
    if (typeof options === 'string') {
        options = {
            message: options
        }
    }

    if (messageInstance) {
        messageInstance.component.exposed.close()
    }

    const vnode = createVNode(MessageConstructor, {
        ...options,
        onClose: () => {
            render(null, messageContainer)
            messageInstance = null
        }
    })

    render(vnode, messageContainer)
    messageInstance = vnode
    return vnode.component
}

Message.install = (app: App) => {
    app.config.globalProperties.$message = Message
}

export default Message
export { Message } 