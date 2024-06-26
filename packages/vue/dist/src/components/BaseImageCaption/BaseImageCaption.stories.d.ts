import { default as BaseImageCaption } from './BaseImageCaption.vue';
declare namespace _default {
    export let title: string;
    export { BaseImageCaption as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        namespace docs {
            namespace description {
                let component: string;
            }
        }
    }
}
export default _default;
export namespace BaseImageCaptionData {
    let caption: string;
    let credit: string;
    let detailUrl: string;
}
export namespace Default {
    namespace args {
        export { BaseImageCaptionData as data };
    }
}
