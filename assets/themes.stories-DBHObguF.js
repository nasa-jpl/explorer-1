const l={title:"Foundation/Themes",tags:["!autodocs"]},h=()=>`<div>
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
</div>`,e={render:h.bind({})},i=()=>`<p class="ThemeLight p-4">
  <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
    ThemeLight (usually the default)
  </a>
  </p>
  <p class="ThemeDark bg-black p-4">
  <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
    ThemeDark
  </a>
  </p>
  <div class="ThemeInternal">
  <p class="ThemeLight p-4">
    <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
      ThemeInternal ThemeLight
    </a>
  </p>
  <p class="ThemeDark bg-black p-4">
    <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
      ThemeInternal ThemeDark
    </a>
  </p>
</div>`,r={render:i.bind({})};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: InternalTemplate.bind({})
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var s,n,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: AdaptiveTextTemplate.bind({})
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const d=["Internal","AdaptiveText"],m=Object.freeze(Object.defineProperty({__proto__:null,AdaptiveText:r,Internal:e,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{r as A,e as I,m as S};
