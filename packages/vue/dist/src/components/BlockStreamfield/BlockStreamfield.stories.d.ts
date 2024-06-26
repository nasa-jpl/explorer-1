import { default as BlockStreamfield } from './BlockStreamfield.vue';
declare namespace _default {
    export let title: string;
    export { BlockStreamfield as component };
    export namespace argTypes {
        namespace variant {
            namespace control {
                let type: string;
            }
            let options: string[];
        }
    }
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
export namespace BlockStreamfieldData {
    let body: ({
        blockType: string;
        heading: string;
        text: string;
        page: {
            url: string;
        };
        externalLink: string;
    } | {
        blockType: string;
        title: string;
        caption: string;
        url: string;
    } | {
        blockType: string;
        fullBleed: boolean;
        image: {
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
        imageFullBleed: {
            alt: string;
            caption: string;
            credit: string;
            detailUrl: string;
            original: string;
            src: {
                width: number;
                height: number;
                url: string;
            };
            srcCropped: {
                width: number;
                height: number;
                url: string;
            };
            screenXs: {
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
            screenThreexl: {
                url: string;
                width: number;
            };
        };
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
        text: string;
        alignTo: string;
        image: {
            alt: string;
            src: {
                height: number;
                url: string;
                width: number;
            };
            original: string;
            caption: string;
            credit: string;
            detailUrl: string;
        };
        displayCaption: boolean;
    } | {
        blockType: string;
        heading: string;
        listItem: {
            text: string;
        }[];
    } | {
        blockType: string;
        items: ({
            description: string;
            heading: string;
            image: {
                src: {
                    url: string;
                    width: string;
                    height: string;
                };
            };
            links: ({
                externalLink: string;
                page: null;
                text: string;
            } | {
                externalLink: null;
                page: {
                    url: string;
                };
                text: string;
            })[];
        } | {
            description: string;
            heading: string;
            image: {
                src: {
                    url: string;
                    width: string;
                    height: string;
                };
            };
            links: {
                externalLink: null;
                page: null;
                document: {
                    url: string;
                };
                text: string;
            }[];
        })[];
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
        table: string;
    } | {
        blockType: string;
        video: {
            duration: string;
            file: string;
            fileExtension: string;
            fileOgg: string;
            fileWebm: string;
            height: null;
            id: string;
            sources: string;
            title: string;
            type: string;
            width: null;
        };
        caption: string;
        credit: string;
    } | {
        level: string;
        size: string;
        blockType: string;
        heading: string;
        value?: undefined;
        showTitle?: undefined;
        items?: undefined;
    } | {
        blockType: string;
        value: string;
        showTitle?: undefined;
        items?: undefined;
    } | {
        heading: string;
        introduction: string;
        buttonText: string;
        image: {
            full: {
                url: string;
                width: number;
                height: number;
            };
            half: {
                url: string;
                width: number;
                height: number;
            };
        };
        fullWidthImage: boolean;
        teaserPage: ({
            blockType: string;
            page?: undefined;
        } | {
            blockType: string;
            page: {
                label: string;
                title: string;
                url: string;
            };
        })[];
        blockType: string;
        value?: undefined;
        showTitle?: undefined;
        items?: undefined;
    } | {
        blockType: string;
        showTitle: boolean;
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
        value?: undefined;
    } | {
        embed: {
            embed: string;
        };
        caption: string;
        credit: string;
        blockType: string;
        value?: undefined;
        showTitle?: undefined;
        items?: undefined;
    })[];
}
export namespace Default {
    namespace args {
        import data = BlockStreamfieldData.body;
        export { data };
        let variant_1: string;
        export { variant_1 as variant };
    }
}
export namespace MatchingWidths {
    export namespace args_1 {
        import data_1 = BlockStreamfieldData.body;
        export { data_1 as data };
        let variant_2: string;
        export { variant_2 as variant };
    }
    export { args_1 as args };
}
