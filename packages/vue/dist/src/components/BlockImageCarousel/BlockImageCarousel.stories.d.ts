import { default as BlockImageCarousel } from './BlockImageCarousel.vue';
declare namespace _default {
    export let title: string;
    export { BlockImageCarousel as component };
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
export const BlockImageCarouselData: {
    image: {
        alt: string;
        title: string;
        caption: string;
        credit: string;
        detailUrl: string;
        original: string;
        src: {
            height: string;
            url: string;
            width: string;
        };
        srcSet: string;
    };
}[];
export namespace Carousel {
    let name: string;
    namespace args {
        let blockId_1: string;
        export { blockId_1 as blockId };
        let showTitle_1: boolean;
        export { showTitle_1 as showTitle };
        export { BlockImageCarouselData as items };
    }
}
