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
            "tableHead": [
                [
                  {
                    "text": "1. Learn why we study geology on Earth and other planets"
                  },
                  {
                    "text": "1. Learn why we study geology on Earth and other planets"
                  }
                ]
              ],
              "tableBody": [
                [
                  {
                    "blockType": "ImageBlock",
                    "image": {
                      "caption": "NASA astronaut Kate Rubins uses a hand lens to observe the minerals present in a rock while taking part in the European Space Agency's PANGAEA geology training. Image credit: ESA–A. Romeo",
                      "url": "https://imagecache.jpl.nasa.gov/images/edu/activities/ediblerocks_learn_main-640x350.jpg"
                    }
                  },
                  {
                    "blockType": "ImageBlock",
                    "image": {
                      "caption": "NASA astronaut Kate Rubins uses a hand lens to observe the minerals present in a rock while taking part in the European Space Agency's PANGAEA geology training. Image credit: ESA–A. Romeo",
                      "url": "https://imagecache.jpl.nasa.gov/images/edu/activities/ediblerocks_learn_main-640x350.jpg"
                    }
                  }
                ],
                [
                  {
                    "blockType": "CharBlock",
                    "value": "Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."
                  },
                  {
                    "blockType": "CharBlock",
                    "value": "Geologists are scientists who study a planet's solid features, like soil, rocks, and minerals. There are all kinds of rocks and minerals that make up our planet – as well as the Moon, Mars, and other rocky worlds. By studying these features, we can learn more about how rocky worlds form and change over time."
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
