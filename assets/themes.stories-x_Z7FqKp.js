const e={title:"Foundation/Themes",tags:["!autodocs"]},t=()=>`<div>
  <div class="ThemeInternal">
    <!-- BaseLink -->
    <div>
      <a
        class="group cursor-pointer -default underline text-action can-hover:hover:text-action-hover"
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
        class="group cursor-pointer -default underline text-action can-hover:hover:text-action-hover"
      >
        Default Theme: BaseLink
      </a>
    </div>
    <!-- /BaseLink -->
  </div>
</div>`,a={render:t.bind({})},n=()=>`<p class="ThemeVariantLight p-4">
  <a class="cursor-pointer font-bold text-action can-hover:hover:text-action-hover">
    ThemeVariantLight (usually the default)
  </a>
  </p>
  <p class="ThemeVariantDark bg-black p-4">
  <a class="cursor-pointer font-bold text-action can-hover:hover:text-action-hover">
    ThemeVariantDark
  </a>
  </p>
  <div class="ThemeInternal">
  <p class="ThemeVariantLight p-4">
    <a class="cursor-pointer font-bold text-action can-hover:hover:text-action-hover">
      ThemeInternal ThemeVariantLight
    </a>
  </p>
  <p class="ThemeVariantDark bg-black p-4">
    <a class="cursor-pointer font-bold text-action can-hover:hover:text-action-hover">
      ThemeInternal ThemeVariantDark
    </a>
  </p>
</div>`,r={render:n.bind({})},o=["Internal","AdaptiveText"],i=Object.freeze(Object.defineProperty({__proto__:null,AdaptiveText:r,Internal:a,__namedExportsOrder:o,default:e},Symbol.toStringTag,{value:"Module"}));export{r as A,a as I,i as S};
