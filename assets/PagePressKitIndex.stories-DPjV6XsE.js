import{h as y,e as f,f as i,B as s,w as m,j as b,y as n,F as k,G as v,l as p,E as r,o as a}from"./iframe-BPFwKcEh.js";import{L as P}from"./LayoutHelper-CcoaDpZ7.js";import{B as _}from"./BlockCta-hMBavxWd.js";import{B as x}from"./BlockText-R1W3lG5Q.js";import{S as L}from"./SearchResultCard-CfMLjEVH.js";import{D as w}from"./DetailHeadline-CGobQ05O.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-3Ig3wil9.js";import"./BaseButton-CI8cVyLz.js";import"./IconExternal-B0wx5pQq.js";import"./BaseLink-BXX5bfwf.js";import"./MixinAnimationCaret-CL21IM4A.js";import"./IconCaret-DHu4gTqt.js";import"./BaseAudio-D8jL5fb4.js";import"./IconPlay-Duh2pi7g.js";import"./IconVolume-8LBwfIl1.js";import"./BaseHeading-DhRLtF8v.js";import"./BaseImage-CCJn8eQ_.js";import"./BaseImagePlaceholder-wOHfr57l.js";import"./CalendarChip-A6VRPvrs.js";import"./mixins-BQ_0RFFF.js";import"./useApi-j1E6pMaV-4noHurWZ.js";import"./MetadataEvent-Dq-fHEU6.js";import"./IconCalendar-Ddc0brUn.js";import"./IconTime-NgpcoO69.js";import"./IconLocation-r6wlJH6D.js";import"./BlockLinkCard-CwTBSWxv.js";import"./IconArrow-62Is6-t5.js";import"./BasePill-DGEoGDqV.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-R2DR7mhe.js";import"./rangeifyGrades-57BKSe74.js";import"./IconEduTechnology-DoALDqL_.js";import"./MetadataStacked-hgQO6-m0.js";import"./IconHourglass-CnrAxImQ.js";import"./lookupContentType-CxkJ4PqZ.js";const c=y({name:"PagePressKitIndex",components:{LayoutHelper:P,BlockCta:_,BlockText:x,SearchResultCard:L,DetailHeadline:w},props:{data:{type:Object,required:!1}}}),B={key:0},I={key:0,class:"lg:BaseGrid lg:mb-18 container mx-auto mb-10"},C={class:"lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4"},K={key:1,"aria-label":"Directory Listing",class:"lg:my-18 my-10"};function T(e,q,S,N,V,D){const u=r("DetailHeadline"),l=r("LayoutHelper"),d=r("BlockText"),h=r("SearchResultCard"),g=r("BlockCta");return e.data?(a(),i("div",B,[s(l,{indent:"col-2",class:"lg:mt-12 mt-5 mb-10"},{default:m(()=>[s(u,{title:e.data.title},null,8,["title"])]),_:1}),e.data.summary?(a(),i("div",I,[b("div",C,[s(d,{text:e.data.summary},null,8,["text"])])])):n("",!0),e.data.children&&e.data.children.length?(a(),i("section",K,[s(l,{indent:"col-2"},{default:m(()=>[(a(!0),i(k,null,v(e.data.children,t=>(a(),p(h,{key:t.id,type:t.label,topic:t.topicLabel,url:t.url,image:t.thumbnailImage,title:t.title,summary:t.summary,"heading-level":"h2"},null,8,["type","topic","url","image","title","summary"]))),128)),e.data.callToAction&&e.data.callToAction.length>0?(a(),p(l,{key:0,indent:"col-4"},{default:m(()=>[s(g,{data:e.data.callToAction[0]},null,8,["data"])]),_:1})):n("",!0)]),_:1})])):n("",!0)])):n("",!0)}const R=f(c,[["render",T]]);c.__docgenInfo={exportName:"default",displayName:"PagePressKitIndex",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PagePressKitIndex/PagePressKitIndex.vue"};const ke={title:"Templates/WWW/PagePressKitIndex",component:R,decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],tags:["!autodocs"],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},o={name:"PagePressKitIndex",args:{data:{title:"Press Kits",summary:"Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.",callToAction:[{heading:"View all other press kits",text:"Legacy Press Kits",page:{url:"/who-we-are/media-information/legacy-press-kits"},externalLink:""}],children:[{id:1,label:"Label",topicLabel:"Topic Label",url:"/press-kits/placeholder",title:"Title of the press kit homepage",summary:"Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}},{id:2,label:"Label",topicLabel:null,url:"/press-kits/placeholder",title:"Title of the press kit homepage",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}}]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'PagePressKitIndex',
  // single story hoisting
  args: {
    data: {
      title: 'Press Kits',
      summary: \`Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.\`,
      callToAction: [{
        heading: 'View all other press kits',
        text: 'Legacy Press Kits',
        page: {
          url: '/who-we-are/media-information/legacy-press-kits'
        },
        externalLink: ''
      }],
      children: [{
        id: 1,
        label: 'Label',
        topicLabel: 'Topic Label',
        url: '/press-kits/placeholder',
        title: 'Title of the press kit homepage',
        summary: 'Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.',
        thumbnailImage: {
          src: {
            url: 'https://picsum.photos/560/560',
            width: '560',
            height: '560'
          }
        }
      }, {
        id: 2,
        label: 'Label',
        topicLabel: null,
        url: '/press-kits/placeholder',
        title: 'Title of the press kit homepage',
        thumbnailImage: {
          src: {
            url: 'https://picsum.photos/560/560',
            width: '560',
            height: '560'
          }
        }
      }]
    }
  }
}`,...o.parameters?.docs?.source}}};const ve=["BaseStory"];export{o as BaseStory,ve as __namedExportsOrder,ke as default};
