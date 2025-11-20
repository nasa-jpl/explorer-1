import{l as k,_ as v,I as s,A as a,p as i,J as r,D as m,q as _,G as n,M as P,N as x,C as p}from"./iframe-CTVWvntx.js";import{L}from"./LayoutHelper-BumjmA7T.js";import{B as w}from"./BlockCta-BFFA_vKF.js";import{B as I}from"./BlockText-BFLS1qDs.js";import{S as B}from"./SearchResultCard-DULRfzhl.js";import{D as C}from"./DetailHeadline-D9U1kyvf.js";import"./preload-helper-D6kgxu3v.js";import"./pinia-JvkV_l3r.js";import"./theme-BMXYhL_G.js";import"./BaseButton-D2UdpPNz.js";import"./IconExternal-DP2DvGhd.js";import"./BaseLink-DX_OOjEO.js";import"./MixinAnimationCaret-B9hXJgWm.js";import"./IconCaret-p2iu9pyC.js";import"./BaseAudio-WSHn_0SL.js";import"./IconPlay-XhswKINu.js";import"./IconForwardTen-DWq1Dr1X.js";import"./BaseHeading-B7pzQLja.js";import"./BaseImage-BNaikajF.js";import"./BaseImagePlaceholder-B5ylXFH9.js";import"./CalendarChip-Bhfplat7.js";import"./mixins-SlMYzAFp.js";import"./dayjs.min-BuRsCg53.js";import"./MetadataEvent-ZihN3cH7.js";import"./IconCalendar-BJrEsFgz.js";import"./IconTime-7yYTexec.js";import"./IconLocation-BDZqrvXG.js";import"./BlockLinkCard-t0su1ZO4.js";import"./IconArrow-BaZPwHCo.js";import"./BasePill-ZzLX46f0.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-Cn6F2L8y.js";import"./rangeifyGrades-DzF1AoBP.js";import"./IconProfile-D-Mba4je.js";import"./lookupContentType-fqqouDFz.js";const g=k({name:"PagePressKitIndex",components:{LayoutHelper:L,BlockCta:w,BlockText:I,SearchResultCard:B,DetailHeadline:C},props:{data:{type:Object,required:!1}}}),K={key:0},T={key:0,class:"lg:BaseGrid lg:mb-18 container mx-auto mb-10"},q={class:"lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4"},R={key:1,"aria-label":"Directory Listing",class:"lg:my-18 my-10"};function N(e,D,V,A,H,$){const h=s("DetailHeadline"),l=s("LayoutHelper"),y=s("BlockText"),f=s("SearchResultCard"),b=s("BlockCta");return e.data?(a(),i("div",K,[r(l,{indent:"col-2",class:"lg:mt-12 mt-5 mb-10"},{default:m(()=>[r(h,{title:e.data.title},null,8,["title"])]),_:1}),e.data.summary?(a(),i("div",T,[_("div",q,[r(y,{text:e.data.summary},null,8,["text"])])])):n("",!0),e.data.children&&e.data.children.length?(a(),i("section",R,[r(l,{indent:"col-2"},{default:m(()=>[(a(!0),i(P,null,x(e.data.children,t=>(a(),p(f,{key:t.id,type:t.label,topic:t.topicLabel,url:t.url,image:t.thumbnailImage,title:t.title,summary:t.summary,"heading-level":"h2"},null,8,["type","topic","url","image","title","summary"]))),128)),e.data.callToAction&&e.data.callToAction.length>0?(a(),p(l,{key:0,indent:"col-4"},{default:m(()=>[r(b,{data:e.data.callToAction[0]},null,8,["data"])]),_:1})):n("",!0)]),_:1})])):n("",!0)])):n("",!0)}const S=v(g,[["render",N]]);g.__docgenInfo={exportName:"default",displayName:"PagePressKitIndex",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PagePressKitIndex/PagePressKitIndex.vue"};const _e={title:"Templates/WWW/PagePressKitIndex",component:S,decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],tags:["!autodocs"],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},o={name:"PagePressKitIndex",args:{data:{title:"Press Kits",summary:"Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.",callToAction:[{heading:"View all other press kits",text:"Legacy Press Kits",page:{url:"/who-we-are/media-information/legacy-press-kits"},externalLink:""}],children:[{id:1,label:"Label",topicLabel:"Topic Label",url:"/press-kits/placeholder",title:"Title of the press kit homepage",summary:"Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}},{id:2,label:"Label",topicLabel:null,url:"/press-kits/placeholder",title:"Title of the press kit homepage",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}}]}}};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Pe=["BaseStory"];export{o as BaseStory,Pe as __namedExportsOrder,_e as default};
