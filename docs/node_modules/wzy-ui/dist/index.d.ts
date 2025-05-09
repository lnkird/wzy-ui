import { App } from 'vue';
import { default as Button } from './components/button';
import { default as Input } from './components/input';
import { default as Message } from './components/message';
import { default as Tree } from './components/tree';
import { default as Dialog } from './components/dialog';
import { default as Select } from './components/select';
import { default as Preview } from './components/preview';

export { Button, Input, Message, Tree, Dialog, Select, Preview };
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
