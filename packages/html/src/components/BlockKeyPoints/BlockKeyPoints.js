import { BaseHeadingTemplate } from '../BaseHeading/BaseHeading'
import { BlockTextTemplate } from '../BlockText/BlockText'

export const BlockKeyPointsTemplate = ({ heading, listItem }) => {
  heading = heading
    ? BaseHeadingTemplate({
        text: heading,
        size: 'h5',
        tag: 'h2',
        headingClass: 'mb-5'
      })
    : ''

  let listLength = listItem.length
  let keyPoints = '<ul>'
  for (const [index, value] of listItem.entries()) {
    let indexClass = index + 1 === listLength ? 'mb-0' : 'mb-4'
    keyPoints += `<li class="flex ${indexClass}">${BlockTextTemplate({
      text: value.text,
      variant: 'medium'
    })}</li>`
  }
  keyPoints += '</ul>'

  return `
  <div class="BlockKeyPoints border-gray-light-mid lg:py-10 py-6 border-t border-b">
    ${heading}
    ${keyPoints}
  </div>
  `
}
