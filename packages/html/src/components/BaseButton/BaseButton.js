import { IconCaretTemplate } from '../Icons/IconCaret'
import { IconNextTemplate } from '../Icons/IconNext'
import { IconPrevTemplate } from '../Icons/IconPrev'
import { IconSocialFacebookTemplate } from '../Icons/IconSocialFacebook'
import { IconSocialTwitterTemplate } from '../Icons/IconSocialTwitter'
import { IconSocialInstagramTemplate } from '../Icons/IconSocialInstagram'
import { IconSocialYoutubeTemplate } from '../Icons/IconSocialYoutube'
import { IconSocialRedditTemplate } from '../Icons/IconSocialReddit'
import { IconExpandTemplate } from '../Icons/IconExpand'
import { IconExternalTemplate } from '../Icons/IconExternal'
import { IconDropdownTemplate } from '../Icons/IconDropdown'

export const BaseButtonTemplate = ({
  label,
  ariaLabel,
  variant,
  link,
  caret,
  compact,
  disabled,
  icon,
  iconBefore,
  iconOnly,
  cssClass,
  fancybox,
  target
}) => {
  if (iconBefore == undefined) iconBefore = false
  if (iconOnly == undefined) iconOnly = false
  fancybox = fancybox ? fancybox : ''
  let iconTemplate = ''
  let computedClass = ''

  if (icon == 'next') iconTemplate = IconNextTemplate({})
  else if (icon == 'prev') iconTemplate = IconPrevTemplate({})
  else if (icon == 'expand') iconTemplate = IconExpandTemplate({})
  else if (icon == 'facebook') iconTemplate = IconSocialFacebookTemplate({})
  else if (icon == 'twitter') iconTemplate = IconSocialTwitterTemplate({})
  else if (icon == 'instagram') iconTemplate = IconSocialInstagramTemplate({})
  else if (icon == 'youtube') iconTemplate = IconSocialYoutubeTemplate({})
  else if (icon == 'reddit') iconTemplate = IconSocialRedditTemplate({})
  else if (icon == 'external') iconTemplate = IconExternalTemplate({})
  else if (icon == 'dropdown') iconTemplate = IconDropdownTemplate({})
  else if (caret) iconTemplate = IconCaretTemplate({})

  // setup classnames
  if (variant == 'primary') computedClass = '-primary'
  else if (variant == 'secondary') computedClass = '-secondary'
  else if (variant == 'dark') computedClass = '-dark'
  else if (variant == 'social') computedClass = '-social'

  if (compact) computedClass += ' -compact'
  if (cssClass) computedClass += ' ' + cssClass
  if (iconOnly) {
    computedClass += ' -icon-only'
    ariaLabel ? (ariaLabel = ariaLabel) : (ariaLabel = label)
    label = ''
  }

  const content = iconBefore
    ? `${iconTemplate}<span class="label-text">${label}</span>`
    : `<span class="label-text">${label}</span>${iconTemplate}`

  if (disabled) {
    return `
      <button 
        disabled="disabled"
        class="BaseButton text-contrast-none inline-block ${computedClass}" ${
          ariaLabel ? `aria-label="${ariaLabel}"` : ''
        }
      >
        <span class="label block">
          ${content}
        </span>
      </button>
    `
  } else if (link) {
    return `
      <a 
        href="${link}" 
        class="BaseButton text-contrast-none inline-block ${computedClass}" ${
          target
            ? `
        target="${target}"`
            : ''
        } ${
          ariaLabel
            ? `
        aria-label="${ariaLabel}"`
            : ''
        }
      >
        <span class="label block">
          ${content}
        </span>
      </a>
    `
  } else {
    return `
      <button 
        class="BaseButton text-contrast-none inline-block ${computedClass}" ${
          ariaLabel
            ? `
        aria-label="${ariaLabel}"`
            : ''
        } ${fancybox}
      >
        <span class="label block">
          ${content}
        </span>
      </button>
    `
  }
}
