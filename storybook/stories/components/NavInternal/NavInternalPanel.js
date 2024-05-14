import { NavInternalHighlightTemplate } from '../NavInternal/NavInternalHighlight'
import { NavInternalSectionTemplate } from '../NavInternal/NavInternalSection'

export const NavInternalPanelTemplate = ({
  id,
  title,
  url,
  isActive,
  repeatInPanel,
  repeatedTitle,
  highlights,
  menuItems,
  allowSectionBreaks,
  allowSectionColumns,
}) => {
  // set defaults
  if (!id) id = (Math.random() + 1).toString(36).substring(7)
  if (!title) title = ''
  if (!url) url = ''
  if (isActive == undefined) isActive = false
  if (repeatInPanel == undefined) repeatInPanel = false
  if (!repeatedTitle) repeatedTitle = ''
  if (!highlights) highlights = []
  if (!menuItems) menuItems = []
  if (allowSectionBreaks == undefined) allowSectionBreaks = true
  if (allowSectionColumns == undefined) allowSectionColumns = true

  const repeatedItemTemplate = repeatInPanel
    ? `<div class="repeated-item col-span-full mb-6 lg:mb-4">
  <a href="${url}" class="inline-block p-2 -mt-2 -ml-2 -mb-2 ${
    isActive ? 'active' : ''
  }">
    <span>
      ${repeatedTitle.length > 0 ? repeatedTitle : title}
    </span>
  </a>
</div>`
    : ''
  let highlightsTemplate = ''
  if (highlights.length > 0) {
    for (const [index, item] of highlights.entries()) {
      highlightsTemplate += NavInternalHighlightTemplate({
        title: item.title,
        description: item.description,
        image: item.image,
        link: item.link,
        ariaLabel: item.ariaLabel,
      })
    }
  }
  let sectionsTemplate = ''
  if (menuItems.length > 0) {
    sectionsTemplate = ` <div class="lg:mt-0 ${
      !allowSectionColumns
        ? 'no-auto-cols'
        : `${
            highlights.length == 1
              ? 'mt-6 col-span-2 lg:auto-cols-2'
              : highlights.length == 2
                ? 'mt-6 col-span-1 no-auto-cols'
                : highlights.length == 3 || highlights.length == 0
                  ? 'col-span-3 lg:auto-cols-3'
                  : ''
          }`
    }">`
    for (const [index, section] of menuItems.entries()) {
      sectionsTemplate += NavInternalSectionTemplate({
        title: section.title,
        url: section.url,
        menuItems: section.menuItems,
        isActive: section.isActive,
      })
    }
    sectionsTemplate += `</div>`
  }

  return `
  <div id="target_ddtoggle_${id}" class="NavInternalPanel w-full lg:shadow px-10 py-8 lg:px-0 lg:py-10 ${
    allowSectionBreaks ? 'allow-breaks' : ''
  }">
    <div class="lg:container mx-auto">
      <div class="lg:grid lg:grid-cols-3 gap-14 gap-y-0 lg:px-12">
        ${repeatedItemTemplate}
        ${highlightsTemplate}
        ${sectionsTemplate}
      </div>
    </div>
  </div>
  `
}
