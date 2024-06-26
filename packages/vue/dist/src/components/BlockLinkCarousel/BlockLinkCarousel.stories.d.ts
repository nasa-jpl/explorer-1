import { default as BlockLinkCarousel } from './BlockLinkCarousel.vue';
declare namespace _default {
    export let title: string;
    export { BlockLinkCarousel as component };
    export namespace argTypes {
        namespace itemType {
            let type: string;
            let description: string;
            namespace control {
                let type_1: string;
                export { type_1 as type };
            }
            let options: string[];
            namespace table {
                namespace defaultValue {
                    let summary: string;
                }
            }
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export const BlockLinkCardCarouselData: ({
    url: string;
    title: string;
    slug: string;
    label: string;
    thumbnailImage: {
        src: {
            url: string;
            width: number;
            height: number;
        };
        alt: string;
    };
} | {
    url: string;
    title: string;
    slug: string;
    thumbnailImage: {
        src: {
            url: string;
            width: number;
            height: number;
        };
        alt: string;
    };
    label?: undefined;
})[];
export const BlockLinkTileCarouselData: ({
    url: string;
    title: string;
    label: string;
    thumbnailImage: {
        src: {
            url: string;
            width: number;
            height: number;
        };
        alt: string;
    };
} | {
    url: string;
    title: string;
    thumbnailImage: {
        src: {
            url: string;
            width: number;
            height: number;
        };
        alt: string;
    };
    label?: undefined;
})[];
export const EventsBlockLinkCarouselData: {
    endDate: null;
    startDate: string;
    thumbnailImage: {
        src: {
            height: string;
            url: string;
            width: string;
        };
    };
    title: string;
    url: string;
}[];
export namespace CardCarousel {
    namespace args {
        let itemType_1: string;
        export { itemType_1 as itemType };
        export let heading: string;
        export { BlockLinkCardCarouselData as items };
    }
}
export namespace TileCarousel {
    export namespace args_1 {
        let itemType_2: string;
        export { itemType_2 as itemType };
        let heading_1: string;
        export { heading_1 as heading };
        export { BlockLinkCardCarouselData as items };
    }
    export { args_1 as args };
}
export namespace MoreEventsCarousel {
    export namespace args_2 {
        let itemType_3: string;
        export { itemType_3 as itemType };
        let heading_2: string;
        export { heading_2 as heading };
        export { EventsBlockLinkCarouselData as items };
    }
    export { args_2 as args };
}
export namespace TwoItems {
    export namespace args_3 {
        let itemType_4: string;
        export { itemType_4 as itemType };
        let heading_3: string;
        export { heading_3 as heading };
        export let items: ({
            url: string;
            title: string;
            slug: string;
            label: string;
            thumbnailImage: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                alt: string;
            };
        } | {
            url: string;
            title: string;
            slug: string;
            thumbnailImage: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                alt: string;
            };
            label?: undefined;
        })[];
    }
    export { args_3 as args };
}
export function MultipleCarousels(args: any): {
    components: {
        BlockLinkCarousel: import('vue').DefineComponent<{
            itemType: {
                type: StringConstructor;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
            items: {
                type: ArrayConstructor;
                required: false;
            };
            heading: {
                type: StringConstructor;
                required: false;
            };
        }, unknown, unknown, {
            theVariantComponent(): string | import('vue').ConcreteComponent<{}, any, any, import('vue').ComputedOptions, import('vue').MethodOptions, {}, any>;
            hasContent(): boolean;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            itemType: {
                type: StringConstructor;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
            items: {
                type: ArrayConstructor;
                required: false;
            };
            heading: {
                type: StringConstructor;
                required: false;
            };
        }>>, {
            itemType: string;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace MultipleCarousels {
    export namespace args_4 {
        let itemType_5: string;
        export { itemType_5 as itemType };
        let heading_4: string;
        export { heading_4 as heading };
        export let otherHeading: string;
        export { BlockLinkCardCarouselData as items };
    }
    export { args_4 as args };
}
