import { default as LogoCaltech } from './LogoCaltech.vue';
declare namespace _default {
    export let title: string;
    export { LogoCaltech as component };
    export namespace argTypes {
        namespace size {
            namespace control {
                let type: string;
                let options: string[];
            }
        }
    }
    export let decorators: (() => {
        template: string;
        props: string[];
    })[];
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
export function Caltech(args: any): {
    props: string[];
    components: {
        LogoCaltech: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
    };
    template: string;
};
export namespace Caltech {
    let storyName: string;
    namespace args {
        let size_1: string;
        export { size_1 as size };
    }
}
