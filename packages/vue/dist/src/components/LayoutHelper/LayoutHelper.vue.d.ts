interface Indents {
    [name: string]: string;
}
export declare const indents: Indents;
declare const _default: import('vue').DefineComponent<{
    indent: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (prop: string) => boolean;
    };
}, unknown, unknown, {
    theWidth(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    indent: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (prop: string) => boolean;
    };
}>>, {
    indent: string;
}, {}>;
export default _default;
