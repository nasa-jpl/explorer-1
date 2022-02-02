import { BaseButtonTemplate } from '../BaseButton/BaseButton'

export const FancyboxButtonTemplate = ({
  variant,
  fancyboxGallery,
  image,
  icon,
  label,
}) => {
  let fancybox = `data-fancybox`
  if (fancyboxGallery) {
    fancybox += `="${fancyboxGallery}"`
  }
  if (image.credit || image.caption) {
    fancybox += ` data-caption="`
    if (image.caption) fancybox += image.caption.replace(/<[^>]*>?/gm, '')
    if (image.caption && image.credit) fancybox += ' '
    if (image.credit) fancybox += `Credit: ${image.credit}`
    fancybox += `"`
  }
  fancybox += ` data-src="${image.src.url}"`

  let baseButton = BaseButtonTemplate({
    variant,
    icon,
    label,
    fancybox,
  })

  return baseButton
}
