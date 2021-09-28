export const AnimationCaretTemplate = ({ text, inline }) => {
  inline = inline ? ' caret-inline' : ''
  return `
    <span class="AnimationCaret${inline}">
      <span>${text}</span>
      <span aria-hidden="true" class="arrow-wrapper text-theme-red ml-1">
        <span class="arrow">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            class="IconCaret"
          >
            <path
              d="M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span class="arrow-fixed">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            class="IconCaret"
          >
            <path
              d="M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </span>
    </span>
  `
}
