import{h,e as f,f as i,B as a,w as n,j as b,y as l,C as v,F as _,G as k,l as D,E as r,o}from"./iframe-UYtirdi4.js";import{B as L}from"./BaseHeading-WJvwHq44.js";import{L as B}from"./LayoutHelper-D4fFMFG6.js";import{B as w}from"./BlockText-dKPoDMn8.js";import{S as x}from"./SearchResultCard-DAjv5t6L.js";import{D as C}from"./DetailHeadline-CdlMrL5g.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-BRik7gSk.js";import"./BaseLink-lmH6BWCB.js";import"./MixinAnimationCaret-DSrUC3op.js";import"./IconCaret-BIX7eFZP.js";import"./BaseAudio-Dnxb_Fgy.js";import"./IconPlay-DQgVI9u0.js";import"./IconVolume-CaOagRgY.js";import"./BaseImage-CUK1QaiB.js";import"./BaseImagePlaceholder-BXeU4iUT.js";import"./CalendarChip-tIQEXBr4.js";import"./mixins-CenKgLpa.js";import"./useApi-o-nPpLEi-wlm0xV6x.js";import"./MetadataEvent-C5DLu9_P.js";import"./IconCalendar-S_47nupr.js";import"./IconTime-C1dSvWMa.js";import"./IconLocation-B6dlE4Sx.js";import"./BlockLinkCard-B2yaWjhI.js";import"./IconArrow-CrsfpwEe.js";import"./IconExternal-BL9uGUW2.js";import"./BasePill-DkYyvuik.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-DJ4sc2gI.js";import"./rangeifyGrades-BsN0W6xn.js";import"./IconEduTechnology-C2M4UM86.js";import"./lookupContentType-CxkJ4PqZ.js";const u=h({name:"PageGoDirectory",components:{BaseHeading:L,LayoutHelper:B,BlockText:w,SearchResultCard:x,DetailHeadline:C},props:{data:{type:Object,required:!1}}}),G={key:0},P={key:0,class:"lg:BaseGrid lg:mb-18 container mx-auto mb-10"},R={class:"lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4"},q={key:1,"aria-label":"Directory Listing",class:"lg:my-18 my-10"};function S(e,m,N,H,V,I){const p=r("DetailHeadline"),c=r("LayoutHelper"),d=r("BlockText"),g=r("BaseHeading"),y=r("SearchResultCard");return e.data?(o(),i("div",G,[a(c,{indent:"col-2",class:"lg:mt-12 mt-5 mb-10"},{default:n(()=>[a(p,{title:e.data.title},null,8,["title"])]),_:1}),e.data.summary?(o(),i("div",P,[b("div",R,[a(d,{text:e.data.summary},null,8,["text"])])])):l("",!0),e.data.children&&e.data.children.length?(o(),i("section",q,[a(c,{indent:"col-2"},{default:n(()=>[a(g,{level:"h2",class:"lg:mb-8 mb-5"},{default:n(()=>[...m[0]||(m[0]=[v(" Directory Listing ",-1)])]),_:1}),(o(!0),i(_,null,k(e.data.children,t=>(o(),D(y,{key:t.id,type:t.label,topic:t.topicLabel,url:t.url,image:t.thumbnailImage,title:t.title,summary:t.summary,"heading-level":"h3"},null,8,["type","topic","url","image","title","summary"]))),128))]),_:1})])):l("",!0)])):l("",!0)}const T=f(u,[["render",S]]);u.__docgenInfo={exportName:"default",displayName:"PageGoDirectory",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PageGoDirectory/PageGoDirectory.vue"};const he={title:"Templates/WWW/PageGoDirectory",component:T,tags:["!autodocs"],decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},s={name:"PageGoDirectory",args:{data:{title:"Go Sites",summary:"Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.",children:[{id:1,label:"Label",topicLabel:"Topic Label",url:"/go/placeholder",title:"Title of the go site homepage",summary:"Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}},{id:2,label:"Label",topicLabel:null,url:"/go/placeholder",title:"Title of the go site homepage",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}}]}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const fe=["BaseStory"];export{s as BaseStory,fe as __namedExportsOrder,he as default};
