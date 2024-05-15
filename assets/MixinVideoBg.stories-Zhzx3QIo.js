const n=({file:e,webm:o,ogg:t})=>`
  <video
    loop="loop"
    muted="muted"
    playsinline=""
    autoplay="autoplay"
    preload="auto"
    class="object-cover w-full h-full"
  >
    ${o?`<source src="${o}" type="video/webm" />`:""}
    ${e?`<source src="${e}" type="video/mp4" />`:""}
    ${t?`<source src="${t}" type="video/ogg" />`:""}
  </video>
  `,a=""+new URL("NASA-Mars-Helicopter-IngenuityAnimations-7sec-D8mRUJTG.mp4",import.meta.url).href,r=""+new URL("NASA-Mars-Helicopter-IngenuityAnimations-7sec-DoAE6e2O.webm",import.meta.url).href,i={file:a,webm:r,ogg:"static/media/storybook/static/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.ogv"},d={title:"Components/Mixins/MixinVideoBg",excludeStories:/.*Data$/,argTypes:{file:{type:{name:"string",required:!1},description:"source to `mp4` video file"},webm:{type:{name:"string",required:!1},description:"source to `webm` video file"},ogg:{type:{name:"string",required:!1},description:"source to `ogg` video file"}},parameters:{docs:{description:{component:"This mixin is a simple `<video>` component that autoplays a muted video and retains the video's aspect ratio. Often used as a background when positioned `absolute` with other content set as an overlay, or used as a way to loop a muted video without video controls.\n  See the following stories for implementation examples:\n\n  - [Hero: Medium](?path=/docs/components-blocks-heroes-medium--docs) - with content overlay\n  - [Hero: Media Only](?path=/story/components-blocks-heroes-media-only--video) - no content overlay"}}}},s=n.bind({});s.args=i;const l=["MixinVideoBgData","Default"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:s,MixinVideoBgData:i,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{c as M,n as a,i as b};
