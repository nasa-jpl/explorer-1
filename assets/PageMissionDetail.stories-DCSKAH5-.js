import{M as R,a as m}from"./MissionDetailHighlights.stories-Bvyp_OzR.js";import{MissionDetailStatsData as h}from"./MissionDetailStats.stories-vmSM5AIa.js";import{M as A,a as d}from"./MissionDetailAbout.stories-tJEgxNNM.js";import{M as E,a as g}from"./MissionDetailStreamfield.stories-DIDPmL5m.js";import{BlockLinkTileCarouselData as p,BlockLinkCardCarouselData as c}from"./BlockLinkCarousel.stories-6e1JPid4.js";import{BlockRelatedLinksData as b}from"./BlockRelatedLinks.stories-CRiKP-i8.js";import{h as H,e as I,f,j as G,B as a,l as u,y as i,n as w,w as j,E as e,o as s}from"./iframe-BPFwKcEh.js";import{M as P}from"./MissionDetailHero-C_9Fmw0L.js";import{M as F}from"./MissionDetailStats-CRUr4AoF.js";import{B as V}from"./BlockRelatedLinks-aQQuQIJ4.js";import{B as W}from"./BlockLinkCarousel-1TXvcc0k.js";import{L as N}from"./LayoutHelper-CcoaDpZ7.js";import"./throttle-BRR9X2vC.js";import"./isObjectLike-YeUXoDXE.js";import"./isSymbol-5fA6fJrv.js";import"./a11y-C7GBo9cw.js";import"./navigation-CFJlRBZS.js";import"./BaseHeading-DhRLtF8v.js";import"./BaseLink-BXX5bfwf.js";import"./theme-3Ig3wil9.js";import"./MixinAnimationCaret-CL21IM4A.js";import"./IconCaret-DHu4gTqt.js";import"./IconExternal-B0wx5pQq.js";import"./IconPrev-DMr3d_J5.js";import"./BaseButton-CI8cVyLz.js";import"./MissionDetailStatsMini-BlQSmRJl.js";import"./BaseTimer-DAiOsysV.js";import"./MissionDetailStatsMicro-lsBd2PI7.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseUnitToggle-B8gwnMwK.js";import"./BlockText-R1W3lG5Q.js";import"./BaseImageCaption.stories-BPT0n_vz.js";import"./BaseImageCaption-39MdgmUR.js";import"./BlockIframeEmbed.stories-BdoidjLs.js";import"./BlockIframeEmbed-DyZwTxgB.js";import"./BaseImagePlaceholder-wOHfr57l.js";import"./MissionDetailInlineImage-BYVBKhaZ.js";import"./mixins-BQ_0RFFF.js";import"./useApi-j1E6pMaV-4noHurWZ.js";import"./BaseImage-CCJn8eQ_.js";import"./BlockQuote-ktWFQlVU.js";import"./MixinCarousel-CTKos1ze.js";import"./_swiperOptions-Cb85alkN.js";import"./BlockLinkCard-CwTBSWxv.js";import"./IconArrow-62Is6-t5.js";import"./BasePill-DGEoGDqV.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-R2DR7mhe.js";import"./rangeifyGrades-57BKSe74.js";import"./IconEduTechnology-DoALDqL_.js";import"./IconTime-NgpcoO69.js";import"./CalendarChip-A6VRPvrs.js";import"./MetadataEvent-Dq-fHEU6.js";import"./IconCalendar-Ddc0brUn.js";import"./IconLocation-r6wlJH6D.js";import"./BlockLinkTile-CMjzrCFg.js";import"./IconDownload-BtJxD797.js";import"./ParallaxContainer-BN5F48NP.js";const D=H({name:"PageMissionDetail",components:{MissionDetailHighlights:R,MissionDetailHero:P,MissionDetailAbout:A,MissionDetailStats:F,MissionDetailStreamfield:E,BlockRelatedLinks:V,BlockLinkCarousel:W,LayoutHelper:N},props:{data:{type:Object,required:!1,default:void 0}},computed:{theTheme(){return this.data.templateStyle==="dark"?"ThemeVariantDark bg-black":"ThemeVariantLight"},moreAboutTopicHeading(){const{topicLabels:t}=this.data;if(!t||t.length===0)return"More";if(t.length===1)return`More about ${t[0]}`;const y=t[t.length-1];return`More about ${t.slice(0,t.length-1).join(", ")} and ${y}`}}}),q={key:0,class:"-nav-offset"},U={key:1,class:"bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"};function $(t,y,C,Q,Z,z){const O=e("MissionDetailHero"),M=e("MissionDetailStats"),T=e("MissionDetailAbout"),v=e("MissionDetailHighlights"),S=e("MissionDetailStreamfield"),k=e("BlockLinkCarousel"),L=e("BlockRelatedLinks"),B=e("LayoutHelper");return t.data?(s(),f("div",q,[G("div",{class:w(t.theTheme)},[a(O,{title:t.data.title,subtitle:t.data.subtitle,summary:t.data.summary,"template-style":t.data.templateStyle,"mission-website-url":t.data.missionWebsiteUrl,"instrument-image":t.data.instrumentImage,"instrument-background":t.data.instrumentBackground,"hero-fallback":t.data.heroImage},null,8,["title","subtitle","summary","template-style","mission-website-url","instrument-image","instrument-background","hero-fallback"]),a(M,{"show-clock":t.data.showClock,"show-distance":t.data.showDistance,"clock-type":t.data.clockType,"start-date-time":t.data.startDateTime,"distance-type":t.data.distanceType,"distance-value":t.data.distanceValue,"distance-api-urls":t.data.distanceApiUrls,"display-date":t.data.displayDate,"mission-types":t.data.missionTypes,"mission-targets":t.data.missionTargets,status:t.data.status},null,8,["show-clock","show-distance","clock-type","start-date-time","distance-type","distance-value","distance-api-urls","display-date","mission-types","mission-targets","status"]),a(T,{class:"py-10","description-heading":t.data.descriptionHeading,description:t.data.description,instruments:t.data.instruments},null,8,["description-heading","description","instruments"]),t.data.highlights&&t.data.highlights.length?(s(),u(v,{key:0,animation:t.data.showHighlightsAnimation,graphic:t.data.highlightsGraphic,heading:t.data.highlightsHeading,"mission-title":t.data.title,highlights:t.data.highlights},null,8,["animation","graphic","heading","mission-title","highlights"])):i("",!0),t.data.feature&&t.data.feature.length?(s(),u(S,{key:1,class:w(["pt-10",{"pb-10":t.data.templateStyle==="dark"}]),data:t.data.feature},null,8,["class","data"])):i("",!0)],2),a(k,{"item-type":"cards",class:"lg:mt-24 mt-18 lg:mb-18 mb-10",heading:t.moreAboutTopicHeading,items:t.data.relatedPages},null,8,["heading","items"]),t.data.relatedLinks&&t.data.relatedLinks.length?(s(),u(B,{key:0,indent:"col-2",class:"lg:mb-18 mb-10"},{default:j(()=>[a(L,{data:t.data.relatedLinks[0]},null,8,["data"])]),_:1})):i("",!0),t.data.otherMissions&&t.data.otherMissions.length?(s(),f("div",U,[a(k,{"item-type":"tiles",heading:"Explore Other Missions",items:t.data.otherMissions},null,8,["items"])])):i("",!0)])):i("",!0)}const K=I(D,[["render",$]]);D.__docgenInfo={exportName:"default",displayName:"PageMissionDetail",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:"undefined"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"theTheme",type:'"ThemeVariantDark bg-black" | "ThemeVariantLight"',description:"",declarations:[],schema:{kind:"enum",type:'"ThemeVariantDark bg-black" | "ThemeVariantLight"',schema:['"ThemeVariantDark bg-black"','"ThemeVariantLight"']}},{name:"moreAboutTopicHeading",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PageMissionDetail/PageMissionDetail.vue"};const _t={title:"Templates/WWW/PageMissionDetail",component:K,tags:["!autodocs"],decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},n={name:"Dark Template",args:{data:{...h,...m,...g,...d,relatedLinks:[b.data],relatedPages:c,otherMissions:p,slug:"oco-2",templateStyle:"dark",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",thumbnailImage:"https://picsum.photos/400/200",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",topicLabels:["Stars and Galaxies","Exoplanets"],heroImage:{srcSet:"https://https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"OCO-2 hero image"},instrumentImage:{webp:{url:"/public/images/mission-oco2.webp"},src:{url:"/public/images/mission-grace-fo-75.webp",width:1597,height:700},alt:"The instrument"},instrumentBackground:{image:{srcSet:"/public/images/bg-earth-1440x810.jpg 1440w",src:{url:"/public/images/bg-earth-1440x810.jpg",width:1440,height:810}}}}}},o={args:{data:{...h,...m,...g,...d,relatedLinks:[b.data],relatedPages:c,otherMissions:p,slug:"oco-2",templateStyle:"light",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"The hero image"},instrumentImage:null,instrumentBackground:null}}},r={args:{data:{...h,...m,...g,...d,relatedLinks:[b.data],relatedPages:c,otherMissions:p,slug:"oco-2",templateStyle:"light",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"The hero image"},instrumentImage:{webp:{url:"/public/images/mission-oco2.webp"},src:{url:"/public/images/mission-grace-fo-75.webp",width:1597,height:700},alt:"The instrument"},instrumentBackground:null}}},l={args:{data:{showClock:!0,showDistance:!1,clockType:"time_in_orbit",startDateTime:"2018-10-22 10:04:21+01:00",distanceType:"earth",distanceValue:4986444,distanceApiUrls:"",displayDate:"Oct. 22, 2018",missionTypes:[{missionType:"Orbiters"}],missionTargets:[{target:"Earth"}],status:"current",...m,highlightsHeading:"Mission Highlights",highlights:[{date:"2018-11-01",heading:"GRACE-FO Resumes Data Collection",summary:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet."}],feature:[{blockType:"QuoteBlock",quote:"“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties”",attribution:"Amy Ross, Spacesuit Designer"}],relatedLinks:[{links:[{text:"Mission Website",document:"",page:"",externalLink:"http://gracefo.jpl.nasa.gov/"}]}],relatedPages:c,otherMissions:p,slug:"grace-fo",templateStyle:"dark",title:"GRACE-FO",subtitle:"Gravity Recovery and Climate Experiment Follow-On",summary:"The Gravity Recovery and Climate Experiment Follow-on (GRACE-FO) mission is a partnership between NASA and the German Research Centre for Geosciences (GFZ).",thumbnailImage:"https://picsum.photos/400/200",missionWebsiteUrl:"http://gracefo.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"GRACE-FO hero image"},instrumentImage:{webp:{url:"/public/images/mission-grace-fo-75.webp"},src:{url:"/public/images/mission-grace-fo.png",width:1597,height:700},alt:"The instrument"},instrumentBackground:{image:{srcSet:"/public/images/bg-earth-1440x810.jpg 1440w",src:{url:"/public/images/bg-earth-1440x810.jpg",width:1440,height:810}}}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const te=["BaseStory","LightTemplateWithHero","LightTemplateNoBackground","GraceFO"];export{n as BaseStory,l as GraceFO,r as LightTemplateNoBackground,o as LightTemplateWithHero,te as __namedExportsOrder,_t as default};
