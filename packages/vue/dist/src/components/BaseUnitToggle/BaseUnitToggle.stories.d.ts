import { default as BaseUnitToggle } from './BaseUnitToggle.vue';
declare namespace _default {
    export let title: string;
    export { BaseUnitToggle as component };
    export namespace argTypes {
        namespace unitPair {
            namespace control {
                let type: string;
                let options: string[];
            }
        }
        namespace valueSystem {
            export let description: string;
            export namespace control_1 {
                let type_1: string;
                export { type_1 as type };
                let options_1: string[];
                export { options_1 as options };
            }
            export { control_1 as control };
        }
        namespace value {
            let description_1: string;
            export { description_1 as description };
        }
        namespace secondValue {
            let description_2: string;
            export { description_2 as description };
        }
    }
}
export default _default;
export function Imperial(args: any): {
    components: {
        BaseUnitToggle: import('vue').DefineComponent<{
            unitPair: {
                type: import('vue').PropType<keyof import('./BaseUnitToggle.vue').UnitPairs>;
                required: true;
                validator: (val: keyof import('./BaseUnitToggle.vue').UnitPairs) => boolean;
            };
            value: {
                type: import('vue').PropType<number>;
                required: true;
            };
            secondValue: {
                type: import('vue').PropType<number>;
                required: false;
            };
            valueSystem: {
                type: import('vue').PropType<keyof import('./BaseUnitToggle.vue').UnitConfig>;
                required: true;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
        }, unknown, {
            selectedSystem: keyof import('./BaseUnitToggle.vue').UnitConfig;
        }, {
            unitConfig(): import('./BaseUnitToggle.vue').UnitConfig;
            formattedValue(): string;
        }, {
            setSystem(): void;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            unitPair: {
                type: import('vue').PropType<keyof import('./BaseUnitToggle.vue').UnitPairs>;
                required: true;
                validator: (val: keyof import('./BaseUnitToggle.vue').UnitPairs) => boolean;
            };
            value: {
                type: import('vue').PropType<number>;
                required: true;
            };
            secondValue: {
                type: import('vue').PropType<number>;
                required: false;
            };
            valueSystem: {
                type: import('vue').PropType<keyof import('./BaseUnitToggle.vue').UnitConfig>;
                required: true;
            };
            inline: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>>, {
            inline: boolean;
        }, {}>;
    };
    setup(): {
        args: any;
    };
    template: string;
};
export namespace Imperial {
    namespace args {
        let unitPair_1: string;
        export { unitPair_1 as unitPair };
        let value_1: number;
        export { value_1 as value };
        let secondValue_1: undefined;
        export { secondValue_1 as secondValue };
        let valueSystem_1: string;
        export { valueSystem_1 as valueSystem };
    }
}
export namespace Metric {
    export namespace args_1 {
        let unitPair_2: string;
        export { unitPair_2 as unitPair };
        let value_2: number;
        export { value_2 as value };
        let secondValue_2: undefined;
        export { secondValue_2 as secondValue };
        let valueSystem_2: string;
        export { valueSystem_2 as valueSystem };
    }
    export { args_1 as args };
    export function render(args: any): {
        components: {
            BaseUnitToggle: import("vue").DefineComponent<{
                unitPair: {
                    type: import("vue").PropType<keyof import("./BaseUnitToggle.vue").UnitPairs>;
                    required: true;
                    validator: (val: keyof import("./BaseUnitToggle.vue").UnitPairs) => boolean;
                };
                value: {
                    type: import("vue").PropType<number>;
                    required: true;
                };
                secondValue: {
                    type: import("vue").PropType<number>;
                    required: false;
                };
                valueSystem: {
                    type: import("vue").PropType<keyof import("./BaseUnitToggle.vue").UnitConfig>;
                    required: true;
                };
                inline: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }, unknown, {
                selectedSystem: keyof import("./BaseUnitToggle.vue").UnitConfig;
            }, {
                unitConfig(): import("./BaseUnitToggle.vue").UnitConfig;
                formattedValue(): string;
            }, {
                setSystem(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                unitPair: {
                    type: import("vue").PropType<keyof import("./BaseUnitToggle.vue").UnitPairs>;
                    required: true;
                    validator: (val: keyof import("./BaseUnitToggle.vue").UnitPairs) => boolean;
                };
                value: {
                    type: import("vue").PropType<number>;
                    required: true;
                };
                secondValue: {
                    type: import("vue").PropType<number>;
                    required: false;
                };
                valueSystem: {
                    type: import("vue").PropType<keyof import("./BaseUnitToggle.vue").UnitConfig>;
                    required: true;
                };
                inline: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>>, {
                inline: boolean;
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
}
export namespace KeepsPrecision {
    export namespace args_2 {
        let unitPair_3: string;
        export { unitPair_3 as unitPair };
        let value_3: number;
        export { value_3 as value };
        let secondValue_3: undefined;
        export { secondValue_3 as secondValue };
        let valueSystem_3: string;
        export { valueSystem_3 as valueSystem };
        export let formattedValue: number;
    }
    export { args_2 as args };
    export function render_1(args: any): {
        components: {
            BaseUnitToggle: import("vue").DefineComponent<{
                unitPair: {
                    type: import("vue").PropType<keyof import("./BaseUnitToggle.vue").UnitPairs>;
                    required: true;
                    validator: (val: keyof import("./BaseUnitToggle.vue").UnitPairs) => boolean;
                };
                value: {
                    type: import("vue").PropType<number>;
                    required: true;
                };
                secondValue: {
                    type: import("vue").PropType<number>;
                    required: false;
                };
                valueSystem: {
                    type: import("vue").PropType<keyof import("./BaseUnitToggle.vue").UnitConfig>;
                    required: true;
                };
                inline: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }, unknown, {
                selectedSystem: keyof import("./BaseUnitToggle.vue").UnitConfig;
            }, {
                unitConfig(): import("./BaseUnitToggle.vue").UnitConfig;
                formattedValue(): string;
            }, {
                setSystem(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                unitPair: {
                    type: import("vue").PropType<keyof import("./BaseUnitToggle.vue").UnitPairs>;
                    required: true;
                    validator: (val: keyof import("./BaseUnitToggle.vue").UnitPairs) => boolean;
                };
                value: {
                    type: import("vue").PropType<number>;
                    required: true;
                };
                secondValue: {
                    type: import("vue").PropType<number>;
                    required: false;
                };
                valueSystem: {
                    type: import("vue").PropType<keyof import("./BaseUnitToggle.vue").UnitConfig>;
                    required: true;
                };
                inline: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>>, {
                inline: boolean;
            }, {}>;
        };
        setup(): {
            args: any;
        };
        template: string;
    };
    export { render_1 as render };
}
