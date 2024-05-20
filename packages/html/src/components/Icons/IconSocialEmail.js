export const IconSocialEmailTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconSocialEmail ${customClass}"
      width="22"
      height="16"
      viewBox="0 0 22 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M11 9l11-7v14H0V2l11 7zm11-9L11 7 0 0h22z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  `
}
