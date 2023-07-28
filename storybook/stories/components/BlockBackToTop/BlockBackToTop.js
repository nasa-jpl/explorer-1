import { BaseButtonTemplate } from '../BaseButton/BaseButton'

export const BlockBackToTopTemplate = ({
  alwaysVisible,
  threshold,
  scrollTo,
}) => {
  if (!threshold) threshold = ''
  if (!scrollTo) scrollTo = ''

  return `<div class="BlockBackToTop" data-threshold="${threshold}" data-scrollto="${scrollTo}">
  ${BaseButtonTemplate({
    variant: 'primary',
    cssClass: `z-60 ${alwaysVisible ? 'always-visible' : ''}`,
    compact: true,
    icon: 'dropdown',
    iconBefore: true,
    label: 'Back to top',
  })}
  </div>`
}
