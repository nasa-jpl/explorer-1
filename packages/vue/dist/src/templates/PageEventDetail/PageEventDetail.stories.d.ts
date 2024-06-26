import { default as PageEventDetail } from './PageEventDetail.vue';
declare namespace _default {
    export let title: string;
    export { PageEventDetail as component };
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
export namespace EventDetail {
    namespace args {
        namespace data {
            export let id: string;
            let title_1: string;
            export { title_1 as title };
            export let slug: string;
            export let url: string;
            export let startDate: string;
            export let startDatetime: string;
            export let startTime: string;
            export let endDate: string;
            export let endDatetime: string;
            export let endTime: string;
            export let isAllDay: boolean;
            export let timezone: string;
            export let label: string;
            export let location: string;
            export let registerLink: never[];
            export let heroImage: {
                srcSet: string;
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
                alt: string;
            };
            export namespace thumbnailImage {
                let alt: string;
                let original: string;
            }
            export let body: ({
                blockType: string;
                heading: string;
                listItem: {
                    text: string;
                }[];
            } | {
                blockType: string;
                value: string;
            })[];
            export let moreEvents: {
                endDate: null;
                startDate: string;
                thumbnailImage: {
                    src: {
                        height: string;
                        url: string;
                        width: string;
                    };
                };
                title: string;
                url: string;
            }[];
            export let speakers: ({
                host: string;
                id: string;
                internalLink: null;
                name: string;
                title: string;
                image?: undefined;
            } | {
                host: string;
                id: string;
                image: {
                    alt: string;
                    src: {
                        height: string;
                        url: string;
                        width: string;
                    };
                };
                internalLink: null;
                name: string;
                title: string;
            })[];
            export let relatedLinks: {
                blockType: string;
                heading: string;
                links: {
                    document: null;
                    externalLink: string;
                    page: null;
                    text: string;
                }[];
            }[];
        }
    }
}
