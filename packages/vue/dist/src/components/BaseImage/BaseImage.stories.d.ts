declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{
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
            default: string;
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
            type: import('vue').PropType<import('./BaseImage.vue').ImageLoader>;
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
            default: string;
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
            type: import('vue').PropType<import('./BaseImage.vue').ImageLoader>;
            required: false;
            default: string;
        };
    }>>, {
        srcset: string;
        loading: import('./BaseImage.vue').ImageLoader;
        objectFitClass: string;
    }, {}>;
    excludeStories: RegExp;
    argTypes: {
        objectFitClass: {
            description: string;
            control: {
                type: string;
            };
            options: string[];
        };
    };
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
export declare const BaseImageData: {
    src: string;
    srcset: string;
    alt: string;
    width: number;
    height: number;
    imageClass: string;
    objectFitClass: string;
};
export declare const Default: {
    args: {
        src: string;
        srcset: string;
        alt: string;
        width: number;
        height: number;
        imageClass: string;
        objectFitClass: string;
    };
    decorators: (() => {
        template: string;
    })[];
};
export declare const LazyLoading: {
    args: {
        src: string;
        srcset: string;
        alt: string;
        width: number;
        height: number;
        imageClass: string;
        objectFitClass: string;
    };
    decorators: (() => {
        template: string;
    })[];
    parameters: {
        html: {
            root: string;
        };
    };
};
