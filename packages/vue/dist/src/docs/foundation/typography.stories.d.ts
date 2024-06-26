import { default as FontVariants } from './FontVariants.vue';
import { default as BaseHeading } from './../../components/BaseHeading/BaseHeading.vue';
import { default as IconLocation } from './../../components/Icons/IconLocation.vue';
declare namespace _default {
    export let title: string;
    export { FontVariants as component };
    export namespace subcomponents {
        export { BaseHeading };
        export { IconLocation };
    }
    export let tags: string[];
}
export default _default;
export namespace Fonts {
    let args: {};
}
export namespace TextColors {
    let args_1: {};
    export { args_1 as args };
    export function render(): {
        template: string;
    };
}
export namespace TextStyles {
    let args_2: {};
    export { args_2 as args };
    export function render_1(): {
        template: string;
    };
    export { render_1 as render };
}
export namespace HeadingIcons {
    export namespace argTypes {
        namespace size {
            namespace type {
                let name: string;
                let required: boolean;
            }
            namespace control {
                let type_1: string;
                export { type_1 as type };
            }
            let options: string[];
        }
    }
    export namespace args_3 {
        let size_1: string;
        export { size_1 as size };
    }
    export { args_3 as args };
    export function render_2(args: any): {
        components: {
            BaseHeading: import("vue").DefineComponent<{
                level: {
                    type: import("vue").PropType<import("./../../components/BaseHeading/BaseHeading.vue").HeadingLevel>;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
                size: {
                    type: import("vue").PropType<import("./../../components/BaseHeading/BaseHeading.vue").HeadingLevel>;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
            }, unknown, unknown, {
                computedTag(): string;
                computedClass(): string;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                level: {
                    type: import("vue").PropType<import("./../../components/BaseHeading/BaseHeading.vue").HeadingLevel>;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
                size: {
                    type: import("vue").PropType<import("./../../components/BaseHeading/BaseHeading.vue").HeadingLevel>;
                    required: false;
                    default: string;
                    validator: (prop: string) => boolean;
                };
            }>>, {
                size: import("./../../components/BaseHeading/BaseHeading.vue").HeadingLevel;
                level: import("./../../components/BaseHeading/BaseHeading.vue").HeadingLevel;
            }, {}>;
            IconLocation: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_2 as render };
}
export namespace TextContrast {
    let args_4: {};
    export { args_4 as args };
    export function render_3(): {
        template: string;
    };
    export { render_3 as render };
}
