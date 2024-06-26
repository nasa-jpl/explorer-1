import { default as BlockIframeEmbed } from './BlockIframeEmbed.vue';
declare namespace _default {
    export let title: string;
    export { BlockIframeEmbed as component };
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
export namespace BlockIframeEmbedData {
    export let blockType: string;
    let title_1: string;
    export { title_1 as title };
    export let caption: string;
    export let url: string;
}
export namespace Default {
    namespace args {
        export { BlockIframeEmbedData as data };
    }
}
export namespace LazyLoad {
    export namespace args_1 {
        export { BlockIframeEmbedData as data };
    }
    export { args_1 as args };
    export function decorators_1(): {
        template: string;
    };
    export { decorators_1 as decorators };
}
