export const IconPrevTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
  <svg viewBox="0 0 50 50" class="IconPrev ${customClass}">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M29 13.686l1.414 1.415-9.9 9.899 9.9 9.9L29 36.313 17.686 25 29 13.686z"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    />
  </svg>
  `
}
