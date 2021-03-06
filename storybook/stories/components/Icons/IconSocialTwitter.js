export const IconSocialTwitterTemplate = ({ customClass }) => {
  if (!customClass) customClass = ''
  return `
    <svg
      class="IconSocialTwitter ${customClass}"
      width="23"
      height="19"
      viewBox="0 0 23 19"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" fill-rule="evenodd">
        <path d="M0 0H24V24H0z" transform="translate(-1 -3)" />
        <path
          d="M8.233 21.5c8.68 0 13.427-6.926 13.427-12.932 0-.196 0-.392-.014-.587A9.413 9.413 0 0024 5.628a9.702 9.702 0 01-2.71.715 4.595 4.595 0 002.074-2.513 9.68 9.68 0 01-2.996 1.103c-1.463-1.498-3.787-1.865-5.67-.895-1.882.97-2.855 3.037-2.372 5.04-3.794-.183-7.33-1.91-9.725-4.749-1.253 2.077-.613 4.734 1.46 6.067a4.821 4.821 0 01-2.141-.568v.057c0 2.164 1.584 4.027 3.786 4.455a4.886 4.886 0 01-2.13.078c.617 1.852 2.389 3.12 4.408 3.157a9.702 9.702 0 01-5.86 1.949c-.376 0-.751-.023-1.124-.066a13.735 13.735 0 007.233 2.038"
          fill="currentColor"
          transform="translate(-1 -3)"
        />
      </g>
    </svg>
  `
}
