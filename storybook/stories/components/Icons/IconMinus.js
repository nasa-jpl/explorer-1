export const IconMinusTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconMinus ${customClass}"
      width="12"
      height="2"
      viewBox="0 0 12 2"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        transform="translate(-6 -11)"
        fill="currentColor"
        d="M6 11H18V13H6z"
      />
    </svg>
  `
}
