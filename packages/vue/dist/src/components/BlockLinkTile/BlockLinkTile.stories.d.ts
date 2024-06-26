import { default as BlockLinkTile } from './BlockLinkTile.vue';
declare namespace _default {
    export let title: string;
    export { BlockLinkTile as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace argTypes {
        namespace headingLevel {
            let description: string;
            namespace control {
                let type: string;
            }
            let options: (string | null)[];
        }
    }
    export namespace parameters {
        namespace html {
            let root: string;
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockLinkTileData {
    namespace card {
        export let url: string;
        let title_1: string;
        export { title_1 as title };
        export let label: string;
        export namespace thumbnailImage {
            namespace src {
                let url_1: string;
                export { url_1 as url };
                export let width: number;
                export let height: number;
            }
            let alt: string;
        }
    }
}
export namespace SingleItem {
    namespace args {
        import data = BlockLinkTileData.card;
        export { data };
        let headingLevel_1: string;
        export { headingLevel_1 as headingLevel };
        export let compact: boolean;
    }
}
export namespace Compact {
    export namespace args_1 {
        let title_2: string;
        export { title_2 as title };
        let url_2: string;
        export { url_2 as url };
        export let externalLink: string;
        let label_1: string;
        export { label_1 as label };
        export namespace thumbnailImage_1 {
            export namespace src_1 {
                let url_3: string;
                export { url_3 as url };
                let width_1: number;
                export { width_1 as width };
                let height_1: number;
                export { height_1 as height };
            }
            export { src_1 as src };
            let alt_1: string;
            export { alt_1 as alt };
        }
        export { thumbnailImage_1 as thumbnailImage };
        let headingLevel_2: string;
        export { headingLevel_2 as headingLevel };
        let compact_1: boolean;
        export { compact_1 as compact };
    }
    export { args_1 as args };
}
