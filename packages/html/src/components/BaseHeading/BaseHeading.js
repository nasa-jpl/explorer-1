export const BaseHeadingTemplate = ({ text, size, tag, icon = '', headingClass }) => {
  let computedClass = headingClass ? headingClass + ' ' : ''
  if (!size) size = 'h3' // default
  if (!tag) tag = size
  const sizes = {
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    h5: 'text-h5',
    h6: 'text-h6'
  }
  computedClass += sizes[size]

  // Use a space between the icon and text so its size is proportional to the font size.
  const iconWrapper = icon ? `${icon} ` : ''

  return `<${tag} class="${computedClass}">${iconWrapper}${text}</${tag}>`
}
