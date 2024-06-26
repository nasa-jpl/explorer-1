import { default as BlockCardGroup } from './BlockCardGroup.vue';
declare namespace _default {
    export let title: string;
    export { BlockCardGroup as component };
    export let excludeStories: RegExp;
}
export default _default;
export const BlockCardGroupData: ({
    type: string;
    title: string;
    description: string;
    image: {
        alt: string;
        src: {
            height: number;
            url: string;
            width: number;
        };
        srcSet: string;
    };
} | {
    type: string;
    title: string;
    description: string;
    image: null;
})[];
export namespace Group {
    let name: string;
    namespace args {
        export { BlockCardGroupData as facts };
    }
}
