import{h as l,H as u,e as d,f as h,l as g,y as n,n as b,E as y,o as i}from"./iframe-UYtirdi4.js";import{u as w}from"./theme-BRik7gSk.js";import{H as f}from"./HeroMedium-hdvryLjz.js";const p=l({name:"HeroListingIndex",components:{HeroMedium:f},props:{pageData:{type:Object,default:void 0},customLabel:{type:String,default:void 0},cta:{type:String,default:"Read Article"}},computed:{...u(w),customVideo(){if(this.pageData&&this.pageData?.heroBlocks&&this.pageData.heroBlocks.length>0&&this.pageData.heroBlocks[0].blockType==="VideoBlock")return this.pageData.heroBlocks[0].video},customImage(){if(this.pageData&&this.pageData.heroBlocks&&this.pageData.heroBlocks.length>0){const e=this.pageData?.heroBlocks[0];if(e.blockType==="ImageChooserBlock"||e.blockType==="HeroImageBlock")return e.listingPageHeroImage;if(e.blockType==="CarouselBlock"){const r=e.blocks;if(r&&r?.length>0)return r[0].listingPageHeroImage}}else if(this.pageData?.listingPageHeroImage)return this.pageData.listingPageHeroImage}}});function k(e,r,L,D,C,B){const m=y("HeroMedium");return e.pageData?(i(),h("div",{key:0,class:b(["HeroListingIndex max-w-screen-3xl mx-auto",{"-nav-offset":e.pageData}])},[e.pageData?(i(),g(m,{key:0,class:"md:mb-12 lg:mb-18 mb-10","custom-pill":e.themeStore.theme==="ThemeEdu"&&e.customLabel?e.customLabel:void 0,"custom-pill-type":e.themeStore.theme==="ThemeEdu"&&e.pageData.__typename?e.pageData.__typename:void 0,"custom-label":e.themeStore.theme==="ThemeEdu"?e.pageData.topicLabel:e.customLabel,feature:e.pageData,"custom-video":e.customVideo,"custom-image":e.customImage,cta:e.cta},null,8,["custom-pill","custom-pill-type","custom-label","feature","custom-video","custom-image","cta"])):n("",!0)],2)):n("",!0)}const H=d(p,[["render",k]]);p.__docgenInfo={exportName:"default",displayName:"HeroListingIndex",type:1,props:[{name:"customLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:"undefined"},{name:"cta",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Read Article"'},{name:"pageData",global:!1,description:"",tags:[],required:!1,type:"FeatureObject",declarations:[],schema:{kind:"object",type:"FeatureObject"},default:"undefined"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"customLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"cta",type:"string",description:"",declarations:[],schema:"string"},{name:"pageData",type:"FeatureObject",description:"",declarations:[],schema:{kind:"object",type:"FeatureObject"}},{name:"customVideo",type:"VideoObject",description:"",declarations:[],schema:{kind:"object",type:"VideoObject"}},{name:"customImage",type:"ImageObject",description:"",declarations:[],schema:{kind:"object",type:"ImageObject"}},{name:"themeStore",type:'Store<"theme", State, { isEdu(state: { theme: Explorer1Theme; } & PiniaCustomStateProperties<State>): boolean; }, { ...; }>',description:"",declarations:[],schema:{kind:"object",type:'Store<"theme", State, { isEdu(state: { theme: Explorer1Theme; } & PiniaCustomStateProperties<State>): boolean; }, { ...; }>'}}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/components/HeroListingIndex/HeroListingIndex.vue"};const S={title:"Components/Heroes/For Listing Pages",component:H,tags:["heroes"],parameters:{viewMode:"canvas"},excludeStories:/.*Data$/},c={featuredPage:{__typename:"EDUExplainerArticlePage",topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",image:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}}},t={name:"HeroListingIndex",args:{customLabel:"Featured",pageData:c.featuredPage}},s={args:{customLabel:"Featured",pageData:{topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",heroBlocks:[{blockType:"ImageChooserBlock",listingPageHeroImage:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}}]}}},o={args:{customLabel:"Featured",pageData:{topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",heroBlocks:[{blockType:"VideoBlock",video:{file:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4",fileWebm:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm"}}]}}},a={args:{customLabel:"Featured",pageData:{topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",heroBlocks:[{blockType:"CarouselBlock",blocks:[{listingPageHeroImage:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}},{listingPageHeroImage:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}}]}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'HeroListingIndex',
  args: {
    customLabel: 'Featured',
    pageData: HeroListingIndexData.featuredPage
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    customLabel: 'Featured',
    pageData: {
      topicLabel: 'Mars',
      url: '/news/new-maps-open-roads-to-research/',
      title: 'Creating Robots to go Where Humans Can’t',
      heroBlocks: [{
        blockType: 'ImageChooserBlock',
        listingPageHeroImage: {
          src: {
            url: 'https://picsum.photos/id/973/1800/1200',
            width: 1800,
            height: 1200
          },
          srcSet: 'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
          screenMd: {
            url: 'https://picsum.photos/id/921/800/640'
          },
          screenSm: {
            url: 'https://picsum.photos/id/247/640/900'
          }
        }
      }]
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    customLabel: 'Featured',
    pageData: {
      topicLabel: 'Mars',
      url: '/news/new-maps-open-roads-to-research/',
      title: 'Creating Robots to go Where Humans Can’t',
      heroBlocks: [{
        blockType: 'VideoBlock',
        video: {
          file: '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4',
          fileWebm: '/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm'
        }
      }]
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    customLabel: 'Featured',
    pageData: {
      topicLabel: 'Mars',
      url: '/news/new-maps-open-roads-to-research/',
      title: 'Creating Robots to go Where Humans Can’t',
      heroBlocks: [{
        blockType: 'CarouselBlock',
        blocks: [{
          listingPageHeroImage: {
            src: {
              url: 'https://picsum.photos/id/973/1800/1200',
              width: 1800,
              height: 1200
            },
            srcSet: 'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
            screenMd: {
              url: 'https://picsum.photos/id/921/800/640'
            },
            screenSm: {
              url: 'https://picsum.photos/id/247/640/900'
            }
          }
        }, {
          listingPageHeroImage: {
            src: {
              url: 'https://picsum.photos/id/973/1800/1200',
              width: 1800,
              height: 1200
            },
            srcSet: 'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
            screenMd: {
              url: 'https://picsum.photos/id/921/800/640'
            },
            screenSm: {
              url: 'https://picsum.photos/id/247/640/900'
            }
          }
        }]
      }]
    }
  }
}`,...a.parameters?.docs?.source}}};const I=["HeroListingIndexData","BaseStory","NewsImageHero","NewsVideoHero","NewsCarouselHero"],T=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:t,HeroListingIndexData:c,NewsCarouselHero:a,NewsImageHero:s,NewsVideoHero:o,__namedExportsOrder:I,default:S},Symbol.toStringTag,{value:"Module"}));export{T as H};
