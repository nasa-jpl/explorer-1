import { default as BlockKeyPoints } from './BlockKeyPoints.vue';
declare namespace _default {
    export let title: string;
    export { BlockKeyPoints as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockKeyPointsData {
    let blockType: string;
    let heading: string;
    let listItem: {
        text: string;
    }[];
}
export namespace KeyPoints {
    let name: string;
    namespace args {
        export { BlockKeyPointsData as data };
    }
}
