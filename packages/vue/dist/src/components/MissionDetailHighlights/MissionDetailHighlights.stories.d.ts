import { default as MissionDetailHighlights } from './MissionDetailHighlights.vue';
import { default as imagePlanetEarth } from '@explorer-1/common-storybook/src/images/mission-highlights-800h-earth-orbiting-on-earth.png';
import { default as imagePlanetMarsA } from '@explorer-1/common-storybook/src/images/mission-highlights-800h-mars-orbiting.png';
import { default as imagePlanetMarsB } from '@explorer-1/common-storybook/src/images/mission-highlights-800h-on-mars.png';
import { default as imageMoon } from '@explorer-1/common-storybook/src/images/mission-highlights-800h-earths-moon.png';
import { default as imagePlanetJupiter } from '@explorer-1/common-storybook/src/images/mission-highlights-800h-at-jupiter.png';
import { default as imageInterstellar } from '@explorer-1/common-storybook/src/images/mission-highlights-800h-interstellar.jpg';
/// <reference types="vite/client" />
declare namespace _default {
    export let title: string;
    export { MissionDetailHighlights as component };
    export namespace parameters {
        let viewMode: string;
    }
    export let excludeStories: RegExp;
}
export default _default;
export namespace MissionDetailHighlightsData {
    let missionTitle: string;
    let highlightsHeading: string;
    namespace highlightsGraphic {
        namespace webp {
            export { imagePlanetEarth as url };
        }
        namespace src {
            export { imagePlanetEarth as url };
            export let width: number;
            export let height: number;
        }
        let alt: string;
    }
    let showHighlightsAnimation: boolean;
    let highlights: ({
        date: string;
        heading: string;
        highlightLink: {
            externalLink: null;
            page: {
                title: string;
                url: string;
            };
        };
        summary: string;
    } | {
        date: string;
        heading: null;
        highlightLink: {
            externalLink: null;
            page: {
                title: string;
                url: string;
            };
        };
        summary: null;
    } | {
        date: string;
        heading: string;
        highlightLink: {
            externalLink: string;
            page: null;
        };
        summary: string;
    })[];
}
export namespace Earth {
    namespace args {
        import animation = MissionDetailHighlightsData.showHighlightsAnimation;
        export { animation };
        import graphic = MissionDetailHighlightsData.highlightsGraphic;
        export { graphic };
        import heading = MissionDetailHighlightsData.highlightsHeading;
        export { heading };
        import missionTitle_1 = MissionDetailHighlightsData.missionTitle;
        export { missionTitle_1 as missionTitle };
        import highlights_1 = MissionDetailHighlightsData.highlights;
        export { highlights_1 as highlights };
    }
}
export namespace Mars1 {
    export namespace args_1 {
        import animation_1 = MissionDetailHighlightsData.showHighlightsAnimation;
        export { animation_1 as animation };
        export namespace graphic_1 {
            export namespace webp_1 {
                export { imagePlanetMarsA as url };
            }
            export { webp_1 as webp };
            export namespace src_1 {
                export { imagePlanetMarsA as url };
                let width_1: number;
                export { width_1 as width };
                let height_1: number;
                export { height_1 as height };
            }
            export { src_1 as src };
            let alt_1: string;
            export { alt_1 as alt };
        }
        export { graphic_1 as graphic };
        import heading_1 = MissionDetailHighlightsData.highlightsHeading;
        export { heading_1 as heading };
        let missionTitle_2: string;
        export { missionTitle_2 as missionTitle };
        import highlights_2 = MissionDetailHighlightsData.highlights;
        export { highlights_2 as highlights };
    }
    export { args_1 as args };
}
export namespace Mars2 {
    export namespace args_2 {
        import animation_2 = MissionDetailHighlightsData.showHighlightsAnimation;
        export { animation_2 as animation };
        export namespace graphic_2 {
            export namespace webp_2 {
                export { imagePlanetMarsB as url };
            }
            export { webp_2 as webp };
            export namespace src_2 {
                export { imagePlanetMarsB as url };
                let width_2: number;
                export { width_2 as width };
                let height_2: number;
                export { height_2 as height };
            }
            export { src_2 as src };
            let alt_2: string;
            export { alt_2 as alt };
        }
        export { graphic_2 as graphic };
        import heading_2 = MissionDetailHighlightsData.highlightsHeading;
        export { heading_2 as heading };
        import missionTitle_3 = MissionDetailHighlightsData.missionTitle;
        export { missionTitle_3 as missionTitle };
        import highlights_3 = MissionDetailHighlightsData.highlights;
        export { highlights_3 as highlights };
    }
    export { args_2 as args };
}
export namespace Moon {
    export namespace args_3 {
        export namespace graphic_3 {
            export namespace webp_3 {
                export { imageMoon as url };
            }
            export { webp_3 as webp };
            export namespace src_3 {
                export { imageMoon as url };
                let width_3: number;
                export { width_3 as width };
                let height_3: number;
                export { height_3 as height };
            }
            export { src_3 as src };
            let alt_3: string;
            export { alt_3 as alt };
        }
        export { graphic_3 as graphic };
    }
    export { args_3 as args };
}
export namespace Jupiter {
    export namespace args_4 {
        export namespace graphic_4 {
            export namespace webp_4 {
                export { imagePlanetJupiter as url };
            }
            export { webp_4 as webp };
            export namespace src_4 {
                export { imagePlanetJupiter as url };
                let width_4: number;
                export { width_4 as width };
                let height_4: number;
                export { height_4 as height };
            }
            export { src_4 as src };
            let alt_4: string;
            export { alt_4 as alt };
        }
        export { graphic_4 as graphic };
    }
    export { args_4 as args };
}
export namespace NoPlanet {
    export namespace args_5 {
        let animation_3: boolean;
        export { animation_3 as animation };
        export namespace graphic_5 {
            export namespace webp_5 {
                export { imageInterstellar as url };
            }
            export { webp_5 as webp };
            export namespace src_5 {
                export { imageInterstellar as url };
                let width_5: number;
                export { width_5 as width };
                let height_5: number;
                export { height_5 as height };
            }
            export { src_5 as src };
            let alt_5: string;
            export { alt_5 as alt };
        }
        export { graphic_5 as graphic };
    }
    export { args_5 as args };
}
export namespace MinimalContent {
    export namespace args_6 {
        let animation_4: boolean;
        export { animation_4 as animation };
        export namespace graphic_6 {
            export namespace webp_6 {
                export { imageInterstellar as url };
            }
            export { webp_6 as webp };
            export namespace src_6 {
                export { imageInterstellar as url };
                let width_6: number;
                export { width_6 as width };
                let height_6: number;
                export { height_6 as height };
            }
            export { src_6 as src };
            let alt_6: string;
            export { alt_6 as alt };
        }
        export { graphic_6 as graphic };
        let highlights_4: {
            heading: string;
            highlightLink: {
                externalLink: string;
                page: null;
            };
            summary: string;
        }[];
        export { highlights_4 as highlights };
    }
    export { args_6 as args };
}
export namespace NoImages {
    export namespace args_7 {
        let missionTitle_4: string;
        export { missionTitle_4 as missionTitle };
        let heading_3: string;
        export { heading_3 as heading };
        let animation_5: boolean;
        export { animation_5 as animation };
        let highlights_5: ({
            date: string;
            heading: string;
            highlightLink: {
                externalLink: null;
                page: {
                    title: string;
                    url: string;
                };
            };
            summary: string;
        } | {
            date: string;
            heading: null;
            highlightLink: {
                externalLink: null;
                page: {
                    title: string;
                    url: string;
                };
            };
            summary: null;
        } | {
            date: string;
            heading: string;
            highlightLink: {
                externalLink: string;
                page: null;
            };
            summary: string;
        })[];
        export { highlights_5 as highlights };
    }
    export { args_7 as args };
}
