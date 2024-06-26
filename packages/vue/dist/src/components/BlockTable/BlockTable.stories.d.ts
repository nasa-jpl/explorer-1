import { default as BlockTable } from './BlockTable.vue';
declare namespace _default {
    export let title: string;
    export { BlockTable as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockTableData {
    let blockType: string;
    let table: string;
}
export namespace Table {
    let name: string;
    namespace args {
        export { BlockTableData as data };
    }
}
