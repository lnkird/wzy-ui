import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';
declare const _default: __VLS_WithTemplateSlots< DefineComponent<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    type?: "primary" | "success" | "warning" | "danger" | "info" | undefined;
    size?: "default" | "large" | "small" | undefined;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    round?: boolean | undefined;
    plain?: boolean | undefined;
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    type?: "primary" | "success" | "warning" | "danger" | "info" | undefined;
    size?: "default" | "large" | "small" | undefined;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    round?: boolean | undefined;
    plain?: boolean | undefined;
}>>> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    icon?(_: {}): any;
    default?(_: {}): any;
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
