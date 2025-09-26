import{P as a,a as r}from"./ParallaxElement-9aX0m3iB.js";import"./iframe-CX58vNoo.js";import"./preload-helper-D6kgxu3v.js";const i={title:"Components/Utilities/ParallaxContainer",component:a,decorators:[()=>({template:'<div id="storyDecorator" style="height:3000px"><story/></div>'})],parameters:{html:{root:"#storyDecorator"},docs:{description:{component:"Use `ParallaxContainer` with a nested `ParallaxElement` to create a parallax scrolling effect."}}},excludeStories:/.*(Data)$/},l=t=>({props:Object.keys(t),components:{ParallaxContainer:a,ParallaxElement:r},template:`<ParallaxContainer :invert="invert" :overflow="overflow">
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
    <ParallaxElement class="bg-gray-light border-black border py-56 px-24 w-1/2 mx-auto">
      <div class="text-h3">Parallax Content</div><p><code>ParallaxElement</code></p>
    </ParallaxElement>
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
    <ParallaxElement class="bg-gray-light border-black border py-24 px-24 w-1/4 ml-auto">
      <div class="text-h5">Parallax Content</div><p><code>ParallaxElement</code></p>
    </ParallaxElement>
    <div class="border-black border p-16"><div class="text-h2">Static Content</div><p>Lorem ipsum</p></div>
  </ParallaxContainer>`}),e=l.bind({});e.storyName="ParallaxContainer";e.args={invert:!0,overflow:!0};const d=["BaseStory"];export{e as BaseStory,d as __namedExportsOrder,i as default};
