import { FooterInternalContactListTemplate } from '../FooterInternal/FooterInternalContactList'
import { BaseButtonTemplate } from '../BaseButton/BaseButton'
import { BaseLinkTemplate } from '../BaseLink/BaseLink'

export const FooterInternalTemplate = ({ siteEditors, siteManagers, dateUpdated, version }) => {
  // prop defaults
  if (!siteEditors) siteEditors = []
  if (!siteManagers) siteManagers = []
  if (!dateUpdated) dateUpdated = ''
  if (!version) version = ''

  return `
<footer class="FooterInternal ThemeInternal ThemeVariantDark bg-gray-dark text-white">
  <div class="lg:BaseGrid container mx-auto pt-10">
    <div class="indent-col-base indent-col-2">
      ${
        siteEditors.length > 0
          ? FooterInternalContactListTemplate({
              title: 'Site Editors',
              items: siteEditors
            })
          : ''
      }
      
      ${
        siteManagers.length > 0
          ? FooterInternalContactListTemplate({
              title: 'Site Managers',
              items: siteManagers
            })
          : ''
      }

      ${
        dateUpdated
          ? `<div class="text-body-sm mb-2">
        <b>Page Last Updated:</b>
        ${dateUpdated}
      </div>`
          : ''
      }
  
      ${
        version
          ? `<div class="mb-2">
        <b>Site Version:</b>
        ${version}
      </div>`
          : ''
      }
      <p class="my-8 text-body-xs font-secondary -tracking-[0.03rem] xl:w-1/2">JPL is a federally funded research and development center staffed and managed for NASA by Caltech.</p>
      <div class="more-sites mb-4">
        <h2 class="text-subtitle mb-4">More Sites</h2>
        <ul class="inline-block lg:flex lg:flex-wrap">
          <li class="mb-2 lg:mb-8 lg:mr-8">
            ${BaseButtonTemplate({
              variant: 'dark',
              label: 'JPL',
              link: 'https://www.jpl.nasa.gov/',
              icon: 'external',
              cssClass: 'hidden lg:inline-block',
              target: '_blank'
            })}
            ${BaseLinkTemplate({
              variant: 'none',
              text: 'JPL',
              link: 'https://www.jpl.nasa.gov/',
              icon: 'external',
              linkClass:
                'flex flex-nowrap items-baseline lg:hidden text-jpl-action can-hover:hover:text-action-dark',
              target: '_blank'
            })}
          </li>
          <li class="mb-2 lg:mb-8 lg:mr-8">
            ${BaseButtonTemplate({
              variant: 'dark',
              label: 'JPL Space',
              link: 'https://js.jpl.nasa.gov/',
              icon: 'external',
              cssClass: 'hidden lg:inline-block',
              target: '_blank'
            })}
            ${BaseLinkTemplate({
              variant: 'none',
              text: 'JPL Space',
              link: 'https://js.jpl.nasa.gov/',
              icon: 'external',
              linkClass:
                'flex flex-nowrap items-center lg:hidden text-jpl-action can-hover:hover:text-action-dark',
              target: '_blank'
            })}
          </li>
          <li class="mb-2 lg:mb-8 lg:mr-8">
            ${BaseButtonTemplate({
              variant: 'dark',
              label: 'Caltech',
              link: 'https://www.caltech.edu/',
              icon: 'external',
              cssClass: 'hidden lg:inline-block',
              target: '_blank'
            })}
            ${BaseLinkTemplate({
              variant: 'none',
              text: 'Caltech',
              link: 'https://www.caltech.edu/',
              icon: 'external',
              linkClass:
                'flex flex-nowrap items-center lg:hidden text-action can-hover:hover:text-action-dark',
              target: '_blank'
            })}
          </li>
          <li class="mb-2 lg:mb-8 lg:mr-8">
            ${BaseButtonTemplate({
              variant: 'dark',
              label: 'NASA',
              link: 'https://www.nasa.gov/',
              icon: 'external',
              cssClass: 'hidden lg:inline-block',
              target: '_blank'
            })}
            ${BaseLinkTemplate({
              variant: 'none',
              text: 'NASA',
              link: 'https://www.nasa.gov/',
              icon: 'external',
              linkClass:
                'flex flex-nowrap items-center lg:hidden text-jpl-action can-hover:hover:text-action-dark',
              target: '_blank'
            })}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="bg-white/10">
    <div class="lg:BaseGrid container mx-auto py-4">
      <div class="indent-col-base indent-col-2 text-body-xs font-secondary -tracking-[0.03rem]">
        Information in this system is sensitive and must be handled in accordance with all applicable rules. See
        <div class="inline-block mr-1">
          ${BaseLinkTemplate({
            variant: 'none',
            text: 'Marking & Handling',
            link: 'https://mh.jpl.nasa.gov',
            icon: 'external',
            wrapperClass: 'inline',
            linkClass: 'flex flex-nowrap items-center text-blue-200 can-hover:hover:text-action',
            target: '_blank'
          })}
        </div>
        for more information.
      </div>
    </div> 
  </div>
</footer>
  `
}
