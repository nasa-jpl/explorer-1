import{j as y,f,g as i,E as s,w as p,k as b,B as n,I as k,J as v,p as c,H as r,o as a}from"./iframe-DiXF1Tot.js";import{L as _}from"./LayoutHelper-Dp1gqAwE.js";import{B as P}from"./BlockCta-CAzoV2cE.js";import{B as x}from"./BlockText-C-ZLpB88.js";import{S as L}from"./SearchResultCard-DOHE2FxW.js";import{D as w}from"./DetailHeadline-BHzl2xv5.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-DFw2Y0AK.js";import"./BaseButton-MiEHQC4X.js";import"./IconExternal-B2XQaQvL.js";import"./BaseLink-fSLe-o-L.js";import"./MixinAnimationCaret-B_-a_yNq.js";import"./IconCaret-URSj5Sf0.js";import"./BaseAudio-czIM5AHy.js";import"./IconPlay-BzHnyk74.js";import"./IconVolume-BU0BUZuS.js";import"./BaseHeading-6sUGOnyy.js";import"./BaseImage-ClA8lMsA.js";import"./BaseImagePlaceholder-zDl_ybFq.js";import"./CalendarChip-SaE5025N.js";import"./mixins-Bp8YEdVC.js";import"./useApi-j1E6pMaV-BsTck4fa.js";import"./MetadataEvent-oD_ZheL4.js";import"./IconCalendar-D1IfAD4M.js";import"./IconTime-05GxmlnK.js";import"./IconLocation-lDvx58Ut.js";import"./BlockLinkCard-waEo_ClK.js";import"./IconArrow-peBPp3n0.js";import"./BasePill-CYamqPdu.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-CBFnIlpe.js";import"./rangeifyGrades-BTxgfq2H.js";import"./IconEduTechnology-Ccw4t1Fs.js";import"./MetadataStacked-BOj8_Vmt.js";import"./IconHourglass-B_9Y92mj.js";import"./lookupContentType-DR6RKkTm.js";const l=y({name:"PagePressKitIndex",components:{LayoutHelper:_,BlockCta:P,BlockText:x,SearchResultCard:L,DetailHeadline:w},props:{data:{type:Object,required:!1}}}),B={key:0},I={key:0,class:"lg:BaseGrid lg:mb-18 container mx-auto mb-10"},C={class:"lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4"},K={key:1,"aria-label":"Directory Listing",class:"lg:my-18 my-10"};function T(e,q,N,S,V,D){const u=r("DetailHeadline"),m=r("LayoutHelper"),d=r("BlockText"),g=r("SearchResultCard"),h=r("BlockCta");return e.data?(a(),i("div",B,[s(m,{indent:"col-2",class:"lg:mt-12 mt-5 mb-10"},{default:p(()=>[s(u,{title:e.data.title},null,8,["title"])]),_:1}),e.data.summary?(a(),i("div",I,[b("div",C,[s(d,{text:e.data.summary},null,8,["text"])])])):n("",!0),e.data.children&&e.data.children.length?(a(),i("section",K,[s(m,{indent:"col-2"},{default:p(()=>[(a(!0),i(k,null,v(e.data.children,t=>(a(),c(g,{key:t.id,type:t.label,topic:t.topicLabel,url:t.url,image:t.thumbnailImage,title:t.title,summary:t.summary,"heading-level":"h2"},null,8,["type","topic","url","image","title","summary"]))),128)),e.data.callToAction&&e.data.callToAction.length>0?(a(),c(m,{key:0,indent:"col-4"},{default:p(()=>[s(h,{data:e.data.callToAction[0]},null,8,["data"])]),_:1})):n("",!0)]),_:1})])):n("",!0)])):n("",!0)}const R=f(l,[["render",T]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"PagePressKitIndex",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PagePressKitIndex/PagePressKitIndex.vue"});const ke={title:"Templates/WWW/PagePressKitIndex",component:R,decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],tags:["!autodocs"],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},o={name:"PagePressKitIndex",args:{data:{title:"Press Kits",summary:"Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.",callToAction:[{heading:"View all other press kits",text:"Legacy Press Kits",page:{url:"/who-we-are/media-information/legacy-press-kits"},externalLink:""}],children:[{id:1,label:"Label",topicLabel:"Topic Label",url:"/press-kits/placeholder",title:"Title of the press kit homepage",summary:"Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}},{id:2,label:"Label",topicLabel:null,url:"/press-kits/placeholder",title:"Title of the press kit homepage",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}}]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
