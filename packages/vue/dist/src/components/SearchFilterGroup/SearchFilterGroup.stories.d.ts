import { default as SearchFilterGroup } from './SearchFilterGroup.vue';
declare namespace _default {
    export let title: string;
    export { SearchFilterGroup as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace TopicFilter {
    namespace args {
        let filterBy: never[];
        let buckets: {
            key: string;
            doc_count: number;
        }[];
        let groupKey: string;
        let groupTitle: string;
        let truncateFilters: boolean;
    }
}
export namespace DateFilter {
    export namespace args_1 {
        let filterBy_1: never[];
        export { filterBy_1 as filterBy };
        let buckets_1: {
            key_as_string: string;
            key: number;
            doc_count: number;
        }[];
        export { buckets_1 as buckets };
        let groupKey_1: string;
        export { groupKey_1 as groupKey };
        let groupTitle_1: string;
        export { groupTitle_1 as groupTitle };
        let truncateFilters_1: boolean;
        export { truncateFilters_1 as truncateFilters };
    }
    export { args_1 as args };
}
