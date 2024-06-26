import { default as BlockInlineImage } from './BlockInlineImage.vue';
declare namespace _default {
    export let title: string;
    export { BlockInlineImage as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockInlineImageData {
    namespace block {
        let blockType: string;
        let text: string;
        let alignTo: string;
        let image: {
            alt: string;
            src: {
                height: number;
                url: string;
                width: number;
            };
            original: string;
            caption: string;
            credit: string;
            detailUrl: string;
        };
        let displayCaption: boolean;
    }
}
export namespace AlignRight {
    namespace args {
        import data = BlockInlineImageData.block;
        export { data };
    }
}
export namespace CustomCaption {
    export namespace args_1 {
        export namespace data_1 {
            let caption: string;
        }
        export { data_1 as data };
    }
    export { args_1 as args };
}
export namespace AlignLeft {
    export namespace args_2 {
        export namespace data_2 {
            let alignTo_1: string;
            export { alignTo_1 as alignTo };
        }
        export { data_2 as data };
    }
    export { args_2 as args };
}
export namespace PortraitImage {
    export namespace args_3 {
        export namespace data_3 {
            let image_1: {
                alt: string;
                src: {
                    height: number;
                    url: string;
                    width: number;
                };
                caption: string;
                credit: string;
                detailUrl: string;
            };
            export { image_1 as image };
        }
        export { data_3 as data };
    }
    export { args_3 as args };
}
