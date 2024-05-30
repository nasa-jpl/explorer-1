interface Variants {
    [name: string]: string;
}
export declare const variants: Variants;
declare const _default: import('vue').DefineComponent<{
    variant: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (prop: string) => boolean;
    };
    compact: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    blockClasses: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    to: {
        type: (StringConstructor | ObjectConstructor)[];
        required: false;
        default: null;
    };
    href: {
        type: StringConstructor;
        required: false;
        default: null;
    };
}, unknown, unknown, {
    tag(): string;
    theHref(): string | false;
    variantClass(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "click"[], "click", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    variant: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (prop: string) => boolean;
    };
    compact: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    blockClasses: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    to: {
        type: (StringConstructor | ObjectConstructor)[];
        required: false;
        default: null;
    };
    href: {
        type: StringConstructor;
        required: false;
        default: null;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    variant: string;
    compact: boolean;
    blockClasses: string;
    disabled: boolean;
    ariaLabel: string;
    to: string | Record<string, any>;
    href: string;
}, {}>;
export default _default;
