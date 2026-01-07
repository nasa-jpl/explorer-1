import{M as q,a as m}from"./MissionDetailHighlights.stories-D0jA1mST.js";import{MissionDetailStatsData as h}from"./MissionDetailStats.stories-D_xcTko4.js";import{M as U,a as d}from"./MissionDetailAbout.stories--l4t-lM3.js";import{M as $,a as g}from"./MissionDetailStreamfield.stories-G9yzwmJU.js";import{BlockLinkCardCarouselData as p,BlockLinkTileCarouselData as c}from"./BlockLinkCarousel.stories-DxnDZEZT.js";import{BlockRelatedLinksData as b}from"./BlockRelatedLinks.stories-CzaCGbWH.js";import{a as K,_ as Q,s as e,o as s,g as f,h as Z,y as a,k as u,p as i,n as w,l as z}from"./iframe-Dapn4dtX.js";import{M as J}from"./MissionDetailHero-Cmz3g2U0.js";import{M as X}from"./MissionDetailStats-1xR2ttSv.js";import{B as Y}from"./BlockRelatedLinks-CD8Q_4ZT.js";import{B as x}from"./BlockLinkCarousel-C0UbOvc2.js";import{L as _}from"./LayoutHelper-dMEIgpby.js";import"./throttle-K5b-sWjt.js";import"./isObjectLike-DXdnnwON.js";import"./isSymbol-B4mwv9HI.js";import"./a11y-S1BjB8Wp.js";import"./navigation-DYSZwei8.js";import"./BaseHeading-Cn1zGgPv.js";import"./BaseLink-B8u0A2tm.js";import"./theme-DMt5auq3.js";import"./MixinAnimationCaret-Bdy13TyL.js";import"./IconCaret-CDvmky2q.js";import"./IconExternal-BLkH7lRb.js";import"./IconNext-BN36izcP.js";import"./BaseButton-Be5aA3CC.js";import"./MissionDetailStatsMini-UHX1lLWN.js";import"./BaseTimer-0lOhYO5w.js";import"./MissionDetailStatsMicro-Dr-cmL7t.js";import"./preload-helper-D6kgxu3v.js";import"./BaseUnitToggle-BugPndvg.js";import"./BlockText-DId859-n.js";import"./BaseImageCaption.stories-DPqkZb0Y.js";import"./BaseImageCaption-Cin9dUQ5.js";import"./BlockIframeEmbed.stories-Df0SyvQt.js";import"./BlockIframeEmbed-DlneZeWC.js";import"./BaseImagePlaceholder-DKC2E8gH.js";import"./MissionDetailInlineImage-JN66mjhg.js";import"./mixins-BO1V0Qo4.js";import"./BaseImage-B-07qsQ4.js";import"./BlockQuote-ClEfDgp3.js";import"./MixinCarousel-Cqg0xRru.js";import"./_swiperOptions-Cb85alkN.js";import"./BlockLinkCard-Rj5DzJUU.js";import"./IconArrow-CLuR0_Or.js";import"./BasePill-CF0bA74b.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-Bb4HQl59.js";import"./rangeifyGrades-DpfYzBf-.js";import"./IconProfile-BHcFCXFa.js";import"./IconTime-m_0SrZbr.js";import"./CalendarChip-Bpu53gLB.js";import"./MetadataEvent-gq7TgQCY.js";import"./IconCalendar-Ybijc9Re.js";import"./IconLocation-DZA_7KsO.js";import"./BlockLinkTile-CiGgiq8Q.js";import"./IconDownload-MWK1sXSc.js";import"./ParallaxElement-C9aZDW4f.js";const H=K({name:"PageMissionDetail",components:{MissionDetailHighlights:q,MissionDetailHero:J,MissionDetailAbout:U,MissionDetailStats:X,MissionDetailStreamfield:$,BlockRelatedLinks:Y,BlockLinkCarousel:x,LayoutHelper:_},props:{data:{type:Object,required:!1,default:void 0}},computed:{theTheme(){return this.data.templateStyle==="dark"?"ThemeVariantDark bg-black":"ThemeVariantLight"},moreAboutTopicHeading(){const{topicLabels:t}=this.data;if(!t||t.length===0)return"More";if(t.length===1)return`More about ${t[0]}`;const y=t[t.length-1];return`More about ${t.slice(0,t.length-1).join(", ")} and ${y}`}}}),tt={key:0,class:"-nav-offset"},et={key:1,class:"bg-gray-light lg:py-24 lg:mt-24 py-12 mt-12"};function at(t,y,I,it,nt,ot){const G=e("MissionDetailHero"),j=e("MissionDetailStats"),P=e("MissionDetailAbout"),F=e("MissionDetailHighlights"),V=e("MissionDetailStreamfield"),k=e("BlockLinkCarousel"),W=e("BlockRelatedLinks"),N=e("LayoutHelper");return t.data?(s(),f("div",tt,[Z("div",{class:w(t.theTheme)},[a(G,{title:t.data.title,subtitle:t.data.subtitle,summary:t.data.summary,"template-style":t.data.templateStyle,"mission-website-url":t.data.missionWebsiteUrl,"instrument-image":t.data.instrumentImage,"instrument-background":t.data.instrumentBackground,"hero-fallback":t.data.heroImage},null,8,["title","subtitle","summary","template-style","mission-website-url","instrument-image","instrument-background","hero-fallback"]),a(j,{"show-clock":t.data.showClock,"show-distance":t.data.showDistance,"clock-type":t.data.clockType,"start-date-time":t.data.startDateTime,"distance-type":t.data.distanceType,"distance-value":t.data.distanceValue,"distance-api-urls":t.data.distanceApiUrls,"display-date":t.data.displayDate,"mission-types":t.data.missionTypes,"mission-targets":t.data.missionTargets,status:t.data.status},null,8,["show-clock","show-distance","clock-type","start-date-time","distance-type","distance-value","distance-api-urls","display-date","mission-types","mission-targets","status"]),a(P,{class:"py-10","description-heading":t.data.descriptionHeading,description:t.data.description,instruments:t.data.instruments},null,8,["description-heading","description","instruments"]),t.data.highlights&&t.data.highlights.length?(s(),u(F,{key:0,animation:t.data.showHighlightsAnimation,graphic:t.data.highlightsGraphic,heading:t.data.highlightsHeading,"mission-title":t.data.title,highlights:t.data.highlights},null,8,["animation","graphic","heading","mission-title","highlights"])):i("",!0),t.data.feature&&t.data.feature.length?(s(),u(V,{key:1,class:w(["pt-10",{"pb-10":t.data.templateStyle==="dark"}]),data:t.data.feature},null,8,["class","data"])):i("",!0)],2),a(k,{"item-type":"cards",class:"lg:mt-24 mt-18 lg:mb-18 mb-10",heading:t.moreAboutTopicHeading,items:t.data.relatedPages},null,8,["heading","items"]),t.data.relatedLinks&&t.data.relatedLinks.length?(s(),u(N,{key:0,indent:"col-2",class:"lg:mb-18 mb-10"},{default:z(()=>[a(W,{data:t.data.relatedLinks[0]},null,8,["data"])]),_:1})):i("",!0),t.data.otherMissions&&t.data.otherMissions.length?(s(),f("div",et,[a(k,{"item-type":"tiles",heading:"Explore Other Missions",items:t.data.otherMissions},null,8,["items"])])):i("",!0)])):i("",!0)}const st=Q(H,[["render",at]]);H.__docgenInfo={exportName:"default",displayName:"PageMissionDetail",type:1,props:[{name:"data",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>",default:"undefined"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"data",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"theTheme",type:'"ThemeVariantDark bg-black" | "ThemeVariantLight"',description:"",declarations:[],schema:{kind:"enum",type:'"ThemeVariantDark bg-black" | "ThemeVariantLight"',schema:['"ThemeVariantDark bg-black"','"ThemeVariantLight"']}},{name:"moreAboutTopicHeading",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/templates/www/PageMissionDetail/PageMissionDetail.vue"};const pe={title:"Templates/WWW/PageMissionDetail",component:st,tags:["!autodocs"],decorators:[()=>({template:'<div id="storyRoot" class="disable-nav-offset"><story/></div>'})],parameters:{layout:"fullscreen",html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},n={name:"Dark Template",args:{data:{...h,...m,...g,...d,relatedLinks:[b.data],relatedPages:p,otherMissions:c,slug:"oco-2",templateStyle:"dark",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",thumbnailImage:"https://picsum.photos/400/200",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",topicLabels:["Stars and Galaxies","Exoplanets"],heroImage:{srcSet:"https://https://picsum.photos/320/200 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"OCO-2 hero image"},instrumentImage:{webp:{url:"/public/images/mission-oco2.webp"},src:{url:"/public/images/mission-grace-fo-75.webp",width:1597,height:700},alt:"The instrument"},instrumentBackground:{image:{srcSet:"/public/images/bg-earth-1440x810.jpg 1440w",src:{url:"/public/images/bg-earth-1440x810.jpg",width:1440,height:810}}}}}},o={args:{data:{...h,...m,...g,...d,relatedLinks:[b.data],relatedPages:p,otherMissions:c,slug:"oco-2",templateStyle:"light",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"The hero image"},instrumentImage:null,instrumentBackground:null}}},r={args:{data:{...h,...m,...g,...d,relatedLinks:[b.data],relatedPages:p,otherMissions:c,slug:"oco-2",templateStyle:"light",title:"OCO-2",subtitle:"Orbiting Carbon Observatory 2",summary:"OCO-2 is an Earth satellite mission designed to study the sources and sinks of carbon dioxide globally and provide scientists with a better idea of how carbon is contributing to climate change. ",missionWebsiteUrl:"http://oco.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"The hero image"},instrumentImage:{webp:{url:"/public/images/mission-oco2.webp"},src:{url:"/public/images/mission-grace-fo-75.webp",width:1597,height:700},alt:"The instrument"},instrumentBackground:null}}},l={args:{data:{showClock:!0,showDistance:!1,clockType:"time_in_orbit",startDateTime:"2018-10-22 10:04:21+01:00",distanceType:"earth",distanceValue:4986444,distanceApiUrls:"",displayDate:"Oct. 22, 2018",missionTypes:[{missionType:"Orbiters"}],missionTargets:[{target:"Earth"}],status:"current",...m,highlightsHeading:"Mission Highlights",highlights:[{date:"2018-11-01",heading:"GRACE-FO Resumes Data Collection",summary:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis orci purus, in luctus ex volutpat sit amet."}],feature:[{blockType:"QuoteBlock",quote:"“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties”",attribution:"Amy Ross, Spacesuit Designer"}],relatedLinks:[{links:[{text:"Mission Website",document:"",page:"",externalLink:"http://gracefo.jpl.nasa.gov/"}]}],relatedPages:p,otherMissions:c,slug:"grace-fo",templateStyle:"dark",title:"GRACE-FO",subtitle:"Gravity Recovery and Climate Experiment Follow-On",summary:"The Gravity Recovery and Climate Experiment Follow-on (GRACE-FO) mission is a partnership between NASA and the German Research Centre for Geosciences (GFZ).",thumbnailImage:"https://picsum.photos/400/200",missionWebsiteUrl:"http://gracefo.jpl.nasa.gov/",heroImage:{srcSet:"https://picsum.photos/320/320 320w, https://picsum.photos/1920/1200 1440w",src:{url:"https://picsum.photos/1920/1200",width:1920,height:1200},alt:"GRACE-FO hero image"},instrumentImage:{webp:{url:"/public/images/mission-grace-fo-75.webp"},src:{url:"/public/images/mission-grace-fo.png",width:1597,height:700},alt:"The instrument"},instrumentBackground:{image:{srcSet:"/public/images/bg-earth-1440x810.jpg 1440w",src:{url:"/public/images/bg-earth-1440x810.jpg",width:1440,height:810}}}}}};var D,C,O;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(C=n.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var M,T,v;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(v=(T=o.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var S,L,B;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(B=(L=r.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var R,A,E;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const ce=["BaseStory","LightTemplateWithHero","LightTemplateNoBackground","GraceFO"];export{n as BaseStory,l as GraceFO,r as LightTemplateNoBackground,o as LightTemplateWithHero,ce as __namedExportsOrder,pe as default};
