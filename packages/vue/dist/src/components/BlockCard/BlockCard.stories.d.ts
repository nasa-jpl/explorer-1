import { default as BlockCard } from './BlockCard.vue';
declare namespace _default {
    export let title: string;
    export { BlockCard as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockCardData {
    export let type: string;
    let title_1: string;
    export { title_1 as title };
    export let text: string;
    export namespace image {
        let alt: string;
        namespace src {
            let height: number;
            let url: string;
            let width: number;
        }
        let srcSet: string;
    }
}
export namespace Item {
    export let name: string;
    export { BlockCardData as args };
}
