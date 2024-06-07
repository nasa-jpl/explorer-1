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
    to: {
        type: (StringConstructor | ObjectConstructor)[];
        default: undefined;
    };
    exact: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        default: undefined;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    linkClass: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    externalTargetBlank: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    caret: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    caretWrapperClass: {
        type: StringConstructor;
        default: string;
    };
    caretClass: {
        type: StringConstructor;
        default: string;
    };
    caretInline: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    caretColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    caretMarginLeft: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, unknown, unknown, {
    computedClass(): string;
    theTarget(): string | undefined;
    theRel(): string | undefined;
}, {
    clickEvent(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ("linkClicked" | "specificLinkClicked")[], "linkClicked" | "specificLinkClicked", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    variant: {
        type: StringConstructor;
        required: false;
        default: string;
        validator: (prop: string) => boolean;
    };
    to: {
        type: (StringConstructor | ObjectConstructor)[];
        default: undefined;
    };
    exact: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        default: undefined;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    ariaLabel: {
        type: StringConstructor;
        default: string;
    };
    linkClass: {
        type: StringConstructor;
        default: string;
    };
    target: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    externalTargetBlank: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    caret: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    caretWrapperClass: {
        type: StringConstructor;
        default: string;
    };
    caretClass: {
        type: StringConstructor;
        default: string;
    };
    caretInline: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    caretColor: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    caretMarginLeft: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & {
    onLinkClicked?: ((...args: any[]) => any) | undefined;
    onSpecificLinkClicked?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    variant: string;
    href: string;
    target: string;
    to: string | Record<string, any>;
    exact: boolean;
    ariaLabel: string;
    linkClass: string;
    externalTargetBlank: boolean;
    caret: boolean;
    caretWrapperClass: string;
    caretClass: string;
    caretInline: boolean;
    caretColor: string;
    caretMarginLeft: string;
}, {}>;
export default _default;
