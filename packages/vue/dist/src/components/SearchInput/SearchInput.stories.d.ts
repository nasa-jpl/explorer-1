import { default as SearchInput } from './SearchInput.vue';
declare namespace _default {
    export let title: string;
    export { SearchInput as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace Default {
    namespace args {
        let searchQuery: string;
        let placeholder: string;
        let autoFocus: boolean;
        let defaultColors: boolean;
    }
}
export namespace WithProps {
    export namespace args_1 {
        let searchQuery_1: string;
        export { searchQuery_1 as searchQuery };
        let placeholder_1: string;
        export { placeholder_1 as placeholder };
        let autoFocus_1: boolean;
        export { autoFocus_1 as autoFocus };
        let defaultColors_1: boolean;
        export { defaultColors_1 as defaultColors };
    }
    export { args_1 as args };
}
export namespace UnderlinedInput {
    export namespace args_2 {
        let searchQuery_2: string;
        export { searchQuery_2 as searchQuery };
        let placeholder_2: string;
        export { placeholder_2 as placeholder };
        let autoFocus_2: boolean;
        export { autoFocus_2 as autoFocus };
        let defaultColors_2: boolean;
        export { defaultColors_2 as defaultColors };
        export let underlinedInput: boolean;
    }
    export { args_2 as args };
}
