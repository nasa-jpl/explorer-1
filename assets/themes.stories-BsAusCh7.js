const e={title:"Foundation/Themes",tags:["!autodocs"]},t=()=>`<div>
  <div class="ThemeInternal">
    <!-- BaseLink -->
    <div>
      <a
        class="group cursor-pointer -default underline text-theme-color can-hover:hover:text-theme-color-hover"
      >
        Internal Theme: BaseLink 
      </a>
    </div>
    <!-- /BaseLink -->
  </div>
  <div>
  <!-- BaseLink -->
    <div>
      <a
        class="group cursor-pointer -default underline text-theme-color can-hover:hover:text-theme-color-hover"
      >
        Default Theme: BaseLink
      </a>
    </div>
    <!-- /BaseLink -->
  </div>
</div>`,r={render:t.bind({})},a=()=>`<p class="ThemeVariantLight p-4">
  <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
    ThemeVariantLight (usually the default)
  </a>
  </p>
  <p class="ThemeVariantDark bg-black p-4">
  <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
    ThemeVariantDark
  </a>
  </p>
  <div class="ThemeInternal">
  <p class="ThemeVariantLight p-4">
    <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
      ThemeInternal ThemeVariantLight
    </a>
  </p>
  <p class="ThemeVariantDark bg-black p-4">
    <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
      ThemeInternal ThemeVariantDark
    </a>
  </p>
</div>`,o={render:a.bind({})},n=["Internal","AdaptiveText"],l=Object.freeze(Object.defineProperty({__proto__:null,AdaptiveText:o,Internal:r,__namedExportsOrder:n,default:e},Symbol.toStringTag,{value:"Module"}));export{o as A,r as I,l as S};
