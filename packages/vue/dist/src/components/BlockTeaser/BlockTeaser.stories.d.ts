import { default as BlockTeaser } from './BlockTeaser.vue';
declare namespace _default {
    export let title: string;
    export { BlockTeaser as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockTeaserData {
    let heading: string;
    let introduction: string;
    let buttonText: string;
    namespace image {
        namespace full {
            let url: string;
            let width: number;
            let height: number;
        }
        namespace half {
            let url_1: string;
            export { url_1 as url };
            let width_1: number;
            export { width_1 as width };
            let height_1: number;
            export { height_1 as height };
        }
    }
    let fullWidthImage: boolean;
    let teaserPage: ({
        blockType: string;
        page?: undefined;
    } | {
        blockType: string;
        page: {
            label: string;
            title: string;
            url: string;
        };
    })[];
}
export namespace Default {
    namespace args { }
}
export namespace FullWidth {
    export namespace args_1 {
        let fullWidth: boolean;
    }
    export { args_1 as args };
}
export namespace Empty {
    export namespace args_2 {
        export namespace teaserPage_1 {
            export let pageType: string;
            let title_1: string;
            export { title_1 as title };
            let url_2: string;
            export { url_2 as url };
        }
        export { teaserPage_1 as teaserPage };
    }
    export { args_2 as args };
}
