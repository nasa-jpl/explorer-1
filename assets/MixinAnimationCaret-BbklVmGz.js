const s=({text:r,customClass:a})=>(a||(a=""),`
    <span class="MixinAnimationCaret ${a}">
      <span>${r}</span>
      <span aria-hidden="true" class="arrow-wrapper text-theme-color ml-1">
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
  `);export{s as M};
