import { default as TopicDetailMoreItem } from './TopicDetailMoreItem.vue';
declare namespace _default {
    export let title: string;
    export { TopicDetailMoreItem as component };
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
export namespace Default {
    namespace args {
        import data = TopicDetailMoreItemData.default;
        export { data };
    }
}
export namespace PageChooser {
    export namespace args_1 {
        import data_1 = TopicDetailMoreItemData.pageChooser;
        export { data_1 as data };
    }
    export { args_1 as args };
}
export namespace ExternalLink {
    export namespace args_2 {
        import data_2 = TopicDetailMoreItemData.externalLink;
        export { data_2 as data };
    }
    export { args_2 as args };
}
export namespace Video {
    export namespace args_3 {
        import data_3 = TopicDetailMoreItemData.video;
        export { data_3 as data };
    }
    export { args_3 as args };
}
export namespace NoImage {
    export namespace args_4 {
        export namespace data_4 {
            export let thumbnailImage: null;
            export let __typename: string;
            export let type: string;
            export let date: string;
            let title_1: string;
            export { title_1 as title };
            export let url: string;
            export let label: string;
        }
        export { data_4 as data };
    }
    export { args_4 as args };
}
declare namespace TopicDetailMoreItemData {
    namespace _default {
        let __typename_1: string;
        export { __typename_1 as __typename };
        let type_1: string;
        export { type_1 as type };
        let url_1: string;
        export { url_1 as url };
        let title_2: string;
        export { title_2 as title };
        let date_1: string;
        export { date_1 as date };
        let label_1: string;
        export { label_1 as label };
        export namespace thumbnailImage_1 {
            namespace src {
                export let width: string;
                export let height: string;
                let url_2: string;
                export { url_2 as url };
            }
            let srcSet: string;
        }
        export { thumbnailImage_1 as thumbnailImage };
    }
    export { _default as default };
    export namespace pageChooser {
        let __typename_2: string;
        export { __typename_2 as __typename };
        let type_2: string;
        export { type_2 as type };
        export namespace page {
            let label_2: string;
            export { label_2 as label };
            export namespace thumbnailImage_2 {
                export namespace src_1 {
                    let width_1: string;
                    export { width_1 as width };
                    let height_1: string;
                    export { height_1 as height };
                    let url_3: string;
                    export { url_3 as url };
                }
                export { src_1 as src };
                let srcSet_1: string;
                export { srcSet_1 as srcSet };
            }
            export { thumbnailImage_2 as thumbnailImage };
            let title_3: string;
            export { title_3 as title };
            let url_4: string;
            export { url_4 as url };
        }
    }
    export namespace externalLink {
        export namespace thumbnailImage_3 {
            export namespace src_2 {
                let width_2: string;
                export { width_2 as width };
                let height_2: string;
                export { height_2 as height };
                let url_5: string;
                export { url_5 as url };
            }
            export { src_2 as src };
            let srcSet_2: string;
            export { srcSet_2 as srcSet };
        }
        export { thumbnailImage_3 as thumbnailImage };
    }
    export namespace video {
        let __typename_3: string;
        export { __typename_3 as __typename };
        let type_3: string;
        export { type_3 as type };
        let url_6: string;
        export { url_6 as url };
        let title_4: string;
        export { title_4 as title };
        let date_2: string;
        export { date_2 as date };
        let label_3: string;
        export { label_3 as label };
        export namespace thumbnailImage_4 {
            export namespace src_3 {
                let width_3: string;
                export { width_3 as width };
                let height_3: string;
                export { height_3 as height };
                let url_7: string;
                export { url_7 as url };
            }
            export { src_3 as src };
            let srcSet_3: string;
            export { srcSet_3 as srcSet };
        }
        export { thumbnailImage_4 as thumbnailImage };
    }
}
