export const BaseHeadingTemplate = ({ text, size, tag, headingClass }) => {
  let computedClass = headingClass ? headingClass + ' ' : ''
  const sizes = {
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    h5: 'text-h5',
  }

  if (size) {
    computedClass += sizes[size]
  }

  return `<${tag} class="${computedClass}">${text}</${tag}>`
}
