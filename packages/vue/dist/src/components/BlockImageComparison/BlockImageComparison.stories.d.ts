import { default as BlockImageComparison } from './BlockImageComparison.vue';
declare namespace _default {
    export let title: string;
    export { BlockImageComparison as component };
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
export namespace BlockImageComparisonData {
    let blockType: string;
    namespace beforeImage {
        namespace src {
            let url: string;
        }
        namespace srcCropped {
            let url_1: string;
            export { url_1 as url };
        }
    }
    namespace afterImage {
        export namespace src_1 {
            let url_2: string;
            export { url_2 as url };
        }
        export { src_1 as src };
        export namespace srcCropped_1 {
            let url_3: string;
            export { url_3 as url };
        }
        export { srcCropped_1 as srcCropped };
    }
    let caption: string;
}
export namespace Comparison {
    let name: string;
    namespace args {
        export { BlockImageComparisonData as data };
    }
}
