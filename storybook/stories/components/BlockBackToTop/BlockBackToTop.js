import { BaseButtonTemplate } from '../BaseButton/BaseButton'

export const BlockBackToTopTemplate = ({ alwaysVisible }) => {
  return `<div id="BackToTop" class="BlockBackToTop">
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
