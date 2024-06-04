import BlockRelatedLinks from '@explorer-1/vue/src/components/BlockRelatedLinks/BlockRelatedLinks.vue'

export default {
  title: 'Components/Blocks/BlockRelatedLinks',
  component: BlockRelatedLinks,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component:
          'A list of links formatted with background colors and icons indicating the type of link.'
      }
    }
  }
}

// data
export const BlockRelatedLinksData = {
  data: {
    blockType: 'RelatedLinksBlock',
    heading: 'Read more about this',
    links: [
      {
        text: 'A document download',
        document: {
          url: 'https://www.jpl.nasa.gov/'
        },
        page: '',
        externalLink: ''
      },
      {
        text: 'An internal link',
        document: '',
        page: {
          url: '/placeholder'
        },
        externalLink: ''
      },
      {
        text: 'An external Link',
        document: '',
        page: '',
        externalLink: 'https://www.jpl.nasa.gov/'
      },
      {
        text: 'preventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainer',
        document: '',
        page: '',
        externalLink: 'https://www.jpl.nasa.gov/'
      }
    ]
  }
}

export const Default = {
  name: 'BlockRelatedLinks',
  args: {
    ...BlockRelatedLinksData
  }
}
