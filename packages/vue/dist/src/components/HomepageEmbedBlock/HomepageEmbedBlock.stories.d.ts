import { default as HomepageEmbedBlock } from './HomepageEmbedBlock.vue';
declare namespace _default {
    export let title: string;
    export { HomepageEmbedBlock as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
        let viewMode: string;
    }
    export let excludeStories: RegExp;
}
export default _default;
export const HomepageEmbedBlockData: {
    embed: {
        embed: string;
    };
    caption: string;
    credit: string;
    display: boolean;
    heading: string;
}[];
export namespace Default {
    let name: string;
    namespace args {
        export { HomepageEmbedBlockData as data };
    }
}
