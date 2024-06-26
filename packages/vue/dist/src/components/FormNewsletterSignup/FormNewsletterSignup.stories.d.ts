import { default as FormNewsletterSignup } from './FormNewsletterSignup.vue';
declare namespace _default {
    export let title: string;
    export { FormNewsletterSignup as component };
}
export default _default;
export function NewsletterSignup(): {
    components: {
        FormNewsletterSignup: import('vue').DefineComponent<{}, {}, {
            prefilledEmail: null;
            submitted: boolean;
            iContactForm: string;
            iContactTrackingGif: string;
            captchaKey: string;
            emailGroups: {
                id: string;
                title: string;
                text: string;
                value: string;
                alt: string;
                name: string;
            }[];
            eduEmailGroups: ({
                id: string;
                title: string;
                text: null;
                value: string;
                alt: string;
                name: string;
            } | {
                id: string;
                title: string;
                text: string;
                value: string;
                alt: string;
                name: string;
            })[];
        }, {}, {
            focus(elem: any): void;
            validate(e: any): {};
            submit(e: any): void;
            reveal(): void;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
    };
    template: string;
};
export namespace NewsletterSignup {
    let storyName: string;
}
