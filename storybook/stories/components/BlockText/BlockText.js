export const BlockTextTemplate = ({ text, variant }) => {
  let computedClass =
    variant == 'small'
      ? 'text-body-sm'
      : variant == 'medium'
      ? 'text-body-sm'
      : 'text-body-lg'

  return `<div class="BlockText ${computedClass}">${text}</div>`
}
