import { BaseButtonTemplate } from '../BaseButton/BaseButton'

export const BackToTopTemplate = ({
  alwaysVisible = false,
  threshold = '',
  scrollTo = '',
  buttonClass = '',
}) => {
  return `<div class="BackToTop" data-alwaysvisible=${alwaysVisible} data-threshold="${threshold}" data-scrollto="${scrollTo}">
  ${BaseButtonTemplate({
    variant: 'primary',
    cssClass: `z-60 ${alwaysVisible ? 'always-visible' : ''} 
    ${buttonClass ? buttonClass : ''}`,
    compact: true,
    icon: 'dropdown',
    iconBefore: true,
    label: 'Back to top',
  })}
  </div>`
}
