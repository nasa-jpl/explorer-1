import { default as MissionDetailStreamfield } from './MissionDetailStreamfield.vue';
declare namespace _default {
    export let title: string;
    export { MissionDetailStreamfield as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace MissionDetailStreamfieldData {
    let feature: ({
        blockType: string;
        heading: string;
        alignTo?: undefined;
        image?: undefined;
        text?: undefined;
        attribution?: undefined;
        quote?: undefined;
        quoteLink?: undefined;
    } | {
        alignTo: string;
        blockType: string;
        image: {
            src: {
                height: number;
                url: string;
                width: number;
            };
            screenXs: {
                url: string;
                width: number;
            };
            screenLg: {
                url: string;
                width: number;
            };
            alt: string;
            caption: string;
            credit: string;
            detailUrl: string;
        };
        text: string;
        heading?: undefined;
        attribution?: undefined;
        quote?: undefined;
        quoteLink?: undefined;
    } | {
        blockType: string;
        attribution: string;
        quote: string;
        quoteLink: {
            externalLink: string;
            page: null;
        }[];
        heading?: undefined;
        alignTo?: undefined;
        image?: undefined;
        text?: undefined;
    } | {
        blockType: string;
        title: string;
        caption: string;
        url: string;
        heading?: undefined;
        alignTo?: undefined;
        image?: undefined;
        text?: undefined;
        attribution?: undefined;
        quote?: undefined;
        quoteLink?: undefined;
    })[];
}
export namespace Streamfield {
    namespace args {
        import data = MissionDetailStreamfieldData.feature;
        export { data };
    }
}
