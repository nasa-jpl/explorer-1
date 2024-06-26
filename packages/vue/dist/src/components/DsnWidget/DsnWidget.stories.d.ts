import { default as DsnWidget } from './DsnWidget.vue';
declare namespace _default {
    export let title: string;
    export { DsnWidget as component };
    export let excludeStories: RegExp;
    export namespace argTypes {
        namespace status {
            namespace control {
                let type: string;
            }
        }
    }
}
export default _default;
export namespace DsnWidgetData {
    let heading: string;
    let link: string;
    let linkTarget: boolean;
    let transmitTitle: string;
    let transmitStatus: string;
    let spacecraftName: string;
    let location: string;
    let __typename: string;
}
export namespace Base {
    namespace args {
        export { DsnWidgetData as data };
    }
}
