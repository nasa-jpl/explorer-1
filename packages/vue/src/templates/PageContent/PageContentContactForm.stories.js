import { HeroMediaData } from '../HeroMedia/HeroMedia.stories'
import { BlockLinkCardCarouselData } from '../BlockLinkCarousel/BlockLinkCarousel.stories.js'

import PageContent from './PageContent'

export default {
  title: 'WWW/Layouts/PageContentFormContact',
  component: PageContent,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0"><story/></div>`,
    }),
  ],
  parameters: {
    html: {
      root: '#storyDecorator',
    },
    viewMode: 'canvas',
    docs: {
      description: {
        component:
          'Same as PageContent, but if the page has a slug of `contact-jpl`, the contact form will appear.',
      },
    },
  },
  excludeStories: /.*(Data)$/,
}

// data
export const PageContentData = {
  url: '/contact-jpl',
  slug: 'contact-jpl',
  breadcrumb:
    '[{"path": "/parent/", "title": "Overview"}, {"path": "/parent/placeholder-1/", "title": "Sibling Item 1"}, {"path": "/parent/placeholder-2/", "title": "Sibling Item 2"}, {"path": "/parent/placeholder-3/", "title": "Sibling Item 3"}]',
  title: 'Contact JPL',
  displayLabel: 'Contact Us',
  heroPosition: 'inline',
  heroImage: HeroMediaData.image,
  heroImageInline: HeroMediaData.imageInline,
  body: [
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n',
    },
  ],
  relatedContentHeading: 'Related Activities',
  relatedContent: BlockLinkCardCarouselData,
}

// template
const PageContentTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageContent },
  template: `<PageContent :data="contentPage"/>`,
})

export const Default = PageContentTemplate.bind({})
Default.storyName = 'PageContentFormContact' // single story hoisting
Default.args = {
  contentPage: PageContentData,
}
