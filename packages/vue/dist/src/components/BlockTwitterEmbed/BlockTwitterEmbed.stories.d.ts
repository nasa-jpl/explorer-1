import { default as BlockTwitterEmbed } from './BlockTwitterEmbed.vue';
declare namespace _default {
    export let title: string;
    export { BlockTwitterEmbed as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockTwitterEmbedData {
    let blockType: string;
    let username: string;
}
export namespace List {
    let name: string;
    namespace args {
        export { BlockTwitterEmbedData as data };
    }
}
