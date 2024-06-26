import { default as HomepageCarouselItem } from './HomepageCarouselItem.vue';
import { BaseVideoData } from './../BaseVideo/BaseVideo.stories';
declare namespace _default {
    export let title: string;
    export { HomepageCarouselItem as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
        let viewMode: string;
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace HomepageCarouselItemData {
    namespace item {
        export let heading: string;
        export namespace page {
            let url: string;
        }
        export let externalLink: string;
        export let slideTitle: string;
        export { BaseVideoData as video };
        export namespace image {
            namespace src {
                let url_1: string;
                export { url_1 as url };
                export let width: number;
                export let height: number;
            }
            let srcSet: string;
            namespace screenMd {
                let url_2: string;
                export { url_2 as url };
            }
            namespace screenSm {
                let url_3: string;
                export { url_3 as url };
            }
        }
    }
}
export namespace SingleItem {
    namespace args {
        export namespace item_1 {
            let video: null;
        }
        export { item_1 as item };
    }
}
export namespace WithVideo {
    export { HomepageCarouselItemData as args };
}
