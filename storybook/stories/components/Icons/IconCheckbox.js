export const IconCheckboxTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconCheckbox ${customClass}"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path stroke="currentColor" fill="none" d="M0.5 0.5H21.5V21.5H0.5z" />
    </svg>
  `
}
