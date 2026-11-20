export const IconPrevTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
  <svg
    class="IconBase ${customClass}"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height="24px"
    width="24px"
    fill="currentColor"
  >
    <path d="M16,22L6,12L16,2l1.78,1.77L9.55,12l8.23,8.23L16,22Z" />
  </svg>
  `
}
