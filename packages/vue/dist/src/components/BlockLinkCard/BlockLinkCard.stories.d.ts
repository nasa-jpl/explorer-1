import { default as BlockLinkCard } from './BlockLinkCard.vue';
declare namespace _default {
    export let title: string;
    export { BlockLinkCard as component };
    export let excludeStories: RegExp;
    export let decorators: (() => {
        template: string;
    })[];
    export namespace argTypes {
        namespace headingLevel {
            let description: string;
            namespace control {
                let type: string;
                let options: (string | null)[];
            }
        }
    }
    export namespace parameters {
        namespace html {
            let root: string;
        }
    }
}
export default _default;
export namespace BlockLinkCardData {
    export namespace data {
        export let url: string;
        let title_1: string;
        export { title_1 as title };
        export let slug: string;
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
    let headingLevel_1: string;
    export { headingLevel_1 as headingLevel };
    export let startDate: undefined;
    export let endDate: undefined;
    export let compact: boolean;
}
export namespace SingleItem {
    namespace args { }
}
export namespace SingleItemCompactStyles {
    export namespace args_1 {
        let headingLevel_2: string;
        export { headingLevel_2 as headingLevel };
        let compact_1: boolean;
        export { compact_1 as compact };
    }
    export { args_1 as args };
}
export namespace Compact {
    export let name: string;
    export namespace parameters_1 {
        namespace docs {
            export namespace description_1 {
                let story: string;
            }
            export { description_1 as description };
        }
    }
    export { parameters_1 as parameters };
    export namespace args_2 {
        let title_2: string;
        export { title_2 as title };
        let url_2: string;
        export { url_2 as url };
        export let externalLink: string;
        let label_1: string;
        export { label_1 as label };
        export let date: string;
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
        let headingLevel_3: string;
        export { headingLevel_3 as headingLevel };
        let compact_2: boolean;
        export { compact_2 as compact };
    }
    export { args_2 as args };
}
export namespace EventItem {
    export namespace args_3 {
        export namespace data_1 {
            let startDate_1: string;
            export { startDate_1 as startDate };
            let endDate_1: string;
            export { endDate_1 as endDate };
        }
        export { data_1 as data };
    }
    export { args_3 as args };
}
