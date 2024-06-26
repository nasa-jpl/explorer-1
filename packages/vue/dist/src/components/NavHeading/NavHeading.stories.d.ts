import { default as NavHeading } from './NavHeading.vue';
import { MenuLinkColumnWithHeaderData } from './../NavLinkList/NavLinkList.stories';
declare namespace _default {
    export let title: string;
    export { NavHeading as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
        let viewMode: string;
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace Default {
    namespace args {
        export { MenuLinkColumnWithHeaderData as data };
    }
}
