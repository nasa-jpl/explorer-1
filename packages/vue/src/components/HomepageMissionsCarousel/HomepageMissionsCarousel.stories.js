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
  data: {
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
            url: '/images/mission-highlights-800h-earth-orbiting-on-earth.png',
            width: 787,
            height: 800
          },
          webp: {
            url: '/images/mission-highlights-800h-earth-orbiting-on-earth.png'
          }
        }
      },
      {
        name: 'Mars',
        pastMissions: 26,
        currentMissions: 0,
        image: {
          src: {
            url: '/images/mission-highlights-800h-mars-orbiting.png',
            width: 787,
            height: 800
          },
          webp: {
            url: '/images/mission-highlights-800h-mars-orbiting.png'
          }
        }
      },
      {
        name: 'Interstellar',
        pastMissions: 26,
        currentMissions: 0,
        image: {
          src: {
            url: '/images/mission-highlights-800h-interstellar.jpg',
            width: 787,
            height: 800
          },
          webp: {
            url: '/images/mission-highlights-800h-interstellar.jpg'
          }
        }
      },
      {
        name: 'Jupiter',
        pastMissions: 26,
        currentMissions: 0,
        image: {
          src: {
            url: '/images/mission-highlights-800h-at-jupiter.png',
            width: 787,
            height: 800
          },
          webp: {
            url: '/images/mission-highlights-800h-at-jupiter.png'
          }
        }
      },
      {
        name: 'Moon',
        pastMissions: 26,
        currentMissions: 0,
        image: {
          src: {
            url: '/images/mission-highlights-800h-earths-moon.png',
            width: 787,
            height: 800
          },
          webp: {
            url: '/images/mission-highlights-800h-earths-moon.png'
          }
        }
      },
      {
        name: 'Moon',
        pastMissions: 26,
        currentMissions: 0,
        image: {
          src: {
            url: '/images/mission-highlights-800h-earths-moon.png',
            width: 787,
            height: 800
          },
          webp: {
            url: '/images/mission-highlights-800h-earths-moon.png'
          }
        }
      }
    ]
  }
}

// stories
export const BaseStory = {
  args: HomepageMissionsCarouselData
}
export const Item = {
  args: {
    data: {
      name: 'Earth',
      pastMissions: 26,
      currentMissions: 20,
      topic: {
        title: 'Earth',
        url: '/topics/earth/'
      },
      image: {
        src: {
          url: '/images/mission-highlights-800h-earth-orbiting-on-earth.png',
          width: 787,
          height: 800
        },
        webp: {
          url: '/images/mission-highlights-800h-earth-orbiting-on-earth.png'
        }
      }
    }
  },
  render: (args) => ({
    components: { HomepageMissionsCarouselItem },
    setup() {
      return { args }
    },
    template: `<div class="absolute inset-0 bg-stars bg-black"><div class="w-80 mx-auto"><HomepageMissionsCarouselItem :data="args.data" /></div></div>`
  })
}
