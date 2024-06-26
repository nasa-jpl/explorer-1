import { default as HeroListingIndex } from './HeroListingIndex.vue';
declare namespace _default {
    export let title: string;
    export { HeroListingIndex as component };
    export namespace parameters {
        let viewMode: string;
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace HeroListingIndexData {
    namespace listingPage {
        namespace featured {
            export let topicLabel: string;
            export let url: string;
            let title_1: string;
            export { title_1 as title };
            export namespace image {
                namespace src {
                    let url_1: string;
                    export { url_1 as url };
                    export let width: number;
                    export let height: number;
                }
                let srcSet: string;
                namespace screenMd {
                    let url_2: string;
                    export { url_2 as url };
                }
                namespace screenSm {
                    let url_3: string;
                    export { url_3 as url };
                }
            }
        }
    }
}
export namespace Default {
    namespace args {
        export let customLabel: string;
        import pageData = HeroListingIndexData.listingPage;
        export { pageData };
    }
}
export namespace NewsImageHero {
    export namespace args_1 {
        let customLabel_1: string;
        export { customLabel_1 as customLabel };
        export namespace pageData_1 {
            export namespace featured_1 {
                let topicLabel_1: string;
                export { topicLabel_1 as topicLabel };
                let url_4: string;
                export { url_4 as url };
                let title_2: string;
                export { title_2 as title };
                export let heroBlocks: {
                    blockType: string;
                    listingPageHeroImage: {
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
                }[];
            }
            export { featured_1 as featured };
        }
        export { pageData_1 as pageData };
    }
    export { args_1 as args };
}
export namespace NewsVideoHero {
    export namespace args_2 {
        let customLabel_2: string;
        export { customLabel_2 as customLabel };
        export namespace pageData_2 {
            export namespace featured_2 {
                let topicLabel_2: string;
                export { topicLabel_2 as topicLabel };
                let url_5: string;
                export { url_5 as url };
                let title_3: string;
                export { title_3 as title };
                let heroBlocks_1: {
                    blockType: string;
                    video: {
                        file: string;
                        fileWebm: string;
                    };
                }[];
                export { heroBlocks_1 as heroBlocks };
            }
            export { featured_2 as featured };
        }
        export { pageData_2 as pageData };
    }
    export { args_2 as args };
}
export namespace NewsCarouselHero {
    export namespace args_3 {
        let customLabel_3: string;
        export { customLabel_3 as customLabel };
        export namespace pageData_3 {
            export namespace featured_3 {
                let topicLabel_3: string;
                export { topicLabel_3 as topicLabel };
                let url_6: string;
                export { url_6 as url };
                let title_4: string;
                export { title_4 as title };
                let heroBlocks_2: {
                    blockType: string;
                    blocks: {
                        listingPageHeroImage: {
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
                    }[];
                }[];
                export { heroBlocks_2 as heroBlocks };
            }
            export { featured_3 as featured };
        }
        export { pageData_3 as pageData };
    }
    export { args_3 as args };
}
