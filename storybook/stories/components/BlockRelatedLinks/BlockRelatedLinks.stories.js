import { BlockRelatedLinksTemplate } from './BlockRelatedLinks'

export default {
  title: 'Components/Blocks/BlockRelatedLinks',
  excludeStories: /.*Data$/,
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

export const BlockRelatedLinks = BlockRelatedLinksTemplate.bind({})
BlockRelatedLinks.args = {
  heading: BlockRelatedLinksData.heading,
  links: BlockRelatedLinksData.links,
}
