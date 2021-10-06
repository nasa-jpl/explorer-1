import { BlockRelatedLinksTemplate } from './BlockRelatedLinks'
import { RelatedLinkTemplate } from './RelatedLink'

export default {
  title: 'Components/Blocks/BlockRelatedLinks',
  excludeStories: /.*Data$/,
  argTypes: {
    text: {
      type: { name: 'string', required: false },
      description: 'Link text.',
    },
    variant: {
      type: 'string',
      description:
        'Link to a document, internal, or external source.  The type of link chosen will determine the icon and target window behavior.',
      control: {
        type: 'select',
        options: ['internal', 'external', 'document'],
      },
      table: {
        defaultValue: { summary: 'external' },
      },
    },
    link: {
      type: { name: 'string', required: false },
      description: '',
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

export const SingleLink = RelatedLinkTemplate.bind({})
SingleLink.args = {
  variant: BlockRelatedLinksData.links[0].variant,
  link: BlockRelatedLinksData.links[0].link,
  text: BlockRelatedLinksData.links[0].text,
}

export const Default = BlockRelatedLinksTemplate.bind({})
Default.args = {
  heading: BlockRelatedLinksData.heading,
  links: BlockRelatedLinksData.links,
}
