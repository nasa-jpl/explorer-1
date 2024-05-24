export const IconDropdownTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconDropdown ${customClass}"
      width="12"
      height="8"
      viewBox="0 0 12 8"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M.343 2L1.757.586 6 4.828 10.243.586 11.657 2 6 7.657.343 2z"
        fill="currentColor"
      />
    </svg>
  `
}
