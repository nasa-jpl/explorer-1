import { default as BaseImagePlaceholder } from './../BaseImagePlaceholder/BaseImagePlaceholder.vue';
declare namespace _default {
    export let title: string;
    export { BaseImagePlaceholder as component };
    export let excludeStories: RegExp;
    export function decorators(): {
        template: string;
    };
    export let tags: string[];
    export namespace parameters {
        namespace slots {
            namespace _default {
                let description: string;
                namespace components {
                    export { BaseImage };
                }
                let template: string;
            }
            export { _default as default };
        }
        namespace docs {
            export namespace description_1 {
                let component: string;
            }
            export { description_1 as description };
        }
    }
    export namespace argTypes {
        namespace aspectRatio {
            namespace control {
                let type: string;
            }
            let options: string[];
        }
        namespace responsiveAspectRatio {
            export namespace control_1 {
                let type_1: string;
                export { type_1 as type };
            }
            export { control_1 as control };
        }
    }
}
export default _default;
export namespace BaseImagePlaceholderData {
    let aspectRatio_1: string;
    export { aspectRatio_1 as aspectRatio };
    export let darkMode: boolean;
    export let transparentMode: boolean;
}
export namespace WithImage {
    namespace args {
        namespace BaseImageProps {
            let src: string;
            let srcset: string;
            let alt: string;
            let width: string;
            let height: string;
            let objectFitClass: string;
            let loading: string;
        }
    }
}
export namespace NoImage {
    export namespace args_1 {
        export namespace BaseImageProps_1 {
            let src_1: string;
            export { src_1 as src };
            let srcset_1: string;
            export { srcset_1 as srcset };
            let alt_1: string;
            export { alt_1 as alt };
            let width_1: string;
            export { width_1 as width };
            let height_1: string;
            export { height_1 as height };
            let objectFitClass_1: string;
            export { objectFitClass_1 as objectFitClass };
            let loading_1: string;
            export { loading_1 as loading };
        }
        export { BaseImageProps_1 as BaseImageProps };
    }
    export { args_1 as args };
}
