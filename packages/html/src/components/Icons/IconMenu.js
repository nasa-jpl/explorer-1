export const IconMenuTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
  <svg
    class="IconBase ${customClass}"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z" />
  </svg>
  `
}
