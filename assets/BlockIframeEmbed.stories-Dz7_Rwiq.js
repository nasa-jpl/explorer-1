import{B as r}from"./BlockIframeEmbed-eZQRzors.js";import"./iframe-CUZq7Oz2.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-CNK7AaU7.js";import"./BaseImageCaption-DhX2DtMb.js";import"./BaseLink-DLCWZqRj.js";import"./MixinAnimationCaret-CCvE7RyC.js";import"./IconCaret-iQdsYJwf.js";import"./BaseImagePlaceholder-_RIYbPX1.js";const y={title:"Components/Blocks/BlockIframeEmbed",component:r,tags:["wagtail-blocks"],decorators:[()=>({template:'<div id="storyRoot" class="mx-auto max-w-screen-md"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},t={blockType:"IframeEmbedBlock",title:"Eyes Perserverance Embed",caption:`
    <p>With three giant blades stretching out some 66 feet (20 meters) from its cylindrical, six-sided body, the Juno spacecraft is a dynamic engineering marvel, spinning to keep itself stable as it makes oval-shaped orbits around Jupiter. View the full interactive experience at <a href="https://eyes.nasa.gov/apps/orrery/#/home">Eyes on the Solar System</a>.</p>
  `,url:"https://eyes.nasa.gov/apps/orrery/#/sc_perseverance"},e={args:{data:t}},a={args:{data:t},decorators:()=>({template:'<div style="padding-top:3000px"><story/></div>'})},g=["BlockIframeEmbedData","BaseStory","LazyLoad"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: BlockIframeEmbedData
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: BlockIframeEmbedData
  },
  decorators: () => ({
    template: \`<div style="padding-top:3000px"><story/></div>\`
  })
}`,...a.parameters?.docs?.source}}};export{e as BaseStory,t as BlockIframeEmbedData,a as LazyLoad,g as __namedExportsOrder,y as default};
