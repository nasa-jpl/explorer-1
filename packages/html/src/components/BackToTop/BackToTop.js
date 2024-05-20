import { BaseButtonTemplate } from '../BaseButton/BaseButton'

export const BackToTopTemplate = ({
  alwaysVisible = false,
  threshold = '',
  scrollTo = '',
  buttonClass = '',
}) => {
  return `<div class="BackToTop" ${
    alwaysVisible ? 'data-alwaysvisible' : ''
  } data-threshold="${threshold}" data-scrollto="${scrollTo}">
  ${BaseButtonTemplate({
    variant: 'primary',
    cssClass: `z-60 
    ${buttonClass ? buttonClass : ''}`,
    compact: true,
    icon: 'dropdown',
    iconBefore: true,
    label: 'Back to top',
  })}
  </div>`
}
