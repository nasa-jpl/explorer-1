import { BlockRelatedLinksTemplate } from './BlockRelatedLinks'
import { RelatedLinkTemplate } from './RelatedLink'

export default {
  title: 'Components/Blocks/BlockRelatedLinks',
  excludeStories: /.*Data$/,
  argTypes: {
    heading: {
      type: { name: 'string', required: false },
      description:
        'Heading text that will always align with the left edge of the block. This is useful when the component is used within a custom layout.',
    },
    links: {
      type: { name: 'array', required: true },
      description:
        'An array of link data objects. See `SingleLink` for object keys.',
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: '',
      },
    },
  },
}

export const BlockRelatedLinksData = {
  heading: 'Read more about this',
  links: [
    {
      text: 'A document download',
      variant: 'document',
      link: 'https://www.jpl.nasa.gov/',
    },
    {
      text: 'An internal link',
      variant: 'internal',
      link: '#',
    },
    {
      text: 'An external Link',
      variant: 'external',
      link: 'https://www.nasa.gov/',
    },
    {
      text: 'preventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainerpreventlongurlsfrombreakingoutofcontainer',
      variant: 'external',
      link: 'https://www.jpl.nasa.gov/',
    },
  ],
}

export const Block = BlockRelatedLinksTemplate.bind({})
Block.args = {
  heading: BlockRelatedLinksData.heading,
  links: BlockRelatedLinksData.links,
}
