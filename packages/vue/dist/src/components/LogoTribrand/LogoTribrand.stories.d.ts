import { default as LogoTribrand } from './LogoTribrand.vue';
import { default as LogoColor } from '@explorer-1/common/src/images/svg/logo-tribrand-color.svg';
import { default as LogoWhite } from '@explorer-1/common/src/images/svg/logo-tribrand-white.svg';
/// <reference types="vite/client" />
declare namespace _default {
    export let title: string;
    export { LogoTribrand as component };
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
export function LogoInlineSvg(args: any): {
    props: string[];
    components: {
        LogoTribrand: import('vue').DefineComponent<{
            invert: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            invert: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            invert: boolean;
        }, {}>;
    };
    template: string;
};
export namespace LogoInlineSvg {
    namespace args {
        let invert: boolean;
        let size: string;
    }
    namespace argTypes {
        export namespace size_1 {
            namespace control {
                let type: string;
                let options: string[];
            }
        }
        export { size_1 as size };
        export namespace invert_1 {
            export namespace control_1 {
                let type_1: string;
                export { type_1 as type };
            }
            export { control_1 as control };
        }
        export { invert_1 as invert };
    }
    let decorators: (() => {
        template: string;
        props: string[];
    })[];
}
export function LogoImageColor(args: any): {
    props: string[];
    components: {};
    template: string;
};
export namespace LogoImageColor {
    export namespace args_1 {
        export { LogoColor as src };
    }
    export { args_1 as args };
    export namespace parameters_1 {
        export namespace docs_1 {
            export namespace description_1 {
                let story: string;
            }
            export { description_1 as description };
        }
        export { docs_1 as docs };
    }
    export { parameters_1 as parameters };
}
export function LogoImageWhite(args: any): {
    props: string[];
    components: {};
    template: string;
};
export namespace LogoImageWhite {
    export namespace args_2 {
        export { LogoWhite as src };
    }
    export { args_2 as args };
    export namespace parameters_2 {
        export namespace docs_2 {
            export namespace description_2 {
                let story_1: string;
                export { story_1 as story };
            }
            export { description_2 as description };
        }
        export { docs_2 as docs };
    }
    export { parameters_2 as parameters };
    let decorators_1: (() => {
        template: string;
    })[];
    export { decorators_1 as decorators };
}
