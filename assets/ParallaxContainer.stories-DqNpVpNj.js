import{P as l,a as n}from"./ParallaxElement-CUKqDqza.js";import"./iframe-bnomvYc_.js";import"./preload-helper-D6kgxu3v.js";const p={title:"Components/Utilities/ParallaxContainer",component:l,decorators:[()=>({template:'<div id="storyRoot" style="height:3000px"><story/></div>'})],parameters:{html:{root:"#storyRoot"},docs:{description:{component:"Use `ParallaxContainer` with a nested `ParallaxElement` to create a parallax scrolling effect."}}},excludeStories:/.*(Data)$/},s=o=>({props:Object.keys(o),components:{ParallaxContainer:l,ParallaxElement:n},template:`<ParallaxContainer :invert="invert" :overflow="overflow">
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
    <ParallaxElement class="bg-gray-light border-black border py-56 px-24 w-1/2 mx-auto">
      <div class="text-h3">Parallax Content</div><p><code>ParallaxElement</code></p>
    </ParallaxElement>
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
    <ParallaxElement class="bg-gray-light border-black border py-24 px-24 w-1/4 ml-auto">
      <div class="text-h5">Parallax Content</div><p><code>ParallaxElement</code></p>
    </ParallaxElement>
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
  </ParallaxContainer>`}),a=s.bind({});a.storyName="ParallaxContainer";a.args={invert:!0,overflow:!0};var e,t,r;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
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
})`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const m=["BaseStory"];export{a as BaseStory,m as __namedExportsOrder,p as default};
