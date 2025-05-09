import { App, ComponentInternalInstance } from 'vue';

declare const Message: {
    (options: any): ComponentInternalInstance | null;
    install(app: App): void;
};
export default Message;
export { Message };
