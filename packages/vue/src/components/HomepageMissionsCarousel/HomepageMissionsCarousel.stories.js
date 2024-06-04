import imagePlanetJupiter from '../../.storybook/images/mission-highlights-800h-at-jupiter.png'
import imagePlanetEarth from '../../.storybook/images/mission-highlights-800h-earth-orbiting-on-earth.png'
import imageMoon from '../../.storybook/images/mission-highlights-800h-earths-moon.png'
import imageInterstellar from '../../.storybook/images/mission-highlights-800h-interstellar.jpg'
import imagePlanetMarsA from '../../.storybook/images/mission-highlights-800h-mars-orbiting.png'
import HomepageMissionsCarousel from './HomepageMissionsCarousel.vue'
import HomepageMissionsCarouselItem from './HomepageMissionsCarouselItem.vue'

export default {
  title: 'WWW/Components/Homepage/HomepageMissionsCarousel',
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
  template: `<div class="absolute inset-0 bg-black"><div class="w-80 mx-auto"><HomepageMissionsCarouselItem :data="item" /></div></div>`
})

// stories
export const Default = HomepageMissionsCarouselTemplate.bind({})
Default.args = {
  missionsCarousel: HomepageMissionsCarouselData.missionsCarousel
}

export const Item = HomepageMissionsCarouselItemTemplate.bind({})
Item.args = {
  item: HomepageMissionsCarouselData.missionsCarousel[0].targets[0]
}
