import { default as NavLogoLinks } from './NavLogoLinks.vue';
import { default as LogoColor } from '@explorer-1/common/src/images/svg/logo-tribrand-color.svg';
/// <reference types="vite/client" />
declare namespace _default {
    export let title: string;
    export { NavLogoLinks as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace Default {
    namespace args {
        export { LogoColor as src };
    }
    function render(args: any): {
        components: {
            NavLogoLinks: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
}
