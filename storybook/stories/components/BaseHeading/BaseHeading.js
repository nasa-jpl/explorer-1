export const BaseHeadingTemplate = ({ text, size, tag, headingClass }) => {
  let computedClass = headingClass ? headingClass + ' ' : ''
  const tags = {
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    h5: 'text-h5',
  }

  if (tag) {
    computedClass += tags[tag]
  } else {
    computedClass += tags[size]
  }

  return `<${size} class="${computedClass}">${text}</${size}>`
}
