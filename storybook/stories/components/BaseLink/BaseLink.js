import { MixinAnimationCaretTemplate } from '../MixinAnimationCaret/MixinAnimationCaret'

export const BaseLinkTemplate = ({
  text,
  variant,
  link,
  caret,
  caretInline,
  caretWrapperClass,
  target,
  externalTargetBlank,
  computedClass,
  linkClass,
  wrapperClass,
}) => {
  let template = text ? text : 'Full Image Details'
  let variantType = variant ? variant.toLowerCase() : ''
  if (!caretWrapperClass) caretWrapperClass = ''

  if (caretInline && caret) {
    template = MixinAnimationCaretTemplate({
      text,
      customClass: 'caret-inline',
    })
  } else if (variantType === 'primary' || caret) {
    template = MixinAnimationCaretTemplate({
      text,
      customClass: caretWrapperClass,
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

  if (variantType === 'primary' || variantType === 'secondary') {
    computedClass = `${
      variantType === 'primary' ? '-primary' : '-secondary'
    } text-subtitle text-theme-red can-hover:hover:text-theme-red-hover`
  } else if (variantType === 'default') {
    computedClass =
      '-default underline text-theme-red can-hover:hover:text-theme-red-hover'
  }

  let renderWrapperClass = ''
  if (wrapperClass) renderWrapperClass = ` class="${wrapperClass}"`

  return `
    <div${renderWrapperClass}>
      <a
        href="${link}"
        target="${theTarget}"
        rel="${theRel}"
        class="BaseLink group cursor-pointer${
          computedClass ? ` ${computedClass}` : ''
        }${linkClass ? ` ${linkClass}` : ''}"
      >
        ${template}
      </a>
    </div>  
  `
}
