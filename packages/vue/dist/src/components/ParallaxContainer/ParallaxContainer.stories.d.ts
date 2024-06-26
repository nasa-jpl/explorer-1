import { default as ParallaxContainer } from './ParallaxContainer.vue';
declare namespace _default {
    export let title: string;
    export { ParallaxContainer as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
        namespace docs {
            namespace description {
                let component: string;
            }
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export function Default(args: any): {
    props: string[];
    components: {
        ParallaxContainer: import('vue').DefineComponent<{
            invert: {
                type: BooleanConstructor;
                default: boolean;
                required: false;
            };
            overflow: {
                type: BooleanConstructor;
                default: boolean;
                required: false;
            };
        }, unknown, {
            data: {
                scrollFactor: number;
                width: number;
                height: number;
            };
            eventHandler: undefined;
        }, {}, {
            init(): void;
            calcParallax(): void;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            invert: {
                type: BooleanConstructor;
                default: boolean;
                required: false;
            };
            overflow: {
                type: BooleanConstructor;
                default: boolean;
                required: false;
            };
        }>>, {
            invert: boolean;
            overflow: boolean;
        }, {}>;
        ParallaxElement: import('vue').DefineComponent<{
            factor: {
                default: number;
                type: NumberConstructor;
            };
            offset: {
                default: number;
                type: NumberConstructor;
            };
        }, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            factor: {
                default: number;
                type: NumberConstructor;
            };
            offset: {
                default: number;
                type: NumberConstructor;
            };
        }>>, {
            factor: number;
            offset: number;
        }, {}>;
    };
    template: string;
};
export namespace Default {
    let storyName: string;
    namespace args {
        let invert: boolean;
        let overflow: boolean;
    }
}
