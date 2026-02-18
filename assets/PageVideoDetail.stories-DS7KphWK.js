import{BlockLinkTileCarouselData as P}from"./BlockLinkCarousel.stories-BVPBXu0A.js";import{h as B,e as L,f as t,y as n,j as s,l as m,F as D,G as T,B as o,w as p,E as i,o as a,C as c,x as M}from"./iframe-UYtirdi4.js";import{L as w}from"./LayoutHelper-D4fFMFG6.js";import{D as V}from"./DetailHeadline-CdlMrL5g.js";import{B as C}from"./BaseButton-DbWpKeGD.js";import{B as _}from"./BlockText-dKPoDMn8.js";import{B as H}from"./BaseVideo-CSgVXZj0.js";import{B as N}from"./BlockVideoEmbed-BE64h2mV.js";import{B as E}from"./BlockLinkCarousel-BR-inwkd.js";import{B as I}from"./BaseHeading-WJvwHq44.js";import"./preload-helper-PPVm8Dsz.js";import"./MixinCarousel-BaSp7VOX.js";import"./a11y-C7GBo9cw.js";import"./navigation-CFJlRBZS.js";import"./_swiperOptions-Cb85alkN.js";import"./IconPrev-BBlmJxzb.js";import"./BaseLink-lmH6BWCB.js";import"./theme-BRik7gSk.js";import"./MixinAnimationCaret-DSrUC3op.js";import"./IconCaret-BIX7eFZP.js";import"./BlockLinkCard-B2yaWjhI.js";import"./mixins-CenKgLpa.js";import"./useApi-o-nPpLEi-wlm0xV6x.js";import"./IconArrow-CrsfpwEe.js";import"./IconExternal-BL9uGUW2.js";import"./BaseImage-CUK1QaiB.js";import"./BaseImagePlaceholder-BXeU4iUT.js";import"./BasePill-DkYyvuik.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-DJ4sc2gI.js";import"./rangeifyGrades-BsN0W6xn.js";import"./IconEduTechnology-C2M4UM86.js";import"./IconTime-C1dSvWMa.js";import"./CalendarChip-tIQEXBr4.js";import"./MetadataEvent-C5DLu9_P.js";import"./IconCalendar-S_47nupr.js";import"./IconLocation-B6dlE4Sx.js";import"./BlockLinkTile-Dj_QEOWh.js";import"./BaseImageCaption-DATawy7L.js";const u=B({name:"PageVideoDetail",components:{LayoutHelper:w,DetailHeadline:V,BlockText:_,BaseButton:C,BaseVideo:H,BlockVideoEmbed:N,BlockLinkCarousel:E,BaseHeading:I},props:{data:{type:Object,required:!1}},data(){return{openTab:1}}}),R={key:0,class:"PageVideoDetail ThemeVariantLight",itemscope:"",itemtype:"http://schema.org/VideoObject"},J=["content"],x=["content"],F=["content"],q=["content"],W={class:"lg:container 3xl:px-0 lg:mt-12 px-5 mx-auto mt-5"},j={key:4,class:"max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8"},O={key:5,class:"max-w-screen-2xl lg:mb-24 mx-auto mt-10 mb-8"},$={class:"lg:grid grid-cols-10"},z={key:0,class:"col-span-7"},K={key:0,class:"col-span-7 my-5"},U={class:"video-aside col-start-9 col-end-11"},G={class:"lg:pt-0 lg:mb-12 pt-8"},Q={class:"lg:w-auto w-full"},X={key:6,class:"bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"};function Y(e,r,ee,ae,te,ne){const g=i("DetailHeadline"),h=i("BlockVideoEmbed"),y=i("BaseVideo"),d=i("BlockText"),f=i("BaseHeading"),b=i("BaseButton"),v=i("LayoutHelper"),k=i("BlockLinkCarousel");return e.data?(a(),t("div",R,[e.data.uploadedMedia&&e.data.uploadedMedia.file?(a(),t("meta",{key:0,itemprop:"contentUrl",content:e.data.uploadedMedia.file},null,8,J)):n("",!0),e.data.uploadedMedia&&e.data.uploadedMedia.duration?(a(),t("meta",{key:1,itemprop:"duration",content:e.data.uploadedMedia.duration},null,8,x)):n("",!0),e.data.thumbnailImage&&e.data.thumbnailImage.original?(a(),t("meta",{key:2,itemprop:"thumbnailUrl",content:e.data.thumbnailImage.original},null,8,F)):n("",!0),e.data.summary||e.data.videoDetailBody?(a(),t("meta",{key:3,itemprop:"description",content:e.data.summary||e.data.videoDetailBody},null,8,q)):n("",!0),s("div",W,[e.data.title?(a(),m(g,{key:0,title:e.data.title,"publication-date":e.data.publicationDate,label:e.data.topicLabel,schema:""},null,8,["title","publication-date","label"])):n("",!0)]),e.data.block.length?(a(),t("div",j,[(a(!0),t(D,null,T(e.data.block,(A,S)=>(a(),t("div",{key:S},[o(h,{data:A},null,8,["data"])]))),128))])):e.data.uploadedMedia?(a(),t("div",O,[o(y,{data:e.data.uploadedMedia,schema:""},null,8,["data"])])):n("",!0),o(v,{indent:"col-2"},{default:p(()=>[s("div",$,[e.data.videoDetailBody?(a(),t("div",z,[o(d,{text:e.data.videoDetailBody},null,8,["text"]),r[1]||(r[1]=s("hr",{class:"border-gray-light-mid lg:my-8 my-5"},null,-1)),e.data.transcript?(a(),t("div",K,[o(f,{level:"h2",class:"mb-5"},{default:p(()=>[...r[0]||(r[0]=[c("Transcript",-1)])]),_:1}),o(d,{text:e.data.transcript,variant:"medium",class:"video-transcript",itemprop:"transcript"},null,8,["text"])])):n("",!0)])):n("",!0),s("aside",U,[s("div",G,[s("div",Q,[e.data.uploadedMedia&&e.data.uploadedMedia.file?(a(),m(b,{key:0,href:e.data.uploadedMedia.file,class:"w-full mb-5",variant:"primary",compact:""},{default:p(()=>[c("Download "+M(e.data.uploadedMedia.fileExtension||"Video"),1)]),_:1},8,["href"])):n("",!0)])])])])]),_:1}),e.data.relatedPages&&e.data.relatedPages.length?(a(),t("div",X,[o(k,{"item-type":"tiles",heading:"Related Pages",items:e.data.relatedPages},null,8,["items"])])):n("",!0)])):n("",!0)}const Z=L(u,[["render",Y]]);u.__docgenInfo={exportName:"default",displayName:"PageVideoDetail",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"openTab",type:"number",description:"",declarations:[],schema:"number"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/PageVideoDetail/PageVideoDetail.vue"};const je={title:"Templates/PageVideoDetail",component:Z,tags:["!autodocs"],excludeStories:/.*Data$/,parameters:{layout:"fullscreen"}},l={name:"PageVideoDetail",args:{data:{block:[],videoDetailBody:"How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.",firstPublishedAt:"2001-12-03T08:00:00+00:00",id:"6723",label:"Video",publicationDate:"2001-12-03",seoDescription:null,seoTitle:"Seals, Sea Lions, and Satellites",slug:"seals-sea-lions-and-satellites",summary:"How Earth satellites including the JPL-managed Topex/Poseidon are helping researchers track the movements and behaviors of sea lions and seals to keep them from extinction.",thumbnailImage:{alt:"Seals, Sea Lions, and Satellites",id:"7844",original:"/public/images/bg-earth-1440x810.jpg"},title:"Seals, Sea Lions, and Satellites",topicLabel:"Earth",transcript:`<p>Preparing to Land Perseverance</p>
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
