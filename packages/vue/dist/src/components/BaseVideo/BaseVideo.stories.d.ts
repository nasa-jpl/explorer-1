import { default as BaseVideo } from './BaseVideo.vue';
import { default as videoMp4 } from '@explorer-1/common-storybook/src/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4';
import { default as videoWebm } from '@explorer-1/common-storybook/src/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm';
/// <reference types="vite/client" />
declare namespace _default {
    export let title: string;
    export { BaseVideo as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BaseVideoData {
    export let duration: string;
    export { videoMp4 as file };
    export let fileExtension: string;
    export let fileOgg: string;
    export { videoWebm as fileWebm };
    export let height: null;
    export let id: string;
    export let sources: string;
    let title_1: string;
    export { title_1 as title };
    export let type: string;
    export let width: null;
}
export namespace Base {
    namespace args {
        export { BaseVideoData as data };
    }
}
