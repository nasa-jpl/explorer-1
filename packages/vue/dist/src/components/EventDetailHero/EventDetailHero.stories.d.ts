import { default as EventDetailHero } from './EventDetailHero.vue';
declare namespace _default {
    export let title: string;
    export { EventDetailHero as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
        namespace themes {
            let clearable: boolean;
            let list: {
                name: string;
                class: string;
                default: boolean;
                visible: boolean;
            }[];
        }
        let viewMode: string;
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace EventDetailHeroData {
    namespace heroImage {
        let srcSet: string;
        namespace src {
            let url: string;
            let width: number;
            let height: number;
        }
        let alt: string;
    }
    namespace startDateSplit {
        let day: string;
        let monthAndYear: string;
    }
}
export namespace Default {
    namespace args {
        import image = EventDetailHeroData.heroImage;
        export { image };
        import startDateSplit_1 = EventDetailHeroData.startDateSplit;
        export { startDateSplit_1 as startDateSplit };
    }
}
