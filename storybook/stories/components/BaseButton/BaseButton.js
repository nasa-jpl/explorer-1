import { IconCaretTemplate } from '../Icons/IconCaret'
import { IconNextTemplate } from '../Icons/IconNext'
import { IconPrevTemplate } from '../Icons/IconPrev'
import { IconFacebookTemplate } from '../Icons/IconFacebook'
import { IconTwitterTemplate } from '../Icons/IconTwitter'
import { IconInstagramTemplate } from '../Icons/IconInstagram'
import { IconYoutubeTemplate } from '../Icons/IconYoutube'
import { IconExpandTemplate } from '../Icons/IconExpand'

export const BaseButtonTemplate = ({
  label,
  variant,
  link,
  caret,
  compact,
  disabled,
  icon,
  cssClass,
  fancybox,
}) => {
  fancybox = fancybox ? fancybox : ''
  let ariaLabel = label
  let iconTemplate = ''
  let computedClass = ''

  if (icon == 'next') iconTemplate = IconNextTemplate()
  else if (icon == 'prev') iconTemplate = IconPrevTemplate()
  else if (icon == 'expand') iconTemplate = IconExpandTemplate()
  else if (icon == 'facebook') iconTemplate = IconFacebookTemplate()
  else if (icon == 'twitter') iconTemplate = IconTwitterTemplate()
  else if (icon == 'instagram') iconTemplate = IconInstagramTemplate()
  else if (icon == 'youtube') iconTemplate = IconYoutubeTemplate()
  else if (caret) iconTemplate = IconCaretTemplate()

  // setup classnames
  if (variant == 'primary') computedClass = '-primary'
  else if (variant == 'secondary') computedClass = '-secondary'
  else if (variant == 'dark') computedClass = '-dark'
  else if (variant == 'social') computedClass = '-social'

  if (compact) computedClass += ' -compact'
  if (cssClass) computedClass += ' ' + cssClass
  if (icon) {
    computedClass += ' -icon-only'
    label = ''
  }

  if (disabled) {
    return `
      <button 
        disabled="disabled"
        class="BaseButton text-contrast-none inline-block ${computedClass}"
        aria-label="${ariaLabel}"
      >
        <span class="label block">
          ${label}${iconTemplate}
        </span>
      </button>
    `
  } else if (link) {
    return `
      <a 
        href="${link}" 
        class="BaseButton text-contrast-none inline-block ${computedClass}"
        aria-label="${ariaLabel}"
      >
        <span class="label block">
          ${label}${iconTemplate}
        </span>
      </a>
    `
  } else {
    return `
      <button 
        class="BaseButton text-contrast-none inline-block ${computedClass}"
        aria-label="${ariaLabel}"
        ${fancybox}
      >
        <span class="label block">
          ${label}${iconTemplate}
        </span>
      </button>
    `
  }
}
