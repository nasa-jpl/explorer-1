import TopicDetailMissionCarousel from '@explorer-1/vue/src/components/TopicDetailMissionCarousel/TopicDetailMissionCarousel.vue'
export default {
  title: 'WWW/TopicDetail/MissionCarousel/TopicDetailMissionCarousel',
  component: TopicDetailMissionCarousel,
  excludeStories: /.*Data$/
}

export const TopicDetailMissionCarouselData = [
  {
    clockType: 'time_in_orbit',
    showClock: true,
    startDateTime: '2018-10-22T19:00:00+00:00',
    status: 'current',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/560/620',
        width: 560,
        height: 620
      }
    },
    title: 'Gravity Recovery and Climate Experiment Follow-On',
    url: '/missions/gravity-recovery-and-climate-experiment-follow-on-grace-fo/'
  },
  {
    clockType: 'time_on_mars',
    showClock: true,
    startDateTime: '2018-05-05T15:00:00+00:00',
    status: 'current',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/560/620',
        width: 560,
        height: 620
      }
    },
    title: 'InSight',
    url: '/missions/insight/'
  },
  {
    clockType: 'countdown',
    showClock: false,
    startDateTime: null,
    status: 'current',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/560/620',
        width: 560,
        height: 620
      }
    },
    title: 'Atmospheric Infrared Sounder',
    url: '/missions/atmospheric-infrared-sounder-airs/'
  },
  {
    clockType: 'countdown',
    showClock: false,
    startDateTime: null,
    status: 'past',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/560/620',
        width: 560,
        height: 620
      }
    },
    title: 'Dawn',
    url: '/missions/dawn/'
  },
  {
    clockType: 'countdown',
    showClock: false,
    startDateTime: null,
    status: 'current',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/560/620',
        width: 560,
        height: 620
      }
    },
    title: 'Deep Space Atomic Clock',
    url: '/missions/deep-space-atomic-clock-dsac/'
  }
]
// stories
export const Default = {
  args: {
    title: 'Mars',
    relatedMissionsLinkUrl: 'http://localhost:3000/missions?mission_target=Mars',
    relatedMissionsLinkText: 'All Mars missions',
    items: TopicDetailMissionCarouselData
  }
}
