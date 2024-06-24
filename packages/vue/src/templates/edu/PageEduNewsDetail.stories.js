import { HeroMediaData } from './../../../../../apps/vue-storybook/stories/components/HeroMedia.stories'
import { BlockStreamfieldData } from './../../../../../apps/vue-storybook/stories/components/BlockStreamfield.stories.js'
import { BlockRelatedLinksData } from './../../../../../apps/vue-storybook/stories/components/BlockRelatedLinks.stories.js'
import PageEduNewsDetail from './PageEduNewsDetail.vue'

export default {
  title: 'Templates/EDU/PageEduNewsDetail',
  component: PageEduNewsDetail,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

export const EduNewsDetail = {
  args: {
    data: {
      slug: 'nasas-ingenuity-mars-helicopter-recharges-its-batteries-in-flight',
      url: '/news/nasas-ingenuity-mars-helicopter-recharges-its-batteries-in-flight',
      title: "NASA's Ingenuity Mars Helicopter Recharges Its Batteries in Flight",
      firstPublishedAt: '2024-06-20T20:36:49.657301+00:00',
      getTopicsForDisplay: [
        {
          title: 'Mars',
          url: 'http://localhost:3000/topics/mars'
        }
      ],
      topper: '',
      summary:
        'Headed to the Red Planet with the Perseverance rover, the pioneering helicopter is powered up for the first time in interplanetary space as part of a systems check.',
      thumbnailImage: {
        original: 'https://placekitten.com/400/200'
      },
      heroPosition: 'full_bleed',
      heroImage: HeroMediaData.image,
      heroImageInline: HeroMediaData.imageInline,
      ...BlockStreamfieldData
    }
  }
}

export const InlineHero = {
  args: {
    data: {
      ...EduNewsDetail.args.data,
      heroPosition: 'inline'
    }
  }
}

export const NoHero = {
  args: {
    data: {
      ...EduNewsDetail.args.data,
      hero: []
    }
  }
}
