import { default as NavDesktop } from './NavDesktop.vue';
declare namespace _default {
    export let title: string;
    export { NavDesktop as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        let viewMode: string;
    }
}
export default _default;
export namespace NavDesktopTopHatData {
    let topHat: ({
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
    })[];
}
export namespace NavDesktopDropdownContentData {
    let blockType: string;
    namespace titleLink {
        export namespace linkPage {
            let title_1: string;
            export { title_1 as title };
            export let url: string;
        }
        let title_2: null;
        export { title_2 as title };
    }
    let menuColumns: ({
        blockType: string;
        label: string;
        highlight: {
            label: string;
            title: string;
            url: string;
            thumbnailImage: {
                src: {
                    url: string;
                    width: number;
                    height: number;
                };
            };
        };
    } | {
        blockType: string;
        description: string;
        title: string;
    } | {
        heading: null;
        headingPage: null;
        blockType: string;
        links: ({
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
        })[];
        description?: undefined;
        title?: undefined;
    })[];
}
export namespace NavDesktopDropdownMoreData {
    let blockType_1: string;
    export { blockType_1 as blockType };
    export let titleText: string;
    export let strapline: string;
    let menuColumns_1: ({
        blockType: string;
        description: string;
        title: string;
        heading?: undefined;
        headingPage?: undefined;
        highlights?: undefined;
    } | {
        heading: string;
        headingPage: null;
        blockType: string;
        links: ({
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
        })[];
        description?: undefined;
        title?: undefined;
        highlights?: undefined;
    } | {
        blockType: string;
        heading: string;
        headingPage: null;
        highlights: {
            blockType: string;
            label: string;
            highlight: {
                label: string;
                title: string;
                url: string;
                thumbnailImage: {
                    src: {
                        url: string;
                        width: number;
                        height: number;
                    };
                };
            };
        }[];
        description?: undefined;
        title?: undefined;
    })[];
    export { menuColumns_1 as menuColumns };
}
export namespace NavDesktopData {
    let primaryNavigation: ({
        blockType: string;
        titleLink: {
            linkPage: {
                title: string;
                url: string;
            };
            title: null;
        };
        menuColumns: ({
            blockType: string;
            label: string;
            highlight: {
                label: string;
                title: string;
                url: string;
                thumbnailImage: {
                    src: {
                        url: string;
                        width: number;
                        height: number;
                    };
                };
            };
        } | {
            blockType: string;
            description: string;
            title: string;
        } | {
            heading: null;
            headingPage: null;
            blockType: string;
            links: ({
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
            })[];
            description?: undefined;
            title?: undefined;
        })[];
    } | {
        blockType: string;
        titleText: string;
        strapline: string;
        menuColumns: ({
            blockType: string;
            description: string;
            title: string;
            heading?: undefined;
            headingPage?: undefined;
            highlights?: undefined;
        } | {
            heading: string;
            headingPage: null;
            blockType: string;
            links: ({
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
            })[];
            description?: undefined;
            title?: undefined;
            highlights?: undefined;
        } | {
            blockType: string;
            heading: string;
            headingPage: null;
            highlights: {
                blockType: string;
                label: string;
                highlight: {
                    label: string;
                    title: string;
                    url: string;
                    thumbnailImage: {
                        src: {
                            url: string;
                            width: number;
                            height: number;
                        };
                    };
                };
            }[];
            description?: undefined;
            title?: undefined;
        })[];
    })[];
    let breadcrumb: string;
}
export namespace Nav {
    namespace args {
        export { NavDesktopData as data };
        export let headerVisible: boolean;
        export let scrolledUp: boolean;
        export let scrollTop: number;
        export let invertOverride: boolean;
    }
    function render(args: any): {
        components: {
            NavDesktop: import("vue").DefineComponent<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                    default: null;
                };
                invertOverride: {
                    type: BooleanConstructor;
                    required: false;
                };
                headerVisible: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrolled: {
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
            }, unknown, {
                searchVisible: boolean;
                scrolledCurrentPage: boolean;
                LogoColor: string;
                LogoWhite: string;
            }, {
                breadcrumb(): import("../../utils/mixins").BreadcrumbObject | null;
                invert(): boolean;
                headerStore: () => import("pinia").Store<"header", import("../../store/header").State, {}, {
                    makeTransparent(value: boolean): void;
                    updateHighlightPrimary(value: boolean): void;
                    updateGlobalChildren(value: any): void;
                    updateSecondary(value: any): void;
                }>;
            }, {
                getUrlKey(item: import("../../utils/mixins").LinkObject): string | null;
                checkActive(item: import("../../utils/mixins").LinkObject): boolean;
                checkActiveMore(): boolean;
                toggleSearch(): void;
                closeSearch(): void;
                openSearch(): void;
                getLinkText(item: import("../../utils/mixins").LinkObject): string;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                    default: null;
                };
                invertOverride: {
                    type: BooleanConstructor;
                    required: false;
                };
                headerVisible: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrolled: {
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
            }>>, {
                data: Record<string, any>;
                scrollTop: number;
                invertOverride: boolean;
                headerVisible: boolean;
                scrolled: boolean;
                scrolledUp: boolean;
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
}
export namespace NavInverted {
    export namespace args_1 {
        export { NavDesktopData as data };
        let headerVisible_1: boolean;
        export { headerVisible_1 as headerVisible };
        let scrolledUp_1: boolean;
        export { scrolledUp_1 as scrolledUp };
        let scrollTop_1: number;
        export { scrollTop_1 as scrollTop };
        let invertOverride_1: boolean;
        export { invertOverride_1 as invertOverride };
    }
    export { args_1 as args };
    export function render_1(args: any): {
        components: {
            NavDesktop: import("vue").DefineComponent<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                    default: null;
                };
                invertOverride: {
                    type: BooleanConstructor;
                    required: false;
                };
                headerVisible: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrolled: {
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
            }, unknown, {
                searchVisible: boolean;
                scrolledCurrentPage: boolean;
                LogoColor: string;
                LogoWhite: string;
            }, {
                breadcrumb(): import("../../utils/mixins").BreadcrumbObject | null;
                invert(): boolean;
                headerStore: () => import("pinia").Store<"header", import("../../store/header").State, {}, {
                    makeTransparent(value: boolean): void;
                    updateHighlightPrimary(value: boolean): void;
                    updateGlobalChildren(value: any): void;
                    updateSecondary(value: any): void;
                }>;
            }, {
                getUrlKey(item: import("../../utils/mixins").LinkObject): string | null;
                checkActive(item: import("../../utils/mixins").LinkObject): boolean;
                checkActiveMore(): boolean;
                toggleSearch(): void;
                closeSearch(): void;
                openSearch(): void;
                getLinkText(item: import("../../utils/mixins").LinkObject): string;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                    default: null;
                };
                invertOverride: {
                    type: BooleanConstructor;
                    required: false;
                };
                headerVisible: {
                    type: BooleanConstructor;
                    required: false;
                    default: boolean;
                };
                scrolled: {
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
            }>>, {
                data: Record<string, any>;
                scrollTop: number;
                invertOverride: boolean;
                headerVisible: boolean;
                scrolled: boolean;
                scrolledUp: boolean;
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_1 as render };
}
export namespace TopHat {
    export namespace args_2 {
        import data = NavDesktopTopHatData.topHat;
        export { data };
    }
    export { args_2 as args };
    export function render_2(args: any): {
        components: {
            NavDesktopTopHat: import("vue").DefineComponent<{
                data: {
                    type: import("vue").PropType<import("../../utils/mixins").LinkObject[]>;
                    required: false;
                };
            }, unknown, unknown, {}, {
                getRouterLink(link: import("../../utils/mixins").LinkObject): string | undefined;
                getLinkText(link: import("../../utils/mixins").LinkObject): string | undefined;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: import("vue").PropType<import("../../utils/mixins").LinkObject[]>;
                    required: false;
                };
            }>>, {}, {}>;
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
        export { NavDesktopDropdownContentData as data };
    }
    export { args_3 as args };
    export function render_3(args: any): {
        components: {
            NavDesktopDropdown: import("vue").DefineComponent<{
                parentScrolled: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
            }, unknown, {
                dropdownVisible: boolean;
            }, {
                hasSecondary(): boolean;
                headerStore: () => import("pinia").Store<"header", import("../../store/header").State, {}, {
                    makeTransparent(value: boolean): void;
                    updateHighlightPrimary(value: boolean): void;
                    updateGlobalChildren(value: any): void;
                    updateSecondary(value: any): void;
                }>;
            }, {
                toggleDropdown(): void;
                closeDropdown(): void;
                openDropdown(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                parentScrolled: {
                    type: NumberConstructor;
                    required: false;
                    default: number;
                };
            }>>, {
                parentScrolled: number;
            }, {}>;
            NavDesktopDropdownContent: import("vue").DefineComponent<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                };
            }, unknown, unknown, {
                linkColumns(): any[];
            }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                };
            }>>, {}, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_3 as render };
}
export namespace DropdownContent {
    export namespace args_4 {
        export { NavDesktopDropdownContentData as data };
    }
    export { args_4 as args };
    export function render_4(args: any): {
        components: {
            NavDesktopDropdownContent: import("vue").DefineComponent<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                };
            }, unknown, unknown, {
                linkColumns(): any[];
            }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                };
            }>>, {}, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_4 as render };
}
export namespace DropdownMore {
    export namespace args_5 {
        export { NavDesktopDropdownMoreData as data };
    }
    export { args_5 as args };
    export function render_5(args: any): {
        components: {
            NavDesktopDropdownMore: import("vue").DefineComponent<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                };
            }, unknown, unknown, {
                linkColumns(): any[];
                highlightsColumn(): any;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                data: {
                    type: ObjectConstructor;
                    required: false;
                };
            }>>, {}, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_5 as render };
}
