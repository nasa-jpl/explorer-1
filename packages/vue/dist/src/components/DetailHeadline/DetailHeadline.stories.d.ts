import { default as DetailHeadline } from './DetailHeadline.vue';
declare namespace _default {
    export let title: string;
    export { DetailHeadline as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace DetailHeadlineData {
    let title_1: string;
    export { title_1 as title };
    export let publicationDate: string;
    export namespace author {
        let name: string;
        let organization: string;
    }
    export let topics: {
        title: string;
        url: string;
    }[];
}
export namespace Default {
    export { DetailHeadlineData as args };
}
export namespace NoAuthor {
    namespace args {
        let title_2: string;
        export { title_2 as title };
        let publicationDate_1: string;
        export { publicationDate_1 as publicationDate };
        let topics_1: {
            title: string;
            url: string;
        }[];
        export { topics_1 as topics };
    }
}
