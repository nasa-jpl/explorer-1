import { default as HeroMedium } from './HeroMedium.vue';
import { BaseVideoData } from './../BaseVideo/BaseVideo.stories';
declare namespace _default {
    export let title: string;
    export { HeroMedium as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
        namespace themes {
            let clearable: boolean;
            let list: {
                name: string;
                class: string;
                default: boolean;
                visible: boolean;
            }[];
        }
        let viewMode: string;
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace HeroMediumData {
    let label: string;
    let cta: string;
    namespace feature {
        export let url: string;
        let title_1: string;
        export { title_1 as title };
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
export namespace Default {
    namespace args {
        export let customTag: string;
        import customLabel = HeroMediumData.label;
        export { customLabel };
        import feature_1 = HeroMediumData.feature;
        export { feature_1 as feature };
        import cta_1 = HeroMediumData.cta;
        export { cta_1 as cta };
        export let customVideo: undefined;
    }
}
export namespace Video {
    export namespace args_1 {
        import customLabel_1 = HeroMediumData.label;
        export { customLabel_1 as customLabel };
        import feature_2 = HeroMediumData.feature;
        export { feature_2 as feature };
        import cta_2 = HeroMediumData.cta;
        export { cta_2 as cta };
        export { BaseVideoData as customVideo };
    }
    export { args_1 as args };
}
