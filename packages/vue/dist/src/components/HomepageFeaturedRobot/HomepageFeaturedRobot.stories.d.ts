import { default as HomepageFeaturedRobot } from './HomepageFeaturedRobot.vue';
declare namespace _default {
    export let title: string;
    export { HomepageFeaturedRobot as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        let viewMode: string;
    }
}
export default _default;
export namespace HomepageFeaturedRobotData {
    export let url: string;
    export namespace parent {
        let url_1: string;
        export { url_1 as url };
    }
    let title_1: string;
    export { title_1 as title };
    export let nickname: string;
    export let homePageBlurb: string;
    export let description: string;
    export namespace heroImage {
        namespace src {
            let url_2: string;
            export { url_2 as url };
            export let width: number;
            export let height: number;
        }
        namespace screenMd {
            let url_3: string;
            export { url_3 as url };
        }
        namespace screenSm {
            let url_4: string;
            export { url_4 as url };
        }
    }
    export namespace homePageImage {
        export namespace src_1 {
            let url_5: string;
            export { url_5 as url };
            let width_1: number;
            export { width_1 as width };
            let height_1: number;
            export { height_1 as height };
        }
        export { src_1 as src };
        export let srcSet: string;
    }
    export let mass: number;
    let height_2: number;
    export { height_2 as height };
    export let speed: number;
    export let alternativeStats: {
        metricLabel: string;
        metricUnit: string;
        metricValue: string;
    }[];
}
export namespace FeaturedRobot {
    namespace args {
        export { HomepageFeaturedRobotData as data };
    }
}
export namespace NoCustomContent {
    export namespace args_1 {
        namespace data {
            let nickname_1: string;
            export { nickname_1 as nickname };
            let homePageBlurb_1: string;
            export { homePageBlurb_1 as homePageBlurb };
            let homePageImage_1: null;
            export { homePageImage_1 as homePageImage };
        }
    }
    export { args_1 as args };
}
export namespace NoStats {
    export namespace args_2 {
        export namespace data_1 {
            let mass_1: null;
            export { mass_1 as mass };
            let height_3: null;
            export { height_3 as height };
            let speed_1: null;
            export { speed_1 as speed };
            let alternativeStats_1: never[];
            export { alternativeStats_1 as alternativeStats };
        }
        export { data_1 as data };
    }
    export { args_2 as args };
}
