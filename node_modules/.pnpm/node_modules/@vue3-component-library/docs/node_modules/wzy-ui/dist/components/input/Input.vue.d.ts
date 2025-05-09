import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, PropType } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number;
    type?: string | undefined;
    size?: "default" | "large" | "small" | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    round?: boolean | undefined;
}>>, {
    focus: () => void | undefined;
    blur: () => void | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    change: (value: string) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number;
    type?: string | undefined;
    size?: "default" | "large" | "small" | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    round?: boolean | undefined;
}>>> & Readonly<{
    onBlur?: ((event: FocusEvent) => any) | undefined;
    onChange?: ((value: string) => any) | undefined;
    onFocus?: ((event: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
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
