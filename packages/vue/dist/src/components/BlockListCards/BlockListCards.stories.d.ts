import { default as BlockListCards } from './BlockListCards.vue';
declare namespace _default {
    export let title: string;
    export { BlockListCards as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockListCardsData {
    let blockType: string;
    let items: ({
        description: string;
        heading: string;
        image: {
            src: {
                url: string;
                width: string;
                height: string;
            };
        };
        links: ({
            externalLink: string;
            page: null;
            text: string;
        } | {
            externalLink: null;
            page: {
                url: string;
            };
            text: string;
        })[];
    } | {
        description: string;
        heading: string;
        image: {
            src: {
                url: string;
                width: string;
                height: string;
            };
        };
        links: {
            externalLink: null;
            page: null;
            document: {
                url: string;
            };
            text: string;
        }[];
    })[];
}
export namespace Default {
    let name: string;
    namespace args {
        export { BlockListCardsData as data };
    }
}
