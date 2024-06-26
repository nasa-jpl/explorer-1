import { default as NavSocial } from './NavSocial.vue';
declare namespace _default {
    export let title: string;
    export { NavSocial as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace Social {
    namespace args {
        let dark: boolean;
    }
}
export namespace SocialDark {
    export namespace args_1 {
        let dark_1: boolean;
        export { dark_1 as dark };
    }
    export { args_1 as args };
    export function render(args: any): {
        components: {
            NavSocial: import("vue").DefineComponent<{
                dark: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
            }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                dark: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
            }>>, {
                dark: boolean;
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
}
