import { SearchInputTemplate } from '../SearchInput/SearchInput'
import { IconCloseTemplate } from '../Icons/IconClose'
import { IconDropdownTemplate } from '../Icons/IconDropdown'
import { IconExternalTemplate } from '../Icons/IconExternal'
import { IconSearchTemplate } from '../Icons/IconSearch'

export const MainNavigationInternalTemplate = ({}) => {
  const primaryNavItems = [
    {
      id: 1,
      title: 'Home',
      url: '#',
      isExternal: false,
      isActive: true,
      isMegaMenu: false,
    },
    {
      id: 2,
      title: 'Menu Item',
      url: '#',
      isExternal: false,
      isActive: false,
      isMegaMenu: true,
      menuItems: [
        {
          title: 'Sub 1',
          url: '#',
          isExternal: false,
          isActive: false,
          subItems: null,
        },
        {
          title: 'Sub 2',
          url: '#',
          isExternal: false,
          isActive: false,
          subItems: null,
        },
        {
          title: 'Sub 3 w/ Sub',
          url: '#',
          isExternal: false,
          isActive: false,
          subItems: [
            {
              title: 'SubSub 1',
              url: '#',
              isExternal: false,
              isActive: false,
              subItems: null,
            },
            {
              title: 'SubSub 2',
              url: 'https://www.jpl.nasa.gov',
              isExternal: true,
              isActive: false,
              subItems: null,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'External',
      url: 'https://www.jpl.nasa.gov/',
      isExternal: true,
      isActive: false,
      isMegaMenu: false,
    },
  ]
  let menuItems = ''
  if (primaryNavItems.length > 0) {
    for (const [index, item] of primaryNavItems.entries()) {
      menuItems += `<li class="${item.isActive ? 'active' : ''}">
        ${
          item.isMegaMenu
            ? `
            <button class="toggle-menu-panel flex flex-nowrap items-center w-full lg:w-auto"
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
              {% sub_menu item template="menus/sub_menu-mega.html" %}
            </div>
          `
            : `
          <a href="${item.url}" class="block"${
                item.url.startsWith('h')
                  ? ` target="_blank" rel="noopener"`
                  : ''
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
  <nav class="MainNavigation" aria-label="Main">
  <div class="flex lg:hidden">
    <form id="NavMobileSearchForm" action="#" method="get" class="pt-6 pb-4 px-4 w-full">
      ${SearchInputTemplate({
        inputId: 'NavMobileSearchInput',
        compact: false,
      })}
    </form>
  </div>
  <div class="w-full relative lg:shadow-lg z-20 bg-white">
    <div class="lg:container mx-auto lg:flex justify-between">
      <ul class="top-level lg:flex flex-nowrap lg:overflow-x-auto">
        ${menuItems}
      </ul>
      <div class="hidden lg:block border-t-3 border-transparent relative z-10">
        <button id="NavSearchOpen" aria-label="Open search" class="flex flex-nowrap items-center py-6 px-1 border-b-3 can-hover:hover:text-gray-mid-dark focus:border-gray-dark focus:border-opacity-20 focus:outline-none border-transparent">
          <span class="font-medium leading-tight pr-2">
            Search
          </span>
          ${IconSearchTemplate({})}
        </button>
      </div>
    </div>
    <div id="NavSearchContainer" class="hidden absolute inset-0 bg-white z-10">
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
            <button id="NavSearchClose" aria-label="Close search" class="flex flex-nowrap flex-shrink-0 items-center p-2 text-black text-xs focus:outline-none focus:ring-2">
              ${IconCloseTemplate({})}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
  `
}
