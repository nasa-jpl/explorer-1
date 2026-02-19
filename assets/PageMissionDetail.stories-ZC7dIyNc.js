import{M as R,a as m}from"./MissionDetailHighlights.stories-dcPkaKNt.js";import{MissionDetailStatsData as h}from"./MissionDetailStats.stories-GA_HDH1p.js";import{M as A,a as d}from"./MissionDetailAbout.stories-BLoHRIRq.js";import{M as E,a as g}from"./MissionDetailStreamfield.stories-Cu48SiTk.js";import{BlockLinkTileCarouselData as p,BlockLinkCardCarouselData as c}from"./BlockLinkCarousel.stories-BN7x_hU6.js";import{BlockRelatedLinksData as b}from"./BlockRelatedLinks.stories-D1aV89qd.js";import{h as H,e as I,f,j as G,B as a,l as u,y as i,n as w,w as j,E as e,o as s}from"./iframe-Cbo-gMoN.js";import{M as P}from"./MissionDetailHero-B83QHz1u.js";import{M as F}from"./MissionDetailStats-tVfKcu6O.js";import{B as V}from"./BlockRelatedLinks-BagAyv5j.js";import{B as W}from"./BlockLinkCarousel-9zhFBmU-.js";import{L as N}from"./LayoutHelper-hmng7OlB.js";import"./throttle-alQ_exnt.js";import"./isObjectLike-Ni4a3GVN.js";import"./isSymbol-X7TdSGss.js";import"./a11y-C7GBo9cw.js";import"./navigation-CFJlRBZS.js";import"./BaseHeading-CRqctB7S.js";import"./BaseLink-C7mdSZaT.js";import"./theme-BQWoGd8-.js";import"./MixinAnimationCaret-BKTqSsaA.js";import"./IconCaret-Rf9_wB61.js";import"./IconExternal-C8Ethc5a.js";import"./IconPrev-BEmS4B4d.js";import"./BaseButton-CFcHEwKv.js";import"./MissionDetailStatsMini-B6n2gpfc.js";import"./BaseTimer-CVRgLFgW.js";import"./MissionDetailStatsMicro-D6GZQM_O.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseUnitToggle-Cr2TusLk.js";import"./BlockText-R1MLfcuA.js";import"./BaseImageCaption.stories-HHZym2Vs.js";import"./BaseImageCaption-Cc_JtVPu.js";import"./BlockIframeEmbed.stories-CoGknCOm.js";import"./BlockIframeEmbed-DbiH62G8.js";import"./BaseImagePlaceholder-B0Hywvqu.js";import"./MissionDetailInlineImage-BQp-BeOo.js";import"./mixins-DFOhzVt7.js";import"./useApi-o-nPpLEi-G-KNyTFX.js";import"./BaseImage-C-jvPTC0.js";import"./BlockQuote-CeeQnwea.js";import"./MixinCarousel-DIhzEXhK.js";import"./_swiperOptions-Cb85alkN.js";import"./BlockLinkCard-DlJx0DNG.js";import"./IconArrow-DWMJwvtB.js";import"./BasePill-CjUUrgh7.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-DICc6Q24.js";import"./rangeifyGrades-BRM4Ys4u.js";import"./IconEduTechnology-DM7FchE-.js";import"./IconTime-BeC5d_Pa.js";import"./CalendarChip-DCoVqpPF.js";import"./MetadataEvent-CyiqV-tH.js";import"./IconCalendar-DuXbnSrE.js";import"./IconLocation-b4jAkq_-.js";import"./BlockLinkTile-DlyqbgqB.js";import"./IconDownload-D7jm0pXQ.js";import"./ParallaxContainer-DPwa9KKh.js";const D=H({name:"PageMissionDetail",components:{MissionDetailHighlights:R,MissionDetailHero:P,MissionDetailAbout:A,MissionDetailStats:F,MissionDetailStreamfield:E,BlockRelatedLinks:V,BlockLinkCarousel:W,LayoutHelper:N},props:{data:{type:Object,required:!1,default:void 0}},computed:{theTheme(){return this.data.templateStyle==="dark"?"ThemeVariantDark bg-black":"ThemeVariantLight"},moreAboutTopicHeading(){const{topicLabels:t}=this.data;if(!t||t.length===0)return"More";if(t.length===1)return`More about ${t[0]}`;const y=t[t.length-1];return`More about ${t.slice(0,t.length-1).join(", ")} and ${y}`}}}),q={key:0,class:"-nav-offset"},U={key:1,class:"bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"};function $(t,y,C,Q,Z,z){const O=e("MissionDetailHero"),M=e("MissionDetailStats"),T=e("MissionDetailAbout"),v=e("MissionDetailHighlights"),S=e("MissionDetailStreamfield"),k=e("BlockLinkCarousel"),L=e("BlockRelatedLinks"),B=e("LayoutHelper");return t.data?(s(),f("div",q,[G("div",{class:w(t.theTheme)},[a(O,{title:t.data.title,subtitle:t.data.subtitle,summary:t.data.summary,"template-style":t.data.templateStyle,"mission-website-url":t.data.missionWebsiteUrl,"instrument-image":t.data.instrumentImage,"instrument-background":t.data.instrumentBackground,"hero-fallback":t.data.heroImage},null,8,["title","subtitle","summary","template-style","mission-website-url","instrument-image","instrument-background","hero-fallback"]),a(M,{"show-clock":t.data.showClock,"show-distance":t.data.showDistance,"clock-type":t.data.clockType,"start-date-time":t.data.startDateTime,"distance-type":t.data.distanceType,"distance-value":t.data.distanceValue,"distance-api-urls":t.data.distanceApiUrls,"display-date":t.data.displayDate,"mission-types":t.data.missionTypes,"mission-targets":t.data.missionTargets,status:t.data.status},null,8,["show-clock","show-distance","clock-type","start-date-time","distance-type","distance-value","distance-api-urls","display-date","mission-types","mission-targets","status"]),a(T,{class:"py-10","description-heading":t.data.descriptionHeading,description:t.data.description,instruments:t.data.instruments},null,8,["description-heading","description","instruments"]),t.data.highlights&&t.data.highlights.length?(s(),u(v,{key:0,animation:t.data.showHighlightsAnimation,graphic:t.data.highlightsGraphic,heading:t.data.highlightsHeading,"mission-title":t.data.title,highlights:t.data.highlights},null,8,["animation","graphic","heading","mission-title","highlights"])):i("",!0),t.data.feature&&t.data.feature.length?(s(),u(S,{key:1,class:w(["pt-10",{"pb-10":t.data.templateStyle==="dark"}]),data:t.data.feature},null,8,["class","data"])):i("",!0)],2),a(k,{"item-type":"cards",class:"lg:mt-24 mt-18 lg:mb-18 mb-10",heading:t.moreAboutTopicHeading,items:t.data.relatedPages},null,8,["heading","items"]),t.data.relatedLinks&&t.data.relatedLinks.length?(s(),u(B,{key:0,indent:"col-2",class:"lg:mb-18 mb-10"},{default:j(()=>[a(L,{data:t.data.relatedLinks[0]},null,8,["data"])]),_:1})):i("",!0),t.data.otherMissions&&t.data.otherMissions.length?(s(),f("div",U,[a(k,{"item-type":"tiles",heading:"Explore Other Missions",items:t.data.otherMissions},null,8,["items"])])):i("",!0)])):i("",!0)}const K=I(D,[["render",$]]);D.__docgenInfo={exportName:"default",displayName:"PageMissionDetail",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:"undefined"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"theTheme",type:'"ThemeVariantDark bg-black" | "ThemeVariantLight"',description:"",declarations:[],schema:{kind:"enum",type:'"ThemeVariantDark bg-black" | "ThemeVariantLight"',schema:['"ThemeVariantDark bg-black"','"ThemeVariantLight"']}},{name:"moreAboutTopicHeading",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PageMissionDetail/PageMissionDetail.vue"};const _t={title:"Templates/WWW/PageMissionDetail",component:K,tags:["!autodocs"],decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},n={name:"Dark Template",args:{data:{...h,...m,...g,...d,relatedLinks:[b.data],relatedPages:c,otherMissions:p,slug:"oco-2",templateStyle:"dark",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",thumbnailImage:"https://picsum.photos/400/200",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",topicLabels:["Stars and Galaxies","Exoplanets"],heroImage:{srcSet:"https://https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"OCO-2 hero image"},instrumentImage:{webp:{url:"/public/images/mission-oco2.webp"},src:{url:"/public/images/mission-grace-fo-75.webp",width:1597,height:700},alt:"The instrument"},instrumentBackground:{image:{srcSet:"/public/images/bg-earth-1440x810.jpg 1440w",src:{url:"/public/images/bg-earth-1440x810.jpg",width:1440,height:810}}}}}},o={args:{data:{...h,...m,...g,...d,relatedLinks:[b.data],relatedPages:c,otherMissions:p,slug:"oco-2",templateStyle:"light",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"The hero image"},instrumentImage:null,instrumentBackground:null}}},r={args:{data:{...h,...m,...g,...d,relatedLinks:[b.data],relatedPages:c,otherMissions:p,slug:"oco-2",templateStyle:"light",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"The hero image"},instrumentImage:{webp:{url:"/public/images/mission-oco2.webp"},src:{url:"/public/images/mission-grace-fo-75.webp",width:1597,height:700},alt:"The instrument"},instrumentBackground:null}}},l={args:{data:{showClock:!0,showDistance:!1,clockType:"time_in_orbit",startDateTime:"2018-10-22 10:04:21+01:00",distanceType:"earth",distanceValue:4986444,distanceApiUrls:"",displayDate:"Oct. 22, 2018",missionTypes:[{missionType:"Orbiters"}],missionTargets:[{target:"Earth"}],status:"current",...m,highlightsHeading:"Mission Highlights",highlights:[{date:"2018-11-01",heading:"GRACE-FO Resumes Data Collection",summary:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet."}],feature:[{blockType:"QuoteBlock",quote:"“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties”",attribution:"Amy Ross, Spacesuit Designer"}],relatedLinks:[{links:[{text:"Mission Website",document:"",page:"",externalLink:"http://gracefo.jpl.nasa.gov/"}]}],relatedPages:c,otherMissions:p,slug:"grace-fo",templateStyle:"dark",title:"GRACE-FO",subtitle:"Gravity Recovery and Climate Experiment Follow-On",summary:"The Gravity Recovery and Climate Experiment Follow-on (GRACE-FO) mission is a partnership between NASA and the German Research Centre for Geosciences (GFZ).",thumbnailImage:"https://picsum.photos/400/200",missionWebsiteUrl:"http://gracefo.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"GRACE-FO hero image"},instrumentImage:{webp:{url:"/public/images/mission-grace-fo-75.webp"},src:{url:"/public/images/mission-grace-fo.png",width:1597,height:700},alt:"The instrument"},instrumentBackground:{image:{srcSet:"/public/images/bg-earth-1440x810.jpg 1440w",src:{url:"/public/images/bg-earth-1440x810.jpg",width:1440,height:810}}}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
