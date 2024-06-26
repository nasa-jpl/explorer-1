import { default as BlockCta } from './BlockCta.vue';
declare namespace _default {
    export let title: string;
    export { BlockCta as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockCtaData {
    let blockType: string;
    let heading: string;
    let text: string;
    namespace page {
        let url: string;
    }
    let externalLink: string;
}
export namespace Default {
    namespace args {
        export { BlockCtaData as data };
    }
}
export namespace ExternalLink {
    export namespace args_1 {
        namespace data {
            import heading_1 = BlockCtaData.heading;
            export { heading_1 as heading };
            import text_1 = BlockCtaData.text;
            export { text_1 as text };
            let page_1: string;
            export { page_1 as page };
            let externalLink_1: string;
            export { externalLink_1 as externalLink };
        }
    }
    export { args_1 as args };
}
