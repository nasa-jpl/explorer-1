import { PropType } from 'vue';
import { ImageObject } from './../../interfaces';

declare const _default: import('vue').DefineComponent<{
    data: {
        type: PropType<ImageObject>;
        required: false;
    };
    displayCaption: {
        type: BooleanConstructor;
        default: boolean;
    };
    caption: {
        type: StringConstructor;
        required: false;
    };
    constrain: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    openTab: number;
}, {
    theCaption(): string | undefined;
    theSrcSet(): string | undefined;
    theData(): ImageObject | undefined;
    hasCaptionArea(): boolean;
}, {
    getSrcSet: (srcSetObject: ImageObject) => string;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    data: {
        type: PropType<ImageObject>;
        required: false;
    };
    displayCaption: {
        type: BooleanConstructor;
        default: boolean;
    };
    caption: {
        type: StringConstructor;
        required: false;
    };
    constrain: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    displayCaption: boolean;
    constrain: boolean;
}, {}>;
export default _default;
