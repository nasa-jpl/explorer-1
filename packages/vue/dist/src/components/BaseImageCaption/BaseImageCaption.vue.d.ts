import { PropType } from 'vue';

export type ImageCaptionObject = {
    caption?: string;
    credit?: string;
    detailUrl?: string;
};
declare const _default: import('vue').DefineComponent<{
    data: {
        type: PropType<ImageCaptionObject>;
        required: true;
        default: undefined;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    data: {
        type: PropType<ImageCaptionObject>;
        required: true;
        default: undefined;
    };
}>>, {
    data: ImageCaptionObject;
}, {}>;
export default _default;
