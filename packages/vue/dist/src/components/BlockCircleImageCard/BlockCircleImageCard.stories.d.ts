import { default as BlockCircleImageCard } from './BlockCircleImageCard.vue';
import { default as IconExternal } from './../Icons/IconExternal.vue';
declare namespace _default {
    export let title: string;
    export { BlockCircleImageCard as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace argTypes {
        namespace imageOnRight {
            namespace control {
                let type: string;
            }
        }
    }
    export namespace parameters {
        namespace slots {
            namespace icon {
                let description: string;
                namespace components {
                    export { IconExternal };
                }
                let template: string;
            }
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace BlockCircleImageCardData {
    let title_1: string;
    export { title_1 as title };
    export let label: string;
    export let secondaryLabel: string;
    export namespace image {
        namespace src {
            let url: string;
            let width: number;
            let height: number;
        }
        let srcSet: string;
        let alt: string;
    }
    let imageOnRight_1: boolean;
    export { imageOnRight_1 as imageOnRight };
    let icon_1: boolean;
    export { icon_1 as icon };
}
export namespace Default {
    namespace args {
        let icon_2: boolean;
        export { icon_2 as icon };
    }
}
export namespace WithIcon {
    export { BlockCircleImageCardData as args };
}
