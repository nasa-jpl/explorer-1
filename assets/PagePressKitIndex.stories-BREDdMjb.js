import{j as y,f,g as i,E as s,w as p,k as b,B as n,I as k,J as v,p as c,H as r,o as a}from"./iframe-Bnf9h3W1.js";import{L as _}from"./LayoutHelper-BXg4gDpR.js";import{B as P}from"./BlockCta-Dcnr2M2g.js";import{B as x}from"./BlockText-B8BPzgJn.js";import{S as L}from"./SearchResultCard-edkkkvM_.js";import{D as w}from"./DetailHeadline-D3SuWhox.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-BHf5z4qC.js";import"./BaseButton-tYSxM46m.js";import"./IconExternal-D5tNOjbD.js";import"./BaseLink-XdbSgscH.js";import"./MixinAnimationCaret-CYcUNDY5.js";import"./IconCaret-DNLJ8UXC.js";import"./BaseAudio-T2LESHKa.js";import"./IconPlay-DJ7YilQJ.js";import"./IconVolume-Bbg0w039.js";import"./BaseHeading-D6-UtAba.js";import"./BaseImage-DqolVunN.js";import"./BaseImagePlaceholder-CPEKL0Fq.js";import"./CalendarChip-BciWv6wf.js";import"./mixins-w-y-6v1C.js";import"./useApi-j1E6pMaV-Bh365sQo.js";import"./MetadataEvent-Cox512BR.js";import"./IconCalendar-DYzzNNoz.js";import"./IconTime-Csr3aAV9.js";import"./IconLocation-BL7rEBQs.js";import"./BlockLinkCard-DGyUeT1y.js";import"./IconArrow-cdG3gOtc.js";import"./BasePill-Cqg5_me7.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-DFWuUiav.js";import"./rangeifyGrades-BwGsRJZl.js";import"./IconEduTechnology-C2ltTUiv.js";import"./MetadataStacked-DSnHx3R6.js";import"./IconHourglass-CnIRPoOY.js";import"./lookupContentType-DR6RKkTm.js";const l=y({name:"PagePressKitIndex",components:{LayoutHelper:_,BlockCta:P,BlockText:x,SearchResultCard:L,DetailHeadline:w},props:{data:{type:Object,required:!1}}}),B={key:0},I={key:0,class:"lg:BaseGrid lg:mb-18 container mx-auto mb-10"},C={class:"lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4"},K={key:1,"aria-label":"Directory Listing",class:"lg:my-18 my-10"};function T(e,q,N,S,V,D){const u=r("DetailHeadline"),m=r("LayoutHelper"),d=r("BlockText"),g=r("SearchResultCard"),h=r("BlockCta");return e.data?(a(),i("div",B,[s(m,{indent:"col-2",class:"lg:mt-12 mt-5 mb-10"},{default:p(()=>[s(u,{title:e.data.title},null,8,["title"])]),_:1}),e.data.summary?(a(),i("div",I,[b("div",C,[s(d,{text:e.data.summary},null,8,["text"])])])):n("",!0),e.data.children&&e.data.children.length?(a(),i("section",K,[s(m,{indent:"col-2"},{default:p(()=>[(a(!0),i(k,null,v(e.data.children,t=>(a(),c(g,{key:t.id,type:t.label,topic:t.topicLabel,url:t.url,image:t.thumbnailImage,title:t.title,summary:t.summary,"heading-level":"h2"},null,8,["type","topic","url","image","title","summary"]))),128)),e.data.callToAction&&e.data.callToAction.length>0?(a(),c(m,{key:0,indent:"col-4"},{default:p(()=>[s(h,{data:e.data.callToAction[0]},null,8,["data"])]),_:1})):n("",!0)]),_:1})])):n("",!0)])):n("",!0)}const R=f(l,[["render",T]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"PagePressKitIndex",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PagePressKitIndex/PagePressKitIndex.vue"});const ke={title:"Templates/WWW/PagePressKitIndex",component:R,decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],tags:["!autodocs"],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},o={name:"PagePressKitIndex",args:{data:{title:"Press Kits",summary:"Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.",callToAction:[{heading:"View all other press kits",text:"Legacy Press Kits",page:{url:"/who-we-are/media-information/legacy-press-kits"},externalLink:""}],children:[{id:1,label:"Label",topicLabel:"Topic Label",url:"/press-kits/placeholder",title:"Title of the press kit homepage",summary:"Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}},{id:2,label:"Label",topicLabel:null,url:"/press-kits/placeholder",title:"Title of the press kit homepage",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}}]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
