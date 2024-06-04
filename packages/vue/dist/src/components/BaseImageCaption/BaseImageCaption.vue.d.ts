import { PropType } from 'vue';
import { ImageObject } from '../../interfaces';

declare const _default: import('vue').DefineComponent<{
    data: {
        type: PropType<Partial<ImageObject>>;
        required: true;
        default: undefined;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    data: {
        type: PropType<Partial<ImageObject>>;
        required: true;
        default: undefined;
    };
}>>, {
    data: Partial<ImageObject>;
}, {}>;
export default _default;
