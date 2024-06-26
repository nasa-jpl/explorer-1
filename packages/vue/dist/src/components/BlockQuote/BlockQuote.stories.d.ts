import { default as BlockQuote } from './BlockQuote.vue';
declare namespace _default {
    export let title: string;
    export { BlockQuote as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        let viewMode: string;
        namespace docs {
            namespace description {
                let component: string;
            }
        }
    }
}
export default _default;
export namespace BlockQuoteData {
    let blockType: string;
    let quote: string;
    let attribution: string;
    let quoteLink: {
        externalLink: string;
        page: {
            url: string;
        };
    }[];
    namespace thumbnail {
        let src: string;
        let alt: string;
    }
}
export function Default(args: any): {
    components: {
        BlockQuote: import('vue').DefineComponent<{
            data: {
                type: import('vue').PropType<import('./BlockQuote.vue').BlockQuoteAttributes>;
                required: true;
                default: () => {};
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('./BlockQuote.vue').BlockQuoteAttributes>;
                required: true;
                default: () => {};
            };
        }>>, {
            data: import('./BlockQuote.vue').BlockQuoteAttributes;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace Default {
    namespace args {
        namespace data {
            import quote_1 = BlockQuoteData.quote;
            export { quote_1 as quote };
            import attribution_1 = BlockQuoteData.attribution;
            export { attribution_1 as attribution };
            let quoteLink_1: never[];
            export { quoteLink_1 as quoteLink };
        }
    }
}
export function WithImage(args: any): {
    components: {
        BlockQuote: import('vue').DefineComponent<{
            data: {
                type: import('vue').PropType<import('./BlockQuote.vue').BlockQuoteAttributes>;
                required: true;
                default: () => {};
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('./BlockQuote.vue').BlockQuoteAttributes>;
                required: true;
                default: () => {};
            };
        }>>, {
            data: import('./BlockQuote.vue').BlockQuoteAttributes;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace WithImage {
    export namespace args_1 {
        export namespace data_1 {
            import quote_2 = BlockQuoteData.quote;
            export { quote_2 as quote };
            import attribution_2 = BlockQuoteData.attribution;
            export { attribution_2 as attribution };
            import thumbnail_1 = BlockQuoteData.thumbnail;
            export { thumbnail_1 as thumbnail };
        }
        export { data_1 as data };
    }
    export { args_1 as args };
}
export function ExternalLinkedAttribution(args: any): {
    components: {
        BlockQuote: import('vue').DefineComponent<{
            data: {
                type: import('vue').PropType<import('./BlockQuote.vue').BlockQuoteAttributes>;
                required: true;
                default: () => {};
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('./BlockQuote.vue').BlockQuoteAttributes>;
                required: true;
                default: () => {};
            };
        }>>, {
            data: import('./BlockQuote.vue').BlockQuoteAttributes;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace ExternalLinkedAttribution {
    export namespace args_2 {
        export namespace data_2 {
            import quote_3 = BlockQuoteData.quote;
            export { quote_3 as quote };
            import attribution_3 = BlockQuoteData.attribution;
            export { attribution_3 as attribution };
            let quoteLink_2: {
                externalLink: string;
            }[];
            export { quoteLink_2 as quoteLink };
        }
        export { data_2 as data };
    }
    export { args_2 as args };
}
export function ImageWithLocalLinkedAttribution(args: any): {
    components: {
        BlockQuote: import('vue').DefineComponent<{
            data: {
                type: import('vue').PropType<import('./BlockQuote.vue').BlockQuoteAttributes>;
                required: true;
                default: () => {};
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('./BlockQuote.vue').BlockQuoteAttributes>;
                required: true;
                default: () => {};
            };
        }>>, {
            data: import('./BlockQuote.vue').BlockQuoteAttributes;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace ImageWithLocalLinkedAttribution {
    export namespace args_3 {
        export { BlockQuoteData as data };
    }
    export { args_3 as args };
}
export function NoAttribution(args: any): {
    components: {
        BlockQuote: import('vue').DefineComponent<{
            data: {
                type: import('vue').PropType<import('./BlockQuote.vue').BlockQuoteAttributes>;
                required: true;
                default: () => {};
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: import('vue').PropType<import('./BlockQuote.vue').BlockQuoteAttributes>;
                required: true;
                default: () => {};
            };
        }>>, {
            data: import('./BlockQuote.vue').BlockQuoteAttributes;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace NoAttribution {
    export namespace args_4 {
        export namespace data_3 {
            import quote_4 = BlockQuoteData.quote;
            export { quote_4 as quote };
        }
        export { data_3 as data };
    }
    export { args_4 as args };
}
