import { default as BlockImageGallery } from './BlockImageGallery.vue';
declare namespace _default {
    export let title: string;
    export { BlockImageGallery as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace argTypes {
        namespace blockId {
            namespace text {
                let type: string;
            }
            let required: boolean;
            let description: string;
        }
    }
    export namespace parameters {
        namespace html {
            let root: string;
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockImageGalleryData {
    let label: string;
    namespace block {
        let id: string;
        let blockType: string;
        let galleryTitle: string;
        let galleryDescription: string;
        let coverImage: {
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
        let gallerySlides: {
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
    }
}
export const ImageGalleryData: {
    label: string;
    'block-id': string;
    title: string;
    description: string;
    cover: {
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
    items: {
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
};
export namespace Gallery {
    export let name: string;
    export { ImageGalleryData as args };
}
