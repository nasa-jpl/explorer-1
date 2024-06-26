import { default as BlockVideoEmbed } from './BlockVideoEmbed.vue';
declare namespace _default {
    export let title: string;
    export { BlockVideoEmbed as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockVideoEmbedData {
    namespace data {
        namespace embed {
            let embed_1: string;
            export { embed_1 as embed };
        }
        let caption: string;
        let credit: string;
    }
}
export namespace Default {
    let name: string;
    namespace args {
        import data_1 = BlockVideoEmbedData.data;
        export { data_1 as data };
    }
}
