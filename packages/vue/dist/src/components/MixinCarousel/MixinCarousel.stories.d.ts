import { default as MixinCarousel } from './MixinCarousel.vue';
declare namespace _default {
    export let title: string;
    export { MixinCarousel as component };
    export let tags: string[];
    export namespace argTypes {
        namespace variant {
            namespace control {
                let type: string;
            }
            let options: string[];
        }
    }
}
export default _default;
export namespace Default {
    let name: string;
    namespace args {
        export let heading: string;
        let variant_1: string;
        export { variant_1 as variant };
    }
    function render(args: any): {
        components: {
            MixinCarousel: import("vue").DefineComponent<{
                noLinks: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                heading: {
                    type: StringConstructor;
                    required: false;
                };
                link: {
                    type: (StringConstructor | ObjectConstructor)[];
                    required: false;
                };
                linkTitle: {
                    type: StringConstructor;
                    required: false;
                };
                variant: {
                    type: StringConstructor;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
                slidesPerView: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
                indent: {
                    type: StringConstructor;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
                center: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                initialSlide: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
            }, unknown, {
                slider: import("swiper").default | null;
                sliderOptions: import("swiper/types").SwiperOptions;
            }, {
                variantClass(): string;
                colStart(): string;
            }, {
                init(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                noLinks: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                heading: {
                    type: StringConstructor;
                    required: false;
                };
                link: {
                    type: (StringConstructor | ObjectConstructor)[];
                    required: false;
                };
                linkTitle: {
                    type: StringConstructor;
                    required: false;
                };
                variant: {
                    type: StringConstructor;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
                slidesPerView: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
                indent: {
                    type: StringConstructor;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
                center: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                initialSlide: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
            }>>, {
                variant: string;
                indent: string;
                noLinks: boolean;
                slidesPerView: number;
                center: boolean;
                initialSlide: number;
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
}
export namespace BaseCarouselWLink {
    let name_1: string;
    export { name_1 as name };
    export namespace args_1 {
        let heading_1: string;
        export { heading_1 as heading };
        let variant_2: string;
        export { variant_2 as variant };
        export let link: string;
        export let linkTitle: string;
    }
    export { args_1 as args };
    export function render_1(args: any): {
        components: {
            MixinCarousel: import("vue").DefineComponent<{
                noLinks: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                heading: {
                    type: StringConstructor;
                    required: false;
                };
                link: {
                    type: (StringConstructor | ObjectConstructor)[];
                    required: false;
                };
                linkTitle: {
                    type: StringConstructor;
                    required: false;
                };
                variant: {
                    type: StringConstructor;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
                slidesPerView: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
                indent: {
                    type: StringConstructor;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
                center: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                initialSlide: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
            }, unknown, {
                slider: import("swiper").default | null;
                sliderOptions: import("swiper/types").SwiperOptions;
            }, {
                variantClass(): string;
                colStart(): string;
            }, {
                init(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                noLinks: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                heading: {
                    type: StringConstructor;
                    required: false;
                };
                link: {
                    type: (StringConstructor | ObjectConstructor)[];
                    required: false;
                };
                linkTitle: {
                    type: StringConstructor;
                    required: false;
                };
                variant: {
                    type: StringConstructor;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
                slidesPerView: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
                indent: {
                    type: StringConstructor;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
                center: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                initialSlide: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
            }>>, {
                variant: string;
                indent: string;
                noLinks: boolean;
                slidesPerView: number;
                center: boolean;
                initialSlide: number;
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_1 as render };
}
