import { default as TopicDetailMissionSpotlight } from './TopicDetailMissionSpotlight.vue';
declare namespace _default {
    export let title: string;
    export { TopicDetailMissionSpotlight as component };
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
export namespace TopicDetailMissionSpotlightData {
    export let url: string;
    let title_1: string;
    export { title_1 as title };
    export let summary: string;
    export namespace heroImage {
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
        let alt: string;
    }
    export let showClock: boolean;
    export let showDistance: boolean;
    export let clockType: string;
    export let startDateTime: string;
    export let distanceType: string;
    export let distanceValue: number;
    export let distanceApiUrls: string;
}
export namespace MissionSpotlight {
    namespace args {
        export { TopicDetailMissionSpotlightData as data };
    }
}
export namespace NoClock {
    export namespace args_1 {
        namespace data {
            let showClock_1: boolean;
            export { showClock_1 as showClock };
        }
    }
    export { args_1 as args };
}
export namespace NoDistance {
    export namespace args_2 {
        export namespace data_1 {
            let showDistance_1: boolean;
            export { showDistance_1 as showDistance };
        }
        export { data_1 as data };
    }
    export { args_2 as args };
}
export namespace NoStats {
    export namespace args_3 {
        export namespace data_2 {
            let showClock_2: boolean;
            export { showClock_2 as showClock };
            let showDistance_2: boolean;
            export { showDistance_2 as showDistance };
        }
        export { data_2 as data };
    }
    export { args_3 as args };
}
