import{B as h}from"./BlockTeaser-DcEdt7G7.js";import"./iframe-jyw6MFLl.js";import"./preload-helper-D6kgxu3v.js";import"./BaseButton-BliZx_K9.js";import"./BaseImage-Dxzskg0e.js";const y={title:"Components/Blocks/BlockTeaser",component:h,tags:["wagtail-blocks"],excludeStories:/.*Data$/},u={heading:"Perseverance",introduction:"The mission marks humanity’s first step in returning samples from another planet.",buttonText:"Read more",image:{full:{url:"https://picsum.photos/1096/400",width:1096,height:400},half:{url:"https://picsum.photos/540/400",width:548,height:400}},fullWidthImage:!1,teaserPage:[{blockType:"CharBlock"},{blockType:"TextBlock"},{blockType:"CharBlock"},{blockType:"ImageChooserBlock"},{blockType:"BooleanBlock"},{blockType:"PageChooserBlock",page:{label:"Asteroid Watch Overview",title:"Asteroid Watch",url:"/asteroid-watch/"}}]},e={args:{...u}},r={args:{...u,fullWidth:!0}},s={args:{teaserPage:{pageType:"Mission",title:"Perseverance",url:"/missions/perseverance/"}}};var a,o,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ...BlockTeaserData
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var c,l,n;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...BlockTeaserData,
    fullWidth: true
  }
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,p,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    teaserPage: {
      pageType: 'Mission',
      title: 'Perseverance',
      url: '/missions/perseverance/'
    }
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const f=["BlockTeaserData","BaseStory","FullWidth","Empty"];export{e as BaseStory,u as BlockTeaserData,s as Empty,r as FullWidth,f as __namedExportsOrder,y as default};
