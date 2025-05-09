import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    message: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    close: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{
    message: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{}>, {
    type: string;
    showClose: boolean;
    duration: number;
    message: string;
    top: number;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default _default;
