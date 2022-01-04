export const IconPlusTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconPlus ${customClass}"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 0v5h5v2H7v5H5V7H0V5h5V0h2z" fill="currentColor" />
    </svg>
  `
}
