import { default as HomepageStats } from './HomepageStats.vue';
declare namespace _default {
    export let title: string;
    export { HomepageStats as component };
    export let excludeStories: RegExp;
    export namespace parameters {
        let viewMode: string;
    }
}
export default _default;
export namespace HomepageStatsData {
    namespace asteroidWatchWidget {
        export namespace asteroidApproach {
            let date: string;
            let distanceKilometers: number;
            let distanceMiles: number;
            let externalLink: string;
        }
        export let heading: string;
        let title_1: string;
        export { title_1 as title };
    }
    namespace dsnWidget {
        let heading_1: string;
        export { heading_1 as heading };
        export let location: string;
        export let spacecraftName: string;
        export let transmitStatus: string;
        export let transmitTitle: string;
    }
    let statistics: ({
        blockType: string;
        heading: string;
        title: string;
        date?: undefined;
        dateDisplay?: undefined;
    } | {
        blockType: string;
        date: string;
        dateDisplay: string;
        heading: string;
        title: string;
    })[];
    let statisticsMissionCount: number;
    let featuredEmbed: never[];
}
export function Base(args: any): {
    props: string[];
    components: {
        HomepageStats: import('vue').DefineComponent<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }, unknown, {
            autoplayAdded: boolean;
        }, {
            dataMissionStatsBlock(): {
                blockType: string;
            } | null;
            dataGenericStatsBlock(): {
                blockType: string;
            } | null;
            hasFeaturedEmbed(): boolean;
        }, {
            playVideo(): null;
            filterBlocksByType(blockType: string): {
                blockType: string;
            }[] | null;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }>>, {}, {}>;
    };
    template: string;
};
export namespace Base {
    export { HomepageStatsData as args };
}
export function StaticDate(args: any): {
    props: string[];
    components: {
        HomepageStats: import('vue').DefineComponent<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }, unknown, {
            autoplayAdded: boolean;
        }, {
            dataMissionStatsBlock(): {
                blockType: string;
            } | null;
            dataGenericStatsBlock(): {
                blockType: string;
            } | null;
            hasFeaturedEmbed(): boolean;
        }, {
            playVideo(): null;
            filterBlocksByType(blockType: string): {
                blockType: string;
            }[] | null;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }>>, {}, {}>;
    };
    template: string;
};
export namespace StaticDate {
    namespace args {
        let statistics_1: ({
            blockType: string;
            heading: string;
            title: string;
            date?: undefined;
            dateDisplay?: undefined;
        } | {
            blockType: string;
            date: string;
            dateDisplay: string;
            heading: string;
            title: string;
        })[];
        export { statistics_1 as statistics };
    }
}
export function TimeElapsed(args: any): {
    props: string[];
    components: {
        HomepageStats: import('vue').DefineComponent<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }, unknown, {
            autoplayAdded: boolean;
        }, {
            dataMissionStatsBlock(): {
                blockType: string;
            } | null;
            dataGenericStatsBlock(): {
                blockType: string;
            } | null;
            hasFeaturedEmbed(): boolean;
        }, {
            playVideo(): null;
            filterBlocksByType(blockType: string): {
                blockType: string;
            }[] | null;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }>>, {}, {}>;
    };
    template: string;
};
export namespace TimeElapsed {
    export namespace args_1 {
        let statistics_2: ({
            blockType: string;
            heading: string;
            title: string;
            date?: undefined;
            dateDisplay?: undefined;
        } | {
            blockType: string;
            date: string;
            dateDisplay: string;
            heading: string;
            title: string;
        })[];
        export { statistics_2 as statistics };
    }
    export { args_1 as args };
}
export function WatchLive(args: any): {
    props: string[];
    components: {
        HomepageStats: import('vue').DefineComponent<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }, unknown, {
            autoplayAdded: boolean;
        }, {
            dataMissionStatsBlock(): {
                blockType: string;
            } | null;
            dataGenericStatsBlock(): {
                blockType: string;
            } | null;
            hasFeaturedEmbed(): boolean;
        }, {
            playVideo(): null;
            filterBlocksByType(blockType: string): {
                blockType: string;
            }[] | null;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }>>, {}, {}>;
    };
    template: string;
};
export namespace WatchLive {
    export namespace args_2 {
        let statistics_3: ({
            blockType: string;
            heading: string;
            title: string;
            date?: undefined;
            dateDisplay?: undefined;
        } | {
            blockType: string;
            date: string;
            dateDisplay: string;
            heading: string;
            title: string;
        })[];
        export { statistics_3 as statistics };
        let featuredEmbed_1: {
            heading: string;
            display: boolean;
        }[];
        export { featuredEmbed_1 as featuredEmbed };
    }
    export { args_2 as args };
}
export function WatchLiveNoVideo(args: any): {
    props: string[];
    components: {
        HomepageStats: import('vue').DefineComponent<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }, unknown, {
            autoplayAdded: boolean;
        }, {
            dataMissionStatsBlock(): {
                blockType: string;
            } | null;
            dataGenericStatsBlock(): {
                blockType: string;
            } | null;
            hasFeaturedEmbed(): boolean;
        }, {
            playVideo(): null;
            filterBlocksByType(blockType: string): {
                blockType: string;
            }[] | null;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }>>, {}, {}>;
    };
    template: string;
};
export namespace WatchLiveNoVideo {
    export namespace args_3 {
        let statistics_4: ({
            blockType: string;
            heading: string;
            title: string;
            date?: undefined;
            dateDisplay?: undefined;
        } | {
            blockType: string;
            date: string;
            dateDisplay: string;
            heading: string;
            title: string;
        })[];
        export { statistics_4 as statistics };
    }
    export { args_3 as args };
}
export function NoDsn(args: any): {
    props: string[];
    components: {
        HomepageStats: import('vue').DefineComponent<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }, unknown, {
            autoplayAdded: boolean;
        }, {
            dataMissionStatsBlock(): {
                blockType: string;
            } | null;
            dataGenericStatsBlock(): {
                blockType: string;
            } | null;
            hasFeaturedEmbed(): boolean;
        }, {
            playVideo(): null;
            filterBlocksByType(blockType: string): {
                blockType: string;
            }[] | null;
        }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
            statistics: {
                type: ArrayConstructor;
                required: false;
            };
            missionCount: {
                type: NumberConstructor;
                required: false;
            };
            dsn: {
                type: ObjectConstructor;
                required: false;
            };
            asteroidWatch: {
                type: ObjectConstructor;
                required: false;
            };
            featuredEmbed: {
                type: import('vue').PropType<{
                    display: boolean;
                }[]>;
                required: false;
            };
        }>>, {}, {}>;
    };
    template: string;
};
export namespace NoDsn {
    export namespace args_4 {
        export namespace dsnWidget_1 {
            let heading_2: string;
            export { heading_2 as heading };
            let location_1: string;
            export { location_1 as location };
            let spacecraftName_1: null;
            export { spacecraftName_1 as spacecraftName };
            let transmitStatus_1: string;
            export { transmitStatus_1 as transmitStatus };
            let transmitTitle_1: string;
            export { transmitTitle_1 as transmitTitle };
        }
        export { dsnWidget_1 as dsnWidget };
    }
    export { args_4 as args };
}
