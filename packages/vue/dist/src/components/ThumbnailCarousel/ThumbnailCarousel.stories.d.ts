import { default as ThumbnailCarousel } from './ThumbnailCarousel.vue';
declare namespace _default {
    export let title: string;
    export { ThumbnailCarousel as component };
    export namespace parameters {
        namespace docs {
            namespace description {
                let component: string;
            }
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace ThumbnailCarouselData {
    let slides: {
        url: string;
        title: string;
        thumbnailImage: {
            src: {
                url: string;
                width: number;
                height: number;
            };
            alt: string;
        };
    }[];
}
export namespace Default {
    export { ThumbnailCarouselData as args };
}
