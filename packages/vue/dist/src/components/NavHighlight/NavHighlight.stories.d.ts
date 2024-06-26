import { default as NavHighlight } from './NavHighlight.vue';
declare namespace _default {
    export let title: string;
    export { NavHighlight as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
        let viewMode: string;
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace MenuHighlightColumnData {
    let blockType: string;
    let label: string;
    namespace highlight {
        let label_1: string;
        export { label_1 as label };
        let title_1: string;
        export { title_1 as title };
        export let url: string;
        export namespace thumbnailImage {
            namespace src {
                let url_1: string;
                export { url_1 as url };
                export let width: number;
                export let height: number;
            }
        }
    }
}
export namespace Default {
    namespace args {
        import customLabel = MenuHighlightColumnData.label;
        export { customLabel };
        import highlight_1 = MenuHighlightColumnData.highlight;
        export { highlight_1 as highlight };
    }
}
