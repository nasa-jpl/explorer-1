import{B as l}from"./BlockLinkCarousel-DLxJ5Bj8.js";import"./iframe-DykQSSCG.js";import"./preload-helper-PPVm8Dsz.js";import"./MixinCarousel---Dw_wnj.js";import"./a11y-C7GBo9cw.js";import"./navigation-CFJlRBZS.js";import"./_swiperOptions-Cb85alkN.js";import"./IconPrev-BZKw8dLG.js";import"./BaseLink-BXTWC9Jv.js";import"./theme-CBZiEs7X.js";import"./MixinAnimationCaret-DEpjYl9A.js";import"./IconCaret-BrQV7_Jh.js";import"./BaseButton-B2ZoU71J.js";import"./BlockLinkCard-B_K-On0K.js";import"./mixins-Bc9aeVQW.js";import"./useApi-j1E6pMaV-Clo2pbDT.js";import"./IconArrow-Ch213rDP.js";import"./IconExternal-CR4uJ-gf.js";import"./BaseImage-DIBNPo_Y.js";import"./BaseImagePlaceholder-B0fEOkEA.js";import"./BasePill-Ca_ozjaB.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BAE3TVRp.js";import"./rangeifyGrades-BK1QHkuj.js";import"./IconEduTechnology-C7FHHAeK.js";import"./IconTime-B805woPe.js";import"./CalendarChip-DNvqH_H3.js";import"./MetadataEvent-fmtpt6_D.js";import"./IconCalendar-C1xzJI08.js";import"./IconLocation-PxlrcGYP.js";import"./BlockLinkTile-BVKRvhbf.js";const _={title:"Components/Blocks/BlockLinkCarousel",component:l,tags:["wagtail-blocks","carousels","listings"],excludeStories:/.*Data$/},t=[{url:"/news/placeholder-slug-1",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-1",label:"Mars",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}},{url:"/news/placeholder-slug-2",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-2",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}},{url:"/news/placeholder-slug-3",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-3",label:"Solar System",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}},{url:"/news/placeholder-slug-4",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-4",label:"Technology",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}}],F=[{url:"/topics/placeholder-slug-1",title:"Perseverance",label:"Mars",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}},{url:"/topics/placeholder-slug-2",title:"OCO-2",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}},{url:"/topics/placeholder-slug-3",title:"Mars 2020",label:"Solar System",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}},{url:"/topics/placeholder-slug-4",title:"Lorem ipsum dolor sit amet",label:"Mars",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}}],n=[{endDate:null,startDate:"2019-11-11",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Past event",url:"/events/becoming-a-nasa-engineer",startDatetime:"2019-11-11T00:00:00-08:00",ongoing:!1,isVirtualEvent:!1,endDatetime:null,eventType:"Internship",locationName:"Webcast",locationLink:"https://www.nasa.gov",customDate:void 0},{endDate:"2021-12-1",startDate:"2021-11-27",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Future event",eventType:"Workshop",url:"/events/becoming-a-nasa-engineer",startDatetime:"2021-11-11T00:00:00-08:00",ongoing:!1,isVirtualEvent:!1,endDatetime:"2021-12-01T23:59:59.999999-08:00",locationName:"Webcast",locationLink:"https://www.nasa.gov",customDate:void 0},{endDate:"2021-12-1",startDate:"2021-11-27",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Custom event",eventType:"Workshop",url:"/events/becoming-a-nasa-engineer",startDatetime:"2021-11-11T00:00:00-08:00",customDate:"Custom date goes here",ongoing:!1,isVirtualEvent:!1,endDatetime:"2021-12-01T23:59:59.999999-08:00",locationName:"Webcast",locationLink:"https://www.nasa.gov"},{endDate:"2021-12-1",startDate:"2021-11-27",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Ongoing event",url:"/events/becoming-a-nasa-engineer",startDatetime:"2021-11-11T00:00:00-08:00",customDate:"Custom date goes here",ongoing:!0,isVirtualEvent:!1,endDatetime:"2021-12-01T23:59:59.999999-08:00",locationName:"Webcast",locationLink:"https://www.nasa.gov"}],m=i=>({components:{BlockLinkCarousel:l},setup(){return{args:i}},template:'<div><BlockLinkCarousel class="mb-20" v-bind="args[0]" /><BlockLinkCarousel v-bind="args[1]" /></div>'}),a={name:"Card Carousel",args:{itemType:"cards",heading:"Related Pages",items:t}},s={args:{itemType:"tiles",heading:"Explore More",items:t}},r={args:{itemType:"cards",heading:"More Events",items:n}},o={args:{itemType:"cards",heading:"Related Pages",items:t.slice(0,2)}},e=m.bind({});e.args=[{itemType:"cards",heading:"Related Pages",otherHeading:"Explore More",items:t},{itemType:"cards",heading:"More Related Pages",otherHeading:"Explore Even More",items:t}];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Card Carousel',
  args: {
    itemType: 'cards',
    heading: 'Related Pages',
    items: BlockLinkCardCarouselData
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    itemType: 'tiles',
    heading: 'Explore More',
    items: BlockLinkCardCarouselData
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    itemType: 'cards',
    heading: 'More Events',
    items: EventsBlockLinkCarouselData
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    itemType: 'cards',
    heading: 'Related Pages',
    items: BlockLinkCardCarouselData.slice(0, 2)
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockLinkCarousel
  },
  setup() {
    return {
      args
    };
  },
  template: \`<div><BlockLinkCarousel class="mb-20" v-bind="args[0]" /><BlockLinkCarousel v-bind="args[1]" /></div>\`
})`,...e.parameters?.docs?.source}}};const $=["BlockLinkCardCarouselData","BlockLinkTileCarouselData","EventsBlockLinkCarouselData","BaseStory","TileCarousel","MoreEventsCarousel","TwoItems","MultipleCarousels"];export{a as BaseStory,t as BlockLinkCardCarouselData,F as BlockLinkTileCarouselData,n as EventsBlockLinkCarouselData,r as MoreEventsCarousel,e as MultipleCarousels,s as TileCarousel,o as TwoItems,$ as __namedExportsOrder,_ as default};
