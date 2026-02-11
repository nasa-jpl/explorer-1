import{BlockLinkTileCarouselData as D}from"./BlockLinkCarousel.stories-B3SLbMcv.js";import{a as T,_ as M,s as i,o as a,g as t,p as n,h as s,k as m,F as V,B as w,y as o,l as p,z as c,t as _}from"./iframe-G_CakBWE.js";import{L as C}from"./LayoutHelper-DnqeyAzI.js";import{D as H}from"./DetailHeadline-Dbu2k0pC.js";import{B as N}from"./BaseButton-BTr2eQwG.js";import{B as E}from"./BlockText-CEIYzTfh.js";import{B as I}from"./BaseVideo-CIYqBuC1.js";import{B as R}from"./BlockVideoEmbed-Bjs21j9g.js";import{B as J}from"./BlockLinkCarousel-CszteYYh.js";import{B as F}from"./BaseHeading-OakvCC1J.js";import"./preload-helper-D6kgxu3v.js";import"./MixinCarousel-rrfL3Afj.js";import"./a11y-S1BjB8Wp.js";import"./navigation-DYSZwei8.js";import"./_swiperOptions-Cb85alkN.js";import"./IconNext-CUgXmRc9.js";import"./BaseLink-CcTNfetl.js";import"./theme-Bkca4b8i.js";import"./MixinAnimationCaret-D3tm0V1z.js";import"./IconCaret-te7yS8v9.js";import"./BlockLinkCard-BGJLO8hy.js";import"./mixins-DrHwNz-4.js";import"./IconArrow-C-Sg47dA.js";import"./IconExternal-DSeA-M-G.js";import"./BaseImage-B8pQH3NJ.js";import"./BaseImagePlaceholder-CDs8KjMy.js";import"./BasePill-DsV0D3aB.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BsKfeRoh.js";import"./rangeifyGrades-CP9hdYcA.js";import"./IconProfile-IRX8YLGf.js";import"./IconTime-a2dzJKny.js";import"./CalendarChip-XWut31QK.js";import"./MetadataEvent-B_IEX_vA.js";import"./IconCalendar-DsclBzQQ.js";import"./IconLocation-RqyXLBYE.js";import"./BlockLinkTile-D-_xEyWb.js";import"./BaseImageCaption-zf3e7E-j.js";const y=T({name:"PageVideoDetail",components:{LayoutHelper:C,DetailHeadline:H,BlockText:E,BaseButton:N,BaseVideo:I,BlockVideoEmbed:R,BlockLinkCarousel:J,BaseHeading:F},props:{data:{type:Object,required:!1}},data(){return{openTab:1}}}),q={key:0,class:"PageVideoDetail ThemeVariantLight",itemscope:"",itemtype:"http://schema.org/VideoObject"},x=["content"],W=["content"],O=["content"],$=["content"],j={class:"lg:container 3xl:px-0 lg:mt-12 px-5 mx-auto mt-5"},z={key:4,class:"max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8"},K={key:5,class:"max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8"},U={class:"lg:grid grid-cols-10"},G={key:0,class:"col-span-7"},Q={key:0,class:"col-span-7 my-5"},X={class:"video-aside col-start-9 col-end-11"},Y={class:"lg:pt-0 lg:mb-12 pt-8"},Z={class:"lg:w-auto w-full"},ee={key:6,class:"bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"};function ae(e,r,ne,ie,oe,se){const f=i("DetailHeadline"),b=i("BlockVideoEmbed"),k=i("BaseVideo"),d=i("BlockText"),v=i("BaseHeading"),A=i("BaseButton"),S=i("LayoutHelper"),P=i("BlockLinkCarousel");return e.data?(a(),t("div",q,[e.data.uploadedMedia&&e.data.uploadedMedia.file?(a(),t("meta",{key:0,itemprop:"contentUrl",content:e.data.uploadedMedia.file},null,8,x)):n("",!0),e.data.uploadedMedia&&e.data.uploadedMedia.duration?(a(),t("meta",{key:1,itemprop:"duration",content:e.data.uploadedMedia.duration},null,8,W)):n("",!0),e.data.thumbnailImage&&e.data.thumbnailImage.original?(a(),t("meta",{key:2,itemprop:"thumbnailUrl",content:e.data.thumbnailImage.original},null,8,O)):n("",!0),e.data.summary||e.data.videoDetailBody?(a(),t("meta",{key:3,itemprop:"description",content:e.data.summary||e.data.videoDetailBody},null,8,$)):n("",!0),s("div",j,[e.data.title?(a(),m(f,{key:0,title:e.data.title,"publication-date":e.data.publicationDate,label:e.data.topicLabel,schema:""},null,8,["title","publication-date","label"])):n("",!0)]),e.data.block.length?(a(),t("div",z,[(a(!0),t(V,null,w(e.data.block,(B,L)=>(a(),t("div",{key:L},[o(b,{data:B},null,8,["data"])]))),128))])):e.data.uploadedMedia?(a(),t("div",K,[o(k,{data:e.data.uploadedMedia,schema:""},null,8,["data"])])):n("",!0),o(S,{indent:"col-2"},{default:p(()=>[s("div",U,[e.data.videoDetailBody?(a(),t("div",G,[o(d,{text:e.data.videoDetailBody},null,8,["text"]),r[1]||(r[1]=s("hr",{class:"border-gray-light-mid lg:my-8 my-5"},null,-1)),e.data.transcript?(a(),t("div",Q,[o(v,{level:"h2",class:"mb-5"},{default:p(()=>r[0]||(r[0]=[c("Transcript")])),_:1}),o(d,{text:e.data.transcript,variant:"medium",class:"video-transcript",itemprop:"transcript"},null,8,["text"])])):n("",!0)])):n("",!0),s("aside",X,[s("div",Y,[s("div",Z,[e.data.uploadedMedia&&e.data.uploadedMedia.file?(a(),m(A,{key:0,href:e.data.uploadedMedia.file,class:"w-full mb-5",variant:"primary",compact:""},{default:p(()=>[c("Download "+_(e.data.uploadedMedia.fileExtension||"Video"),1)]),_:1},8,["href"])):n("",!0)])])])])]),_:1}),e.data.relatedPages&&e.data.relatedPages.length?(a(),t("div",ee,[o(P,{"item-type":"tiles",heading:"Related Pages",items:e.data.relatedPages},null,8,["items"])])):n("",!0)])):n("",!0)}const te=M(y,[["render",ae]]);y.__docgenInfo={exportName:"default",displayName:"PageVideoDetail",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"openTab",type:"number",description:"",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/PageVideoDetail/PageVideoDetail.vue"};const je={title:"Templates/PageVideoDetail",component:te,tags:["!autodocs"],excludeStories:/.*Data$/,parameters:{layout:"fullscreen"}},l={name:"PageVideoDetail",args:{data:{block:[],videoDetailBody:"How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.",firstPublishedAt:"2001-12-03T08:00:00+00:00",id:"6723",label:"Video",publicationDate:"2001-12-03",seoDescription:null,seoTitle:"Seals, Sea Lions, and Satellites",slug:"seals-sea-lions-and-satellites",summary:"How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.",thumbnailImage:{alt:"Seals, Sea Lions, and Satellites",id:"7844",original:"/public/images/bg-earth-1440x810.jpg"},title:"Seals, Sea Lions, and Satellites",topicLabel:"Earth",transcript:`<p>Preparing to Land Perseverance</p>
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
    <p>[hitting rock]</p>`,uploadedMedia:{duration:"122",file:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4",fileExtension:"m4v",fileWebm:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm",height:null,id:"1",sources:"[{'src': '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4', 'type': 'application/octet-stream'}, {'src': '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm', 'type': 'video/webm'}]",title:"Seals, Sea Lions, and Satellites",type:"",width:null},url:"/videos/seals-sea-lions-and-satellites/",urlPath:"/home/videos/seals-sea-lions-and-satellites/",relatedPages:D}}};var u,g,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const ze=["BaseStory"];export{l as BaseStory,ze as __namedExportsOrder,je as default};
