import { default as RoboticsDetailStats } from './RoboticsDetailStats.vue';
import { default as RoboticsDetailStatsMini } from './RoboticsDetailStatsMini.vue';
declare namespace _default {
    export let title: string;
    export { RoboticsDetailStats as component };
    export namespace subcomponents {
        export { RoboticsDetailStatsMini };
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
        }
    }
}
export default _default;
export namespace RoboticsDetailStatsData {
    export let mass: number;
    export let height: number;
    export let speed: number;
    let status_1: string;
    export { status_1 as status };
    export let animalAnalogName: string;
    export namespace animalAnalogIcon {
        namespace webp {
            let url: string;
        }
        namespace src {
            let url_1: string;
            export { url_1 as url };
        }
    }
    export let robotDestinations: {
        destination: string;
    }[];
    export let alternativeStats: {
        metricLabel: string;
        metricUnit: string;
        metricValue: string;
    }[];
}
export namespace Base {
    namespace args {
        import mass_1 = RoboticsDetailStatsData.mass;
        export { mass_1 as mass };
        import height_1 = RoboticsDetailStatsData.height;
        export { height_1 as height };
        import speed_1 = RoboticsDetailStatsData.speed;
        export { speed_1 as speed };
        import status_2 = RoboticsDetailStatsData.status;
        export { status_2 as status };
        import animalAnalogName_1 = RoboticsDetailStatsData.animalAnalogName;
        export { animalAnalogName_1 as animalAnalogName };
        import animalAnalogIcon_1 = RoboticsDetailStatsData.animalAnalogIcon;
        export { animalAnalogIcon_1 as animalAnalogIcon };
        import robotDestinations_1 = RoboticsDetailStatsData.robotDestinations;
        export { robotDestinations_1 as robotDestinations };
        import alternativeStats_1 = RoboticsDetailStatsData.alternativeStats;
        export { alternativeStats_1 as alternativeStats };
    }
}
export namespace Mini {
    export namespace args_1 {
        import mass_2 = RoboticsDetailStatsData.mass;
        export { mass_2 as mass };
        import height_2 = RoboticsDetailStatsData.height;
        export { height_2 as height };
        import speed_2 = RoboticsDetailStatsData.speed;
        export { speed_2 as speed };
        import alternativeStats_2 = RoboticsDetailStatsData.alternativeStats;
        export { alternativeStats_2 as alternativeStats };
    }
    export { args_1 as args };
    export function render(args: any): {
        setup(): {
            args: any;
        };
        components: {
            RoboticsDetailStatsMini: import("vue").DefineComponent<{
                mass: NumberConstructor;
                height: NumberConstructor;
                speed: NumberConstructor;
                alternativeStats: {
                    type: import("vue").PropType<import("./RoboticsDetailStats.vue").AlternativeStat[]>;
                    required: true;
                };
            }, unknown, unknown, {
                hasContent(): boolean;
                allStats(): import("./RoboticsDetailStats.vue").AlternativeStat[];
            }, {
                unitLabel(unit: "meter" | "m/s" | "unitless" | "gram" | "grams" | "kilogram" | "kilograms" | "meters" | "kilometer" | "kilometers"): "meter" | "unitless" | "gram" | "grams" | "kilogram" | "kilograms" | "meters" | "kilometer" | "kilometers" | import("./RoboticsDetailStats.vue").MetricUnitLabel;
                unitPair(unit: string): string | null;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                mass: NumberConstructor;
                height: NumberConstructor;
                speed: NumberConstructor;
                alternativeStats: {
                    type: import("vue").PropType<import("./RoboticsDetailStats.vue").AlternativeStat[]>;
                    required: true;
                };
            }>>, {}, {}>;
        };
        template: string;
    };
}
