export const IconPauseTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconPause ${customClass}"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        transform="matrix(-1 0 0 1 54 6)"
        fill-rule="evenodd"
        d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z5"
      />
    </svg>
  `
}
