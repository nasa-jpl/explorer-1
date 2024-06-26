declare const _default: {
    title: string;
    component: import('vue').DefineComponent<{
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
            default: undefined;
        };
        href: {
            type: StringConstructor;
            required: false;
            default: undefined;
        };
    }, unknown, unknown, {
        tag(): string;
        theHref(): string | undefined;
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
            default: undefined;
        };
        href: {
            type: StringConstructor;
            required: false;
            default: undefined;
        };
    }>> & {
        onClick?: ((...args: any[]) => any) | undefined;
    }, {
        variant: string;
        href: string;
        to: string | Record<string, any>;
        ariaLabel: string;
        compact: boolean;
        blockClasses: string;
        disabled: boolean;
    }, {}>;
    excludeStories: RegExp;
    tags: string[];
    parameters: {
        slots: {
            default: string;
        };
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        ariaLabel: {
            type: string;
            description: string;
        };
        variant: {
            type: string;
            description: string;
            control: {
                type: string;
            };
            options: string[];
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
    };
};
export default _default;
export declare const BaseButtonData: {
    label: string;
    ariaLabel: string;
    compact: boolean;
    disabled: boolean;
    to: string;
    default: string;
};
export declare const PrimaryButton: {
    args: {
        variant: string;
        label: string;
        ariaLabel: string;
        compact: boolean;
        disabled: boolean;
        to: string;
        default: string;
    };
};
export declare const SecondaryButton: {
    args: {
        variant: string;
        label: string;
        ariaLabel: string;
        compact: boolean;
        disabled: boolean;
        to: string;
        default: string;
    };
};
export declare const DarkButton: {
    args: {
        variant: string;
        label: string;
        ariaLabel: string;
        compact: boolean;
        disabled: boolean;
        to: string;
        default: string;
    };
};
