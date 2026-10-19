import{j as m,K as u,f as l,E as h,o as i,g,p as k,B as p,n as y}from"./iframe-n3lhZlRB.js";import{u as b}from"./theme-Co-t9SUs.js";import{H}from"./HeroMedium-DQrZJbT8.js";const r=m({name:"HeroListingIndex",components:{HeroMedium:H},props:{pageData:{type:Object,default:void 0},customLabel:{type:String,default:void 0},cta:{type:String,default:"Read Article"}},computed:{...u(b),customVideo(){if(this.pageData&&this.pageData?.heroBlocks&&this.pageData.heroBlocks.length>0&&this.pageData.heroBlocks[0].blockType==="VideoBlock")return this.pageData.heroBlocks[0].video},customImage(){if(this.pageData&&this.pageData.heroBlocks&&this.pageData.heroBlocks.length>0){const e=this.pageData?.heroBlocks[0];if(e.blockType==="ImageChooserBlock"||e.blockType==="HeroImageBlock")return e.listingPageHeroImage;if(e.blockType==="CarouselBlock"){const n=e.blocks;if(n&&n?.length>0)return n[0].listingPageHeroImage}}else if(this.pageData?.listingPageHeroImage)return this.pageData.listingPageHeroImage}}});function f(e,n,v,M,I,L){const c=h("HeroMedium");return e.pageData?(i(),g("div",{key:0,class:y(["HeroListingIndex max-w-screen-3xl mx-auto",{"-nav-offset":e.pageData}])},[e.pageData?(i(),k(c,{key:0,class:"md:mb-12 lg:mb-18 mb-10","custom-pill":e.themeStore.theme==="ThemeEdu"&&e.customLabel?e.customLabel:void 0,"custom-pill-type":e.themeStore.theme==="ThemeEdu"&&e.pageData.__typename?e.pageData.__typename:void 0,"custom-label":e.themeStore.theme==="ThemeEdu"?e.pageData.topicLabel:e.customLabel,feature:e.pageData,"custom-video":e.customVideo,"custom-image":e.customImage,cta:e.cta},null,8,["custom-pill","custom-pill-type","custom-label","feature","custom-video","custom-image","cta"])):p("",!0)],2)):p("",!0)}const w=l(r,[["render",f]]);r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"HeroListingIndex",name:"HeroListingIndex",type:1,props:[{name:"customLabel",global:!1,default:"undefined",description:"",tags:[],required:!1,type:"string",schema:"string",declarations:[]},{name:"cta",global:!1,default:"'Read Article'",description:"",tags:[],required:!1,type:"string",schema:"string",declarations:[]},{name:"pageData",global:!1,default:"undefined",description:"",tags:[],required:!1,type:"FeatureObject",schema:{kind:"object",type:"FeatureObject"},declarations:[]},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",schema:"string",declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]}],events:[],slots:[],exposed:[{name:"customVideo",type:"VideoObject",description:"",tags:[],schema:{kind:"object",type:"VideoObject"},declarations:[]},{name:"customImage",type:"ImageObject",description:"",tags:[],schema:{kind:"object",type:"ImageObject"},declarations:[]}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/components/HeroListingIndex/HeroListingIndex.vue"});const N={title:"Components/Heroes/For Listing Pages",component:w,tags:["heroes"],parameters:{viewMode:"canvas"},excludeStories:/.*Data$/},d={featuredPage:{__typename:"EDUExplainerArticlePage",topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",image:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}}},o={name:"HeroListingIndex",args:{customLabel:"Featured",pageData:d.featuredPage}},t={args:{customLabel:"Featured",pageData:{topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",heroBlocks:[{blockType:"ImageChooserBlock",listingPageHeroImage:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}}]}}},s={args:{customLabel:"Featured",pageData:{topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",heroBlocks:[{blockType:"VideoBlock",video:{file:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.mp4",fileWebm:"/videos/NASA-Mars-Helicopter-IngenuityAnimations-7sec.webm"}}]}}},a={args:{customLabel:"Featured",pageData:{topicLabel:"Mars",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",heroBlocks:[{blockType:"CarouselBlock",blocks:[{listingPageHeroImage:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}},{listingPageHeroImage:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}}]}]}}},V=["HeroListingIndexData","BaseStory","NewsImageHero","NewsVideoHero","NewsCarouselHero"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'HeroListingIndex',
  args: {
    customLabel: 'Featured',
    pageData: HeroListingIndexData.featuredPage
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const C=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:o,HeroListingIndexData:d,NewsCarouselHero:a,NewsImageHero:t,NewsVideoHero:s,__namedExportsOrder:V,default:N},Symbol.toStringTag,{value:"Module"}));export{C as H};
