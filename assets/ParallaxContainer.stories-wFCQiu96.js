import{P as e,a as r}from"./ParallaxContainer-p0kfNs6f.js";import"./iframe-UYtirdi4.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/Utilities/ParallaxContainer",component:e,decorators:[()=>({template:'<div id="storyRoot" style="height:3000px"><story/></div>'})],parameters:{html:{root:"#storyRoot"},docs:{description:{component:"Use `ParallaxContainer` with a nested `ParallaxElement` to create a parallax scrolling effect."}}},excludeStories:/.*(Data)$/},l=t=>({props:Object.keys(t),components:{ParallaxContainer:e,ParallaxElement:r},template:`<ParallaxContainer :invert="invert" :overflow="overflow">
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
    <ParallaxElement class="bg-gray-light border-black border py-56 px-24 w-1/2 mx-auto">
      <div class="text-h3">Parallax Content</div><p><code>ParallaxElement</code></p>
    </ParallaxElement>
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
    <ParallaxElement class="bg-gray-light border-black border py-24 px-24 w-1/4 ml-auto">
      <div class="text-h5">Parallax Content</div><p><code>ParallaxElement</code></p>
    </ParallaxElement>
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
  </ParallaxContainer>`}),a=l.bind({});a.storyName="ParallaxContainer";a.args={invert:!0,overflow:!0};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  props: Object.keys(args),
  components: {
    ParallaxContainer,
    ParallaxElement
  },
  template: \`<ParallaxContainer :invert="invert" :overflow="overflow">
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
    <ParallaxElement class="bg-gray-light border-black border py-56 px-24 w-1/2 mx-auto">
      <div class="text-h3">Parallax Content</div><p><code>ParallaxElement</code></p>
    </ParallaxElement>
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
    <ParallaxElement class="bg-gray-light border-black border py-24 px-24 w-1/4 ml-auto">
      <div class="text-h5">Parallax Content</div><p><code>ParallaxElement</code></p>
    </ParallaxElement>
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
  </ParallaxContainer>\`
})`,...a.parameters?.docs?.source}}};const d=["BaseStory"];export{a as BaseStory,d as __namedExportsOrder,i as default};
