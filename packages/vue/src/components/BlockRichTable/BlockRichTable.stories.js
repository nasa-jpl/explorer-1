import BlockRichTable from './BlockRichTable.vue'
import { BlockImageData } from './../BlockImage/BlockImage.stories'

export default {
  title: 'Components/Blocks/BlockRichTable',
  component: BlockRichTable,
  excludeStories: /.*Data$/
}

export const BlockRichTableData = {
  blockType: 'RichTableBlock',
  tableCaption: 'table caption',
  tableContent: {
    tableHead: [
      [
        {
          text: '1. Learn why we study geology on Earth and other planets'
        },
        {
          text: '1. Learn why we study geology on Earth and other planets'
        }
      ]
    ],
    tableBody: [
      [
        {
          ...BlockImageData,
          caption: '<p>My custom caption.</p>',
          displayCaption: true,
          blockType: 'ImageBlock'
        },
        { ...BlockImageData, blockType: 'ImageBlock' }
      ],
      [
        {
          blockType: 'CharBlock',
          value:
            "Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."
        },
        {
          blockType: 'CharBlock',
          value:
            "Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."
        }
      ]
    ]
  }
}

export const BaseStory = {
  name: 'BlockRichTable',
  args: {
    table: BlockRichTableData
  }
}
