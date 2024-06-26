import { default as NewsDetailMediaContact } from './NewsDetailMediaContact.vue';
declare namespace _default {
    export let title: string;
    export { NewsDetailMediaContact as component };
}
export default _default;
export namespace Single {
    namespace args {
        export { contacts };
        export let releaseNumber: string;
    }
}
export namespace Multiple {
    export namespace args_1 {
        let contacts_1: {
            contact: {
                name: string;
                address: string;
                email: string;
                phone: string;
            };
        }[];
        export { contacts_1 as contacts };
        let releaseNumber_1: string;
        export { releaseNumber_1 as releaseNumber };
    }
    export { args_1 as args };
}
declare const contacts: {
    contact: {
        name: string;
        address: string;
        email: string;
        phone: string;
    };
}[];
