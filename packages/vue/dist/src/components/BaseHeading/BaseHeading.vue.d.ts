import { PropType } from 'vue';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
declare const _default: import('vue').DefineComponent<{
    level: {
        type: PropType<HeadingLevel>;
        required: false;
        default: string;
        validator: (prop: string) => boolean;
    };
    size: {
        type: PropType<HeadingLevel>;
        required: false;
        default: string;
        validator: (prop: string) => boolean;
    };
}, unknown, unknown, {
    computedTag(): string;
    computedClass(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    level: {
        type: PropType<HeadingLevel>;
        required: false;
        default: string;
        validator: (prop: string) => boolean;
    };
    size: {
        type: PropType<HeadingLevel>;
        required: false;
        default: string;
        validator: (prop: string) => boolean;
    };
}>>, {
    size: HeadingLevel;
    level: HeadingLevel;
}, {}>;
export default _default;
