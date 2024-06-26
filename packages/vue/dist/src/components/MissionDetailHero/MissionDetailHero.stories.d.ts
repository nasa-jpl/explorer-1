import { default as MissionDetailHero } from './MissionDetailHero.vue';
import { default as imageInstrumentCuberrtWebP } from '@explorer-1/common-storybook/src/images/mission-cuberrt.webp';
import { default as imageInstrumentCuberrt } from '@explorer-1/common-storybook/src/images/mission-cuberrt.png';
import { default as imageBgStars } from '@explorer-1/common-storybook/src/images/bg-stars-1440x810.jpg';
import { default as imageInstrumentEcostressWebP } from '@explorer-1/common-storybook/src/images/mission-ecostress.webp';
import { default as imageInstrumentEcostress } from '@explorer-1/common-storybook/src/images/mission-ecostress.png';
import { default as imageBgEarth } from '@explorer-1/common-storybook/src/images/bg-earth-1440x810.jpg';
import { default as imageInstrumentJason3WebP } from '@explorer-1/common-storybook/src/images/mission-jason3.webp';
import { default as imageInstrumentJason3 } from '@explorer-1/common-storybook/src/images/mission-jason3.png';
import { default as imageBgPlanet } from '@explorer-1/common-storybook/src/images/bg-planet-1440x810.jpg';
import { default as imageInstrumentOco2WebP } from '@explorer-1/common-storybook/src/images/mission-oco2.webp';
import { default as imageInstrumentOco2 } from '@explorer-1/common-storybook/src/images/mission-oco2.png';
/// <reference types="vite/client" />
declare namespace _default {
    export let title: string;
    export { MissionDetailHero as component };
    export namespace argTypes {
        namespace templateStyle {
            namespace control {
                let type: string;
                let options: string[];
            }
        }
    }
    export let decorators: (() => {
        template: string;
    })[];
    export namespace parameters {
        namespace html {
            let root: string;
        }
        let viewMode: string;
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace MissionDetailHeroData {
    let templateStyle_1: string;
    export { templateStyle_1 as templateStyle };
    let title_1: string;
    export { title_1 as title };
    export let subtitle: string;
    export let summary: string;
    export let missionWebsiteUrl: string;
    export namespace heroFallback {
        let srcSet: string;
        namespace src {
            let url: string;
            let width: number;
            let height: number;
        }
        let alt: string;
    }
    export namespace instrumentImage {
        export namespace webp {
            export { imageInstrumentCuberrtWebP as url };
        }
        export namespace src_1 {
            export { imageInstrumentCuberrt as url };
            let width_1: number;
            export { width_1 as width };
            let height_1: number;
            export { height_1 as height };
        }
        export { src_1 as src };
        let alt_1: string;
        export { alt_1 as alt };
    }
    export namespace instrumentBackground {
        namespace image {
            let srcSet_1: string;
            export { srcSet_1 as srcSet };
            export namespace src_2 {
                let url_1: string;
                export { url_1 as url };
                let width_2: number;
                export { width_2 as width };
                let height_2: number;
                export { height_2 as height };
            }
            export { src_2 as src };
        }
    }
}
export namespace CubeRrt {
    namespace args {
        let templateStyle_2: string;
        export { templateStyle_2 as templateStyle };
        let title_2: string;
        export { title_2 as title };
        let subtitle_1: string;
        export { subtitle_1 as subtitle };
        let summary_1: string;
        export { summary_1 as summary };
        let missionWebsiteUrl_1: string;
        export { missionWebsiteUrl_1 as missionWebsiteUrl };
        export namespace heroImage {
            let srcSet_2: string;
            export { srcSet_2 as srcSet };
            export namespace src_3 {
                let url_2: string;
                export { url_2 as url };
                let width_3: number;
                export { width_3 as width };
                let height_3: number;
                export { height_3 as height };
            }
            export { src_3 as src };
            let alt_2: string;
            export { alt_2 as alt };
        }
        export namespace instrumentImage_1 {
            export namespace webp_1 {
                export { imageInstrumentCuberrtWebP as url };
            }
            export { webp_1 as webp };
            export namespace src_4 {
                export { imageInstrumentCuberrt as url };
                let width_4: number;
                export { width_4 as width };
                let height_4: number;
                export { height_4 as height };
            }
            export { src_4 as src };
            let alt_3: string;
            export { alt_3 as alt };
        }
        export { instrumentImage_1 as instrumentImage };
        export namespace instrumentBackground_1 {
            export namespace image_1 {
                let srcSet_3: string;
                export { srcSet_3 as srcSet };
                export namespace src_5 {
                    export { imageBgStars as url };
                    let width_5: number;
                    export { width_5 as width };
                    let height_5: number;
                    export { height_5 as height };
                }
                export { src_5 as src };
            }
            export { image_1 as image };
        }
        export { instrumentBackground_1 as instrumentBackground };
    }
}
export namespace Ecostress {
    export namespace args_1 {
        let templateStyle_3: string;
        export { templateStyle_3 as templateStyle };
        let title_3: string;
        export { title_3 as title };
        let subtitle_2: string;
        export { subtitle_2 as subtitle };
        let summary_2: string;
        export { summary_2 as summary };
        let missionWebsiteUrl_2: string;
        export { missionWebsiteUrl_2 as missionWebsiteUrl };
        export namespace heroImage_1 {
            let srcSet_4: string;
            export { srcSet_4 as srcSet };
            export namespace src_6 {
                let url_3: string;
                export { url_3 as url };
                let width_6: number;
                export { width_6 as width };
                let height_6: number;
                export { height_6 as height };
            }
            export { src_6 as src };
            let alt_4: string;
            export { alt_4 as alt };
        }
        export { heroImage_1 as heroImage };
        export namespace instrumentImage_2 {
            export namespace webp_2 {
                export { imageInstrumentEcostressWebP as url };
            }
            export { webp_2 as webp };
            export namespace src_7 {
                export { imageInstrumentEcostress as url };
                let width_7: number;
                export { width_7 as width };
                let height_7: number;
                export { height_7 as height };
            }
            export { src_7 as src };
            let alt_5: string;
            export { alt_5 as alt };
        }
        export { instrumentImage_2 as instrumentImage };
        export namespace instrumentBackground_2 {
            export namespace image_2 {
                let srcSet_5: string;
                export { srcSet_5 as srcSet };
                export namespace src_8 {
                    export { imageBgEarth as url };
                    let width_8: number;
                    export { width_8 as width };
                    let height_8: number;
                    export { height_8 as height };
                }
                export { src_8 as src };
            }
            export { image_2 as image };
        }
        export { instrumentBackground_2 as instrumentBackground };
    }
    export { args_1 as args };
}
export namespace Jason3 {
    export namespace args_2 {
        let templateStyle_4: string;
        export { templateStyle_4 as templateStyle };
        let title_4: string;
        export { title_4 as title };
        let subtitle_3: null;
        export { subtitle_3 as subtitle };
        let summary_3: string;
        export { summary_3 as summary };
        let missionWebsiteUrl_3: string;
        export { missionWebsiteUrl_3 as missionWebsiteUrl };
        export namespace heroImage_2 {
            let srcSet_6: string;
            export { srcSet_6 as srcSet };
            export namespace src_9 {
                let url_4: string;
                export { url_4 as url };
                let width_9: number;
                export { width_9 as width };
                let height_9: number;
                export { height_9 as height };
            }
            export { src_9 as src };
            let alt_6: string;
            export { alt_6 as alt };
        }
        export { heroImage_2 as heroImage };
        export namespace instrumentImage_3 {
            export namespace webp_3 {
                export { imageInstrumentJason3WebP as url };
            }
            export { webp_3 as webp };
            export namespace src_10 {
                export { imageInstrumentJason3 as url };
                let width_10: number;
                export { width_10 as width };
                let height_10: number;
                export { height_10 as height };
            }
            export { src_10 as src };
            let alt_7: string;
            export { alt_7 as alt };
        }
        export { instrumentImage_3 as instrumentImage };
        export namespace instrumentBackground_3 {
            export namespace image_3 {
                let srcSet_7: string;
                export { srcSet_7 as srcSet };
                export namespace src_11 {
                    export { imageBgPlanet as url };
                    let width_11: number;
                    export { width_11 as width };
                    let height_11: number;
                    export { height_11 as height };
                }
                export { src_11 as src };
            }
            export { image_3 as image };
        }
        export { instrumentBackground_3 as instrumentBackground };
    }
    export { args_2 as args };
}
export namespace Oco2 {
    export namespace args_3 {
        let templateStyle_5: string;
        export { templateStyle_5 as templateStyle };
        let title_5: string;
        export { title_5 as title };
        let subtitle_4: string;
        export { subtitle_4 as subtitle };
        let summary_4: string;
        export { summary_4 as summary };
        let missionWebsiteUrl_4: string;
        export { missionWebsiteUrl_4 as missionWebsiteUrl };
        export namespace heroImage_3 {
            let srcSet_8: string;
            export { srcSet_8 as srcSet };
            export namespace src_12 {
                let url_5: string;
                export { url_5 as url };
                let width_12: number;
                export { width_12 as width };
                let height_12: number;
                export { height_12 as height };
            }
            export { src_12 as src };
            let alt_8: string;
            export { alt_8 as alt };
        }
        export { heroImage_3 as heroImage };
        export namespace instrumentImage_4 {
            export namespace webp_4 {
                export { imageInstrumentOco2WebP as url };
            }
            export { webp_4 as webp };
            export namespace src_13 {
                export { imageInstrumentOco2 as url };
                let width_13: number;
                export { width_13 as width };
                let height_13: number;
                export { height_13 as height };
            }
            export { src_13 as src };
            let alt_9: string;
            export { alt_9 as alt };
        }
        export { instrumentImage_4 as instrumentImage };
        export namespace instrumentBackground_4 {
            export namespace image_4 {
                let srcSet_9: string;
                export { srcSet_9 as srcSet };
                export namespace src_14 {
                    export { imageBgEarth as url };
                    let width_14: number;
                    export { width_14 as width };
                    let height_14: number;
                    export { height_14 as height };
                }
                export { src_14 as src };
            }
            export { image_4 as image };
        }
        export { instrumentBackground_4 as instrumentBackground };
    }
    export { args_3 as args };
}
export namespace NoBackground {
    export namespace args_4 {
        let templateStyle_6: string;
        export { templateStyle_6 as templateStyle };
        let title_6: string;
        export { title_6 as title };
        let subtitle_5: string;
        export { subtitle_5 as subtitle };
        let summary_5: string;
        export { summary_5 as summary };
        let missionWebsiteUrl_5: string;
        export { missionWebsiteUrl_5 as missionWebsiteUrl };
        export namespace heroImage_4 {
            let srcSet_10: string;
            export { srcSet_10 as srcSet };
            export namespace src_15 {
                let url_6: string;
                export { url_6 as url };
                let width_15: number;
                export { width_15 as width };
                let height_15: number;
                export { height_15 as height };
            }
            export { src_15 as src };
            let alt_10: string;
            export { alt_10 as alt };
        }
        export { heroImage_4 as heroImage };
        export namespace instrumentImage_5 {
            export namespace webp_5 {
                export { imageInstrumentOco2WebP as url };
            }
            export { webp_5 as webp };
            export namespace src_16 {
                export { imageInstrumentOco2 as url };
                let width_16: number;
                export { width_16 as width };
                let height_16: number;
                export { height_16 as height };
            }
            export { src_16 as src };
            let alt_11: string;
            export { alt_11 as alt };
        }
        export { instrumentImage_5 as instrumentImage };
    }
    export { args_4 as args };
}
export namespace StaticHero {
    export namespace args_5 {
        let templateStyle_7: string;
        export { templateStyle_7 as templateStyle };
        let title_7: string;
        export { title_7 as title };
        let subtitle_6: string;
        export { subtitle_6 as subtitle };
        let summary_6: string;
        export { summary_6 as summary };
        let missionWebsiteUrl_6: string;
        export { missionWebsiteUrl_6 as missionWebsiteUrl };
        export namespace heroFallback_1 {
            let srcSet_11: string;
            export { srcSet_11 as srcSet };
            export namespace src_17 {
                let url_7: string;
                export { url_7 as url };
                let width_17: number;
                export { width_17 as width };
                let height_17: number;
                export { height_17 as height };
            }
            export { src_17 as src };
            let alt_12: string;
            export { alt_12 as alt };
        }
        export { heroFallback_1 as heroFallback };
    }
    export { args_5 as args };
}
