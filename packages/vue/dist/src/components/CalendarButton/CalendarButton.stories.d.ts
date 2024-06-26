import { default as CalendarButton } from './CalendarButton.vue';
declare namespace _default {
    export let title: string;
    export { CalendarButton as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace CalendarButtonData {
    let title_1: string;
    export { title_1 as title };
    export let location: string;
    export let isAllDay: boolean;
    export let startDatetime: string;
    export let endDatetime: string;
}
export function Default(args: any): {
    props: string[];
    components: {
        CalendarButton: import('vue').DefineComponent<{
            isAllDay: {
                type: BooleanConstructor;
                required: true;
            };
            startDatetime: {
                type: StringConstructor;
                required: true;
            };
            endDatetime: {
                type: StringConstructor;
                required: false;
            };
            title: {
                type: StringConstructor;
                required: false;
            };
            location: {
                type: StringConstructor;
                required: false;
            };
            description: {
                type: StringConstructor;
                required: false;
            };
        }, unknown, unknown, {
            icalendar(): import('datebook').ICalendar;
        }, {
            addSlashes(string: string): string;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            isAllDay: {
                type: BooleanConstructor;
                required: true;
            };
            startDatetime: {
                type: StringConstructor;
                required: true;
            };
            endDatetime: {
                type: StringConstructor;
                required: false;
            };
            title: {
                type: StringConstructor;
                required: false;
            };
            location: {
                type: StringConstructor;
                required: false;
            };
            description: {
                type: StringConstructor;
                required: false;
            };
        }>>, {}, {}>;
    };
    template: string;
};
export namespace Default {
    namespace args { }
}
