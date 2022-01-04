export const IconMenuTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconMenu ${customClass}"
      width="30"
      height="26"
      viewBox="0 0 30 26"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M30 22v4H0v-4h30zm0-11v4H0v-4h30zm0-11v4H0V0h30z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  `
}
