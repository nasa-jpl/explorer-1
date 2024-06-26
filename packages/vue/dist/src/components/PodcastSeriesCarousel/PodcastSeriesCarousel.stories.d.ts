import { default as PodcastSeriesCarousel } from './PodcastSeriesCarousel.vue';
declare namespace _default {
    export let title: string;
    export { PodcastSeriesCarousel as component };
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
export namespace PodcastSeriesCarouselData {
    namespace parent {
        let id: string;
    }
    namespace series {
        let id_1: string;
        export { id_1 as id };
        export let url: string;
        export let seasons: {
            id: string;
            url: string;
            title: string;
            seasonNumber: number;
            episodes: {
                url: string;
                title: string;
                publicationDate: string;
                thumbnailImage: {
                    src: {
                        url: string;
                        width: number;
                        height: number;
                    };
                    alt: string;
                };
            }[];
        }[];
    }
}
export namespace Default {
    namespace args {
        import series_1 = PodcastSeriesCarouselData.series;
        export { series_1 as series };
        export let initialSeasonId: string | null;
    }
}
