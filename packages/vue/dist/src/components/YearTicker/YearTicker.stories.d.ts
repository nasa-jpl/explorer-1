import { default as YearTicker } from './YearTicker.vue';
declare namespace _default {
    export let title: string;
    export { YearTicker as component };
    export let excludeStories: RegExp;
}
export default _default;
export function Default(args: any): {
    props: string[];
    components: {
        YearTicker: import('vue').DefineComponent<{
            targetYear: {
                type: StringConstructor;
                required: true;
            };
        }, unknown, {
            year: string;
            animation: string;
            duration: number;
        }, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            targetYear: {
                type: StringConstructor;
                required: true;
            };
        }>>, {}, {}>;
    };
    data(): {
        demoYear: string;
    };
    mounted(): void;
    beforeDestroy(): void;
    methods: {
        updateYear(e: any): void;
    };
    template: string;
};
export namespace Default {
    let storyName: string;
}
