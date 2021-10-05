// TODO: officially include SearchInput in design system and add the other variants

import { IconSearchTemplate } from '../Icons/IconSearch'

export const SearchInputTemplate = ({ placeholder }) => {
  // interpret props
  if (!placeholder) placeholder = ''
  const iconTemplate = IconSearchTemplate({
    customClass: 'relative z-20 ml-6 text-xl text-gray-mid',
  })
  return `<div class="relative flex items-center border border-gray-mid"
>
  <div class="absolute inset-0 flex items-center">
    ${iconTemplate}
  </div>
  <input
    type="search"
    aria-label="Query"
    placeholder="${placeholder}"
    class="pl-14 focus:ring-2 relative z-10 w-full pr-5 text-lg bg-transparent border-0 text-gray-dark py-4"
  />
</div>`
}
