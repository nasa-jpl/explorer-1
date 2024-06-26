import { default as BlockVideo } from './BlockVideo.vue';
import { BaseVideoData } from './../BaseVideo/BaseVideo.stories';
declare namespace _default {
    export let title: string;
    export { BlockVideo as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockVideoData {
    namespace block {
        export let blockType: string;
        export { BaseVideoData as video };
        export let caption: string;
        export let credit: string;
    }
}
export namespace Default {
    let name: string;
    namespace args {
        import data = BlockVideoData.block;
        export { data };
    }
}
