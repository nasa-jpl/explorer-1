import { default as BaseLink } from './BaseLink.vue';
declare namespace _default {
    export let title: string;
    export { BaseLink as component };
    export namespace parameters {
        namespace slots {
            let _default: string;
            export { _default as default };
        }
    }
    export namespace argTypes {
        namespace variant {
            namespace control {
                let type: string;
            }
            let options: string[];
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace BaseLinkData {
    let variant_1: string;
    export { variant_1 as variant };
    export let to: string;
    export let href: string;
    export let caret: boolean;
    export let caretColor: string;
    let _default_1: string;
    export { _default_1 as default };
}
export namespace Primary {
    namespace args { }
}
export namespace Secondary {
    export namespace args_1 {
        let variant_2: string;
        export { variant_2 as variant };
    }
    export { args_1 as args };
}
export namespace DefaultBody {
    export namespace args_2 {
        let variant_3: string;
        export { variant_3 as variant };
    }
    export { args_2 as args };
}
export namespace Unstyled {
    export namespace args_3 {
        let variant_4: string;
        export { variant_4 as variant };
    }
    export { args_3 as args };
}
