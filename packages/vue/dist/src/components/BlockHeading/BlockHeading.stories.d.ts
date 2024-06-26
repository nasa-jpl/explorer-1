import { default as BlockHeading } from './BlockHeading.vue';
declare namespace _default {
    export let title: string;
    export { BlockHeading as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockHeadingData {
    let blockType: string;
    let heading: string;
    let level: string;
    let size: string;
}
export namespace Heading {
    let name: string;
    namespace args {
        export { BlockHeadingData as data };
    }
}
