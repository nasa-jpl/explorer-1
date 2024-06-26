import { default as LayoutHelper } from '@explorer-1/vue/src/components/LayoutHelper/LayoutHelper.vue';
declare namespace _default {
    export let title: string;
    export { LayoutHelper as component };
    export let tags: string[];
    export namespace argTypes {
        namespace indent {
            namespace control {
                let type: string;
            }
            let options: string[];
        }
    }
    export namespace parameters {
        namespace html {
            let root: string;
        }
    }
    export let decorators: (() => {
        template: string;
    })[];
}
export default _default;
export function BaseWidth(args: any): {
    components: {
        LayoutHelper: import('vue').DefineComponent<{
            indent: {
                type: StringConstructor;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
        }, unknown, unknown, {
            theWidth(): string;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            indent: {
                type: StringConstructor;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
        }>>, {
            indent: string;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace BaseWidth {
    namespace args {
        let indent_1: string;
        export { indent_1 as indent };
    }
}
export function ColTwoStart(args: any): {
    components: {
        LayoutHelper: import('vue').DefineComponent<{
            indent: {
                type: StringConstructor;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
        }, unknown, unknown, {
            theWidth(): string;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            indent: {
                type: StringConstructor;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
        }>>, {
            indent: string;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace ColTwoStart {
    export namespace args_1 {
        let indent_2: string;
        export { indent_2 as indent };
    }
    export { args_1 as args };
}
export function ColThreeStart(args: any): {
    components: {
        LayoutHelper: import('vue').DefineComponent<{
            indent: {
                type: StringConstructor;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
        }, unknown, unknown, {
            theWidth(): string;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            indent: {
                type: StringConstructor;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
        }>>, {
            indent: string;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace ColThreeStart {
    export namespace args_2 {
        let indent_3: string;
        export { indent_3 as indent };
    }
    export { args_2 as args };
}
export function ColFourStart(args: any): {
    components: {
        LayoutHelper: import('vue').DefineComponent<{
            indent: {
                type: StringConstructor;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
        }, unknown, unknown, {
            theWidth(): string;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            indent: {
                type: StringConstructor;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
        }>>, {
            indent: string;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace ColFourStart {
    export namespace args_3 {
        let indent_4: string;
        export { indent_4 as indent };
    }
    export { args_3 as args };
}
