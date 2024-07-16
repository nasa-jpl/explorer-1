import imagePlanetJupiter from '@explorer-1/common-storybook/src/images/mission-highlights-800h-at-jupiter.png'
import imagePlanetEarth from '@explorer-1/common-storybook/src/images/mission-highlights-800h-earth-orbiting-on-earth.png'
import imageMoon from '@explorer-1/common-storybook/src/images/mission-highlights-800h-earths-moon.png'
import imageInterstellar from '@explorer-1/common-storybook/src/images/mission-highlights-800h-interstellar.jpg'
import imagePlanetMarsA from '@explorer-1/common-storybook/src/images/mission-highlights-800h-mars-orbiting.png'
import HomepageMissionsCarousel from './HomepageMissionsCarousel.vue'
import HomepageMissionsCarouselItem from './HomepageMissionsCarouselItem.vue'

export default {
  title: 'Components/WWW/Homepage/HomepageMissionsCarousel',
  component: HomepageMissionsCarousel,
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'canvas'
  }
}
export const HomepageMissionsCarouselData = {
  missionsCarousel: [
    {
      heading: 'Exploring the Universe',
      label: 'Missions',
      summary:
        'Spacecraft developed at JPL have flown to every planet in our solar system and the Sun.',
      targets: [
        {
          name: 'Earth',
          pastMissions: 26,
          currentMissions: 20,
          topic: {
            title: 'Earth',
            url: '/topics/earth/'
          },
          image: {
            src: {
              url: imagePlanetEarth,
              width: 787,
              height: 800
            },
            webp: {
              url: imagePlanetEarth
            }
          }
        },
        {
          name: 'Mars',
          pastMissions: 26,
          currentMissions: 0,
          image: {
            src: {
              url: imagePlanetMarsA,
              width: 787,
              height: 800
            },
            webp: {
              url: imagePlanetMarsA
            }
          }
        },
        {
          name: 'Interstellar',
          pastMissions: 26,
          currentMissions: 0,
          image: {
            src: {
              url: imageInterstellar,
              width: 787,
              height: 800
            },
            webp: {
              url: imageInterstellar
            }
          }
        },
        {
          name: 'Jupiter',
          pastMissions: 26,
          currentMissions: 0,
          image: {
            src: {
              url: imagePlanetJupiter,
              width: 787,
              height: 800
            },
            webp: {
              url: imagePlanetJupiter
            }
          }
        },
        {
          name: 'Moon',
          pastMissions: 26,
          currentMissions: 0,
          image: {
            src: {
              url: imageMoon,
              width: 787,
              height: 800
            },
            webp: {
              url: imageMoon
            }
          }
        },
        {
          name: 'Moon',
          pastMissions: 26,
          currentMissions: 0,
          image: {
            src: {
              url: imageMoon,
              width: 787,
              height: 800
            },
            webp: {
              url: imageMoon
            }
          }
        }
      ]
    }
  ]
}
// template
const HomepageMissionsCarouselTemplate = (args) => ({
  props: Object.keys(args),
  components: { HomepageMissionsCarousel },
  template: `<HomepageMissionsCarousel :data="missionsCarousel[0]" />`
})

const HomepageMissionsCarouselItemTemplate = (args) => ({
  props: Object.keys(args),
  components: { HomepageMissionsCarouselItem },
  template: `<div class="absolute inset-0 bg-stars edu:bg-primary"><div class="w-80 mx-auto"><HomepageMissionsCarouselItem :data="item" /></div></div>`
})

// stories
export const BaseStory = {
  args: {
    data: HomepageMissionsCarouselData.missionsCarousel
  }
}
export const Item = {
  args: {
    data: HomepageMissionsCarouselData.missionsCarousel[0].targets[0]
  },
  render: (args) => ({
    components: { HomepageMissionsCarouselItem },
    setup() {
      return { args }
    },
    template: `<div class="absolute inset-0 bg-stars bg-black"><div class="w-80 mx-auto"><HomepageMissionsCarouselItem v-bind="args" /></div></div>`
  })
}
