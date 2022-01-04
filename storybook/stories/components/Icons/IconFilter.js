export const IconFilterTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconFilter ${customClass}"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 12c1.306 0 2.418.835 2.83 2H18v2H7.829a3.001 3.001 0 01-5.658 0H0v-2h2.17A3.001 3.001 0 015 12zm0 2a1 1 0 100 2 1 1 0 000-2zm8-8c1.306 0 2.418.835 2.83 2H18v2h-2.171a3.001 3.001 0 01-5.658 0H0V8h10.17A3.001 3.001 0 0113 6zm0 2a1 1 0 100 2 1 1 0 000-2zM7 0c1.306 0 2.418.835 2.83 2H18v2H9.829a3.001 3.001 0 01-5.658 0H0V2h4.17A3.001 3.001 0 017 0zm0 2a1 1 0 100 2 1 1 0 000-2z"
        fill="currentColor"
      />
    </svg>
  `
}
