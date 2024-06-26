import { default as TopicDetailMissionCarouselItem } from './TopicDetailMissionCarouselItem.vue';
declare namespace _default {
    export let title: string;
    export { TopicDetailMissionCarouselItem as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace TopicDetailMissionCarouselItemData {
    export let clockType: string;
    export let showClock: boolean;
    export let startDateTime: string;
    export let status: string;
    export namespace thumbnailImage {
        namespace src {
            let url: string;
            let width: number;
            let height: number;
        }
    }
    let title_1: string;
    export { title_1 as title };
    let url_1: string;
    export { url_1 as url };
}
export namespace SingleItem {
    namespace args {
        export { TopicDetailMissionCarouselItemData as data };
    }
}
