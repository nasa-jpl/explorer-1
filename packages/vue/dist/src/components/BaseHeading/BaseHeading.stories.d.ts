import { default as BaseHeading } from './BaseHeading.vue';
declare namespace _default {
    export let title: string;
    export { BaseHeading as component };
    export namespace argTypes {
        namespace size {
            namespace type {
                let name: string;
                let required: boolean;
            }
            let description: string;
            namespace control {
                let type_1: string;
                export { type_1 as type };
            }
            let options: string[];
        }
        namespace level {
            export namespace type_2 {
                let name_1: string;
                export { name_1 as name };
                let required_1: boolean;
                export { required_1 as required };
            }
            export { type_2 as type };
            let description_1: string;
            export { description_1 as description };
            export namespace control_1 {
                let type_3: string;
                export { type_3 as type };
            }
            export { control_1 as control };
            let options_1: string[];
            export { options_1 as options };
        }
    }
    export namespace parameters {
        namespace slots {
            let _default: string;
            export { _default as default };
        }
        let viewMode: string;
        namespace docs {
            export namespace description_2 {
                let component: string;
            }
            export { description_2 as description };
        }
    }
}
export default _default;
export namespace H1 {
    let name_2: string;
    export { name_2 as name };
    export namespace args {
        let size_1: string;
        export { size_1 as size };
        let level_1: string;
        export { level_1 as level };
        let _default_1: string;
        export { _default_1 as default };
    }
}
export namespace H2 {
    let name_3: string;
    export { name_3 as name };
    export namespace args_1 {
        let size_2: string;
        export { size_2 as size };
        let level_2: string;
        export { level_2 as level };
        let _default_2: string;
        export { _default_2 as default };
    }
    export { args_1 as args };
}
export namespace H3 {
    let name_4: string;
    export { name_4 as name };
    export namespace args_2 {
        let size_3: string;
        export { size_3 as size };
        let level_3: string;
        export { level_3 as level };
        let _default_3: string;
        export { _default_3 as default };
    }
    export { args_2 as args };
}
export namespace H4 {
    let name_5: string;
    export { name_5 as name };
    export namespace args_3 {
        let size_4: string;
        export { size_4 as size };
        let level_4: string;
        export { level_4 as level };
        let _default_4: string;
        export { _default_4 as default };
    }
    export { args_3 as args };
}
export namespace H5 {
    let name_6: string;
    export { name_6 as name };
    export namespace args_4 {
        let size_5: string;
        export { size_5 as size };
        let level_5: string;
        export { level_5 as level };
        let _default_5: string;
        export { _default_5 as default };
    }
    export { args_4 as args };
}
export namespace H6 {
    let name_7: string;
    export { name_7 as name };
    export namespace args_5 {
        let size_6: string;
        export { size_6 as size };
        let level_6: string;
        export { level_6 as level };
        let _default_6: string;
        export { _default_6 as default };
    }
    export { args_5 as args };
}
export function HeadingsWithIcons(args: any): {
    components: {
        BaseHeading: import('vue').DefineComponent<{
            level: {
                type: import('vue').PropType<import('./BaseHeading.vue').HeadingLevel>;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
            size: {
                type: import('vue').PropType<import('./BaseHeading.vue').HeadingLevel>;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
        }, unknown, unknown, {
            computedTag(): string;
            computedClass(): string;
        }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            level: {
                type: import('vue').PropType<import('./BaseHeading.vue').HeadingLevel>;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
            size: {
                type: import('vue').PropType<import('./BaseHeading.vue').HeadingLevel>;
                required: false;
                default: string;
                validator: (prop: string) => boolean;
            };
        }>>, {
            size: import('./BaseHeading.vue').HeadingLevel;
            level: import('./BaseHeading.vue').HeadingLevel;
        }, {}>;
        IconArrows: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
        IconLocation: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
        IconUser: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{}>>, {}, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace HeadingsWithIcons {
    export namespace args_6 {
        let size_7: string;
        export { size_7 as size };
        let level_7: string;
        export { level_7 as level };
        let _default_7: string;
        export { _default_7 as default };
    }
    export { args_6 as args };
}
