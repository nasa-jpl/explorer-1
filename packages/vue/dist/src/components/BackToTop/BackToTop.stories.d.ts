import { default as BackToTop } from './BackToTop.vue';
declare namespace _default {
    export let title: string;
    export { BackToTop as component };
}
export default _default;
export function Default(args: any): {
    components: {
        BackToTop: import('vue').DefineComponent<{
            threshold: {
                type: NumberConstructor;
                required: false;
                default: number;
            };
            scrollTo: {
                type: NumberConstructor;
                required: false;
                default: number;
            };
        }, unknown, {
            showBackToTop: Boolean;
            scrollHandler: import('lodash').DebouncedFunc<() => void> | null;
        }, {}, {
            onScroll(): void;
            scrollToTop(): void;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            threshold: {
                type: NumberConstructor;
                required: false;
                default: number;
            };
            scrollTo: {
                type: NumberConstructor;
                required: false;
                default: number;
            };
        }>>, {
            threshold: number;
            scrollTo: number;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace Default {
    let storyName: string;
    namespace args {
        let threshhold: number;
        let scrollTo: number;
    }
}
