import { IconSearchTemplate } from '../Icons/IconSearch'

export const SearchInputTemplate = ({ inputId, placeholder, compact }) => {
  if (!placeholder) placeholder = ''
  if (compact === null) compact = false
  const iconTemplate = IconSearchTemplate({})
  const underlinedInputTemplate = compact
    ? `
    <div class="compact ml-14 h-2px absolute inset-x-0 bottom-0 overflow-hidden text-lg text-transparent">
      <span class="border-jpl-red-light absolute z-20 h-0 border-b-2 select-none">
        <!-- TODO: auto-update with input value using javascript -->
      </span>
      <span class="border-black absolute inset-x-0 z-10 h-0 border-b-2 border-opacity-50 select-none"></span>
    </div>
  `
    : ''

  return `<div class="SearchInput group relative flex items-center ${
    !compact ? 'border border-gray-mid' : ''
  }">
    <div class="absolute inset-0 flex items-center">
      <span class="relative z-20 ml-6 text-xl ${
        compact ? 'text-black' : 'text-gray-mid'
      }">
        ${iconTemplate}
      </span>
    </div>
  
    ${underlinedInputTemplate}
  
    <input
      ${inputId ? `id="${inputId}"` : ''}
      name="query"
      class="pl-14 border-none relative z-10 w-full pr-5 text-lg text-gray-dark bg-transparent ${
        compact
          ? 'focus:outline-none py-1 focus:ring-transparent'
          : 'focus:ring-opacity-50 focus:ring-2 py-4'
      }"
      type="search"
      aria-label="Query"
      placeholder="${placeholder}"
    />
    <input hidden type="submit" value="Search" />
  </div>
  `
}
