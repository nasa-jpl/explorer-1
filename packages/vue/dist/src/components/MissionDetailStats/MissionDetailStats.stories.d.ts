import { default as MissionDetailStats } from './MissionDetailStats.vue';
import { default as MissionDetailStatsMini } from './MissionDetailStatsMini.vue';
import { default as MissionDetailStatsMicro } from './MissionDetailStatsMicro.vue';
declare namespace _default {
    export let title: string;
    export { MissionDetailStats as component };
    export namespace subcomponents {
        export { MissionDetailStatsMini };
        export { MissionDetailStatsMicro };
    }
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
    }
    export let excludeStories: RegExp;
    export namespace argTypes {
        namespace status {
            namespace control {
                let type: string;
            }
            let options: string[];
        }
        namespace clockType {
            export namespace control_1 {
                let type_1: string;
                export { type_1 as type };
            }
            export { control_1 as control };
            let options_1: string[];
            export { options_1 as options };
        }
        namespace distanceType {
            export namespace control_2 {
                let type_2: string;
                export { type_2 as type };
            }
            export { control_2 as control };
            let options_2: string[];
            export { options_2 as options };
        }
    }
}
export default _default;
export namespace MissionDetailStatsData {
    export let showClock: boolean;
    export let showDistance: boolean;
    let clockType_1: string;
    export { clockType_1 as clockType };
    export let startDateTime: string;
    let distanceType_1: string;
    export { distanceType_1 as distanceType };
    export let distanceValue: number;
    export let distanceApiUrls: string;
    export let displayDate: string;
    export let missionTypes: {
        missionType: string;
    }[];
    export let missionTargets: {
        target: string;
    }[];
    let status_1: string;
    export { status_1 as status };
}
export namespace Full {
    export { MissionDetailStatsData as args };
    export function render(args: any): {
        setup(): {
            args: any;
        };
        components: {
            MissionDetailStats: import("vue").DefineComponent<{
                showClock: BooleanConstructor;
                clockType: {
                    type: import("vue").PropType<"countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest">;
                    required: true;
                    validator: (val: "countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest") => boolean;
                };
                startDateTime: StringConstructor;
                displayDate: {
                    type: StringConstructor;
                    required: false;
                };
                missionTypes: {
                    type: import("vue").PropType<{
                        missionType: string;
                    }[]>;
                    required: true;
                    default: () => never[];
                };
                missionTargets: {
                    type: import("vue").PropType<{
                        target: string;
                    }[]>;
                    required: true;
                    default: () => never[];
                };
                status: {
                    type: import("vue").PropType<"draft" | "current" | "future" | "proposed" | "past">;
                    required: true;
                    validator: (val: "draft" | "current" | "future" | "proposed" | "past") => boolean;
                };
                showDistance: BooleanConstructor;
                distanceType: {
                    type: import("vue").PropType<"" | "earth" | "mars">;
                    required: false;
                    default: string;
                };
                distanceValue: NumberConstructor;
                distanceApiUrls: StringConstructor;
            }, unknown, unknown, {
                clockTypeLabel(): string;
                statusLabel(): "draft" | "current" | "future" | "proposed" | "past" | ("Select status" | "Current" | "Future" | "Proposed" | "Past");
            }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                showClock: BooleanConstructor;
                clockType: {
                    type: import("vue").PropType<"countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest">;
                    required: true;
                    validator: (val: "countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest") => boolean;
                };
                startDateTime: StringConstructor;
                displayDate: {
                    type: StringConstructor;
                    required: false;
                };
                missionTypes: {
                    type: import("vue").PropType<{
                        missionType: string;
                    }[]>;
                    required: true;
                    default: () => never[];
                };
                missionTargets: {
                    type: import("vue").PropType<{
                        target: string;
                    }[]>;
                    required: true;
                    default: () => never[];
                };
                status: {
                    type: import("vue").PropType<"draft" | "current" | "future" | "proposed" | "past">;
                    required: true;
                    validator: (val: "draft" | "current" | "future" | "proposed" | "past") => boolean;
                };
                showDistance: BooleanConstructor;
                distanceType: {
                    type: import("vue").PropType<"" | "earth" | "mars">;
                    required: false;
                    default: string;
                };
                distanceValue: NumberConstructor;
                distanceApiUrls: StringConstructor;
            }>>, {
                distanceType: "" | "earth" | "mars";
                showClock: boolean;
                missionTypes: {
                    missionType: string;
                }[];
                missionTargets: {
                    target: string;
                }[];
                showDistance: boolean;
            }, {}>;
        };
        template: string;
    };
}
export namespace Mini {
    export namespace args {
        import showClock_1 = MissionDetailStatsData.showClock;
        export { showClock_1 as showClock };
        import showDistance_1 = MissionDetailStatsData.showDistance;
        export { showDistance_1 as showDistance };
        import clockType_2 = MissionDetailStatsData.clockType;
        export { clockType_2 as clockType };
        let startDateTime_1: string;
        export { startDateTime_1 as startDateTime };
        import distanceType_2 = MissionDetailStatsData.distanceType;
        export { distanceType_2 as distanceType };
        import distanceValue_1 = MissionDetailStatsData.distanceValue;
        export { distanceValue_1 as distanceValue };
    }
    export function render_1(args: any): {
        setup(): {
            args: any;
        };
        components: {
            MissionDetailStatsMini: import("vue").DefineComponent<{
                showClock: BooleanConstructor;
                clockType: {
                    type: import("vue").PropType<"countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest">;
                    required: true;
                    validator: (val: "countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest") => boolean;
                };
                startDateTime: StringConstructor;
                showDistance: BooleanConstructor;
                distanceType: {
                    type: import("vue").PropType<"" | "earth" | "mars">;
                };
                distanceValue: NumberConstructor;
                distanceApiUrls: StringConstructor;
            }, unknown, unknown, {
                clockTypeLabel(): string;
            }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                showClock: BooleanConstructor;
                clockType: {
                    type: import("vue").PropType<"countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest">;
                    required: true;
                    validator: (val: "countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest") => boolean;
                };
                startDateTime: StringConstructor;
                showDistance: BooleanConstructor;
                distanceType: {
                    type: import("vue").PropType<"" | "earth" | "mars">;
                };
                distanceValue: NumberConstructor;
                distanceApiUrls: StringConstructor;
            }>>, {
                showClock: boolean;
                showDistance: boolean;
            }, {}>;
        };
        template: string;
    };
    export { render_1 as render };
}
export namespace Micro {
    export namespace args_1 {
        import showClock_2 = MissionDetailStatsData.showClock;
        export { showClock_2 as showClock };
        import clockType_3 = MissionDetailStatsData.clockType;
        export { clockType_3 as clockType };
        let startDateTime_2: string;
        export { startDateTime_2 as startDateTime };
    }
    export { args_1 as args };
    export function render_2(args: any): {
        setup(): {
            args: any;
        };
        components: {
            MissionDetailStatsMicro: import("vue").DefineComponent<{
                showClock: BooleanConstructor;
                startDateTime: StringConstructor;
                clockType: {
                    type: import("vue").PropType<"countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest">;
                    required: true;
                    validator: (val: "countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest") => boolean;
                };
            }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                showClock: BooleanConstructor;
                startDateTime: StringConstructor;
                clockType: {
                    type: import("vue").PropType<"countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest">;
                    required: true;
                    validator: (val: "countdown" | "time_in_orbit" | "time_on_mars" | "time_to_mars" | "time_to_dest") => boolean;
                };
            }>>, {
                showClock: boolean;
            }, {}>;
        };
        template: string;
    };
    export { render_2 as render };
}
