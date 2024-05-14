import { MixinAnimationCaretTemplate } from '../MixinAnimationCaret/MixinAnimationCaret'
import { IconArrowTemplate } from '../Icons/IconArrow'
import { IconDownloadTemplate } from '../Icons/IconDownload'
import { IconExternalTemplate } from '../Icons/IconExternal'

export const BaseLinkTemplate = ({
  text,
  variant,
  link,
  icon,
  caret,
  caretInline,
  caretWrapperClass,
  target,
  externalTargetBlank,
  computedClass,
  linkClass,
  wrapperClass,
}) => {
  if (!icon) icon = ''
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
    } text-subtitle text-theme-color can-hover:hover:text-theme-color-hover`
  } else if (variantType === 'default') {
    computedClass =
      '-default underline text-theme-color can-hover:hover:text-theme-color-hover'
  }

  let renderWrapperClass = ''
  if (wrapperClass) renderWrapperClass = ` class="${wrapperClass}"`

  const iconTemplate =
    icon === 'document'
      ? IconDownloadTemplate({})
      : icon === 'internal'
        ? IconArrowTemplate({})
        : icon === 'external'
          ? IconExternalTemplate({})
          : ''

  return `
    <div${renderWrapperClass}>
      <a
        href="${link}"
        target="${theTarget}"
        rel="${theRel}"
        class="group cursor-pointer${computedClass ? ` ${computedClass}` : ''}${
          linkClass ? ` ${linkClass}` : ''
        }"
      >
        <span class="break-words">
          ${template}
        </span>
        ${iconTemplate}
      </a>
    </div>  
  `
}
