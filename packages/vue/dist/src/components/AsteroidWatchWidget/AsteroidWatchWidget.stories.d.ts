import { default as AsteroidWatchWidget } from './AsteroidWatchWidget.vue';
declare namespace _default {
    export let title: string;
    export { AsteroidWatchWidget as component };
    export let excludeStories: RegExp;
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
    }
    export namespace argTypes {
        namespace status {
            namespace control {
                let type: string;
            }
        }
    }
}
export default _default;
export namespace AsteroidWatchWidgetData {
    let nextCloseApproaches: {
        name: string;
        date: string;
        sizeFeet: number;
        sizeMeters: number;
        distanceMiles: number;
        distanceKilometers: number;
        externalLink: string;
        comparisonImage: {
            image: {
                webp: {
                    url: string;
                    __typename: string;
                };
                src: {
                    url: string;
                    __typename: string;
                };
                __typename: string;
            };
            text: string;
            __typename: string;
        };
        __typename: string;
    }[];
}
export namespace Base {
    export { AsteroidWatchWidgetData as args };
}
