import{j as y,f,g as i,E as s,w as p,k as b,B as n,I as k,J as v,p as c,H as r,o as a}from"./iframe-BMO96iuk.js";import{L as _}from"./LayoutHelper-Bk8A8oBV.js";import{B as P}from"./BlockCta-DGomlqR-.js";import{B as x}from"./BlockText-OFc_Y2cd.js";import{S as L}from"./SearchResultCard-BKbgi_O7.js";import{D as w}from"./DetailHeadline-CNRxe0KV.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-C4zQiDhS.js";import"./BaseButton-Cq2PtYGH.js";import"./IconExternal-ReBXTLyN.js";import"./BaseLink-CjTGIJiA.js";import"./MixinAnimationCaret-XOUTBY6Y.js";import"./IconCaret-Be_Zch5B.js";import"./BaseAudio-BGs1kViw.js";import"./IconPlay-CDHsohIg.js";import"./IconVolume-DfNfK1D_.js";import"./BaseHeading-DsdUSvMW.js";import"./BaseImage-DnXr4oEj.js";import"./BaseImagePlaceholder-tESlx3md.js";import"./CalendarChip-CNqNxAYU.js";import"./mixins-C6Dkq0hS.js";import"./useApi-j1E6pMaV-PWiyysiJ.js";import"./MetadataEvent-gPlgWd8f.js";import"./IconCalendar-CpNaliPe.js";import"./IconTime-Bl3OCvdO.js";import"./IconLocation-BljDY952.js";import"./BlockLinkCard-BP957Adx.js";import"./IconArrow-XDqWta2i.js";import"./BasePill-CujnTU7P.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-DX2F8dh5.js";import"./rangeifyGrades-DagCv8qQ.js";import"./IconEduTechnology-DccM0Xp6.js";import"./MetadataStacked-DI49VIdo.js";import"./IconHourglass-BcmBw5oM.js";import"./lookupContentType-DR6RKkTm.js";const l=y({name:"PagePressKitIndex",components:{LayoutHelper:_,BlockCta:P,BlockText:x,SearchResultCard:L,DetailHeadline:w},props:{data:{type:Object,required:!1}}}),B={key:0},I={key:0,class:"lg:BaseGrid lg:mb-18 container mx-auto mb-10"},C={class:"lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4"},K={key:1,"aria-label":"Directory Listing",class:"lg:my-18 my-10"};function T(e,q,N,S,V,D){const u=r("DetailHeadline"),m=r("LayoutHelper"),d=r("BlockText"),g=r("SearchResultCard"),h=r("BlockCta");return e.data?(a(),i("div",B,[s(m,{indent:"col-2",class:"lg:mt-12 mt-5 mb-10"},{default:p(()=>[s(u,{title:e.data.title},null,8,["title"])]),_:1}),e.data.summary?(a(),i("div",I,[b("div",C,[s(d,{text:e.data.summary},null,8,["text"])])])):n("",!0),e.data.children&&e.data.children.length?(a(),i("section",K,[s(m,{indent:"col-2"},{default:p(()=>[(a(!0),i(k,null,v(e.data.children,t=>(a(),c(g,{key:t.id,type:t.label,topic:t.topicLabel,url:t.url,image:t.thumbnailImage,title:t.title,summary:t.summary,"heading-level":"h2"},null,8,["type","topic","url","image","title","summary"]))),128)),e.data.callToAction&&e.data.callToAction.length>0?(a(),c(m,{key:0,indent:"col-4"},{default:p(()=>[s(h,{data:e.data.callToAction[0]},null,8,["data"])]),_:1})):n("",!0)]),_:1})])):n("",!0)])):n("",!0)}const R=f(l,[["render",T]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"PagePressKitIndex",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PagePressKitIndex/PagePressKitIndex.vue"});const ke={title:"Templates/WWW/PagePressKitIndex",component:R,decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],tags:["!autodocs"],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},o={name:"PagePressKitIndex",args:{data:{title:"Press Kits",summary:"Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.",callToAction:[{heading:"View all other press kits",text:"Legacy Press Kits",page:{url:"/who-we-are/media-information/legacy-press-kits"},externalLink:""}],children:[{id:1,label:"Label",topicLabel:"Topic Label",url:"/press-kits/placeholder",title:"Title of the press kit homepage",summary:"Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}},{id:2,label:"Label",topicLabel:null,url:"/press-kits/placeholder",title:"Title of the press kit homepage",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}}]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
