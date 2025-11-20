import{l as v,_,I as a,A as r,p as i,J as o,D as n,q as k,G as l,K as D,M as L,N as B,C as q}from"./iframe-CTVWvntx.js";import{B as w}from"./BaseHeading-B7pzQLja.js";import{L as x}from"./LayoutHelper-BumjmA7T.js";import{B as C}from"./BlockText-BFLS1qDs.js";import{S as G}from"./SearchResultCard-DULRfzhl.js";import{D as P}from"./DetailHeadline-D9U1kyvf.js";import"./preload-helper-D6kgxu3v.js";import"./pinia-JvkV_l3r.js";import"./theme-BMXYhL_G.js";import"./BaseLink-DX_OOjEO.js";import"./MixinAnimationCaret-B9hXJgWm.js";import"./IconCaret-p2iu9pyC.js";import"./BaseAudio-WSHn_0SL.js";import"./IconPlay-XhswKINu.js";import"./IconForwardTen-DWq1Dr1X.js";import"./BaseImage-BNaikajF.js";import"./BaseImagePlaceholder-B5ylXFH9.js";import"./CalendarChip-Bhfplat7.js";import"./mixins-SlMYzAFp.js";import"./dayjs.min-BuRsCg53.js";import"./MetadataEvent-ZihN3cH7.js";import"./IconCalendar-BJrEsFgz.js";import"./IconTime-7yYTexec.js";import"./IconLocation-BDZqrvXG.js";import"./BlockLinkCard-t0su1ZO4.js";import"./IconArrow-BaZPwHCo.js";import"./IconExternal-DP2DvGhd.js";import"./BasePill-ZzLX46f0.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-Cn6F2L8y.js";import"./rangeifyGrades-DzF1AoBP.js";import"./IconProfile-D-Mba4je.js";import"./lookupContentType-fqqouDFz.js";const g=v({name:"PageGoDirectory",components:{BaseHeading:w,LayoutHelper:x,BlockText:C,SearchResultCard:G,DetailHeadline:P},props:{data:{type:Object,required:!1}}}),R={key:0},S={key:0,class:"lg:BaseGrid lg:mb-18 container mx-auto mb-10"},N={class:"lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4"},T={key:1,"aria-label":"Directory Listing",class:"lg:my-18 my-10"};function H(e,m,V,$,F,O){const y=a("DetailHeadline"),c=a("LayoutHelper"),h=a("BlockText"),f=a("BaseHeading"),b=a("SearchResultCard");return e.data?(r(),i("div",R,[o(c,{indent:"col-2",class:"lg:mt-12 mt-5 mb-10"},{default:n(()=>[o(y,{title:e.data.title},null,8,["title"])]),_:1}),e.data.summary?(r(),i("div",S,[k("div",N,[o(h,{text:e.data.summary},null,8,["text"])])])):l("",!0),e.data.children&&e.data.children.length?(r(),i("section",T,[o(c,{indent:"col-2"},{default:n(()=>[o(f,{level:"h2",class:"lg:mb-8 mb-5"},{default:n(()=>m[0]||(m[0]=[D(" Directory Listing ")])),_:1}),(r(!0),i(L,null,B(e.data.children,t=>(r(),q(b,{key:t.id,type:t.label,topic:t.topicLabel,url:t.url,image:t.thumbnailImage,title:t.title,summary:t.summary,"heading-level":"h3"},null,8,["type","topic","url","image","title","summary"]))),128))]),_:1})])):l("",!0)])):l("",!0)}const I=_(g,[["render",H]]);g.__docgenInfo={exportName:"default",displayName:"PageGoDirectory",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PageGoDirectory/PageGoDirectory.vue"};const _e={title:"Templates/WWW/PageGoDirectory",component:I,tags:["!autodocs"],decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},s={name:"PageGoDirectory",args:{data:{title:"Go Sites",summary:"Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.",children:[{id:1,label:"Label",topicLabel:"Topic Label",url:"/go/placeholder",title:"Title of the go site homepage",summary:"Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}},{id:2,label:"Label",topicLabel:null,url:"/go/placeholder",title:"Title of the go site homepage",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}}]}}};var u,p,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'PageGoDirectory',
  args: {
    data: {
      title: 'Go Sites',
      summary: \`Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.\`,
      children: [{
        id: 1,
        label: 'Label',
        topicLabel: 'Topic Label',
        url: '/go/placeholder',
        title: 'Title of the go site homepage',
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
        url: '/go/placeholder',
        title: 'Title of the go site homepage',
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
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const ke=["BaseStory"];export{s as BaseStory,ke as __namedExportsOrder,_e as default};
