import { default as MixinVideoBg } from './MixinVideoBg.vue';
import { BaseVideoData } from './../BaseVideo/BaseVideo.stories';
declare namespace _default {
    export let title: string;
    export { MixinVideoBg as component };
    export let excludeStories: RegExp;
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
    }
}
export default _default;
export namespace Base {
    let name: string;
    namespace args {
        export { BaseVideoData as video };
    }
}
