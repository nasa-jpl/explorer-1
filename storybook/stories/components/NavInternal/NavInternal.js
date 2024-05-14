import { SearchInputTemplate } from '../SearchInput/SearchInput'
import { IconCloseTemplate } from '../Icons/IconClose'
import { IconDropdownTemplate } from '../Icons/IconDropdown'
import { IconExternalTemplate } from '../Icons/IconExternal'
import { IconSearchTemplate } from '../Icons/IconSearch'
import { NavInternalPanelTemplate } from '../NavInternal/NavInternalPanel'

export const NavInternalTemplate = ({ includeSearch, menuItems }) => {
  if (includeSearch == undefined) includeSearch = false
  if (!menuItems) menuItems = []

  let menuItemsTemplate = ''
  if (menuItems.length > 0) {
    for (const [index, item] of menuItems.entries()) {
      const isMegaMenu =
        (item.menuItems && item.menuItems.length > 0) ||
        (item.highlights && item.highlights.length > 0)
          ? true
          : false

      menuItemsTemplate += `<li class="${item.isActive ? 'active' : ''}">
        ${
          isMegaMenu
            ? `
            <button class="toggle-NavInternalPanel flex flex-nowrap items-center w-full lg:w-auto"
              id="ddtoggle_${item.id}" 
              aria-haspopup="true" 
              aria-expanded="false"
              >
              <span class="pointer-events-none" data-text="${item.title}">
                ${item.title}
              </span>
              ${IconDropdownTemplate({})}
            </button>

            <div class="panel-wrapper lg:absolute inset-0 spacer z-0 invisible">
              <!-- Insert NavInternalPanel here -->${NavInternalPanelTemplate({
                id: item.id,
                title: item.title,
                url: item.url,
                isActive: item.isActive,
                repeatInPanel: item.repeatInPanel,
                repeatedTitle: item.repeatedTitle,
                highlights: item.highlights,
                menuItems: item.menuItems,
                allowSectionBreaks: item.allowSectionBreaks,
                allowSectionColumns: item.allowSectionColumns,
              })}<!-- End NavInternalPanel -->
            </div>
          `
            : `
          <a href="${item.url}" class="block"${
            item.url.startsWith('h') ? ` target="_blank" rel="noopener"` : ''
          }>
            <span class="inline-block" data-text="${item.title}">
              ${item.title}
            </span>
            ${
              item.url.startsWith('h')
                ? ` <span class="text-xs ml-1">
                ${IconExternalTemplate({})}
              </span>`
                : ''
            }
          </a>
        `
        }
      </li>
      `
    }
  }

  return `
  <div id="NavInternalContainer" class="bg-white lg:block hidden">
    <nav class="NavInternal" aria-label="Main">
    ${
      includeSearch
        ? `<div class="flex lg:hidden">
      <form id="NavMobileSearchForm" action="#" method="get" class="pt-6 pb-4 px-4 w-full">
        ${SearchInputTemplate({
          inputId: 'NavMobileSearchInput',
          compact: false,
        })}
      </form>
    </div>`
        : ''
    }
    <div class="w-full relative lg:shadow-lg z-20 bg-white">
      <div class="lg:container mx-auto lg:flex justify-between">
        <ul class="top-level lg:flex flex-nowrap lg:overflow-x-auto ${
          !includeSearch ? 'pt-6 lg:pt-0' : ''
        }">
          ${menuItemsTemplate}
        </ul>
        ${
          includeSearch
            ? `<div class="hidden lg:block border-t-3 border-transparent relative z-10">
          <button id="NavSearchOpen" aria-label="Open search" class="flex flex-nowrap items-center py-6 px-1 border-b-3 can-hover:hover:text-gray-mid-dark focus:border-gray-dark/20 focus:outline-none border-transparent">
            <span class="font-medium leading-tight pr-2">
              Search
            </span>
            ${IconSearchTemplate({})}
          </button>
        </div>`
            : ''
        }
      </div>
      ${
        includeSearch
          ? `<div id="NavSearchContainer" class="hidden absolute inset-0 bg-white z-10">
        <div class="BaseGrid container mx-auto h-full">
          <div class="indent-col-base indent-col-2 px-4">
            <div class="flex flex-row items-center h-full pb-2">
              <form id="NavDesktopSearchForm" action="#" method="get" class="flex-grow">
                ${SearchInputTemplate({
                  inputId: 'NavSearchInput',
                  compact: true,
                  placeholder: 'Search this site&hellip;',
                })}
              </form>
              <button id="NavSearchClose" aria-label="Close search" class="flex flex-nowrap shrink-0 items-center p-2 text-black text-xs focus:outline-none focus:ring-2">
                ${IconCloseTemplate({})}
              </button>
            </div>
          </div>
        </div>
      </div>`
          : ''
      }
    </div>
  </nav>
  <div id="NavBgOverlay" class="fixed z-0 inset-0 hidden lg:block opacity-80 bg-black invisible-overlay"></div>
  <div class="bg-white fixed inset-0 lg:hidden z-0"></div>
  `
}
