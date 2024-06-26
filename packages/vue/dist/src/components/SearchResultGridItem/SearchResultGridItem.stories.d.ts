import { default as SearchResultGridItem } from './SearchResultGridItem.vue';
declare namespace _default {
    export let title: string;
    export { SearchResultGridItem as component };
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
    export let excludeStories: RegExp;
}
export default _default;
export namespace SearchResultGridCardData {
    export namespace page {
        export let content_type: string;
        export let url: string;
        let type_1: string;
        export { type_1 as type };
        export let topic: string;
        export let date: string;
        let title_1: string;
        export { title_1 as title };
        export namespace image {
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
}
export namespace StandardResult {
    namespace args {
        import pageContentType = content_type;
        export { pageContentType };
    }
}
export namespace NewsResult {
    export namespace args_1 {
        let pageContentType_1: string;
        export { pageContentType_1 as pageContentType };
        let headingLevel_2: string;
        export { headingLevel_2 as headingLevel };
    }
    export { args_1 as args };
}
export namespace MissionResult {
    export namespace args_2 {
        let pageContentType_2: string;
        export { pageContentType_2 as pageContentType };
        let headingLevel_3: string;
        export { headingLevel_3 as headingLevel };
    }
    export { args_2 as args };
}
