import { default as MissionDetailAbout } from './MissionDetailAbout.vue';
declare namespace _default {
    export let title: string;
    export { MissionDetailAbout as component };
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace MissionDetailAboutData {
    let descriptionHeading: string;
    let description: string;
    let instruments: {
        id: string;
        instrument: string;
    }[];
}
export namespace Default {
    export { MissionDetailAboutData as args };
}
export namespace NoInstruments {
    namespace args {
        let instruments_1: never[];
        export { instruments_1 as instruments };
    }
}
