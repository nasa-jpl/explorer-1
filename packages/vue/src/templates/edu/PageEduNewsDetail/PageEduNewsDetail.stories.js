import { HeroMediaData } from './../../../components/HeroMedia/HeroMedia.stories'
import { BlockStreamfieldData } from './../../../components/BlockStreamfield/BlockStreamfield.stories'
import { AboutTheAuthorData } from './../../../components/AboutTheAuthor/AboutTheAuthor.stories'

import PageEduNewsDetail from './PageEduNewsDetail.vue'

export default {
  title: 'Templates/EDU/PageEduNewsDetail',
  component: PageEduNewsDetail,
  tags: ['!autodocs'],
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="disable-nav-offset"><story/></div>`
    })
  ],
  globals: { theme: 'ThemeEdu' },
  parameters: {
    layout: 'fullscreen',
    html: {
      root: '#storyRoot'
    },
    docs: {
      description: {
        component: 'Doesn\'t look like EDU? Be sure to select "EDU Theme" in the toolbar dropdown.'
      }
    }
  },
  excludeStories: /.*Data$/
}

export const BaseStory = {
  args: {
    data: {
      slug: 'nasas-ingenuity-mars-helicopter-recharges-its-batteries-in-flight',
      url: '/news/nasas-ingenuity-mars-helicopter-recharges-its-batteries-in-flight',
      title: "NASA's Ingenuity Mars Helicopter Recharges Its Batteries in Flight",
      publicationDate: '2024-06-20 20:36:49.657301+00:00',
      readTime: '5 min read',
      authors: AboutTheAuthorData,
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
        original: 'https://picsum.photos/400/200'
      },
      heroPosition: 'full_bleed',
      heroImage: HeroMediaData.image,
      heroImageInline: HeroMediaData.imageInline,
      showJumpMenu: true,
      ...BlockStreamfieldData
    }
  }
}

export const InlineHero = {
  args: {
    data: {
      ...BaseStory.args.data,
      heroPosition: 'inline',
      showJumpMenu: true
    }
  }
}

export const NoHero = {
  args: {
    data: {
      ...BaseStory.args.data,
      hero: [],
      showJumpMenu: true
    }
  }
}
