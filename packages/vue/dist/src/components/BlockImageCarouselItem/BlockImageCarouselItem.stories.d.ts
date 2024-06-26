import { default as BlockImageCarouselItem } from './BlockImageCarouselItem.vue';
declare namespace _default {
    export let title: string;
    export { BlockImageCarouselItem as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace argTypes {
        namespace blockId {
            namespace text {
                let type: string;
            }
            let required: boolean;
            let description: string;
        }
        namespace showTitle {
            export namespace text_1 {
                let type_1: string;
                export { type_1 as type };
            }
            export { text_1 as text };
            let required_1: boolean;
            export { required_1 as required };
            let description_1: string;
            export { description_1 as description };
        }
    }
    export namespace parameters {
        namespace html {
            let root: string;
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockImageCarouselItemData {
    namespace item {
        namespace image {
            export let alt: string;
            let title_1: string;
            export { title_1 as title };
            export let caption: string;
            export let credit: string;
            export let detailUrl: string;
            export let original: string;
            export namespace src {
                let height: number;
                let url: string;
                let width: number;
            }
            export let srcSet: string;
        }
    }
}
export namespace SingleItem {
    let name: string;
    namespace args {
        import image_1 = image;
        export { image_1 as image };
        let caption_1: string;
        export { caption_1 as caption };
        export let displayCaption: boolean;
        let blockId_1: string;
        export { blockId_1 as blockId };
        let showTitle_1: boolean;
        export { showTitle_1 as showTitle };
    }
}
