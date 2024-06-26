import { default as TheFooter } from './TheFooter.vue';
declare namespace _default {
    export let title: string;
    export { TheFooter as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        let viewMode: string;
    }
}
export default _default;
export namespace MenuFooterPanelData {
    namespace titleLink {
        export namespace linkPage {
            let title_1: string;
            export { title_1 as title };
            export let url: string;
        }
        let title_2: null;
        export { title_2 as title };
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
export namespace TheFooterData {
    let footerMoreFromJpl: {
        linkPage: null;
        title: string;
        path: string;
    }[];
    let footerNavigation: {
        titleLink: {
            linkPage: {
                title: string;
                url: string;
            };
            title: null;
        };
        links: {
            linkPage: {
                title: string;
                url: string;
            };
            title: string;
            path: null;
        }[];
    }[];
    let footerLinks: ({
        linkPage: null;
        title: string;
        path: string;
    } | {
        linkPage: {
            title: string;
            url: string;
        };
        title: null;
        path: null;
    })[];
    let relatedNasaSites: {
        title: string;
        path: string;
    }[];
    let footerMeta: {
        label: string;
        text: string;
    }[];
}
export namespace Footer {
    namespace args {
        export { TheFooterData as data };
        export let commitSha: string;
    }
}
