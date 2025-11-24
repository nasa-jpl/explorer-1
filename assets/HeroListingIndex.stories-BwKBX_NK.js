import{a as D,C,_ as B,s as v,o as p,g as P,k as M,p as c,n as T}from"./iframe-C7sUqjuf.js";import{u as j}from"./theme-BvZJzlFx.js";import{H as A}from"./HeroMedium-B90GWBtT.js";const S=D({name:"HeroListingIndex",components:{HeroMedium:A},props:{pageData:{type:Object,default:void 0},customLabel:{type:String,default:void 0},cta:{type:String,default:"Read Article"}},computed:{...C(j),customVideo(){var e;if(this.pageData&&((e=this.pageData)!=null&&e.heroBlocks)&&this.pageData.heroBlocks.length>0&&this.pageData.heroBlocks[0].blockType==="VideoBlock")return this.pageData.heroBlocks[0].video},customImage(){var e,i;if(this.pageData&&this.pageData.heroBlocks&&this.pageData.heroBlocks.length>0){const t=(e=this.pageData)==null?void 0:e.heroBlocks[0];if(t.blockType==="ImageChooserBlock"||t.blockType==="HeroImageBlock")return t.listingPageHeroImage;if(t.blockType==="CarouselBlock"){const s=t.blocks;if(s&&(s==null?void 0:s.length)>0)return s[0].listingPageHeroImage}}else if((i=this.pageData)!=null&&i.listingPageHeroImage)return this.pageData.listingPageHeroImage}}});function N(e,i,t,s,V,x){const L=v("HeroMedium");return e.pageData?(p(),P("div",{key:0,class:T(["HeroListingIndex max-w-screen-3xl mx-auto",{"-nav-offset":e.pageData}])},[e.pageData?(p(),M(L,{key:0,class:"md:mb-12 lg:mb-18 mb-10","custom-pill":e.themeStore.theme==="ThemeEdu"&&e.customLabel?e.customLabel:void 0,"custom-pill-type":e.themeStore.theme==="ThemeEdu"&&e.pageData.__typename?e.pageData.__typename:void 0,"custom-label":e.themeStore.theme==="ThemeEdu"?e.pageData.topicLabel:e.customLabel,feature:e.pageData,"custom-video":e.customVideo,"custom-image":e.customImage,cta:e.cta},null,8,["custom-pill","custom-pill-type","custom-label","feature","custom-video","custom-image","cta"])):c("",!0)],2)):c("",!0)}const F=B(S,[["render",N]]);S.__docgenInfo={exportName:"default",displayName:"HeroListingIndex",type:1,props:[{name:"customLabel",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:"undefined"},{name:"cta",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'"Read Article"'},{name:"pageData",global:!1,description:"",tags:[],required:!1,type:"FeatureObject",declarations:[],schema:{kind:"object",type:"FeatureObject"},default:"undefined"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"customLabel",type:"string",description:"",declarations:[],schema:"string"},{name:"cta",type:"string",description:"",declarations:[],schema:"string"},{name:"pageData",type:"FeatureObject",description:"",declarations:[],schema:{kind:"object",type:"FeatureObject"}},{name:"customVideo",type:"VideoObject",description:"",declarations:[],schema:{kind:"object",type:"VideoObject"}},{name:"customImage",type:"ImageObject",description:"",declarations:[],schema:{kind:"object",type:"ImageObject"}},{name:"themeStore",type:'Store<"theme", State, { isEdu(state: { theme: Explorer1Theme; } & PiniaCustomStateProperties<State>): boolean; }, { ...; }>',description:"",declarations:[],schema:{kind:"object",type:'Store<"theme", State, { isEdu(state: { theme: Explorer1Theme; } & PiniaCustomStateProperties<State>): boolean; }, { ...; }>'}}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/components/HeroListingIndex/HeroListingIndex.vue"};const O={title:"Components/Heroes/For Listing Pages",component:F,tags:["heroes"],parameters:{viewMode:"canvas"},excludeStories:/.*Data$/},I={featuredPage:{__typename:"EDUExplainerArticlePage",topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",image:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}}},o={name:"HeroListingIndex",args:{customLabel:"Featured",pageData:I.featuredPage}},a={args:{customLabel:"Featured",pageData:{topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",heroBlocks:[{blockType:"ImageChooserBlock",listingPageHeroImage:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}}]}}},r={args:{customLabel:"Featured",pageData:{topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",heroBlocks:[{blockType:"VideoBlock",video:{file:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4",fileWebm:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm"}}]}}},n={args:{customLabel:"Featured",pageData:{topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",heroBlocks:[{blockType:"CarouselBlock",blocks:[{listingPageHeroImage:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}},{listingPageHeroImage:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}}]}]}}};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'HeroListingIndex',
  args: {
    customLabel: 'Featured',
    pageData: HeroListingIndexData.featuredPage
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,y,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var f,k,H;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(H=(k=n.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const R=["HeroListingIndexData","BaseStory","NewsImageHero","NewsVideoHero","NewsCarouselHero"],W=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:o,HeroListingIndexData:I,NewsCarouselHero:n,NewsImageHero:a,NewsVideoHero:r,__namedExportsOrder:R,default:O},Symbol.toStringTag,{value:"Module"}));export{W as H};
