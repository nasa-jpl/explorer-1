import { BlockRelatedLinksTemplate } from './BlockRelatedLinks'
import { RelatedLinkTemplate } from './RelatedLink'

export default {
  title: 'Components/Blocks/BlockRelatedLinks',
  excludeStories: /.*Data$/,
  argTypes: {
    heading: {
      type: { name: 'string', required: false },
      description: 'A header for the list of links.',
    },
    text: {
      type: { name: 'string', required: false },
      description: 'Link text.',
    },
    variant: {
      type: 'string',
      description:
        'Link to a document, internal, or external link.  The type of link chosen will determine the icon and target window behavior.',
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
  heading: BlockRelatedLinksData.heading,
  variant: BlockRelatedLinksData.links[0].variant,
  link: BlockRelatedLinksData.links[0].link,
  text: BlockRelatedLinksData.links[0].text,
}
SingleLink.decorators = [
  (Story) => `
  <div>
    <h2 class="md:mb-8 mb-5 text-h5">${BlockRelatedLinksData.heading}</h2>
    <div class="sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3 mb-2">${Story()}</div>
  </div>
  `,
]

export const Default = BlockRelatedLinksTemplate.bind({})
Default.args = {
  heading: BlockRelatedLinksData.heading,
  links: BlockRelatedLinksData.links,
}
