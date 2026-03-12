import{j as h,f,g as i,E as a,w as l,k as b,B as m,F as v,I as _,J as k,p as D,H as r,o}from"./iframe-Y1adRlUN.js";import{B as L}from"./BaseHeading-TacbrXls.js";import{L as B}from"./LayoutHelper-B-Ne--dd.js";import{B as w}from"./BlockText-CoriLWFe.js";import{S as x}from"./SearchResultCard-Drvs-7cn.js";import{D as P}from"./DetailHeadline-DDLMXQSD.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-DrdrCy7d.js";import"./BaseLink-xeNaTMVJ.js";import"./MixinAnimationCaret-D6F7OZLw.js";import"./IconCaret-DqTdTTo9.js";import"./BaseAudio-BJ48RJXg.js";import"./IconPlay-hxnfBxmY.js";import"./IconVolume-BedsA_yO.js";import"./BaseImage-BZMqLbmU.js";import"./BaseImagePlaceholder-BdjpUEQL.js";import"./CalendarChip-F2tfHFtS.js";import"./mixins-Dq0e2eCZ.js";import"./useApi-j1E6pMaV-DAlil3FN.js";import"./MetadataEvent-C7Joz79v.js";import"./IconCalendar-vRq3bEm_.js";import"./IconTime-ByfGdVy_.js";import"./IconLocation-DVOPrLvA.js";import"./BlockLinkCard-IZkGBYvj.js";import"./IconArrow-DOfsRsJ6.js";import"./IconExternal-fqjuLkv0.js";import"./BasePill-CwV_RYhY.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-CylCU6aO.js";import"./rangeifyGrades-BNdHyEhu.js";import"./IconEduTechnology-D7Dy2MCi.js";import"./MetadataStacked-BwB__fEu.js";import"./IconHourglass-DAMKhNh2.js";import"./lookupContentType-CQDtoZ5d.js";const n=h({name:"PageGoDirectory",components:{BaseHeading:L,LayoutHelper:B,BlockText:w,SearchResultCard:x,DetailHeadline:P},props:{data:{type:Object,required:!1}}}),R={key:0},q={key:0,class:"lg:BaseGrid lg:mb-18 container mx-auto mb-10"},C={class:"lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4"},G={key:1,"aria-label":"Directory Listing",class:"lg:my-18 my-10"};function S(e,c,T,H,I,V){const p=r("DetailHeadline"),u=r("LayoutHelper"),d=r("BlockText"),g=r("BaseHeading"),y=r("SearchResultCard");return e.data?(o(),i("div",R,[a(u,{indent:"col-2",class:"lg:mt-12 mt-5 mb-10"},{default:l(()=>[a(p,{title:e.data.title},null,8,["title"])]),_:1}),e.data.summary?(o(),i("div",q,[b("div",C,[a(d,{text:e.data.summary},null,8,["text"])])])):m("",!0),e.data.children&&e.data.children.length?(o(),i("section",G,[a(u,{indent:"col-2"},{default:l(()=>[a(g,{level:"h2",class:"lg:mb-8 mb-5"},{default:l(()=>[...c[0]||(c[0]=[v(" Directory Listing ",-1)])]),_:1}),(o(!0),i(_,null,k(e.data.children,t=>(o(),D(y,{key:t.id,type:t.label,topic:t.topicLabel,url:t.url,image:t.thumbnailImage,title:t.title,summary:t.summary,"heading-level":"h3"},null,8,["type","topic","url","image","title","summary"]))),128))]),_:1})])):m("",!0)])):m("",!0)}const N=f(n,[["render",S]]);n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"PageGoDirectory",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PageGoDirectory/PageGoDirectory.vue"});const be={title:"Templates/WWW/PageGoDirectory",component:N,tags:["!autodocs"],decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},s={name:"PageGoDirectory",args:{data:{title:"Go Sites",summary:"Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.",children:[{id:1,label:"Label",topicLabel:"Topic Label",url:"/go/placeholder",title:"Title of the go site homepage",summary:"Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}},{id:2,label:"Label",topicLabel:null,url:"/go/placeholder",title:"Title of the go site homepage",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}}]}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ve=["BaseStory"];export{s as BaseStory,ve as __namedExportsOrder,be as default};
