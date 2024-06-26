import { default as BlockText } from './BlockText.vue';
declare namespace _default {
    export let title: string;
    export { BlockText as component };
    export namespace argTypes {
        namespace variant {
            namespace control {
                let type: string;
            }
            let options: string[];
        }
        namespace text {
            export namespace control_1 {
                let type_1: string;
                export { type_1 as type };
            }
            export { control_1 as control };
        }
    }
}
export default _default;
export namespace Default {
    let name: string;
    namespace args {
        let variant_1: string;
        export { variant_1 as variant };
        let text_1: string;
        export { text_1 as text };
    }
}
