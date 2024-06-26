import { default as SearchPagination } from './SearchPagination.vue';
declare namespace _default {
    export let title: string;
    export { SearchPagination as component };
    export let excludeStories: RegExp;
}
export default _default;
export namespace TwoPages {
    namespace args {
        let totalPages: number;
        let currentPage: number;
    }
}
export namespace ThreePages {
    export namespace args_1 {
        let totalPages_1: number;
        export { totalPages_1 as totalPages };
        let currentPage_1: number;
        export { currentPage_1 as currentPage };
    }
    export { args_1 as args };
}
export namespace FourPages {
    export namespace args_2 {
        let totalPages_2: number;
        export { totalPages_2 as totalPages };
        let currentPage_2: number;
        export { currentPage_2 as currentPage };
    }
    export { args_2 as args };
}
export namespace FivePages {
    export namespace args_3 {
        let totalPages_3: number;
        export { totalPages_3 as totalPages };
        let currentPage_3: number;
        export { currentPage_3 as currentPage };
    }
    export { args_3 as args };
}
export namespace FirstOfMany {
    export namespace args_4 {
        let totalPages_4: number;
        export { totalPages_4 as totalPages };
        let currentPage_4: number;
        export { currentPage_4 as currentPage };
    }
    export { args_4 as args };
}
export namespace MiddleOfMany {
    export namespace args_5 {
        let totalPages_5: number;
        export { totalPages_5 as totalPages };
        let currentPage_5: number;
        export { currentPage_5 as currentPage };
    }
    export { args_5 as args };
}
export namespace LastOfMany {
    export namespace args_6 {
        let totalPages_6: number;
        export { totalPages_6 as totalPages };
        let currentPage_6: number;
        export { currentPage_6 as currentPage };
    }
    export { args_6 as args };
}
