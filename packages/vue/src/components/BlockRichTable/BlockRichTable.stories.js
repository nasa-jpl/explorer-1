import BlockRichTable from './BlockRichTable.vue'
import { BlockImageData } from './../BlockImage/BlockImage.stories'

export default {
  title: 'Components/Blocks/BlockRichTable',
  component: BlockRichTable,
  tags: ['!autodocs'],
  excludeStories: /.*Data$/
}

export const BlockRichTableData = {
  blockType: 'RichTableBlock',
  tableCaption: 'table caption',
  tableContent: {
    tableHead: [
      [
        {
          text: '1. Learn'
        },
        {
          text: '2. Learn why we study geology on Earth and other planets'
        },
        {
          text: '3. Read about it'
        },
        {
          text: '4. Another column'
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
        { ...BlockImageData, blockType: 'ImageBlock' },
        { ...BlockImageData, blockType: 'ImageBlock' },
        {
          blockType: 'CharBlock',
          value:
            "Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."
        }
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
        },
        {
          blockType: 'CharBlock',
          value:
            "Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."
        },
        { ...BlockImageData, blockType: 'ImageBlock' }
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
export const MixedColumnWidths = {
  args: {
    table: {
      blockType: 'RichTableBlock',
      tableCaption:
        'Ut dapibus cursus quam, non dapibus diam pellentesque ac. Maecenas ultrices porta dui eget placerat. Curabitur ornare congue interdum.',
      tableContent: {
        tableHead: [
          [
            {
              text: 'Image'
            },
            {
              text: 'Type'
            },
            {
              text: 'Description'
            }
          ]
        ],
        tableBody: [
          [
            {
              ...BlockImageData,
              caption: '<p>Custom ImageCaption</p>',
              displayCaption: true,
              blockType: 'ImageBlock'
            },
            {
              blockType: 'CharBlock',
              value: 'Internal'
            },
            {
              blockType: 'RichTextBlock',
              value:
                '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p>\n'
            }
          ],
          [
            {
              ...BlockImageData,
              caption: '<p>Custom ImageCaption</p>',
              displayCaption: true,
              blockType: 'ImageBlock'
            },
            {
              blockType: 'CharBlock',
              value: 'External'
            },
            {
              blockType: 'RichTextBlock',
              value:
                '<p>Morbi pretium, massa non convallis facilisis, lectus eros vulputate turpis, et imperdiet eros metus eu enim. Cras consequat iaculis leo eget auctor. Sed bibendum, nulla vel ultricies aliquam, augue mauris sagittis massa, nec malesuada massa justo id sem. In hac habitasse platea dictumst. Sed ullamcorper bibendum libero vitae pellentesque.</p>\n'
            }
          ],
          [
            {
              ...BlockImageData,
              caption: '<p>Custom ImageCaption</p>',
              displayCaption: false,
              blockType: 'ImageBlock'
            },
            {
              blockType: 'CharBlock',
              value: 'N/A'
            },
            {
              blockType: 'RichTextBlock',
              value:
                '<p>Maecenas vel dapibus ligula, pretium <a href="#">dictum est</a>. Proin venenatis massa vulputate <strong>est rhoncus</strong>, sed ornare ex sagittis. Donec iaculis magna in rhoncus malesuada.</p>\n'
            }
          ],
          [
            {
              ...BlockImageData,
              caption: '<p>Custom ImageCaption</p>',
              displayCaption: true,
              blockType: 'ImageBlock'
            },
            {
              blockType: 'CharBlock',
              value: 'Internal'
            },
            {
              blockType: 'RichTextBlock',
              value:
                '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p>\n'
            }
          ]
        ]
      }
    }
  }
}
