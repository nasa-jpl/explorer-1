export const IconStopTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconStop ${customClass}"
      width="60"
      height="60"
      viewBox="0 0 185 185"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" fill-rule="evenodd" d="M0,0h185v185H0V0z" />
    </svg>
  `
}
