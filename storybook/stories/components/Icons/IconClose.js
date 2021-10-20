export const IconCloseTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
  <svg
    class="IconClose ${customClass}"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M21.192-.02l2.829 2.828L14.828 12l9.193 9.192-2.829 2.829L12 14.828l-9.192 9.193-2.829-2.829L9.172 12-.02 2.808 2.808-.021 12 9.172 21.192-.02z"
      fill="currentColor"
      fill-rule="evenodd"
    />
  </svg>
  `
}
