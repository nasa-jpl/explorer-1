import { default as BlockAudio } from './BlockAudio.vue';
declare namespace _default {
    export let title: string;
    export { BlockAudio as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockAudioData {
    namespace uploadedMedia {
        export namespace collection {
            let id: string;
            let name: string;
            let path: string;
        }
        export let createdAt: string;
        export let file: string;
        export let fileExtension: string;
        export let fileOgg: string;
        let id_1: string;
        export { id_1 as id };
        export let sources: string;
        export let thumbnail: string;
        let title_1: string;
        export { title_1 as title };
        export let type: string;
    }
}
export namespace Base {
    let name_1: string;
    export { name_1 as name };
    export namespace args {
        export { BlockAudioData as data };
    }
}
