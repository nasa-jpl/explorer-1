import { default as FormContact } from './FormContact.vue';
declare namespace _default {
    export let title: string;
    export { FormContact as component };
}
export default _default;
export function Contact(): {
    components: {
        FormContact: import('vue').DefineComponent<{}, {}, {
            submitted: boolean;
        }, {}, {
            focus(elem: any): void;
            validate(e: any): {};
            submit(e: any): void;
            reveal(): void;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
    };
    template: string;
};
export namespace Contact {
    let storyName: string;
}
