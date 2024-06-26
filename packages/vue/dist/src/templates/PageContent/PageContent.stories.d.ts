import { default as PageContent } from './PageContent.vue';
declare namespace _default {
    export let title: string;
    export { PageContent as component };
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
export namespace ContentPageData {
    export let url: string;
    export let breadcrumb: string;
    let title_1: string;
    export { title_1 as title };
    export let displayLabel: string;
    export let heroPosition: string;
    export let heroImage: {
        src: {
            url: string;
            width: number;
            height: number;
        };
        screenXs: {
            url: string;
            width: number;
        };
        screenSm: {
            url: string;
            width: number;
        };
        screenMd: {
            url: string;
            width: number;
        };
        screenLg: {
            url: string;
            width: number;
        };
        screenXl: {
            url: string;
            width: number;
        };
        screenTwoxl: {
            url: string;
            width: number;
        };
        screenThreexl: {
            url: string;
            width: number;
        };
        alt: string;
        caption: string;
        credit: string;
        detailUrl: string;
    };
    export let heroImageInline: {
        alt: string;
        caption: string;
        credit: string;
        detailUrl: string;
        original: string;
        src: {
            height: number;
            url: string;
            width: number;
        };
        srcSet: string;
    };
    export let body: ({
        blockType: string;
        heading: string;
        level: string;
        size: string;
    } | {
        blockType: string;
        title: string;
        caption: string;
        url: string;
    } | {
        blockType: string;
        beforeImage: {
            src: {
                url: string;
            };
            srcCropped: {
                url: string;
            };
        };
        afterImage: {
            src: {
                url: string;
            };
            srcCropped: {
                url: string;
            };
        };
        caption: string;
    } | {
        blockType: string;
        heading: string;
        listItem: {
            text: string;
        }[];
    } | {
        blockType: string;
        value: string;
    })[];
    export let relatedLinks: {
        blockType: string;
        heading: string;
        links: ({
            text: string;
            document: {
                url: string;
            };
            page: string;
            externalLink: string;
        } | {
            text: string;
            document: string;
            page: {
                url: string;
            };
            externalLink: string;
        } | {
            text: string;
            document: string;
            page: string;
            externalLink: string;
        })[];
    }[];
    export let relatedContentHeading: string;
    export let relatedContent: ({
        url: string;
        title: string;
        slug: string;
        label: string;
        thumbnailImage: {
            src: {
                url: string;
                width: number;
                height: number;
            };
            alt: string;
        };
    } | {
        url: string;
        title: string;
        slug: string;
        thumbnailImage: {
            src: {
                url: string;
                width: number;
                height: number;
            };
            alt: string;
        };
        label?: undefined;
    } | {
        label: string;
        thumbnailImage: null;
        title: string;
        externalLink: string;
        page?: undefined;
    } | {
        page: {
            label: string;
            thumbnailImage: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
            };
            title: string;
            url: string;
        };
        label?: undefined;
        thumbnailImage?: undefined;
        title?: undefined;
        externalLink?: undefined;
    })[];
    export let clearanceNumber: string;
}
export namespace Template {
    let name: string;
    namespace args {
        export { ContentPageData as data };
    }
}
