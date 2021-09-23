import { AnimationCaretTemplate } from "../AnimationCaret/AnimationCaret"

export const BaseLinkTemplate = ({ 
  text, 
  variant, 
  link, 
  caret, 
  caretInline, 
  target, 
  externalTargetBlank,
  computedClass,
  wrapperClass,
}) => {
  let template = text
  let variantType = variant ? variant.toLowerCase() : ''

  if (caretInline && caret) {
    template = AnimationCaretTemplate({
      text: text,
      inline: true,
    })
  } else if (variantType === "primary" || caret) {
    template = AnimationCaretTemplate({
      text: text,
      inline: false,
    })
  }

  let theTarget = ''
  if (target) {
    theTarget = target
  } else if (link && externalTargetBlank) {
    theTarget = '_blank'
  }

  let theRel = ''
  if (theTarget === '_blank') {
    theRel = 'noopener'
  }

  if (variantType === "primary" || variantType === "secondary") {
    computedClass = 'text-subtitle text-theme-red can-hover:hover:text-theme-red-hover'
  } else if (variantType === "default") {
    computedClass = '-default underline text-theme-red can-hover:hover:text-theme-red-hover'
  }

  return `
    <div class="${wrapperClass}">
      <a
        href="${link}"
        target="${theTarget}"
        rel="${theRel}"
        class="group ${computedClass}"
      >
        ${template}
      </a>
    </div>  
  `
}