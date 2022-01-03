export const IconCalendarTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconCalendar ${customClass}"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7 0v2h6V0h2v2h5v17H0V2h5V0h2zm11 9H2v8h16V9zM5 4H2v3h16V4h-3v2h-2V4H7v2H5V4z"
        fill="currentColor"
      />
    </svg>
  `
}
