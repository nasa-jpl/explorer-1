import { default as HeroLarge } from './HeroLarge.vue';
declare namespace _default {
    export let title: string;
    export { HeroLarge as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        let viewMode: string;
    }
}
export default _default;
export namespace HeroLargeData {
    let title_1: string;
    export { title_1 as title };
    export let description: string;
    export namespace heroImage {
        namespace src {
            let url: string;
            let width: number;
            let height: number;
        }
        let srcSet: string;
        namespace screenMd {
            let url_1: string;
            export { url_1 as url };
        }
        namespace screenSm {
            let url_2: string;
            export { url_2 as url };
        }
        let alt: string;
    }
}
export namespace Hero {
    let name: string;
    namespace args {
        import image = heroImage;
        export { image };
        export let eyebrow: string;
    }
}
