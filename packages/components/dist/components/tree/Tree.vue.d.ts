import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';
interface TreeNodeData {
    id: string | number;
    label: string;
    children?: TreeNodeData[];
    disabled?: boolean;
    checked?: boolean;
    expanded?: boolean;
}
declare const _default: DefineComponent<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    data: TreeNodeData[];
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "node-click": (node: TreeNodeData) => void;
    "node-check": (node: TreeNodeData, checked: boolean) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    data: TreeNodeData[];
}>>> & Readonly<{
    "onNode-click"?: ((node: TreeNodeData) => any) | undefined;
    "onNode-check"?: ((node: TreeNodeData, checked: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};
