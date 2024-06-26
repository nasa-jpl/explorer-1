import { default as SearchSelectMenu } from './SearchSelectMenu.vue';
declare namespace _default {
    export let title: string;
    export { SearchSelectMenu as component };
}
export default _default;
export namespace SortBy {
    namespace args {
        let title_1: string;
        export { title_1 as title };
        export let options: {
            text: string;
            value: string;
        }[];
        export let groupKey: string;
        export let selectValue: string;
    }
}
