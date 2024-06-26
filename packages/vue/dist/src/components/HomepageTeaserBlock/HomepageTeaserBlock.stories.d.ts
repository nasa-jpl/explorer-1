import { default as HomepageTeaserBlock } from './HomepageTeaserBlock.vue';
declare namespace _default {
    export let title: string;
    export { HomepageTeaserBlock as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        let viewMode: string;
    }
}
export default _default;
export namespace HomepageTeaserBlockData {
    namespace block {
        let blockType: string;
        namespace coverImage {
            let alt: string;
            namespace src {
                let width: number;
                let height: number;
                let url: string;
            }
            namespace screenXs {
                let url_1: string;
                export { url_1 as url };
                let width_1: number;
                export { width_1 as width };
            }
            namespace screenMd {
                let url_2: string;
                export { url_2 as url };
                let width_2: number;
                export { width_2 as width };
            }
            namespace screenTwoxl {
                let url_3: string;
                export { url_3 as url };
                let width_3: number;
                export { width_3 as width };
            }
        }
        let heading: string;
        let paragraph: string;
        namespace link {
            let text: string;
            let document: null;
            namespace page {
                let url_4: string;
                export { url_4 as url };
            }
            let externalLink: null;
        }
        let card: {
            heading: string;
            description: string;
            image: {
                src: {
                    height: number;
                    url: string;
                    width: number;
                };
                srcSet: string;
            };
            link: {
                text: string;
                document: null;
                page: null;
                externalLink: string;
            };
        }[];
    }
}
export function TeaserBlock(args: any): {
    props: string[];
    components: {
        HomepageTeaserBlock: import('vue').DefineComponent<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
        }, unknown, unknown, {
            theCard(): object | null;
            hasCoverImage(): boolean;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
        }>>, {}, {}>;
    };
    template: string;
};
export namespace TeaserBlock {
    namespace args { }
}
export function NoImage(args: any): {
    props: string[];
    components: {
        HomepageTeaserBlock: import('vue').DefineComponent<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
        }, unknown, unknown, {
            theCard(): object | null;
            hasCoverImage(): boolean;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            data: {
                type: ObjectConstructor;
                required: false;
            };
        }>>, {}, {}>;
    };
    template: string;
};
export namespace NoImage {
    export namespace args_1 {
        export namespace block_1 {
            let coverImage_1: null;
            export { coverImage_1 as coverImage };
        }
        export { block_1 as block };
    }
    export { args_1 as args };
}
