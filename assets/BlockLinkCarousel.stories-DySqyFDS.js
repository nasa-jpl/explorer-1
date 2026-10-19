import{B as l}from"./BlockLinkCarousel-DVXXD3mO.js";import"./iframe-n3lhZlRB.js";import"./preload-helper-PPVm8Dsz.js";import"./MixinCarousel-BKpuAn13.js";import"./a11y-CsH3QYR5.js";import"./navigation-CXd_UzVy.js";import"./_swiperOptions-Cb85alkN.js";import"./IconPrev-DHyOrUw2.js";import"./BaseLink-CjNxd9gr.js";import"./theme-Co-t9SUs.js";import"./MixinAnimationCaret-D7FfAJso.js";import"./IconCaret-BDOfx5Hc.js";import"./BaseButton-DqztCW39.js";import"./BlockLinkCard-CRxId5lf.js";import"./mixins-CReUV2It.js";import"./useApi-CUWMwLLw-DUoGJCoX.js";import"./IconArrow-w7Lj_fNh.js";import"./IconExternal-BJsLNLDk.js";import"./BaseImage-RXBsQX-4.js";import"./BaseImagePlaceholder-CB7zVNDC.js";import"./BasePill-ghsqLPEt.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-OWoZxaqs.js";import"./rangeifyGrades--vI-het2.js";import"./IconEduTechnology-DzhqrRGf.js";import"./IconTime-B_dy5iHJ.js";import"./CalendarChip-CKgaeuYn.js";import"./MetadataEvent-CFyrWaf_.js";import"./IconCalendar-DIwAFxNC.js";import"./IconLocation-BRtc32Gk.js";import"./BlockLinkTile-BYSkOl3m.js";const _={title:"Components/Blocks/BlockLinkCarousel",component:l,tags:["wagtail-blocks","carousels","listings"],excludeStories:/.*Data$/},t=[{url:"/news/placeholder-slug-1",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-1",label:"Mars",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}},{url:"/news/placeholder-slug-2",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-2",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}},{url:"/news/placeholder-slug-3",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-3",label:"Solar System",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}},{url:"/news/placeholder-slug-4",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-4",label:"Technology",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}}],F=[{url:"/topics/placeholder-slug-1",title:"Perseverance",label:"Mars",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}},{url:"/topics/placeholder-slug-2",title:"OCO-2",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}},{url:"/topics/placeholder-slug-3",title:"Mars 2020",label:"Solar System",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}},{url:"/topics/placeholder-slug-4",title:"Lorem ipsum dolor sit amet",label:"Mars",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}}],n=[{endDate:null,startDate:"2019-11-11",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Past event",url:"/events/becoming-a-nasa-engineer",startDatetime:"2019-11-11T00:00:00-08:00",ongoing:!1,isVirtualEvent:!1,endDatetime:null,eventType:"Internship",locationName:"Webcast",locationLink:"https://www.nasa.gov",customDate:void 0},{endDate:"2021-12-1",startDate:"2021-11-27",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Future event",eventType:"Workshop",url:"/events/becoming-a-nasa-engineer",startDatetime:"2021-11-11T00:00:00-08:00",ongoing:!1,isVirtualEvent:!1,endDatetime:"2021-12-01T23:59:59.999999-08:00",locationName:"Webcast",locationLink:"https://www.nasa.gov",customDate:void 0},{endDate:"2021-12-1",startDate:"2021-11-27",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Custom event",eventType:"Workshop",url:"/events/becoming-a-nasa-engineer",startDatetime:"2021-11-11T00:00:00-08:00",customDate:"Custom date goes here",ongoing:!1,isVirtualEvent:!1,endDatetime:"2021-12-01T23:59:59.999999-08:00",locationName:"Webcast",locationLink:"https://www.nasa.gov"},{endDate:"2021-12-1",startDate:"2021-11-27",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Ongoing event",url:"/events/becoming-a-nasa-engineer",startDatetime:"2021-11-11T00:00:00-08:00",customDate:"Custom date goes here",ongoing:!0,isVirtualEvent:!1,endDatetime:"2021-12-01T23:59:59.999999-08:00",locationName:"Webcast",locationLink:"https://www.nasa.gov"}],m=i=>({components:{BlockLinkCarousel:l},setup(){return{args:i}},template:'<div><BlockLinkCarousel class="mb-20" v-bind="args[0]" /><BlockLinkCarousel v-bind="args[1]" /></div>'}),a={name:"Card Carousel",args:{itemType:"cards",heading:"Related Pages",items:t}},s={args:{itemType:"tiles",heading:"Explore More",items:t}},r={args:{itemType:"cards",heading:"More Events",items:n}},o={args:{itemType:"cards",heading:"Related Pages",items:t.slice(0,2)}},e=m.bind({});e.args=[{itemType:"cards",heading:"Related Pages",otherHeading:"Explore More",items:t},{itemType:"cards",heading:"More Related Pages",otherHeading:"Explore Even More",items:t}];const $=["BlockLinkCardCarouselData","BlockLinkTileCarouselData","EventsBlockLinkCarouselData","BaseStory","TileCarousel","MoreEventsCarousel","TwoItems","MultipleCarousels"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
})`,...e.parameters?.docs?.source}}};export{a as BaseStory,t as BlockLinkCardCarouselData,F as BlockLinkTileCarouselData,n as EventsBlockLinkCarouselData,r as MoreEventsCarousel,e as MultipleCarousels,s as TileCarousel,o as TwoItems,$ as __namedExportsOrder,_ as default};
