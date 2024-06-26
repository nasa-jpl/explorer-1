import { default as SearchResultCard } from './SearchResultCard.vue';
declare namespace _default {
    export let title: string;
    export { SearchResultCard as component };
    export namespace argTypes {
        namespace headingLevel {
            let description: string;
            namespace control {
                let type: string;
            }
            let options: (string | null)[];
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace SearchResultCardData {
    export let url: string;
    let type_1: string;
    export { type_1 as type };
    export let topic: string;
    export let date: string;
    let title_1: string;
    export { title_1 as title };
    export let summary: string;
    export namespace image {
        namespace src {
            let url_1: string;
            export { url_1 as url };
            export let width: number;
            export let height: number;
        }
        let alt: string;
    }
    let headingLevel_1: string;
    export { headingLevel_1 as headingLevel };
    export let featured: boolean;
}
export namespace StandardResult {
    export { SearchResultCardData as args };
}
export namespace FeaturedResult {
    namespace args {
        let featured_1: boolean;
        export { featured_1 as featured };
    }
}
export namespace EventResult {
    export namespace args_1 {
        export let isEvents: boolean;
        let type_2: string;
        export { type_2 as type };
        export let startTime: string;
        export let endTime: string;
        export let startDate: string;
        export let endDate: string;
        export let location: string;
        export let compact: boolean;
    }
    export { args_1 as args };
}
