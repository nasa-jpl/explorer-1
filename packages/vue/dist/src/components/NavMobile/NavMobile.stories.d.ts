import { default as NavMobile } from './NavMobile.vue';
import { MenuFooterPanelData } from './../TheFooter/TheFooter.stories';
declare namespace _default {
    export let title: string;
    export { NavMobile as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        let viewMode: string;
        namespace viewport {
            let defaultViewport: string;
        }
    }
}
export default _default;
export namespace NavMobileData {
    let mobileBreadcrumb: string;
    let footerNavigation: {
        titleLink: {
            linkPage: {
                title: string;
                url: string;
            };
            title: null;
        };
        links: {
            linkPage: {
                title: string;
                url: string;
            };
            title: string;
            path: null;
        }[];
    }[];
    let footerMoreFromJpl: {
        linkPage: null;
        title: string;
        path: string;
    }[];
}
export namespace Nav {
    namespace args {
        export { NavMobileData as data };
        export let headerVisible: boolean;
        export let scrolledUp: boolean;
        export let scrollTop: number;
    }
    function render(args: any): {
        components: {
            NavMobile: import("vue").DefineComponent<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                    default: null;
                };
                headerVisible: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrolledUp: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrollTop: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
                staticSecondaryData: {
                    type: ArrayConstructor;
                    required: false;
                    default: null;
                };
            }, unknown, {
                menuVisible: boolean;
                searchQuery: null;
                LogoColor: string;
            }, {
                breadcrumb(): import("../../utils/mixins").BreadcrumbObject | null;
                headerClasses(): string;
                hasSecondary(): boolean;
                headerStore: () => import("pinia").Store<"header", import("../../store/header").State, {}, {
                    makeTransparent(value: boolean): void;
                    updateHighlightPrimary(value: boolean): void;
                    updateGlobalChildren(value: any): void;
                    updateSecondary(value: any): void;
                }>;
            }, {
                toggleMenu(): void;
                closeMenu(): void;
                openMenu(): void;
                getUrlKey(item: import("../../utils/mixins").LinkObject): string | null;
                checkActive(item: import("../../utils/mixins").LinkObject): boolean;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                    default: null;
                };
                headerVisible: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrolledUp: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrollTop: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
                staticSecondaryData: {
                    type: ArrayConstructor;
                    required: false;
                    default: null;
                };
            }>>, {
                data: Record<string, any>;
                scrollTop: number;
                headerVisible: boolean;
                scrolledUp: boolean;
                staticSecondaryData: unknown[];
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
}
export namespace WithSecondaryNav {
    export namespace args_1 {
        export { NavMobileData as data };
        let headerVisible_1: boolean;
        export { headerVisible_1 as headerVisible };
        let scrolledUp_1: boolean;
        export { scrolledUp_1 as scrolledUp };
        let scrollTop_1: number;
        export { scrollTop_1 as scrollTop };
        export { NavMobileSecondaryNavData as staticSecondaryData };
    }
    export { args_1 as args };
    export function render_1(args: any): {
        components: {
            NavMobile: import("vue").DefineComponent<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                    default: null;
                };
                headerVisible: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrolledUp: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrollTop: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
                staticSecondaryData: {
                    type: ArrayConstructor;
                    required: false;
                    default: null;
                };
            }, unknown, {
                menuVisible: boolean;
                searchQuery: null;
                LogoColor: string;
            }, {
                breadcrumb(): import("../../utils/mixins").BreadcrumbObject | null;
                headerClasses(): string;
                hasSecondary(): boolean;
                headerStore: () => import("pinia").Store<"header", import("../../store/header").State, {}, {
                    makeTransparent(value: boolean): void;
                    updateHighlightPrimary(value: boolean): void;
                    updateGlobalChildren(value: any): void;
                    updateSecondary(value: any): void;
                }>;
            }, {
                toggleMenu(): void;
                closeMenu(): void;
                openMenu(): void;
                getUrlKey(item: import("../../utils/mixins").LinkObject): string | null;
                checkActive(item: import("../../utils/mixins").LinkObject): boolean;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                    default: null;
                };
                headerVisible: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrolledUp: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrollTop: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
                staticSecondaryData: {
                    type: ArrayConstructor;
                    required: false;
                    default: null;
                };
            }>>, {
                data: Record<string, any>;
                scrollTop: number;
                headerVisible: boolean;
                scrolledUp: boolean;
                staticSecondaryData: unknown[];
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_1 as render };
}
export namespace WithTertiaryNav {
    export namespace args_2 {
        export { NavMobileData as data };
        let headerVisible_2: boolean;
        export { headerVisible_2 as headerVisible };
        let scrolledUp_2: boolean;
        export { scrolledUp_2 as scrolledUp };
        let scrollTop_2: number;
        export { scrollTop_2 as scrollTop };
        export { NavMobileTertiaryNavData as staticSecondaryData };
    }
    export { args_2 as args };
    export function render_2(args: any): {
        components: {
            NavMobile: import("vue").DefineComponent<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                    default: null;
                };
                headerVisible: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrolledUp: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrollTop: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
                staticSecondaryData: {
                    type: ArrayConstructor;
                    required: false;
                    default: null;
                };
            }, unknown, {
                menuVisible: boolean;
                searchQuery: null;
                LogoColor: string;
            }, {
                breadcrumb(): import("../../utils/mixins").BreadcrumbObject | null;
                headerClasses(): string;
                hasSecondary(): boolean;
                headerStore: () => import("pinia").Store<"header", import("../../store/header").State, {}, {
                    makeTransparent(value: boolean): void;
                    updateHighlightPrimary(value: boolean): void;
                    updateGlobalChildren(value: any): void;
                    updateSecondary(value: any): void;
                }>;
            }, {
                toggleMenu(): void;
                closeMenu(): void;
                openMenu(): void;
                getUrlKey(item: import("../../utils/mixins").LinkObject): string | null;
                checkActive(item: import("../../utils/mixins").LinkObject): boolean;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                    default: null;
                };
                headerVisible: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrolledUp: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrollTop: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
                staticSecondaryData: {
                    type: ArrayConstructor;
                    required: false;
                    default: null;
                };
            }>>, {
                data: Record<string, any>;
                scrollTop: number;
                headerVisible: boolean;
                scrolledUp: boolean;
                staticSecondaryData: unknown[];
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_2 as render };
}
export namespace Dropdown {
    export namespace args_3 {
        export { MenuFooterPanelData as data };
    }
    export { args_3 as args };
    export function render_3(args: any): {
        components: {
            NavMobileDropdown: import("vue").DefineComponent<{
                data: {
                    type: (ArrayConstructor | ObjectConstructor)[];
                    required: false;
                };
                startOpen: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                expandMultiple: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
            }, unknown, {
                dropdownVisible: boolean;
                theDropdown: HTMLElement | null;
            }, {}, {
                toggleDropdown(): void;
                closeDropdown(): void;
                openDropdown(): void;
                closeIfOtherOpened(opened: HTMLElement): void;
                getLinkText(link: import("../../utils/mixins").LinkObject): string;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: (ArrayConstructor | ObjectConstructor)[];
                    required: false;
                };
                startOpen: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                expandMultiple: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
            }>>, {
                startOpen: boolean;
                expandMultiple: boolean;
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_3 as render };
}
export namespace DropdownActive {
    export namespace args_4 {
        export { MenuFooterPanelData as data };
    }
    export { args_4 as args };
    export function render_4(args: any): {
        components: {
            NavMobileDropdown: import("vue").DefineComponent<{
                data: {
                    type: (ArrayConstructor | ObjectConstructor)[];
                    required: false;
                };
                startOpen: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                expandMultiple: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
            }, unknown, {
                dropdownVisible: boolean;
                theDropdown: HTMLElement | null;
            }, {}, {
                toggleDropdown(): void;
                closeDropdown(): void;
                openDropdown(): void;
                closeIfOtherOpened(opened: HTMLElement): void;
                getLinkText(link: import("../../utils/mixins").LinkObject): string;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: (ArrayConstructor | ObjectConstructor)[];
                    required: false;
                };
                startOpen: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                expandMultiple: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
            }>>, {
                startOpen: boolean;
                expandMultiple: boolean;
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_4 as render };
}
export namespace DropdownSecondary {
    export namespace args_5 {
        export { NavMobileSecondaryNavData as data };
    }
    export { args_5 as args };
    export function render_5(args: any): {
        components: {
            NavMobileDropdown: import("vue").DefineComponent<{
                data: {
                    type: (ArrayConstructor | ObjectConstructor)[];
                    required: false;
                };
                startOpen: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                expandMultiple: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
            }, unknown, {
                dropdownVisible: boolean;
                theDropdown: HTMLElement | null;
            }, {}, {
                toggleDropdown(): void;
                closeDropdown(): void;
                openDropdown(): void;
                closeIfOtherOpened(opened: HTMLElement): void;
                getLinkText(link: import("../../utils/mixins").LinkObject): string;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: (ArrayConstructor | ObjectConstructor)[];
                    required: false;
                };
                startOpen: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                expandMultiple: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
            }>>, {
                startOpen: boolean;
                expandMultiple: boolean;
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_5 as render };
}
export namespace Link {
    export namespace args_6 {
        let data: {
            linkPage: {
                title: string;
                url: string;
            };
            title: string;
            path: null;
        } | {
            linkPage: null;
            title: string;
            path: string;
        };
    }
    export { args_6 as args };
    export function render_6(args: any): {
        components: {
            NavMobileLink: import("vue").DefineComponent<{
                data: {
                    type: import("vue").PropType<import("../../utils/mixins").LinkObject>;
                    required: false;
                };
                title: {
                    type: StringConstructor;
                    required: false;
                };
                linkClass: {
                    type: StringConstructor;
                    required: false;
                };
                exact: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
            }, unknown, unknown, {}, {
                getRouterLink(link: import("../../utils/mixins").LinkObject): string | undefined;
                getLinkText(link: import("../../utils/mixins").LinkObject): string | undefined;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: import("vue").PropType<import("../../utils/mixins").LinkObject>;
                    required: false;
                };
                title: {
                    type: StringConstructor;
                    required: false;
                };
                linkClass: {
                    type: StringConstructor;
                    required: false;
                };
                exact: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
            }>>, {
                exact: boolean;
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_6 as render };
}
declare const NavMobileSecondaryNavData: {
    path: string;
    title: string;
}[];
declare const NavMobileTertiaryNavData: {
    path: string;
    title: string;
    children: {
        path: string;
        title: string;
        children: {
            path: string;
            title: string;
            children: never[];
        }[];
    }[];
}[];
