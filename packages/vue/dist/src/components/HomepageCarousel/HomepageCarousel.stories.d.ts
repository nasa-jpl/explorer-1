import { default as HomepageCarousel } from './HomepageCarousel.vue';
declare namespace _default {
    export let title: string;
    export { HomepageCarousel as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        let viewMode: string;
    }
}
export default _default;
export const HomepageCarouselData: ({
    externalLink: null;
    video: null;
    slideTitle: string;
    heading: string;
    page: {
        url: string;
    };
    image: {
        src: {
            url: string;
            width: number;
            height: number;
        };
        srcSet: string;
        screenMd: {
            url: string;
        };
        screenSm: {
            url: string;
        };
    };
} | {
    page: {};
    slideTitle: string;
    heading: string;
    externalLink: string;
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
    image: {
        src: {
            url: string;
            width: number;
            height: number;
        };
        srcSet: string;
        screenMd: {
            url: string;
        };
        screenSm: {
            url: string;
        };
    };
} | {
    page: {};
    video: null;
    slideTitle: string;
    heading: string;
    externalLink: string;
    image: {
        src: {
            url: string;
            width: number;
            height: number;
        };
        srcSet: string;
        screenMd: {
            url: string;
        };
        screenSm: {
            url: string;
        };
    };
})[];
export namespace Carousel {
    namespace args {
        export { HomepageCarouselData as items };
        export let duration: number;
    }
}
export namespace Shuffled {
    export let name: string;
    export namespace args_1 {
        export let items: ({
            externalLink: null;
            video: null;
            slideTitle: string;
            heading: string;
            page: {
                url: string;
            };
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                srcSet: string;
                screenMd: {
                    url: string;
                };
                screenSm: {
                    url: string;
                };
            };
        } | {
            page: {};
            slideTitle: string;
            heading: string;
            externalLink: string;
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
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                srcSet: string;
                screenMd: {
                    url: string;
                };
                screenSm: {
                    url: string;
                };
            };
        } | {
            page: {};
            video: null;
            slideTitle: string;
            heading: string;
            externalLink: string;
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                srcSet: string;
                screenMd: {
                    url: string;
                };
                screenSm: {
                    url: string;
                };
            };
        })[];
        let duration_1: number;
        export { duration_1 as duration };
    }
    export { args_1 as args };
}
export namespace OneSlide {
    let name_1: string;
    export { name_1 as name };
    export namespace args_2 {
        let items_1: ({
            externalLink: null;
            video: null;
            slideTitle: string;
            heading: string;
            page: {
                url: string;
            };
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                srcSet: string;
                screenMd: {
                    url: string;
                };
                screenSm: {
                    url: string;
                };
            };
        } | {
            page: {};
            slideTitle: string;
            heading: string;
            externalLink: string;
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
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                srcSet: string;
                screenMd: {
                    url: string;
                };
                screenSm: {
                    url: string;
                };
            };
        } | {
            page: {};
            video: null;
            slideTitle: string;
            heading: string;
            externalLink: string;
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                srcSet: string;
                screenMd: {
                    url: string;
                };
                screenSm: {
                    url: string;
                };
            };
        })[];
        export { items_1 as items };
        let duration_2: number;
        export { duration_2 as duration };
    }
    export { args_2 as args };
}
export namespace FewSlides {
    let name_2: string;
    export { name_2 as name };
    export namespace args_3 {
        let items_2: ({
            externalLink: null;
            video: null;
            slideTitle: string;
            heading: string;
            page: {
                url: string;
            };
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                srcSet: string;
                screenMd: {
                    url: string;
                };
                screenSm: {
                    url: string;
                };
            };
        } | {
            page: {};
            slideTitle: string;
            heading: string;
            externalLink: string;
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
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                srcSet: string;
                screenMd: {
                    url: string;
                };
                screenSm: {
                    url: string;
                };
            };
        } | {
            page: {};
            video: null;
            slideTitle: string;
            heading: string;
            externalLink: string;
            image: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                srcSet: string;
                screenMd: {
                    url: string;
                };
                screenSm: {
                    url: string;
                };
            };
        })[];
        export { items_2 as items };
        let duration_3: number;
        export { duration_3 as duration };
    }
    export { args_3 as args };
}
