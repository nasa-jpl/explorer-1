import{M as S,a as m}from"./MissionDetailHighlights.stories-CU_HZ4it.js";import{MissionDetailStatsData as h}from"./MissionDetailStats.stories-Ct1jwJsi.js";import{M as R,a as g}from"./MissionDetailAbout.stories-CFmXNKyv.js";import{M as L,a as b}from"./MissionDetailStreamfield.stories-CEXxChnN.js";import{BlockLinkTileCarouselData as p,BlockLinkCardCarouselData as u}from"./BlockLinkCarousel.stories-C776pWIE.js";import{BlockRelatedLinksData as k}from"./BlockRelatedLinks.stories-8WzkP3ss.js";import{j as B,f as E,E as t,o as i,g as w,k as A,F as a,p as c,B as s,n as D,w as I}from"./iframe-CUZq7Oz2.js";import{M as U}from"./MissionDetailHero-BU101ihH.js";import{M as G}from"./MissionDetailStats-nOQOEGnv.js";import{B as j}from"./BlockRelatedLinks-BLjwjzTO.js";import{B as P}from"./BlockLinkCarousel-C_hMEd0v.js";import{L as q}from"./LayoutHelper-Dq12w3bq.js";import"./throttle-D4nR9Ap8.js";import"./isObjectLike-uSXFmQFv.js";import"./isSymbol-80kRkBId.js";import"./a11y-CsH3QYR5.js";import"./navigation-CXd_UzVy.js";import"./BaseHeading-f5Kc0l-g.js";import"./BaseLink-DLCWZqRj.js";import"./theme-CNK7AaU7.js";import"./MixinAnimationCaret-CCvE7RyC.js";import"./IconCaret-iQdsYJwf.js";import"./IconExternal-C6zl5m-g.js";import"./IconPrev-C6jiMI60.js";import"./BaseButton-BoqxScql.js";import"./MissionDetailStatsMini-DbnWG4gf.js";import"./BaseTimer-DghGz6Nm.js";import"./MissionDetailStatsMicro-j83QQ0z_.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseUnitToggle-DSRJHTfV.js";import"./BlockText-BS62w3pW.js";import"./BaseImageCaption.stories-CQPg0Nu-.js";import"./BaseImageCaption-DhX2DtMb.js";import"./BlockIframeEmbed.stories-Dz7_Rwiq.js";import"./BlockIframeEmbed-eZQRzors.js";import"./BaseImagePlaceholder-_RIYbPX1.js";import"./MissionDetailInlineImage-DNgvb02d.js";import"./mixins-41YTlVRC.js";import"./useApi-CUWMwLLw-C3HfpkXu.js";import"./BaseImage-CwFSACUh.js";import"./BlockQuote-DUGkO1T_.js";import"./MixinCarousel-C-rdjUQu.js";import"./_swiperOptions-Cb85alkN.js";import"./BlockLinkCard-DT8B_gur.js";import"./IconArrow-BgumnZRo.js";import"./BasePill-T9GtHXfr.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-82hkUuA4.js";import"./rangeifyGrades-Cgoq-wRj.js";import"./IconEduTechnology-D_MSo9G_.js";import"./IconTime-CKkFcOTE.js";import"./CalendarChip-Y6i3ieXw.js";import"./MetadataEvent-GqyGLsm5.js";import"./IconCalendar-BJTFpaM9.js";import"./IconLocation-ZEt51MGB.js";import"./BlockLinkTile-CuPi41IB.js";import"./IconDownload-W_SM3P3R.js";import"./ParallaxContainer-BUNWmt4y.js";const d=B({name:"PageMissionDetail",components:{MissionDetailHighlights:S,MissionDetailHero:U,MissionDetailAbout:R,MissionDetailStats:G,MissionDetailStreamfield:L,BlockRelatedLinks:j,BlockLinkCarousel:P,LayoutHelper:q},props:{data:{type:Object,required:!1,default:void 0}},computed:{theTheme(){return this.data.templateStyle==="dark"?"ThemeVariantDark bg-black":"ThemeVariantLight"},moreAboutTopicHeading(){const{topicLabels:e}=this.data;if(!e||e.length===0)return"More";if(e.length===1)return`More about ${e[0]}`;const y=e[e.length-1];return`More about ${e.slice(0,e.length-1).join(", ")} and ${y}`}}}),F={key:0,class:"-nav-offset"},W={key:1,class:"bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"};function $(e,y,M,Q,Z,z){const v=t("MissionDetailHero"),C=t("MissionDetailStats"),O=t("MissionDetailAbout"),N=t("MissionDetailHighlights"),V=t("MissionDetailStreamfield"),f=t("BlockLinkCarousel"),T=t("BlockRelatedLinks"),H=t("LayoutHelper");return e.data?(i(),w("div",F,[A("div",{class:D(e.theTheme)},[a(v,{title:e.data.title,subtitle:e.data.subtitle,summary:e.data.summary,"template-style":e.data.templateStyle,"mission-website-url":e.data.missionWebsiteUrl,"instrument-image":e.data.instrumentImage,"instrument-background":e.data.instrumentBackground,"hero-fallback":e.data.heroImage},null,8,["title","subtitle","summary","template-style","mission-website-url","instrument-image","instrument-background","hero-fallback"]),a(C,{"show-clock":e.data.showClock,"show-distance":e.data.showDistance,"clock-type":e.data.clockType,"start-date-time":e.data.startDateTime,"distance-type":e.data.distanceType,"distance-value":e.data.distanceValue,"distance-api-urls":e.data.distanceApiUrls,"display-date":e.data.displayDate,"mission-types":e.data.missionTypes,"mission-targets":e.data.missionTargets,status:e.data.status},null,8,["show-clock","show-distance","clock-type","start-date-time","distance-type","distance-value","distance-api-urls","display-date","mission-types","mission-targets","status"]),a(O,{class:"py-10","description-heading":e.data.descriptionHeading,description:e.data.description,instruments:e.data.instruments},null,8,["description-heading","description","instruments"]),e.data.highlights&&e.data.highlights.length?(i(),c(N,{key:0,animation:e.data.showHighlightsAnimation,graphic:e.data.highlightsGraphic,heading:e.data.highlightsHeading,"mission-title":e.data.title,highlights:e.data.highlights},null,8,["animation","graphic","heading","mission-title","highlights"])):s("",!0),e.data.feature&&e.data.feature.length?(i(),c(V,{key:1,class:D(["pt-10",{"pb-10":e.data.templateStyle==="dark"}]),data:e.data.feature},null,8,["class","data"])):s("",!0)],2),a(f,{"item-type":"cards",class:"lg:mt-24 mt-18 lg:mb-18 mb-10",heading:e.moreAboutTopicHeading,items:e.data.relatedPages},null,8,["heading","items"]),e.data.relatedLinks&&e.data.relatedLinks.length?(i(),c(H,{key:0,indent:"col-2",class:"lg:mb-18 mb-10"},{default:I(()=>[a(T,{data:e.data.relatedLinks[0]},null,8,["data"])]),_:1})):s("",!0),e.data.otherMissions&&e.data.otherMissions.length?(i(),w("div",W,[a(f,{"item-type":"tiles",heading:"Explore Other Missions",items:e.data.otherMissions},null,8,["items"])])):s("",!0)])):s("",!0)}const K=E(d,[["render",$]]);d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"PageMissionDetail",name:"PageMissionDetail",type:1,props:[{name:"data",global:!1,default:"undefined",description:"",tags:[],required:!1,type:"Record<string, any>",schema:"Record<string, any>",declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",schema:"string",declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[],exposed:[{name:"theTheme",type:'"ThemeVariantDark bg-black" | "ThemeVariantLight"',description:"",tags:[],schema:{kind:"enum",type:'"ThemeVariantDark bg-black" | "ThemeVariantLight"',schema:['"ThemeVariantDark bg-black"','"ThemeVariantLight"']},declarations:[]},{name:"moreAboutTopicHeading",type:"string",description:"",tags:[],schema:"string",declarations:[]}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PageMissionDetail/PageMissionDetail.vue"});const xe={title:"Templates/WWW/PageMissionDetail",component:K,tags:["!autodocs"],decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},n={name:"Dark Template",args:{data:{...h,...m,...b,...g,relatedLinks:[k.data],relatedPages:u,otherMissions:p,slug:"oco-2",templateStyle:"dark",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",thumbnailImage:"https://picsum.photos/400/200",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",topicLabels:["Stars and Galaxies","Exoplanets"],heroImage:{srcSet:"https://https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"OCO-2 hero image"},instrumentImage:{webp:{url:"/public/images/mission-oco2.webp"},src:{url:"/public/images/mission-grace-fo-75.webp",width:1597,height:700},alt:"The instrument"},instrumentBackground:{image:{srcSet:"/public/images/bg-earth-1440x810.jpg 1440w",src:{url:"/public/images/bg-earth-1440x810.jpg",width:1440,height:810}}}}}},o={args:{data:{...h,...m,...b,...g,relatedLinks:[k.data],relatedPages:u,otherMissions:p,slug:"oco-2",templateStyle:"light",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"The hero image"},instrumentImage:null,instrumentBackground:null}}},r={args:{data:{...h,...m,...b,...g,relatedLinks:[k.data],relatedPages:u,otherMissions:p,slug:"oco-2",templateStyle:"light",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"The hero image"},instrumentImage:{webp:{url:"/public/images/mission-oco2.webp"},src:{url:"/public/images/mission-grace-fo-75.webp",width:1597,height:700},alt:"The instrument"},instrumentBackground:null}}},l={args:{data:{showClock:!0,showDistance:!1,clockType:"time_in_orbit",startDateTime:"2018-10-22 10:04:21+01:00",distanceType:"earth",distanceValue:4986444,distanceApiUrls:"",displayDate:"Oct. 22, 2018",missionTypes:[{missionType:"Orbiters"}],missionTargets:[{target:"Earth"}],status:"current",...m,highlightsHeading:"Mission Highlights",highlights:[{date:"2018-11-01",heading:"GRACE-FO Resumes Data Collection",summary:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet."}],feature:[{blockType:"QuoteBlock",quote:"“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties”",attribution:"Amy Ross, Spacesuit Designer"}],relatedLinks:[{links:[{text:"Mission Website",document:"",page:"",externalLink:"http://gracefo.jpl.nasa.gov/"}]}],relatedPages:u,otherMissions:p,slug:"grace-fo",templateStyle:"dark",title:"GRACE-FO",subtitle:"Gravity Recovery and Climate Experiment Follow-On",summary:"The Gravity Recovery and Climate Experiment Follow-on (GRACE-FO) mission is a partnership between NASA and the German Research Centre for Geosciences (GFZ).",thumbnailImage:"https://picsum.photos/400/200",missionWebsiteUrl:"http://gracefo.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"GRACE-FO hero image"},instrumentImage:{webp:{url:"/public/images/mission-grace-fo-75.webp"},src:{url:"/public/images/mission-grace-fo.png",width:1597,height:700},alt:"The instrument"},instrumentBackground:{image:{srcSet:"/public/images/bg-earth-1440x810.jpg 1440w",src:{url:"/public/images/bg-earth-1440x810.jpg",width:1440,height:810}}}}}},et=["BaseStory","LightTemplateWithHero","LightTemplateNoBackground","GraceFO"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Dark Template',
  args: {
    data: {
      ...MissionDetailStatsData,
      ...MissionDetailHighlightsData,
      ...MissionDetailStreamfieldData,
      ...MissionDetailAboutData,
      relatedLinks: [BlockRelatedLinksData.data],
      relatedPages: BlockLinkCardCarouselData,
      otherMissions: BlockLinkTileCarouselData,
      slug: 'oco-2',
      templateStyle: 'dark',
      title: 'OCO-2',
      subtitle: 'Orbiting Carbon Observatory 2',
      summary: 'OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ',
      thumbnailImage: 'https://picsum.photos/400/200',
      missionWebsiteUrl: 'http://oco.jpl.nasa.gov/',
      topicLabels: ['Stars and Galaxies', 'Exoplanets'],
      heroImage: {
        srcSet: 'https://https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w',
        src: {
          url: 'https://picsum.photos/1920/1200',
          width: 1920,
          height: 1200
        },
        alt: 'OCO-2 hero image'
      },
      instrumentImage: {
        webp: {
          url: '/public/images/mission-oco2.webp'
        },
        src: {
          url: '/public/images/mission-grace-fo-75.webp',
          width: 1597,
          height: 700
        },
        alt: 'The instrument'
      },
      instrumentBackground: {
        image: {
          srcSet: '/public/images/bg-earth-1440x810.jpg' + ' 1440w',
          src: {
            url: '/public/images/bg-earth-1440x810.jpg',
            width: 1440,
            height: 810
          }
        }
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      ...MissionDetailStatsData,
      ...MissionDetailHighlightsData,
      ...MissionDetailStreamfieldData,
      ...MissionDetailAboutData,
      relatedLinks: [BlockRelatedLinksData.data],
      relatedPages: BlockLinkCardCarouselData,
      otherMissions: BlockLinkTileCarouselData,
      slug: 'oco-2',
      templateStyle: 'light',
      title: 'OCO-2',
      subtitle: 'Orbiting Carbon Observatory 2',
      summary: 'OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ',
      missionWebsiteUrl: 'http://oco.jpl.nasa.gov/',
      heroImage: {
        srcSet: 'https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w',
        src: {
          url: 'https://picsum.photos/1920/1200',
          width: 1920,
          height: 1200
        },
        alt: 'The hero image'
      },
      instrumentImage: null,
      instrumentBackground: null
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      ...MissionDetailStatsData,
      ...MissionDetailHighlightsData,
      ...MissionDetailStreamfieldData,
      ...MissionDetailAboutData,
      relatedLinks: [BlockRelatedLinksData.data],
      relatedPages: BlockLinkCardCarouselData,
      otherMissions: BlockLinkTileCarouselData,
      slug: 'oco-2',
      templateStyle: 'light',
      title: 'OCO-2',
      subtitle: 'Orbiting Carbon Observatory 2',
      summary: 'OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ',
      missionWebsiteUrl: 'http://oco.jpl.nasa.gov/',
      heroImage: {
        srcSet: 'https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w',
        src: {
          url: 'https://picsum.photos/1920/1200',
          width: 1920,
          height: 1200
        },
        alt: 'The hero image'
      },
      instrumentImage: {
        webp: {
          url: '/public/images/mission-oco2.webp'
        },
        src: {
          url: '/public/images/mission-grace-fo-75.webp',
          width: 1597,
          height: 700
        },
        alt: 'The instrument'
      },
      instrumentBackground: null
    }
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      showClock: true,
      showDistance: false,
      clockType: 'time_in_orbit',
      startDateTime: '2018-10-22 10:04:21+01:00',
      distanceType: 'earth',
      distanceValue: 4986444,
      distanceApiUrls: '',
      displayDate: 'Oct. 22, 2018',
      missionTypes: [{
        missionType: 'Orbiters'
      }],
      missionTargets: [{
        target: 'Earth'
      }],
      status: 'current',
      ...MissionDetailHighlightsData,
      highlightsHeading: 'Mission Highlights',
      highlights: [{
        date: '2018-11-01',
        heading: 'GRACE-FO Resumes Data Collection',
        summary: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet.'
      }],
      feature: [{
        blockType: 'QuoteBlock',
        quote: "“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties”",
        attribution: 'Amy Ross, Spacesuit Designer'
      }],
      relatedLinks: [{
        links: [{
          text: 'Mission Website',
          document: '',
          page: '',
          externalLink: 'http://gracefo.jpl.nasa.gov/'
        }]
      }],
      relatedPages: BlockLinkCardCarouselData,
      otherMissions: BlockLinkTileCarouselData,
      slug: 'grace-fo',
      templateStyle: 'dark',
      title: 'GRACE-FO',
      subtitle: 'Gravity Recovery and Climate Experiment Follow-On',
      summary: 'The Gravity Recovery and Climate Experiment Follow-on (GRACE-FO) mission is a partnership between NASA and the German Research Centre for Geosciences (GFZ).',
      thumbnailImage: 'https://picsum.photos/400/200',
      missionWebsiteUrl: 'http://gracefo.jpl.nasa.gov/',
      heroImage: {
        srcSet: 'https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w',
        src: {
          url: 'https://picsum.photos/1920/1200',
          width: 1920,
          height: 1200
        },
        alt: 'GRACE-FO hero image'
      },
      instrumentImage: {
        webp: {
          url: '/public/images/mission-grace-fo-75.webp'
        },
        src: {
          url: '/public/images/mission-grace-fo.png',
          width: 1597,
          height: 700
        },
        alt: 'The instrument'
      },
      instrumentBackground: {
        image: {
          srcSet: '/public/images/bg-earth-1440x810.jpg' + ' 1440w',
          src: {
            url: '/public/images/bg-earth-1440x810.jpg',
            width: 1440,
            height: 810
          }
        }
      }
    }
  }
}`,...l.parameters?.docs?.source}}};export{n as BaseStory,l as GraceFO,r as LightTemplateNoBackground,o as LightTemplateWithHero,et as __namedExportsOrder,xe as default};
