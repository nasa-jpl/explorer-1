export const IconPlayTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconPlay ${customClass}"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        transform="matrix(-1 0 0 1 64 0)"
        fill-rule="evenodd"
        d="M42 17L22 30 42 43z"
      />
    </svg>
  `
}
