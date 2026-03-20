import{BlockLinkTileCarouselData as P}from"./BlockLinkCarousel.stories-CdVJlnYE.js";import{j as B,f as L,g as t,B as n,k as s,p as c,I as D,J as T,E as o,w as d,H as i,o as a,F as u,A as M}from"./iframe-DykQSSCG.js";import{L as w}from"./LayoutHelper-Bh4UUr2o.js";import{D as V}from"./DetailHeadline-1vITTpoN.js";import{B as _}from"./BaseButton-B2ZoU71J.js";import{B as C}from"./BlockText-a2x_G67a.js";import{B as H}from"./BaseVideo-C-M9MY2L.js";import{B as N}from"./BlockVideoEmbed-BW23gDva.js";import{B as E}from"./BlockLinkCarousel-DLxJ5Bj8.js";import{B as I}from"./BaseHeading-mGMACVqI.js";import"./preload-helper-PPVm8Dsz.js";import"./MixinCarousel---Dw_wnj.js";import"./a11y-C7GBo9cw.js";import"./navigation-CFJlRBZS.js";import"./_swiperOptions-Cb85alkN.js";import"./IconPrev-BZKw8dLG.js";import"./BaseLink-BXTWC9Jv.js";import"./theme-CBZiEs7X.js";import"./MixinAnimationCaret-DEpjYl9A.js";import"./IconCaret-BrQV7_Jh.js";import"./BlockLinkCard-B_K-On0K.js";import"./mixins-Bc9aeVQW.js";import"./useApi-j1E6pMaV-Clo2pbDT.js";import"./IconArrow-Ch213rDP.js";import"./IconExternal-CR4uJ-gf.js";import"./BaseImage-DIBNPo_Y.js";import"./BaseImagePlaceholder-B0fEOkEA.js";import"./BasePill-Ca_ozjaB.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BAE3TVRp.js";import"./rangeifyGrades-BK1QHkuj.js";import"./IconEduTechnology-C7FHHAeK.js";import"./IconTime-B805woPe.js";import"./CalendarChip-DNvqH_H3.js";import"./MetadataEvent-fmtpt6_D.js";import"./IconCalendar-C1xzJI08.js";import"./IconLocation-PxlrcGYP.js";import"./BlockLinkTile-BVKRvhbf.js";import"./BaseImageCaption-DUOkqFKK.js";const p=B({name:"PageVideoDetail",components:{LayoutHelper:w,DetailHeadline:V,BlockText:C,BaseButton:_,BaseVideo:H,BlockVideoEmbed:N,BlockLinkCarousel:E,BaseHeading:I},props:{data:{type:Object,required:!1}},data(){return{openTab:1}}}),R={key:0,class:"PageVideoDetail ThemeVariantLight",itemscope:"",itemtype:"http://schema.org/VideoObject"},J=["content"],F=["content"],q=["content"],x=["content"],W={class:"lg:container 3xl:px-0 lg:mt-12 px-5 mx-auto mt-5"},j={key:4,class:"max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8"},O={key:5,class:"max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8"},$={class:"lg:grid grid-cols-10"},z={key:0,class:"col-span-7"},K={key:0,class:"col-span-7 my-5"},U={class:"video-aside col-start-9 col-end-11"},G={class:"lg:pt-0 lg:mb-12 pt-8"},Q={class:"lg:w-auto w-full"},X={key:6,class:"bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"};function Y(e,r,ee,ae,te,ne){const g=i("DetailHeadline"),h=i("BlockVideoEmbed"),y=i("BaseVideo"),m=i("BlockText"),f=i("BaseHeading"),b=i("BaseButton"),k=i("LayoutHelper"),v=i("BlockLinkCarousel");return e.data?(a(),t("div",R,[e.data.uploadedMedia&&e.data.uploadedMedia.file?(a(),t("meta",{key:0,itemprop:"contentUrl",content:e.data.uploadedMedia.file},null,8,J)):n("",!0),e.data.uploadedMedia&&e.data.uploadedMedia.duration?(a(),t("meta",{key:1,itemprop:"duration",content:e.data.uploadedMedia.duration},null,8,F)):n("",!0),e.data.thumbnailImage&&e.data.thumbnailImage.original?(a(),t("meta",{key:2,itemprop:"thumbnailUrl",content:e.data.thumbnailImage.original},null,8,q)):n("",!0),e.data.summary||e.data.videoDetailBody?(a(),t("meta",{key:3,itemprop:"description",content:e.data.summary||e.data.videoDetailBody},null,8,x)):n("",!0),s("div",W,[e.data.title?(a(),c(g,{key:0,title:e.data.title,"publication-date":e.data.publicationDate,label:e.data.topicLabel,schema:""},null,8,["title","publication-date","label"])):n("",!0)]),e.data.block.length?(a(),t("div",j,[(a(!0),t(D,null,T(e.data.block,(A,S)=>(a(),t("div",{key:S},[o(h,{data:A},null,8,["data"])]))),128))])):e.data.uploadedMedia?(a(),t("div",O,[o(y,{data:e.data.uploadedMedia,schema:""},null,8,["data"])])):n("",!0),o(k,{indent:"col-2"},{default:d(()=>[s("div",$,[e.data.videoDetailBody?(a(),t("div",z,[o(m,{text:e.data.videoDetailBody},null,8,["text"]),r[1]||(r[1]=s("hr",{class:"border-gray-light-mid lg:my-8 my-5"},null,-1)),e.data.transcript?(a(),t("div",K,[o(f,{level:"h2",class:"mb-5"},{default:d(()=>[...r[0]||(r[0]=[u("Transcript",-1)])]),_:1}),o(m,{text:e.data.transcript,variant:"medium",class:"video-transcript",itemprop:"transcript"},null,8,["text"])])):n("",!0)])):n("",!0),s("aside",U,[s("div",G,[s("div",Q,[e.data.uploadedMedia&&e.data.uploadedMedia.file?(a(),c(b,{key:0,href:e.data.uploadedMedia.file,class:"w-full mb-5",variant:"primary",compact:""},{default:d(()=>[u("Download "+M(e.data.uploadedMedia.fileExtension||"Video"),1)]),_:1},8,["href"])):n("",!0)])])])])]),_:1}),e.data.relatedPages&&e.data.relatedPages.length?(a(),t("div",X,[o(v,{"item-type":"tiles",heading:"Related Pages",items:e.data.relatedPages},null,8,["items"])])):n("",!0)])):n("",!0)}const Z=L(p,[["render",Y]]);p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"PageVideoDetail",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"openTab",type:"number",description:"",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/PageVideoDetail/PageVideoDetail.vue"});const je={title:"Templates/PageVideoDetail",component:Z,tags:["!autodocs"],excludeStories:/.*Data$/,parameters:{layout:"fullscreen"}},l={name:"PageVideoDetail",args:{data:{block:[],videoDetailBody:"How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.",firstPublishedAt:"2001-12-03T08:00:00+00:00",id:"6723",label:"Video",publicationDate:"2001-12-03",seoDescription:null,seoTitle:"Seals, Sea Lions, and Satellites",slug:"seals-sea-lions-and-satellites",summary:"How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.",thumbnailImage:{alt:"Seals, Sea Lions, and Satellites",id:"7844",original:"/public/images/bg-earth-1440x810.jpg"},title:"Seals, Sea Lions, and Satellites",topicLabel:"Earth",transcript:`<p>Preparing to Land Perseverance</p>
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
    <p>[hitting rock]</p>`,uploadedMedia:{duration:"122",file:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4",fileExtension:"m4v",fileWebm:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm",height:null,id:"1",sources:"[{'src': '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4', 'type': 'application/octet-stream'}, {'src': '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm', 'type': 'video/webm'}]",title:"Seals, Sea Lions, and Satellites",type:"",width:null},url:"/videos/seals-sea-lions-and-satellites/",urlPath:"/home/videos/seals-sea-lions-and-satellites/",relatedPages:P}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Oe=["BaseStory"];export{l as BaseStory,Oe as __namedExportsOrder,je as default};
