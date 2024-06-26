import { default as BaseAudio } from './BaseAudio.vue';
declare namespace _default {
    export let title: string;
    export { BaseAudio as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace BaseAudioData {
    let file: string;
    let autoPlay: boolean;
    let loop: boolean;
}
export namespace Base {
    export let name: string;
    export { BaseAudioData as args };
}
