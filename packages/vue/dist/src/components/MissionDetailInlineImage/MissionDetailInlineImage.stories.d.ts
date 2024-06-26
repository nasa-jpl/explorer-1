import { default as MissionDetailInlineImage } from './MissionDetailInlineImage.vue';
declare namespace _default {
    export let title: string;
    export { MissionDetailInlineImage as component };
    export namespace argTypes {
        namespace alignTo {
            namespace control {
                let type: string;
                let options: string[];
            }
        }
    }
}
export default _default;
export namespace Default {
    namespace args {
        import alignment = MissionDetailInlineImageData.alignTo;
        export { alignment };
        import text = MissionDetailInlineImageData.text;
        export { text };
        import image = MissionDetailInlineImageData.image;
        export { image };
    }
}
declare namespace MissionDetailInlineImageData {
    let text_1: string;
    export { text_1 as text };
    let alignTo_1: string;
    export { alignTo_1 as alignTo };
    let image_1: {
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
    export { image_1 as image };
}
