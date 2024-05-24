import { RelatedLinkTemplate } from './RelatedLink'
import { BlockRelatedLinksData } from './BlockRelatedLinks.stories'

export default {
  title: 'Components/Blocks/BlockRelatedLinks/SingleLink',
  argTypes: {
    text: {
      type: { name: 'string', required: true },
      description: 'Link text.'
    },
    variant: {
      type: { name: 'string', required: true },
      description:
        'Link to a document, internal, or external source.  The type of link chosen will determine the icon and target window behavior.',
      control: {
        type: 'select',
        options: ['internal', 'external', 'document']
      },
      table: {
        defaultValue: { summary: 'external' }
      }
    },
    link: {
      type: { name: 'string', required: true },
      description: ''
    }
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: ''
      }
    }
  }
}

export const Default = RelatedLinkTemplate.bind({})
Default.storyName = 'SingleLink'
Default.args = {
  ...BlockRelatedLinksData.links[0]
}
