interface AspectRatios {
    [name: string]: string;
}
export declare const aspectRatios: AspectRatios;
declare const _default: import('vue').DefineComponent<{
    darkMode: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    transparentMode: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noLogo: {
        type: BooleanConstructor;
        default: boolean;
    };
    aspectRatio: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    responsiveAspectRatio: {
        type: StringConstructor;
        required: false;
    };
}, unknown, unknown, {
    computedClass(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    darkMode: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    transparentMode: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    noLogo: {
        type: BooleanConstructor;
        default: boolean;
    };
    aspectRatio: {
        type: StringConstructor;
        default: string;
        validator: (prop: string) => boolean;
    };
    responsiveAspectRatio: {
        type: StringConstructor;
        required: false;
    };
}>>, {
    darkMode: boolean;
    transparentMode: boolean;
    noLogo: boolean;
    aspectRatio: string;
}, {}>;
export default _default;
