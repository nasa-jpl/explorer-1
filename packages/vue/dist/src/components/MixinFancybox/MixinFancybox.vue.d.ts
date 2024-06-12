
export declare const fancyboxThemes: {
    normal: string;
    light: string;
    dark: string;
};
declare const _default: import('vue').DefineComponent<{
    infinite: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    showThumbnails: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    galleryName: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    src: {
        type: StringConstructor;
        required: false;
    };
    srcSet: {
        type: StringConstructor;
        required: false;
    };
    sizes: {
        type: StringConstructor;
        required: false;
    };
    downloadSrc: {
        type: StringConstructor;
        required: false;
    };
    caption: {
        type: StringConstructor;
        required: false;
    };
    credit: {
        type: StringConstructor;
        required: false;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    detailUrl: {
        type: StringConstructor;
        required: false;
    };
    width: {
        type: StringConstructor;
        required: false;
    };
    height: {
        type: StringConstructor;
        required: false;
    };
    theme: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (prop: unknown) => boolean;
    };
}, unknown, unknown, {
    computedClass(): any;
    computedCaption(): any;
}, {
    clickHandler(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    infinite: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    showThumbnails: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    galleryName: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    src: {
        type: StringConstructor;
        required: false;
    };
    srcSet: {
        type: StringConstructor;
        required: false;
    };
    sizes: {
        type: StringConstructor;
        required: false;
    };
    downloadSrc: {
        type: StringConstructor;
        required: false;
    };
    caption: {
        type: StringConstructor;
        required: false;
    };
    credit: {
        type: StringConstructor;
        required: false;
    };
    title: {
        type: StringConstructor;
        required: false;
    };
    detailUrl: {
        type: StringConstructor;
        required: false;
    };
    width: {
        type: StringConstructor;
        required: false;
    };
    height: {
        type: StringConstructor;
        required: false;
    };
    theme: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (prop: unknown) => boolean;
    };
}>>, {
    theme: string;
    infinite: boolean;
    showThumbnails: boolean;
    animated: boolean;
    galleryName: string;
}, {}>;
export default _default;
