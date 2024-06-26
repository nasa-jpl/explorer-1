import { default as HomepageMissionsCarousel } from './HomepageMissionsCarousel.vue';
declare namespace _default {
    export let title: string;
    export { HomepageMissionsCarousel as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        let viewMode: string;
    }
}
export default _default;
export namespace HomepageMissionsCarouselData {
    let missionsCarousel: {
        heading: string;
        label: string;
        summary: string;
        targets: ({
            name: string;
            pastMissions: number;
            currentMissions: number;
            topic: {
                title: string;
                url: string;
            };
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                webp: {
                    url: string;
                };
            };
        } | {
            name: string;
            pastMissions: number;
            currentMissions: number;
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                webp: {
                    url: string;
                };
            };
            topic?: undefined;
        })[];
    }[];
}
export namespace Default {
    namespace args {
        import data = HomepageMissionsCarouselData.missionsCarousel;
        export { data };
    }
}
export namespace Item {
    export namespace args_1 {
        let data_1: {
            name: string;
            pastMissions: number;
            currentMissions: number;
            topic: {
                title: string;
                url: string;
            };
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                webp: {
                    url: string;
                };
            };
        } | {
            name: string;
            pastMissions: number;
            currentMissions: number;
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                webp: {
                    url: string;
                };
            };
            topic?: undefined;
        };
        export { data_1 as data };
    }
    export { args_1 as args };
    export function render(args: any): {
        components: {
            HomepageMissionsCarouselItem: import("vue").DefineComponent<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                };
            }, unknown, unknown, {
                hasTopic(): boolean;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                };
            }>>, {}, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
}
