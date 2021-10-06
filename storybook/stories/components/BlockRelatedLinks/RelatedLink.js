import { IconArrowTemplate } from '../Icons/IconArrow'
import { IconDownloadTemplate } from '../Icons/IconDownload'
import { IconExternalTemplate } from '../Icons/IconExternal'

export const RelatedLinkTemplate = ({ variant, link, text }) => {
  let icon =
    variant == 'document'
      ? IconDownloadTemplate({
          customClass:
            'text-jpl-red xl:mx-4 flex-none ml-4 text-2xl leading-normal text-3xl',
        })
      : variant == 'internal'
      ? IconArrowTemplate({
          customClass:
            'text-jpl-red xl:mx-4 flex-none ml-4 text-2xl leading-normal text-3xl',
        })
      : IconExternalTemplate({
          customClass:
            'text-jpl-red xl:mx-4 flex-none ml-4 text-2xl leading-normal text-lg',
        })
  let target = variant == 'external' ? '_blank' : '_self'

  return `
  <a href="${link}" target="${target}" rel="noopener" class="bg-gray-light group text-body-lg flex items-center justify-between px-4 py-4 cursor-pointer">
    <span class="can-hover:group-hover:underline min-w-12 block w-auto break-words">${text}</span>
    ${icon}
  </a>
  `
}
