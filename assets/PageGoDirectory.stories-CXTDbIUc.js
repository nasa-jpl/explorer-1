import{a as v,_,s as a,o as r,g as i,y as o,l as n,h as k,p as l,z as D,F as L,B,k as w}from"./iframe-DI0ok8AA.js";import{B as x}from"./BaseHeading-BA8y4J-v.js";import{L as P}from"./LayoutHelper-DfkTDq0B.js";import{B as R}from"./BlockText-jlYiqlIh.js";import{S as q}from"./SearchResultCard-W1xHZgOM.js";import{D as C}from"./DetailHeadline-DZVTnMfh.js";import"./preload-helper-D6kgxu3v.js";import"./theme-B3sYGVxw.js";import"./BaseLink-CS6yEVao.js";import"./MixinAnimationCaret-D9Cvu4DQ.js";import"./IconCaret-BGyeD6QJ.js";import"./BaseAudio-vBE2IfjC.js";import"./IconPlay-BSZagVW5.js";import"./IconForwardTen-MiCRhyGs.js";import"./BaseImage-BFycSJmR.js";import"./BaseImagePlaceholder-Dt0gpSSu.js";import"./CalendarChip-BCpoyJ28.js";import"./mixins-D0wooHhi.js";import"./MetadataEvent-BvhDqCml.js";import"./IconCalendar-Bxp-nV9C.js";import"./IconTime-D4i-0k0F.js";import"./IconLocation-DhddGI2S.js";import"./BlockLinkCard-B_TY5_PU.js";import"./IconArrow-Cq--PbnK.js";import"./IconExternal-PAmfsf2V.js";import"./BasePill-CvFlm_Mx.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-CCDm1mm7.js";import"./rangeifyGrades-Bjq9TgSg.js";import"./IconProfile--D_FviMQ.js";import"./lookupContentType-fqqouDFz.js";const g=v({name:"PageGoDirectory",components:{BaseHeading:x,LayoutHelper:P,BlockText:R,SearchResultCard:q,DetailHeadline:C},props:{data:{type:Object,required:!1}}}),G={key:0},S={key:0,class:"lg:BaseGrid lg:mb-18 container mx-auto mb-10"},T={class:"lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4"},N={key:1,"aria-label":"Directory Listing",class:"lg:my-18 my-10"};function H(e,m,I,F,$,O){const y=a("DetailHeadline"),c=a("LayoutHelper"),h=a("BlockText"),f=a("BaseHeading"),b=a("SearchResultCard");return e.data?(r(),i("div",G,[o(c,{indent:"col-2",class:"lg:mt-12 mt-5 mb-10"},{default:n(()=>[o(y,{title:e.data.title},null,8,["title"])]),_:1}),e.data.summary?(r(),i("div",S,[k("div",T,[o(h,{text:e.data.summary},null,8,["text"])])])):l("",!0),e.data.children&&e.data.children.length?(r(),i("section",N,[o(c,{indent:"col-2"},{default:n(()=>[o(f,{level:"h2",class:"lg:mb-8 mb-5"},{default:n(()=>m[0]||(m[0]=[D(" Directory Listing ")])),_:1}),(r(!0),i(L,null,B(e.data.children,t=>(r(),w(b,{key:t.id,type:t.label,topic:t.topicLabel,url:t.url,image:t.thumbnailImage,title:t.title,summary:t.summary,"heading-level":"h3"},null,8,["type","topic","url","image","title","summary"]))),128))]),_:1})])):l("",!0)])):l("",!0)}const V=_(g,[["render",H]]);g.__docgenInfo={exportName:"default",displayName:"PageGoDirectory",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PageGoDirectory/PageGoDirectory.vue"};const be={title:"Templates/WWW/PageGoDirectory",component:V,tags:["!autodocs"],decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},s={name:"PageGoDirectory",args:{data:{title:"Go Sites",summary:"Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.",children:[{id:1,label:"Label",topicLabel:"Topic Label",url:"/go/placeholder",title:"Title of the go site homepage",summary:"Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}},{id:2,label:"Label",topicLabel:null,url:"/go/placeholder",title:"Title of the go site homepage",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}}]}}};var u,p,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const ve=["BaseStory"];export{s as BaseStory,ve as __namedExportsOrder,be as default};
