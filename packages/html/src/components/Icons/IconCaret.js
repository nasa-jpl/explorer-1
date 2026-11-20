export const IconCaretTemplate = ({ customClass }) => {
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
    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
  </svg>
  `
}
