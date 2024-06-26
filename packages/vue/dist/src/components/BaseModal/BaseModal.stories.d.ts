import { default as BaseModal } from './BaseModal.vue';
declare namespace _default {
    export let title: string;
    export { BaseModal as component };
    export namespace argTypes {
        namespace bgClose {
            namespace control {
                let type: string;
            }
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace BaseModalData {
    let bgClose_1: boolean;
    export { bgClose_1 as bgClose };
}
export namespace BaseModalDialogData {
    let modalHeaderSlot: string;
    let modalContentSlot: string;
}
export function Default(args: any): {
    props: string[];
    components: {
        BaseModal: import('vue').DefineComponent<{
            bgClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, unknown, {
            showModal: boolean;
        }, {}, {
            openModal(): void;
            closeModal(): void;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            bgClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            bgClose: boolean;
        }, {}>;
    };
    template: string;
};
export namespace Default {
    namespace args { }
}
export function CustomTrigger(args: any): {
    props: string[];
    components: {
        BaseModal: import('vue').DefineComponent<{
            bgClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, unknown, {
            showModal: boolean;
        }, {}, {
            openModal(): void;
            closeModal(): void;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            bgClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            bgClose: boolean;
        }, {}>;
        BaseButton: import('vue').DefineComponent<{
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
    };
    template: string;
};
export namespace CustomTrigger {
    export namespace args_1 { }
    export { args_1 as args };
}
export function Nested(args: any): {
    props: string[];
    components: {
        BaseModal: import('vue').DefineComponent<{
            bgClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, unknown, {
            showModal: boolean;
        }, {}, {
            openModal(): void;
            closeModal(): void;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            bgClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            bgClose: boolean;
        }, {}>;
        BaseButton: import('vue').DefineComponent<{
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
    };
    template: string;
};
export namespace Nested {
    export namespace args_2 { }
    export { args_2 as args };
}
export function Dialog(args: any): {
    props: string[];
    components: {
        BaseModalDialog: import('vue').DefineComponent<{
            bgClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, unknown, unknown, {}, {
            closeModal(): void;
            bgCloseModal(): void;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            bgClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            bgClose: boolean;
        }, {}>;
    };
    template: string;
};
export namespace Dialog {
    export namespace args_3 {
        let modalHeaderSlot_1: string;
        export { modalHeaderSlot_1 as modalHeaderSlot };
    }
    export { args_3 as args };
}
export function DialogWithHeader(args: any): {
    props: string[];
    components: {
        BaseModalDialog: import('vue').DefineComponent<{
            bgClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, unknown, unknown, {}, {
            closeModal(): void;
            bgCloseModal(): void;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            bgClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            bgClose: boolean;
        }, {}>;
    };
    template: string;
};
export namespace DialogWithHeader {
    export namespace args_4 {
        let modalHeaderSlot_2: string;
        export { modalHeaderSlot_2 as modalHeaderSlot };
    }
    export { args_4 as args };
}
