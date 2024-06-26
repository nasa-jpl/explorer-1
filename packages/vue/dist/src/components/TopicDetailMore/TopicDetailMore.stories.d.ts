import { default as TopicDetailMore } from './TopicDetailMore.vue';
declare namespace _default {
    export let title: string;
    export { TopicDetailMore as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace TopicDetailMoreData {
    let moreAboutTopic: {
        __typename: string;
        date: string;
        label: string;
        thumbnailImage: {
            src: {
                width: string;
                height: string;
                url: string;
            };
            srcSet: string;
        };
        title: string;
        url: string;
    }[];
    let moreAboutTopicCurated: ({
        __typename: string;
        page: {
            label: string;
            thumbnailImage: {
                src: {
                    width: string;
                    height: string;
                    url: string;
                };
                srcSet: string;
            };
            title: string;
            url: string;
            date?: undefined;
        };
        date?: undefined;
        label?: undefined;
        thumbnailImage?: undefined;
        title?: undefined;
        url?: undefined;
    } | {
        __typename: string;
        page: {
            date: string;
            label: string;
            thumbnailImage: {
                src: {
                    width: string;
                    height: string;
                    url: string;
                };
                srcSet: string;
            };
            title: string;
            url: string;
        };
        date?: undefined;
        label?: undefined;
        thumbnailImage?: undefined;
        title?: undefined;
        url?: undefined;
    } | {
        __typename: string;
        date: string;
        label: string;
        thumbnailImage: {
            src: {
                width: string;
                height: string;
                url: string;
            };
            srcSet: string;
        };
        title: string;
        url: string;
        page?: undefined;
    })[];
}
export namespace Default {
    namespace args {
        export let topic: string;
        import more = TopicDetailMoreData.moreAboutTopic;
        export { more };
        import moreCurated = TopicDetailMoreData.moreAboutTopicCurated;
        export { moreCurated };
    }
    function render(args: any): {
        setup(): {
            args: any;
        };
        components: {
            TopicDetailMore: import("vue").DefineComponent<{
                topic: {
                    type: StringConstructor;
                    required: false;
                    default: string;
                };
                more: {
                    type: import("vue").PropType<import("../../interfaces").Card[]>;
                    required: false;
                };
                moreCurated: {
                    type: import("vue").PropType<import("../../interfaces").Card[]>;
                    required: false;
                };
            }, unknown, unknown, {
                theData(): import("../../interfaces").Card[];
            }, {
                gridPlacement(index: number): "" | "col-start-2 col-span-6" | "lg:col-start-9 lg:col-span-4 md:col-start-6 md:col-span-6 lg:-mt-28" | "lg:col-start-4 lg:col-span-4 md:col-start-2 md:col-span-6 lg:-mt-28" | "lg:col-start-9 lg:col-span-4 md:col-start-6 md:col-span-6  lg:-mt-28" | "col-start-2 col-span-6 lg:-mt-28" | "lg:col-start-6 lg:col-span-6 md:col-start-6 md:col-span-6 lg:mt-28" | "lg:col-start-1 lg:col-span-4 md:col-start-2 md:col-span-6 lg:-mt-28" | "lg:col-start-6 lg:col-span-4 md:col-start-6 md:col-span-6 lg:-mt-28";
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                topic: {
                    type: StringConstructor;
                    required: false;
                    default: string;
                };
                more: {
                    type: import("vue").PropType<import("../../interfaces").Card[]>;
                    required: false;
                };
                moreCurated: {
                    type: import("vue").PropType<import("../../interfaces").Card[]>;
                    required: false;
                };
            }>>, {
                topic: string;
            }, {}>;
        };
        template: string;
    };
}
export namespace NoSpotlight {
    export namespace args_1 {
        let topic_1: string;
        export { topic_1 as topic };
        import more_1 = TopicDetailMoreData.moreAboutTopic;
        export { more_1 as more };
        import moreCurated_1 = TopicDetailMoreData.moreAboutTopicCurated;
        export { moreCurated_1 as moreCurated };
    }
    export { args_1 as args };
}
export namespace ShortList {
    export namespace args_2 {
        let topic_2: string;
        export { topic_2 as topic };
        let more_2: never[];
        export { more_2 as more };
        import moreCurated_2 = TopicDetailMoreData.moreAboutTopicCurated;
        export { moreCurated_2 as moreCurated };
    }
    export { args_2 as args };
}
export namespace NoList {
    export namespace args_3 {
        let topic_3: string;
        export { topic_3 as topic };
        let more_3: never[];
        export { more_3 as more };
        let moreCurated_3: never[];
        export { moreCurated_3 as moreCurated };
    }
    export { args_3 as args };
}
