import{M as R,a as p}from"./MissionDetailHighlights.stories-BmiSvmaT.js";import{MissionDetailStatsData as d}from"./MissionDetailStats.stories-Be7BSZlm.js";import{M as A,a as g}from"./MissionDetailAbout.stories-B1J-wzyq.js";import{M as E,a as b}from"./MissionDetailStreamfield.stories-D9ejQgmv.js";import{BlockLinkTileCarouselData as c,BlockLinkCardCarouselData as u}from"./BlockLinkCarousel.stories-CvbDKMe0.js";import{BlockRelatedLinksData as y}from"./BlockRelatedLinks.stories-88_nvcgX.js";import{j as H,f as I,g as w,k as G,E as a,p as h,B as s,n as D,w as j,H as e,o as i}from"./iframe-By-Q1zBi.js";import{M as P}from"./MissionDetailHero-CxrC0qAq.js";import{M as F}from"./MissionDetailStats-CkF-CYzd.js";import{B as N}from"./BlockRelatedLinks-Crrs5Uxx.js";import{B as V}from"./BlockLinkCarousel-_zJLML8r.js";import{L as W}from"./LayoutHelper-0tBtuSx3.js";import"./throttle-pHwBx6La.js";import"./isObjectLike-CDM2m66v.js";import"./isSymbol-Cd0dl7Aq.js";import"./a11y-C7GBo9cw.js";import"./navigation-CFJlRBZS.js";import"./BaseHeading-DPQ5ZNHd.js";import"./BaseLink-a-0k3cqn.js";import"./theme-DXyRchnE.js";import"./MixinAnimationCaret-Bj8yKzAI.js";import"./IconCaret-BR1Hsp9K.js";import"./IconExternal-CY9xXqya.js";import"./IconPrev-CDsDU4AJ.js";import"./BaseButton-1NGouQx_.js";import"./MissionDetailStatsMini-3iJVhR9K.js";import"./BaseTimer-VfIohDji.js";import"./MissionDetailStatsMicro-xyY0sNRE.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseUnitToggle-DVefvdxr.js";import"./BlockText-D90h87mP.js";import"./BaseImageCaption.stories-CxTVtJTP.js";import"./BaseImageCaption-DFa8Anrl.js";import"./BlockIframeEmbed.stories-DYx7L0UP.js";import"./BlockIframeEmbed-C4f-YZ1A.js";import"./BaseImagePlaceholder-jtRYf7fd.js";import"./MissionDetailInlineImage-EtyuVUR_.js";import"./mixins-Ch8MItPr.js";import"./useApi-j1E6pMaV-CxlOMZRL.js";import"./BaseImage-D2HaAslA.js";import"./BlockQuote-BBfYCFe3.js";import"./MixinCarousel-DB0pqK1-.js";import"./_swiperOptions-Cb85alkN.js";import"./BlockLinkCard-BsyFeAL7.js";import"./IconArrow-2ZpOSEgX.js";import"./BasePill-hTDOaxss.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BV9hHimt.js";import"./rangeifyGrades-BLAtO-Y3.js";import"./IconEduTechnology-C4mL0hzI.js";import"./IconTime-Vc0hDMb6.js";import"./CalendarChip-CmD5Lr8l.js";import"./MetadataEvent-DPzDUq60.js";import"./IconCalendar-ChkBsevw.js";import"./IconLocation-CMJZompf.js";import"./BlockLinkTile-qeaHuKsz.js";import"./IconDownload-V9BWMOph.js";import"./ParallaxContainer-kaqP85yE.js";const m=H({name:"PageMissionDetail",components:{MissionDetailHighlights:R,MissionDetailHero:P,MissionDetailAbout:A,MissionDetailStats:F,MissionDetailStreamfield:E,BlockRelatedLinks:N,BlockLinkCarousel:V,LayoutHelper:W},props:{data:{type:Object,required:!1,default:void 0}},computed:{theTheme(){return this.data.templateStyle==="dark"?"ThemeVariantDark bg-black":"ThemeVariantLight"},moreAboutTopicHeading(){const{topicLabels:t}=this.data;if(!t||t.length===0)return"More";if(t.length===1)return`More about ${t[0]}`;const k=t[t.length-1];return`More about ${t.slice(0,t.length-1).join(", ")} and ${k}`}}}),q={key:0,class:"-nav-offset"},U={key:1,class:"bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"};function $(t,k,C,Q,Z,z){const O=e("MissionDetailHero"),M=e("MissionDetailStats"),T=e("MissionDetailAbout"),v=e("MissionDetailHighlights"),S=e("MissionDetailStreamfield"),f=e("BlockLinkCarousel"),L=e("BlockRelatedLinks"),B=e("LayoutHelper");return t.data?(i(),w("div",q,[G("div",{class:D(t.theTheme)},[a(O,{title:t.data.title,subtitle:t.data.subtitle,summary:t.data.summary,"template-style":t.data.templateStyle,"mission-website-url":t.data.missionWebsiteUrl,"instrument-image":t.data.instrumentImage,"instrument-background":t.data.instrumentBackground,"hero-fallback":t.data.heroImage},null,8,["title","subtitle","summary","template-style","mission-website-url","instrument-image","instrument-background","hero-fallback"]),a(M,{"show-clock":t.data.showClock,"show-distance":t.data.showDistance,"clock-type":t.data.clockType,"start-date-time":t.data.startDateTime,"distance-type":t.data.distanceType,"distance-value":t.data.distanceValue,"distance-api-urls":t.data.distanceApiUrls,"display-date":t.data.displayDate,"mission-types":t.data.missionTypes,"mission-targets":t.data.missionTargets,status:t.data.status},null,8,["show-clock","show-distance","clock-type","start-date-time","distance-type","distance-value","distance-api-urls","display-date","mission-types","mission-targets","status"]),a(T,{class:"py-10","description-heading":t.data.descriptionHeading,description:t.data.description,instruments:t.data.instruments},null,8,["description-heading","description","instruments"]),t.data.highlights&&t.data.highlights.length?(i(),h(v,{key:0,animation:t.data.showHighlightsAnimation,graphic:t.data.highlightsGraphic,heading:t.data.highlightsHeading,"mission-title":t.data.title,highlights:t.data.highlights},null,8,["animation","graphic","heading","mission-title","highlights"])):s("",!0),t.data.feature&&t.data.feature.length?(i(),h(S,{key:1,class:D(["pt-10",{"pb-10":t.data.templateStyle==="dark"}]),data:t.data.feature},null,8,["class","data"])):s("",!0)],2),a(f,{"item-type":"cards",class:"lg:mt-24 mt-18 lg:mb-18 mb-10",heading:t.moreAboutTopicHeading,items:t.data.relatedPages},null,8,["heading","items"]),t.data.relatedLinks&&t.data.relatedLinks.length?(i(),h(B,{key:0,indent:"col-2",class:"lg:mb-18 mb-10"},{default:j(()=>[a(L,{data:t.data.relatedLinks[0]},null,8,["data"])]),_:1})):s("",!0),t.data.otherMissions&&t.data.otherMissions.length?(i(),w("div",U,[a(f,{"item-type":"tiles",heading:"Explore Other Missions",items:t.data.otherMissions},null,8,["items"])])):s("",!0)])):s("",!0)}const K=I(m,[["render",$]]);m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"PageMissionDetail",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:"undefined"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"theTheme",type:'"ThemeVariantDark bg-black" | "ThemeVariantLight"',description:"",declarations:[],schema:{kind:"enum",type:'"ThemeVariantDark bg-black" | "ThemeVariantLight"',schema:['"ThemeVariantDark bg-black"','"ThemeVariantLight"']}},{name:"moreAboutTopicHeading",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PageMissionDetail/PageMissionDetail.vue"});const xt={title:"Templates/WWW/PageMissionDetail",component:K,tags:["!autodocs"],decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},n={name:"Dark Template",args:{data:{...d,...p,...b,...g,relatedLinks:[y.data],relatedPages:u,otherMissions:c,slug:"oco-2",templateStyle:"dark",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",thumbnailImage:"https://picsum.photos/400/200",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",topicLabels:["Stars and Galaxies","Exoplanets"],heroImage:{srcSet:"https://https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"OCO-2 hero image"},instrumentImage:{webp:{url:"/public/images/mission-oco2.webp"},src:{url:"/public/images/mission-grace-fo-75.webp",width:1597,height:700},alt:"The instrument"},instrumentBackground:{image:{srcSet:"/public/images/bg-earth-1440x810.jpg 1440w",src:{url:"/public/images/bg-earth-1440x810.jpg",width:1440,height:810}}}}}},o={args:{data:{...d,...p,...b,...g,relatedLinks:[y.data],relatedPages:u,otherMissions:c,slug:"oco-2",templateStyle:"light",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"The hero image"},instrumentImage:null,instrumentBackground:null}}},r={args:{data:{...d,...p,...b,...g,relatedLinks:[y.data],relatedPages:u,otherMissions:c,slug:"oco-2",templateStyle:"light",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"The hero image"},instrumentImage:{webp:{url:"/public/images/mission-oco2.webp"},src:{url:"/public/images/mission-grace-fo-75.webp",width:1597,height:700},alt:"The instrument"},instrumentBackground:null}}},l={args:{data:{showClock:!0,showDistance:!1,clockType:"time_in_orbit",startDateTime:"2018-10-22 10:04:21+01:00",distanceType:"earth",distanceValue:4986444,distanceApiUrls:"",displayDate:"Oct. 22, 2018",missionTypes:[{missionType:"Orbiters"}],missionTargets:[{target:"Earth"}],status:"current",...p,highlightsHeading:"Mission Highlights",highlights:[{date:"2018-11-01",heading:"GRACE-FO Resumes Data Collection",summary:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet."}],feature:[{blockType:"QuoteBlock",quote:"“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties”",attribution:"Amy Ross, Spacesuit Designer"}],relatedLinks:[{links:[{text:"Mission Website",document:"",page:"",externalLink:"http://gracefo.jpl.nasa.gov/"}]}],relatedPages:u,otherMissions:c,slug:"grace-fo",templateStyle:"dark",title:"GRACE-FO",subtitle:"Gravity Recovery and Climate Experiment Follow-On",summary:"The Gravity Recovery and Climate Experiment Follow-on (GRACE-FO) mission is a partnership between NASA and the German Research Centre for Geosciences (GFZ).",thumbnailImage:"https://picsum.photos/400/200",missionWebsiteUrl:"http://gracefo.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"GRACE-FO hero image"},instrumentImage:{webp:{url:"/public/images/mission-grace-fo-75.webp"},src:{url:"/public/images/mission-grace-fo.png",width:1597,height:700},alt:"The instrument"},instrumentBackground:{image:{srcSet:"/public/images/bg-earth-1440x810.jpg 1440w",src:{url:"/public/images/bg-earth-1440x810.jpg",width:1440,height:810}}}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const te=["BaseStory","LightTemplateWithHero","LightTemplateNoBackground","GraceFO"];export{n as BaseStory,l as GraceFO,r as LightTemplateNoBackground,o as LightTemplateWithHero,te as __namedExportsOrder,xt as default};
