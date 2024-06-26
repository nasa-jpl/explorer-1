import { default as NavLinkList } from './NavLinkList.vue';
declare namespace _default {
    export let title: string;
    export { NavLinkList as component };
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
export namespace MenuLinkColumnWithHeaderData {
    let blockType: string;
    let heading: string;
    namespace headingPage {
        let url: string;
    }
    let links: ({
        linkPage: {
            title: string;
            url: string;
        };
        title: string;
        path: null;
    } | {
        linkPage: null;
        title: string;
        path: string;
    })[];
}
export namespace Default {
    namespace args {
        export { MenuLinkColumnWithHeaderData as data };
    }
}
