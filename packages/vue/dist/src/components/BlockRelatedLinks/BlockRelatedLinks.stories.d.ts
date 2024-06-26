import { default as BlockRelatedLinks } from './BlockRelatedLinks.vue';
declare namespace _default {
    export let title: string;
    export { BlockRelatedLinks as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        namespace docs {
            namespace description {
                let component: string;
            }
        }
    }
}
export default _default;
export namespace BlockRelatedLinksData {
    namespace data {
        let blockType: string;
        let heading: string;
        let links: ({
            text: string;
            document: {
                url: string;
            };
            page: string;
            externalLink: string;
        } | {
            text: string;
            document: string;
            page: {
                url: string;
            };
            externalLink: string;
        } | {
            text: string;
            document: string;
            page: string;
            externalLink: string;
        })[];
    }
}
export namespace Default {
    let name: string;
    namespace args { }
}
