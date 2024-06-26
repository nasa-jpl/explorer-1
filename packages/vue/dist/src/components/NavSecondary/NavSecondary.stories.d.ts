import { default as NavSecondary } from './NavSecondary.vue';
declare namespace _default {
    export let title: string;
    export { NavSecondary as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        namespace docs {
            namespace description {
                let component: string;
            }
        }
    }
}
export default _default;
export namespace NavSecondaryData {
    let breadcrumb: string;
}
export namespace SecondaryNav {
    let name: string;
    namespace args {
        import breadcrumb_1 = NavSecondaryData.breadcrumb;
        export { breadcrumb_1 as breadcrumb };
    }
}
