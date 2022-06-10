import { BlockAccordionItemTemplate } from '../BlockAccordionItem/BlockAccordionItem'

export const BlockAccordionTemplate = ({
  accordion_id,
  heading_level,
  items,
  allow_multiple_open,
}) => {
  if (!accordion_id) accordion_id = ''
  if (!heading_level) heading_level = 'h2'
  if (!items) items = []
  if (!allow_multiple_open) allow_multiple_open = false

  const group_id = 'group_id_' + accordion_id

  let rendered_items = []

  if (items.length > 0) {
    for (const [index, item] of items.entries()) {
      rendered_items += `${BlockAccordionItemTemplate({
        heading_level: heading_level,
        item_id: `${group_id}_${item.item_id}`,
        title: item.title,
        body: item.body,
      })}`
    }
  }

  let allow_multiple_flag = 'data-allow-multiple'
  if (!allow_multiple_open) {
    allow_multiple_flag = ''
  }
  let template = null
  if (rendered_items.length > 0) {
    template = `
    <div class="BlockAccordion border-t border-gray-light-mid" ${allow_multiple_flag}>
      ${rendered_items}
    </div>
  `
  }
  return template
}
