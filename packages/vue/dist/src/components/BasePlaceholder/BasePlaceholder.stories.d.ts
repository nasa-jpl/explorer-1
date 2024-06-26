import { default as BasePlaceholder } from './BasePlaceholder.vue';
declare namespace _default {
    export let title: string;
    export { BasePlaceholder as component };
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
export function Base(args: any): {
    props: string[];
    components: {
        BasePlaceholder: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
    };
    template: string;
};
export namespace Base {
    let storyName: string;
    let args: {};
}
