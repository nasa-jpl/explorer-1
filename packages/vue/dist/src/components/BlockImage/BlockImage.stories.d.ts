import { default as BlockImage } from './BlockImage.vue';
declare namespace _default {
    export let title: string;
    export { BlockImage as component };
    export namespace argTypes {
        namespace fullBleed {
            namespace control {
                let type: string;
            }
        }
    }
    export let excludeStories: RegExp;
    export namespace parameters {
        let viewMode: string;
        namespace docs {
            namespace description {
                let component: string;
            }
        }
    }
}
export default _default;
export namespace BlockImageData {
    export let blockType: string;
    let fullBleed_1: boolean;
    export { fullBleed_1 as fullBleed };
    export namespace image {
        let alt: string;
        let caption: string;
        let credit: string;
        let detailUrl: string;
        let original: string;
        namespace src {
            let height: number;
            let url: string;
            let width: number;
        }
        let srcSet: string;
    }
    export namespace imageFullBleed {
        let alt_1: string;
        export { alt_1 as alt };
        let caption_1: string;
        export { caption_1 as caption };
        let credit_1: string;
        export { credit_1 as credit };
        let detailUrl_1: string;
        export { detailUrl_1 as detailUrl };
        let original_1: string;
        export { original_1 as original };
        export namespace src_1 {
            let width_1: number;
            export { width_1 as width };
            let height_1: number;
            export { height_1 as height };
            let url_1: string;
            export { url_1 as url };
        }
        export { src_1 as src };
        export namespace srcCropped {
            let width_2: number;
            export { width_2 as width };
            let height_2: number;
            export { height_2 as height };
            let url_2: string;
            export { url_2 as url };
        }
        export namespace screenXs {
            let url_3: string;
            export { url_3 as url };
            let width_3: number;
            export { width_3 as width };
        }
        export namespace screenLg {
            let url_4: string;
            export { url_4 as url };
            let width_4: number;
            export { width_4 as width };
        }
        export namespace screenXl {
            let url_5: string;
            export { url_5 as url };
            let width_5: number;
            export { width_5 as width };
        }
        export namespace screenThreexl {
            let url_6: string;
            export { url_6 as url };
            let width_6: number;
            export { width_6 as width };
        }
    }
}
export function Standard(args: any): {
    components: {
        BlockImage: import('vue').DefineComponent<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>>, {
            fullBleed: boolean;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace Standard {
    namespace args {
        export { BlockImageData as data };
        import fullBleed_2 = BlockImageData.fullBleed;
        export { fullBleed_2 as fullBleed };
    }
}
export function Unconstrained(args: any): {
    components: {
        BlockImage: import('vue').DefineComponent<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>>, {
            fullBleed: boolean;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace Unconstrained {
    export namespace args_1 {
        export namespace data {
            let constrain: boolean;
        }
        import fullBleed_3 = BlockImageData.fullBleed;
        export { fullBleed_3 as fullBleed };
    }
    export { args_1 as args };
}
export function CustomCaption(args: any): {
    components: {
        BlockImage: import('vue').DefineComponent<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>>, {
            fullBleed: boolean;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace CustomCaption {
    export namespace args_2 {
        export namespace data_1 {
            let caption_2: string;
            export { caption_2 as caption };
            export let displayCaption: boolean;
        }
        export { data_1 as data };
        import fullBleed_4 = BlockImageData.fullBleed;
        export { fullBleed_4 as fullBleed };
    }
    export { args_2 as args };
}
export function NoCaption(args: any): {
    components: {
        BlockImage: import('vue').DefineComponent<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>>, {
            fullBleed: boolean;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace NoCaption {
    export namespace args_3 {
        export namespace data_2 {
            let displayCaption_1: boolean;
            export { displayCaption_1 as displayCaption };
        }
        export { data_2 as data };
        import fullBleed_5 = BlockImageData.fullBleed;
        export { fullBleed_5 as fullBleed };
    }
    export { args_3 as args };
}
export function FullBleed(args: any): {
    components: {
        BlockImage: import('vue').DefineComponent<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>>, {
            fullBleed: boolean;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace FullBleed {
    export namespace args_4 {
        export namespace data_3 {
            let constrain_1: boolean;
            export { constrain_1 as constrain };
        }
        export { data_3 as data };
        let fullBleed_6: boolean;
        export { fullBleed_6 as fullBleed };
    }
    export { args_4 as args };
}
export function FullBleedUnconstrained(args: any): {
    components: {
        BlockImage: import('vue').DefineComponent<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
            fullBleed: {
                type: BooleanConstructor;
                required: false;
                default: boolean;
            };
        }>>, {
            fullBleed: boolean;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace FullBleedUnconstrained {
    export namespace args_5 {
        export namespace data_4 {
            let constrain_2: boolean;
            export { constrain_2 as constrain };
        }
        export { data_4 as data };
        let fullBleed_7: boolean;
        export { fullBleed_7 as fullBleed };
    }
    export { args_5 as args };
}
