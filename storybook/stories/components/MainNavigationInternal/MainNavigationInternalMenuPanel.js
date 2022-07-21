import { BaseImagePlaceholderTemplate } from '../BaseImagePlaceholder/BaseImagePlaceholder'
import { InternalNavHighlightTemplate } from '../MainNavigationInternal/InternalNavHighlight'

export const MainNavigationInternalMenuPanelTemplate = ({
  id,
  highlights,
  sections,
  allowSectionBreaks,
  allowSectionColumns,
}) => {
  // set defaults
  if (!id) id = (Math.random() + 1).toString(36).substring(7)
  if (!highlights) highlights = []
  if (!sections) sections = []
  if (allowSectionBreaks === null) allowSectionBreaks = true
  if (allowSectionColumns === null) allowSectionColumns = true

  const repeatedItemTemplate = ''
  let highlightsTemplate = ''
  if (highlights.length > 0) {
    for (const [index, item] of highlights.entries()) {
      highlightsTemplate += InternalNavHighlightTemplate({
        title: item.title,
        description: item.description,
        image: item.image,
        link: item.link,
        ariaLabel: item.ariaLabel,
      })
    }
    let sectionsWrapperTemplate = ''
    if (sections.length > 0) {
      sectionsWrapperTemplate = ` <div class="lg:mt-0 ${
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
      for (const [index, item] of sections.entries()) {
        sectionsWrapperTemplate += `section ${index}`
      }
      sectionsWrapperTemplate += `</div>`
    }

    return `
  <div id="target_ddtoggle_${id}" class="menu-panel w-full lg:shadow px-10 py-8 lg:px-0 lg:py-10 ${
      allowSectionBreaks ? 'allow-breaks' : ''
    }">
    <div class="lg:container mx-auto">
      <div class="lg:grid lg:grid-cols-3 gap-14 gap-y-0 lg:px-12">
        ${repeatedItemTemplate}
        ${highlightsTemplate}
        ${sectionsWrapperTemplate}
      </div>
    </div>
  </div>

  `
  }
}
