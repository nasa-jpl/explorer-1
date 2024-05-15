import{I as s}from"./IconPlus-8-RyMFvs.js";import{B as l}from"./BlockText-D3Sm5k3y.js";const d=({item_id:e,heading_level:n,title:o,body:t})=>{e||(e=""),n||(n="h2"),o||(o=""),t||(t="");const r="item_heading_"+e,a="item_panel_"+e;return`
    <div class="border-b border-gray-light-mid">
      <${n} class="text-body-lg tracking-normal font-normal">
        <button aria-expanded="false"
          class="BlockAccordion-trigger group flex flex-nowrap justify-between items-center w-full p-4 xl:py-6 can-hover:hover:underline focus:outline-none focus:underline"
          aria-controls="${a}"
          id="${r}"
        >
          <span class="pointer-events-none text-left pr-4">
            ${o}
          </span>

          <span class="BlockAccordion-icon pointer-events-none shrink-0 text-xs text-theme-color transition-transform">
            ${s({})}
          </span>
        </button>
      </${n}>

      <div id="${a}"
        role="region"
        aria-labelledby="${r}"
        class="BlockAccordion-panel"
        hidden
      >
        <div class="px-4 pb-8">
          <!-- insert components here. BlockText used as an example below -->
          ${l({text:t,variant:"small"})}
        </div>
      </div>
    </div>
  `};export{d as B};
