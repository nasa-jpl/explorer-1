import { HeroMediaData } from './../../../components/HeroMedia/HeroMedia.stories'
import { BlockStreamfieldTruncatedData } from './../../../components/BlockStreamfield/BlockStreamfield.stories'
import PageEduNewsDetail from './PageEduNewsDetail.vue'

export default {
  title: 'Templates/EDU/PageEduNewsDetail',
  component: PageEduNewsDetail,
  tags: ['!autodocs'],
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    layout: 'fullscreen',
    html: {
      root: '#storyDecorator'
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
      authors: [
        {
          author: {
            name: 'Author Name',
            organization: 'Organization Name'
          }
        }
      ],
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
      ...BlockStreamfieldTruncatedData
    }
  }
}

export const InlineHero = {
  args: {
    data: {
      ...BaseStory.args.data,
      heroPosition: 'inline'
    }
  }
}

export const NoHero = {
  args: {
    data: {
      ...BaseStory.args.data,
      hero: []
    }
  }
}
