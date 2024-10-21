import type { BlockTextObject } from './../components/BlockText/BlockText.vue'
import { getHeadingId } from './getHeadingId'

export const addHeadingAnchorsToRichTextBlock = (block: BlockTextObject, headingLevel = 'h2') => {
  if (block?.blockType === 'RichTextBlock') {
    const regex = new RegExp(
      `<${headingLevel} data-block-key="(.*?)">(.*?)<\/${headingLevel}>`,
      'g'
    )
    let text = block?.value
    if (text) {
      text = text.replaceAll(regex, (_match, g1, g2) => {
        const headingId = getHeadingId(g2, g1)
        return `<${headingLevel} id="${headingId}">${g2}</${headingLevel}>`
      })
    }
    return {
      ...block,
      value: text
    }
  }
  return block
}

export const getHeadingsFromRichText = (block: BlockTextObject, headingLevel = 'h2') => {
  if (headingLevel) {
    return block
  }
}
