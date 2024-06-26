import { default as HeroMedia } from './HeroMedia.vue';
import { BaseVideoData } from './../BaseVideo/BaseVideo.stories';
declare namespace _default {
    export let title: string;
    export { HeroMedia as component };
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
export namespace HeroMediaData {
    export let blockType: string;
    export namespace imageInline {
        let alt: string;
        let caption: string;
        let credit: string;
        let detailUrl: string;
        let original: string;
        namespace src {
            let height: number;
            let url: string;
            let width: number;
        }
        let srcSet: string;
    }
    export namespace image {
        export namespace src_1 {
            let url_1: string;
            export { url_1 as url };
            let width_1: number;
            export { width_1 as width };
            let height_1: number;
            export { height_1 as height };
        }
        export { src_1 as src };
        export namespace screenXs {
            let url_2: string;
            export { url_2 as url };
            let width_2: number;
            export { width_2 as width };
        }
        export namespace screenSm {
            let url_3: string;
            export { url_3 as url };
            let width_3: number;
            export { width_3 as width };
        }
        export namespace screenMd {
            let url_4: string;
            export { url_4 as url };
            let width_4: number;
            export { width_4 as width };
        }
        export namespace screenLg {
            let url_5: string;
            export { url_5 as url };
            let width_5: number;
            export { width_5 as width };
        }
        export namespace screenXl {
            let url_6: string;
            export { url_6 as url };
            let width_6: number;
            export { width_6 as width };
        }
        export namespace screenTwoxl {
            let url_7: string;
            export { url_7 as url };
            let width_7: number;
            export { width_7 as width };
        }
        export namespace screenThreexl {
            let url_8: string;
            export { url_8 as url };
            let width_8: number;
            export { width_8 as width };
        }
        let alt_1: string;
        export { alt_1 as alt };
        let caption_1: string;
        export { caption_1 as caption };
        let credit_1: string;
        export { credit_1 as credit };
        let detailUrl_1: string;
        export { detailUrl_1 as detailUrl };
    }
    let caption_2: string;
    export { caption_2 as caption };
    export let displayCaption: boolean;
}
export namespace Hero {
    export { HeroMediaData as args };
}
export namespace CustomImageCaption {
    namespace args {
        let caption_3: string;
        export { caption_3 as caption };
    }
}
export namespace NoCaptionText {
    export namespace args_1 {
        let caption_4: string;
        export { caption_4 as caption };
        let displayCaption_1: boolean;
        export { displayCaption_1 as displayCaption };
    }
    export { args_1 as args };
}
export namespace NoCaptionArea {
    export namespace args_2 {
        export namespace image_1 {
            import src_2 = src;
            export { src_2 as src };
            let alt_2: string;
            export { alt_2 as alt };
            let caption_5: string;
            export { caption_5 as caption };
            let credit_2: string;
            export { credit_2 as credit };
            let detailUrl_2: string;
            export { detailUrl_2 as detailUrl };
        }
        export { image_1 as image };
        let caption_6: string;
        export { caption_6 as caption };
        let displayCaption_2: boolean;
        export { displayCaption_2 as displayCaption };
    }
    export { args_2 as args };
}
export namespace NoLink {
    export namespace args_3 {
        export namespace image_2 {
            import src_3 = src;
            export { src_3 as src };
            import alt_3 = src;
            export { alt_3 as alt };
            import caption_7 = caption;
            export { caption_7 as caption };
            import credit_3 = credit;
            export { credit_3 as credit };
            let detailUrl_3: string;
            export { detailUrl_3 as detailUrl };
        }
        export { image_2 as image };
        let caption_8: string;
        export { caption_8 as caption };
        let displayCaption_3: boolean;
        export { displayCaption_3 as displayCaption };
    }
    export { args_3 as args };
}
export namespace Video {
    export namespace args_4 {
        let blockType_1: string;
        export { blockType_1 as blockType };
        export { BaseVideoData as video };
        let caption_9: string;
        export { caption_9 as caption };
        let credit_4: string;
        export { credit_4 as credit };
    }
    export { args_4 as args };
}
