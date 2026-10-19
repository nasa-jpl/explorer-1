import{BlockLinkTileCarouselData as A}from"./BlockLinkCarousel.stories-DySqyFDS.js";import{j as H,f as M,E as n,o as a,g as t,B as o,k as s,p as u,I as S,J as P,F as i,w as p,G as c,A as B}from"./iframe-n3lhZlRB.js";import{L}from"./LayoutHelper-Bs_eWI2b.js";import{D}from"./DetailHeadline-DT4mBqjW.js";import{B as T}from"./BaseButton-DqztCW39.js";import{B as w}from"./BlockText-BAeXDa9M.js";import{B as _}from"./BaseVideo-sUKMD4ti.js";import{B as R}from"./BlockVideoEmbed-DilqBJQ1.js";import{B as C}from"./BlockLinkCarousel-DVXXD3mO.js";import{B as E}from"./BaseHeading-DdROYUNs.js";import"./preload-helper-PPVm8Dsz.js";import"./MixinCarousel-BKpuAn13.js";import"./a11y-CsH3QYR5.js";import"./navigation-CXd_UzVy.js";import"./_swiperOptions-Cb85alkN.js";import"./IconPrev-DHyOrUw2.js";import"./BaseLink-CjNxd9gr.js";import"./theme-Co-t9SUs.js";import"./MixinAnimationCaret-D7FfAJso.js";import"./IconCaret-BDOfx5Hc.js";import"./BlockLinkCard-CRxId5lf.js";import"./mixins-CReUV2It.js";import"./useApi-CUWMwLLw-DUoGJCoX.js";import"./IconArrow-w7Lj_fNh.js";import"./IconExternal-BJsLNLDk.js";import"./BaseImage-RXBsQX-4.js";import"./BaseImagePlaceholder-CB7zVNDC.js";import"./BasePill-ghsqLPEt.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-OWoZxaqs.js";import"./rangeifyGrades--vI-het2.js";import"./IconEduTechnology-DzhqrRGf.js";import"./IconTime-B_dy5iHJ.js";import"./CalendarChip-CKgaeuYn.js";import"./MetadataEvent-CFyrWaf_.js";import"./IconCalendar-DIwAFxNC.js";import"./IconLocation-BRtc32Gk.js";import"./BlockLinkTile-BYSkOl3m.js";import"./BaseImageCaption-C-LW21h3.js";const l=H({name:"PageVideoDetail",components:{LayoutHelper:L,DetailHeadline:D,BlockText:w,BaseButton:T,BaseVideo:_,BlockVideoEmbed:R,BlockLinkCarousel:C,BaseHeading:E},props:{data:{type:Object,required:!1}},data(){return{openTab:1}}}),I={key:0,class:"PageVideoDetail ThemeVariantLight",itemscope:"",itemtype:"http://schema.org/VideoObject"},q=["content"],U=["content"],J=["content"],F=["content"],x={class:"lg:container 3xl:px-0 lg:mt-12 px-5 mx-auto mt-5"},W={key:4,class:"max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8"},j={key:5,class:"max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8"},O={class:"lg:grid grid-cols-10"},$={key:0,class:"col-span-7"},z={key:0,class:"col-span-7 my-5"},K={class:"video-aside col-start-9 col-end-11"},G={class:"lg:pt-0 lg:mb-12 pt-8"},Q={class:"lg:w-auto w-full"},X={key:6,class:"bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"};function Y(e,r,ee,ae,te,oe){const g=n("DetailHeadline"),y=n("BlockVideoEmbed"),h=n("BaseVideo"),m=n("BlockText"),k=n("BaseHeading"),f=n("BaseButton"),b=n("LayoutHelper"),v=n("BlockLinkCarousel");return e.data?(a(),t("div",I,[e.data.uploadedMedia&&e.data.uploadedMedia.file?(a(),t("meta",{key:0,itemprop:"contentUrl",content:e.data.uploadedMedia.file},null,8,q)):o("",!0),e.data.uploadedMedia&&e.data.uploadedMedia.duration?(a(),t("meta",{key:1,itemprop:"duration",content:e.data.uploadedMedia.duration},null,8,U)):o("",!0),e.data.thumbnailImage&&e.data.thumbnailImage.original?(a(),t("meta",{key:2,itemprop:"thumbnailUrl",content:e.data.thumbnailImage.original},null,8,J)):o("",!0),e.data.summary||e.data.videoDetailBody?(a(),t("meta",{key:3,itemprop:"description",content:e.data.summary||e.data.videoDetailBody},null,8,F)):o("",!0),s("div",x,[e.data.title?(a(),u(g,{key:0,title:e.data.title,"publication-date":e.data.publicationDate,label:e.data.topicLabel,schema:""},null,8,["title","publication-date","label"])):o("",!0)]),e.data.block.length?(a(),t("div",W,[(a(!0),t(S,null,P(e.data.block,(V,N)=>(a(),t("div",{key:N},[i(y,{data:V},null,8,["data"])]))),128))])):e.data.uploadedMedia?(a(),t("div",j,[i(h,{data:e.data.uploadedMedia,schema:""},null,8,["data"])])):o("",!0),i(b,{indent:"col-2"},{default:p(()=>[s("div",O,[e.data.videoDetailBody?(a(),t("div",$,[i(m,{text:e.data.videoDetailBody},null,8,["text"]),r[1]||(r[1]=s("hr",{class:"border-gray-light-mid lg:my-8 my-5"},null,-1)),e.data.transcript?(a(),t("div",z,[i(k,{level:"h2",class:"mb-5"},{default:p(()=>[...r[0]||(r[0]=[c("Transcript",-1)])]),_:1}),i(m,{text:e.data.transcript,variant:"medium",class:"video-transcript",itemprop:"transcript"},null,8,["text"])])):o("",!0)])):o("",!0),s("aside",K,[s("div",G,[s("div",Q,[e.data.uploadedMedia&&e.data.uploadedMedia.file?(a(),u(f,{key:0,href:e.data.uploadedMedia.file,class:"w-full mb-5",variant:"primary",compact:""},{default:p(()=>[c("Download "+B(e.data.uploadedMedia.fileExtension||"Video"),1)]),_:1},8,["href"])):o("",!0)])])])])]),_:1}),e.data.relatedPages&&e.data.relatedPages.length?(a(),t("div",X,[i(v,{"item-type":"tiles",heading:"Related Pages",items:e.data.relatedPages},null,8,["items"])])):o("",!0)])):o("",!0)}const Z=M(l,[["render",Y]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"PageVideoDetail",name:"PageVideoDetail",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",schema:"Record<string, any>",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",schema:"string",declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[],exposed:[{name:"openTab",type:"number",description:"",tags:[],schema:"number",declarations:[]}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/PageVideoDetail/PageVideoDetail.vue"});const We={title:"Templates/PageVideoDetail",component:Z,tags:["!autodocs"],excludeStories:/.*Data$/,parameters:{layout:"fullscreen"}},d={name:"PageVideoDetail",args:{data:{block:[],videoDetailBody:"How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.",firstPublishedAt:"2001-12-03T08:00:00+00:00",id:"6723",label:"Video",publicationDate:"2001-12-03",seoDescription:null,seoTitle:"Seals, Sea Lions, and Satellites",slug:"seals-sea-lions-and-satellites",summary:"How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.",thumbnailImage:{alt:"Seals, Sea Lions, and Satellites",id:"7844",original:"/public/images/bg-earth-1440x810.jpg"},title:"Seals, Sea Lions, and Satellites",topicLabel:"Earth",transcript:`<p>Preparing to Land Perseverance</p>
    <p>The following tests, conducted from 2017-2020, helped prepare NASA's Perseverance rover for its landing on Mars.</p>
    <p>[music]</p>
    <p>Centrifuge Spin Test</p>
    <p>Santa Clarita, CA June 2019</p>
    <p>[music]</p>
    <p>Parachute Firing Test</p>
    <p>Moses Lake, WA May 2019</p>
    <p>[music]</p>
    <p>[mortar firing]</p>
    <p>[mortar firing]</p>
    <p>[clapping]</p>
    <p>Parachute Wind Tunnel Test</p>
    <p>NASA's Ames Research Center </p>
    <p>Moffett Field, CA June 2017</p>
    <p>[music]</p>
    <p>[mortar firing]</p>
    <p>[wind]</p>
    <p>[clapping]</p>
    <p>Lander Vision System Test</p>
    <p>For Avoiding Landing Hazards</p>
    <p>Death Valley, CA May 2019</p>
    <p>[helicopter taking off]</p>
    <p>[music]</p>
    <p>Rover Wheel Drop Test</p>
    <p>NASA's Jet Propulsion Laboratory</p>
    <p>Southern CA August 2019</p>
    <p>[wheel dropping]</p>
    <p>[hitting rock]</p>`,uploadedMedia:{duration:"122",file:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4",fileExtension:"m4v",fileWebm:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm",height:null,id:"1",sources:"[{'src': '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4', 'type': 'application/octet-stream'}, {'src': '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm', 'type': 'video/webm'}]",title:"Seals, Sea Lions, and Satellites",type:"",width:null},url:"/videos/seals-sea-lions-and-satellites/",urlPath:"/home/videos/seals-sea-lions-and-satellites/",relatedPages:A}}},je=["BaseStory"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'PageVideoDetail',
  args: {
    data: {
      block: [],
      videoDetailBody: 'How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.',
      firstPublishedAt: '2001-12-03T08:00:00+00:00',
      id: '6723',
      label: 'Video',
      publicationDate: '2001-12-03',
      seoDescription: null,
      seoTitle: 'Seals, Sea Lions, and Satellites',
      slug: 'seals-sea-lions-and-satellites',
      summary: 'How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.',
      thumbnailImage: {
        alt: 'Seals, Sea Lions, and Satellites',
        id: '7844',
        original: '/public/images/bg-earth-1440x810.jpg'
      },
      title: 'Seals, Sea Lions, and Satellites',
      topicLabel: 'Earth',
      transcript: \`<p>Preparing to Land Perseverance</p>
    <p>The following tests, conducted from 2017-2020, helped prepare NASA's Perseverance rover for its landing on Mars.</p>
    <p>[music]</p>
    <p>Centrifuge Spin Test</p>
    <p>Santa Clarita, CA June 2019</p>
    <p>[music]</p>
    <p>Parachute Firing Test</p>
    <p>Moses Lake, WA May 2019</p>
    <p>[music]</p>
    <p>[mortar firing]</p>
    <p>[mortar firing]</p>
    <p>[clapping]</p>
    <p>Parachute Wind Tunnel Test</p>
    <p>NASA's Ames Research Center </p>
    <p>Moffett Field, CA June 2017</p>
    <p>[music]</p>
    <p>[mortar firing]</p>
    <p>[wind]</p>
    <p>[clapping]</p>
    <p>Lander Vision System Test</p>
    <p>For Avoiding Landing Hazards</p>
    <p>Death Valley, CA May 2019</p>
    <p>[helicopter taking off]</p>
    <p>[music]</p>
    <p>Rover Wheel Drop Test</p>
    <p>NASA's Jet Propulsion Laboratory</p>
    <p>Southern CA August 2019</p>
    <p>[wheel dropping]</p>
    <p>[hitting rock]</p>\`,
      uploadedMedia: {
        duration: '122',
        file: '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4',
        fileExtension: 'm4v',
        fileWebm: '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm',
        height: null,
        id: '1',
        sources: "[{'src': '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4', 'type': 'application/octet-stream'}, {'src': '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm', 'type': 'video/webm'}]",
        title: 'Seals, Sea Lions, and Satellites',
        type: '',
        width: null
      },
      url: '/videos/seals-sea-lions-and-satellites/',
      urlPath: '/home/videos/seals-sea-lions-and-satellites/',
      relatedPages: BlockLinkTileCarouselData
    }
  }
}`,...d.parameters?.docs?.source}}};export{d as BaseStory,je as __namedExportsOrder,We as default};
