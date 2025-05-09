import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';
declare const _default: __VLS_WithTemplateSlots< DefineComponent<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue: boolean;
    title?: string | undefined;
    width?: string | number | undefined;
    showClose?: boolean | undefined;
    closeOnClickOverlay?: boolean | undefined;
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
    close: () => void;
    confirm: () => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue: boolean;
    title?: string | undefined;
    width?: string | number | undefined;
    showClose?: boolean | undefined;
    closeOnClickOverlay?: boolean | undefined;
}>>> & Readonly<{
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onConfirm?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
    footer?(_: {}): any;
}>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
