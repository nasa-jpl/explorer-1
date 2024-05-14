import { IconPlusTemplate } from '../Icons/IconPlus'
import { BlockTextTemplate } from '../BlockText/BlockText'

export const BlockAccordionItemTemplate = ({
  item_id,
  heading_level,
  title,
  body,
}) => {
  // set defaults
  if (!item_id) item_id = ''
  if (!heading_level) heading_level = 'h2'
  if (!title) title = ''
  if (!body) body = ''

  const item_heading_id = 'item_heading_' + item_id
  const item_panel_id = 'item_panel_' + item_id

  const template = `
    <div class="border-b border-gray-light-mid">
      <${heading_level} class="text-body-lg tracking-normal font-normal">
        <button aria-expanded="false"
          class="BlockAccordion-trigger group flex flex-nowrap justify-between items-center w-full p-4 xl:py-6 can-hover:hover:underline focus:outline-none focus:underline"
          aria-controls="${item_panel_id}"
          id="${item_heading_id}"
        >
          <span class="pointer-events-none text-left pr-4">
            ${title}
          </span>

          <span class="BlockAccordion-icon pointer-events-none flex-shrink-0 text-xs text-theme-color transform transition-transform">
            ${IconPlusTemplate({})}
          </span>
        </button>
      </${heading_level}>

      <div id="${item_panel_id}"
        role="region"
        aria-labelledby="${item_heading_id}"
        class="BlockAccordion-panel"
        hidden
      >
        <div class="px-4 pb-8">
          <!-- insert components here. BlockText used as an example below -->
          ${BlockTextTemplate({ text: body, variant: 'small' })}
        </div>
      </div>
    </div>
  `
  return template
}
