import { PropType } from 'vue';

export type ImageLoader = 'lazy' | 'eager' | undefined;
interface ObjectFitClasses {
    [name: string]: string;
}
export declare const objectFitClasses: ObjectFitClasses;
declare const _default: import('vue').DefineComponent<{
    imageClass: {
        type: StringConstructor;
        required: false;
    };
    objectFitClass: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (prop: string) => boolean;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    srcset: {
        type: StringConstructor;
        required: false;
        default: boolean;
    };
    alt: {
        type: StringConstructor;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
    };
    loading: {
        type: PropType<ImageLoader>;
        required: false;
        default: string;
    };
}, unknown, {
    lazyNative: boolean;
}, {
    computedClass(): string;
}, {
    featureDetectImageLazyLoad(): void;
    imageFailed(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    imageClass: {
        type: StringConstructor;
        required: false;
    };
    objectFitClass: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (prop: string) => boolean;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    srcset: {
        type: StringConstructor;
        required: false;
        default: boolean;
    };
    alt: {
        type: StringConstructor;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
    };
    loading: {
        type: PropType<ImageLoader>;
        required: false;
        default: string;
    };
}>>, {
    objectFitClass: string;
    srcset: string;
    loading: ImageLoader;
}, {}>;
export default _default;
