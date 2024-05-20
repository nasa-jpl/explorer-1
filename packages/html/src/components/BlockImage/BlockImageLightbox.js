import { FancyboxButtonTemplate } from '../FancyboxButton/FancyboxButton'

export const BlockImageLightboxTemplate = ({ image, fancyboxGallery }) => {
  let fancyboxButton = FancyboxButtonTemplate({
    variant: 'primary',
    fancyboxGallery,
    image: image,
    icon: 'expand',
    label: 'View in lightbox',
  })

  return `
  <div class="lg:opacity-0 transition-opacity absolute z-20 top-0 right-0 can-hover:group-hover:opacity-100 focus-within:opacity-100">
    ${fancyboxButton}
  </div>
  `
}
