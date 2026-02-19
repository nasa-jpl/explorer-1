import{h,e as f,f as i,B as a,w as n,j as b,y as l,C as v,F as _,G as k,l as D,E as r,o}from"./iframe-Cbo-gMoN.js";import{B as L}from"./BaseHeading-CRqctB7S.js";import{L as B}from"./LayoutHelper-hmng7OlB.js";import{B as w}from"./BlockText-R1MLfcuA.js";import{S as x}from"./SearchResultCard-Cm5HH4nz.js";import{D as C}from"./DetailHeadline-CdJH7mQE.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-BQWoGd8-.js";import"./BaseLink-C7mdSZaT.js";import"./MixinAnimationCaret-BKTqSsaA.js";import"./IconCaret-Rf9_wB61.js";import"./BaseAudio-5neOaDlk.js";import"./IconPlay-BrEGaO39.js";import"./IconVolume-TlFyFOTY.js";import"./BaseImage-C-jvPTC0.js";import"./BaseImagePlaceholder-B0Hywvqu.js";import"./CalendarChip-DCoVqpPF.js";import"./mixins-DFOhzVt7.js";import"./useApi-o-nPpLEi-G-KNyTFX.js";import"./MetadataEvent-CyiqV-tH.js";import"./IconCalendar-DuXbnSrE.js";import"./IconTime-BeC5d_Pa.js";import"./IconLocation-b4jAkq_-.js";import"./BlockLinkCard-DlJx0DNG.js";import"./IconArrow-DWMJwvtB.js";import"./IconExternal-C8Ethc5a.js";import"./BasePill-CjUUrgh7.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-DICc6Q24.js";import"./rangeifyGrades-BRM4Ys4u.js";import"./IconEduTechnology-DM7FchE-.js";import"./MetadataStacked-DqIsbiUp.js";import"./IconHourglass-eCC1sitn.js";import"./lookupContentType-CxkJ4PqZ.js";const u=h({name:"PageGoDirectory",components:{BaseHeading:L,LayoutHelper:B,BlockText:w,SearchResultCard:x,DetailHeadline:C},props:{data:{type:Object,required:!1}}}),G={key:0},P={key:0,class:"lg:BaseGrid lg:mb-18 container mx-auto mb-10"},R={class:"lg:px-0 lg:col-end-10 xl:col-end-8 relative col-start-2 px-4"},q={key:1,"aria-label":"Directory Listing",class:"lg:my-18 my-10"};function S(e,m,N,H,V,I){const p=r("DetailHeadline"),c=r("LayoutHelper"),d=r("BlockText"),g=r("BaseHeading"),y=r("SearchResultCard");return e.data?(o(),i("div",G,[a(c,{indent:"col-2",class:"lg:mt-12 mt-5 mb-10"},{default:n(()=>[a(p,{title:e.data.title},null,8,["title"])]),_:1}),e.data.summary?(o(),i("div",P,[b("div",R,[a(d,{text:e.data.summary},null,8,["text"])])])):l("",!0),e.data.children&&e.data.children.length?(o(),i("section",q,[a(c,{indent:"col-2"},{default:n(()=>[a(g,{level:"h2",class:"lg:mb-8 mb-5"},{default:n(()=>[...m[0]||(m[0]=[v(" Directory Listing ",-1)])]),_:1}),(o(!0),i(_,null,k(e.data.children,t=>(o(),D(y,{key:t.id,type:t.label,topic:t.topicLabel,url:t.url,image:t.thumbnailImage,title:t.title,summary:t.summary,"heading-level":"h3"},null,8,["type","topic","url","image","title","summary"]))),128))]),_:1})])):l("",!0)])):l("",!0)}const T=f(u,[["render",S]]);u.__docgenInfo={exportName:"default",displayName:"PageGoDirectory",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PageGoDirectory/PageGoDirectory.vue"};const be={title:"Templates/WWW/PageGoDirectory",component:T,tags:["!autodocs"],decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},s={name:"PageGoDirectory",args:{data:{title:"Go Sites",summary:"Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.",children:[{id:1,label:"Label",topicLabel:"Topic Label",url:"/go/placeholder",title:"Title of the go site homepage",summary:"Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}},{id:2,label:"Label",topicLabel:null,url:"/go/placeholder",title:"Title of the go site homepage",thumbnailImage:{src:{url:"https://picsum.photos/560/560",width:"560",height:"560"}}}]}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
