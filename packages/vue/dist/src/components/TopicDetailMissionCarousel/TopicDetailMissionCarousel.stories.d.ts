import { default as TopicDetailMissionCarousel } from './TopicDetailMissionCarousel.vue';
declare namespace _default {
    export let title: string;
    export { TopicDetailMissionCarousel as component };
    export let excludeStories: RegExp;
}
export default _default;
export const TopicDetailMissionCarouselData: ({
    clockType: string;
    showClock: boolean;
    startDateTime: string;
    status: string;
    thumbnailImage: {
        src: {
            url: string;
            width: number;
            height: number;
        };
    };
    title: string;
    url: string;
} | {
    clockType: string;
    showClock: boolean;
    startDateTime: null;
    status: string;
    thumbnailImage: {
        src: {
            url: string;
            width: number;
            height: number;
        };
    };
    title: string;
    url: string;
})[];
export namespace Default {
    namespace args {
        let title_1: string;
        export { title_1 as title };
        export let relatedMissionsLinkUrl: string;
        export let relatedMissionsLinkText: string;
        export { TopicDetailMissionCarouselData as items };
    }
}
