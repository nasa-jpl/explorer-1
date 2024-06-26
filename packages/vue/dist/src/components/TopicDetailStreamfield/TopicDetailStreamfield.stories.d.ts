import { default as TopicDetailStreamfield } from './TopicDetailStreamfield.vue';
declare namespace _default {
    export let title: string;
    export { TopicDetailStreamfield as component };
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
export namespace TopicDetailStreamfieldData {
    let body: ({
        id: string;
        blockType: string;
        galleryTitle: string;
        galleryDescription: string;
        coverImage: {
            alt: string;
            title: string;
            caption: string;
            credit: string;
            detailUrl: string;
            original: string;
            src: {
                height: string;
                url: string;
                width: string;
            };
            srcSet: string;
        };
        gallerySlides: {
            image: {
                alt: string;
                title: string;
                caption: string;
                credit: string;
                detailUrl: string;
                original: string;
                src: {
                    height: string;
                    url: string;
                    width: string;
                };
                srcSet: string;
            };
        }[];
    } | {
        blockType: string;
        quote: string;
        attribution: string;
        quoteLink: {
            externalLink: string;
            page: {
                url: string;
            };
        }[];
        thumbnail: {
            src: string;
            alt: string;
        };
    } | {
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
    } | {
        blockType: string;
        heading: string;
    })[];
}
export namespace Default {
    namespace args {
        import data = TopicDetailStreamfieldData.body;
        export { data };
        export let topic: string;
    }
}
