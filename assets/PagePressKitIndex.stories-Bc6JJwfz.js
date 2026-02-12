import{a as k,_ as v,s,o as a,g as i,y as r,l as m,h as _,p as n,F as P,B as x,k as c}from"./iframe-DkrkwOlF.js";import{L}from"./LayoutHelper-Bw8YcsKg.js";import{B as w}from"./BlockCta-h2-thZj1.js";import{B}from"./BlockText-IIuaxGWV.js";import{S as I}from"./SearchResultCard-tzwPtX_1.js";import{D as C}from"./DetailHeadline-Co53DD5C.js";import"./preload-helper-D6kgxu3v.js";import"./theme-_iY2OIe5.js";import"./BaseButton-ef_-8K8P.js";import"./IconExternal-I936yDsF.js";import"./BaseLink-CCyYxerd.js";import"./MixinAnimationCaret-DxAmtdGk.js";import"./IconCaret-DARwT2mA.js";import"./BaseAudio-CczU5xRy.js";import"./IconPlay-H_mLn_YE.js";import"./IconForwardTen-eSR5N41x.js";import"./BaseHeading-CQl35mER.js";import"./BaseImage-C2wBaajf.js";import"./BaseImagePlaceholder-Dmde9CeQ.js";import"./CalendarChip-Z2fvWT-i.js";import"./mixins-Fi5IW2rN.js";import"./MetadataEvent-adUyj7xW.js";import"./IconCalendar-CKTy0NcZ.js";import"./IconTime-B8AITl_j.js";import"./IconLocation-8a2j4yAs.js";import"./BlockLinkCard-D523bs7P.js";import"./IconArrow-CYJqH2IL.js";import"./BasePill-B6yfct9B.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BY-ZsA9Y.js";import"./rangeifyGrades-DaAomh2g.js";import"./IconProfile-CyDmUgam.js";import"./lookupContentType-fqqouDFz.js";const g=k({name:"PagePressKitIndex",components:{LayoutHelper:L,BlockCta:w,BlockText:B,SearchResultCard:I,DetailHeadline:C},props:{data:{type:Object,required:!1}}}),K={key:0},T={key:0,class:"lg:BaseGrid lg:mb-18 container mx-auto mb-10"},R={class:"lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4"},q={key:1,"aria-label":"Directory Listing",class:"lg:my-18 my-10"};function S(e,V,D,H,A,F){const h=s("DetailHeadline"),l=s("LayoutHelper"),y=s("BlockText"),f=s("SearchResultCard"),b=s("BlockCta");return e.data?(a(),i("div",K,[r(l,{indent:"col-2",class:"lg:mt-12 mt-5 mb-10"},{default:m(()=>[r(h,{title:e.data.title},null,8,["title"])]),_:1}),e.data.summary?(a(),i("div",T,[_("div",R,[r(y,{text:e.data.summary},null,8,["text"])])])):n("",!0),e.data.children&&e.data.children.length?(a(),i("section",q,[r(l,{indent:"col-2"},{default:m(()=>[(a(!0),i(P,null,x(e.data.children,t=>(a(),c(f,{key:t.id,type:t.label,topic:t.topicLabel,url:t.url,image:t.thumbnailImage,title:t.title,summary:t.summary,"heading-level":"h2"},null,8,["type","topic","url","image","title","summary"]))),128)),e.data.callToAction&&e.data.callToAction.length>0?(a(),c(l,{key:0,indent:"col-4"},{default:m(()=>[r(b,{data:e.data.callToAction[0]},null,8,["data"])]),_:1})):n("",!0)]),_:1})])):n("",!0)])):n("",!0)}const N=v(g,[["render",S]]);g.__docgenInfo={exportName:"default",displayName:"PagePressKitIndex",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PagePressKitIndex/PagePressKitIndex.vue"};const ke={title:"Templates/WWW/PagePressKitIndex",component:N,decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],tags:["!autodocs"],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},o={name:"PagePressKitIndex",args:{data:{title:"Press Kits",summary:"Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.",callToAction:[{heading:"View all other press kits",text:"Legacy Press Kits",page:{url:"/who-we-are/media-information/legacy-press-kits"},externalLink:""}],children:[{id:1,label:"Label",topicLabel:"Topic Label",url:"/press-kits/placeholder",title:"Title of the press kit homepage",summary:"Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}},{id:2,label:"Label",topicLabel:null,url:"/press-kits/placeholder",title:"Title of the press kit homepage",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}}]}}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const ve=["BaseStory"];export{o as BaseStory,ve as __namedExportsOrder,ke as default};
