import { default as BaseTag } from './BaseTag.vue';
declare namespace _default {
    export let title: string;
    export { BaseTag as component };
    export namespace argTypes {
        namespace variant {
            namespace type {
                let name: string;
                let required: boolean;
            }
            let description: string;
            namespace control {
                let type_1: string;
                export { type_1 as type };
            }
            let options: string[];
        }
        namespace size {
            export namespace type_2 {
                let name_1: string;
                export { name_1 as name };
                let required_1: boolean;
                export { required_1 as required };
            }
            export { type_2 as type };
            let description_1: string;
            export { description_1 as description };
            export namespace control_1 {
                let type_3: string;
                export { type_3 as type };
            }
            export { control_1 as control };
            let options_1: string[];
            export { options_1 as options };
        }
    }
    export namespace parameters {
        namespace slots {
            let _default: string;
            export { _default as default };
        }
    }
}
export default _default;
export namespace PrimaryMedium {
    namespace args {
        let size_1: string;
        export { size_1 as size };
        let variant_1: string;
        export { variant_1 as variant };
        let _default_1: string;
        export { _default_1 as default };
    }
}
export namespace SecondarySmall {
    export namespace args_1 {
        let size_2: string;
        export { size_2 as size };
        let variant_2: string;
        export { variant_2 as variant };
        let _default_2: string;
        export { _default_2 as default };
    }
    export { args_1 as args };
}
