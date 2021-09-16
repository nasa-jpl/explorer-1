import { IconCaretTemplate } from '../Icons/IconCaret'
import { IconNextTemplate } from '../Icons/IconNext'
import { IconFacebookTemplate } from '../Icons/IconFacebook'
import { IconTwitterTemplate } from '../Icons/IconTwitter'
import { IconInstagramTemplate } from '../Icons/IconInstagram'
import { IconYoutubeTemplate } from '../Icons/IconYoutube'

export const BaseButtonTemplate = ({
  label,
  variant,
  link,
  caret,
  compact,
  disabled,
  icon,
  cssClass,
}) => {
  // TODO: make sure the full variant class names are written out somewhere for purging
  let computedClass = '-' + variant
  let tag = disabled ? 'button' : 'link'
  let ariaLabel = label
  let caretHtml = ''

  if (icon === 'next') {
    caretHtml = IconNextTemplate()
  } else if (icon === 'facebook') {
    caretHtml = IconFacebookTemplate()
  } else if (icon === 'twitter') {
    caretHtml = IconTwitterTemplate()
  } else if (icon === 'instagram') {
    caretHtml = IconInstagramTemplate()
  } else if (icon === 'youtube') {
    caretHtml = IconYoutubeTemplate()
  } else if (caret) {
    caretHtml = IconCaretTemplate()
  }

  if (compact) {
    computedClass += ' -compact'
  }

  if (icon) {
    computedClass += ' -icon-only'
    label = ''
  }

  if (cssClass) {
    computedClass += ' ' + cssClass
  }

  if (tag === 'link') {
    return `
      <a href="${link}" class="BaseButton text-contrast-none ${computedClass} inline-block">
        <span class="label block">
          ${label}${caretHtml}
        </span>
      </a>
    `
  } else {
    return `
      <button 
        aria-label="${ariaLabel}"
        disabled="disabled"
        class="BaseButton text-contrast-none ${computedClass} inline-block"
      >
        <span class="label block">
          ${label}${caretHtml}
        </span>
      </button>
    `
  }
}
