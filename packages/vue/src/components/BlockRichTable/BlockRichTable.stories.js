import BlockRichTable from './BlockRichTable.vue'

export default {
  title: 'Components/Blocks/BlockRichTable',
  component: BlockRichTable,
  excludeStories: /.*Data$/
}

export const BlockRichTableData = {
  blockType: 'RichTableBlock',
  table: `{ "data": {
      "page": {
        "body": [
          {
            "blockType": "RichTableBlock",
            "tableCaption": "table caption",
            "tableContent": {
              "tableBody": [
                [
                  {
                    "blockType": "CharBlock",
                    "value": "plain text render"
                  }
                ],
                [
                  {
                    "blockType": "RichTextBlock",
                    "value": "<p><b>richtext</b> <i>render</i></p>"
                  }
                ],
                [
                  {
                    "blockType": "ImageBlock",
                    "image": {
                      "caption": "These JPL interns worked on the development and testing of the hardware and software for CADRE, NASA’s upcoming lunar technology demonstration.",
                      "url": "https://placekitten.com/400/300"
                    }
                  }
                ]
              ],
              "tableHead": [
                [
                  {
                    "text": "Column Heading Text"
                  }
                ]
              ]
            }
          }
        ],
        "breadcrumb": null
      }
    }
  }`
}

export const BaseStory = {
  name: 'BlockRichTable',
  args: {
    data: BlockRichTableData
  }
}
