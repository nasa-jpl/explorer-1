import{B as D}from"./BlockLinkCarousel-C9ZhBUtA.js";import"./iframe-DkrkwOlF.js";import"./preload-helper-D6kgxu3v.js";import"./MixinCarousel-Ch3d-uFW.js";import"./a11y-S1BjB8Wp.js";import"./navigation-DYSZwei8.js";import"./_swiperOptions-Cb85alkN.js";import"./IconNext-Beu6c5rL.js";import"./BaseLink-CCyYxerd.js";import"./theme-_iY2OIe5.js";import"./MixinAnimationCaret-DxAmtdGk.js";import"./IconCaret-DARwT2mA.js";import"./BaseButton-ef_-8K8P.js";import"./BlockLinkCard-D523bs7P.js";import"./mixins-Fi5IW2rN.js";import"./IconArrow-CYJqH2IL.js";import"./IconExternal-I936yDsF.js";import"./BaseImage-C2wBaajf.js";import"./BaseImagePlaceholder-Dmde9CeQ.js";import"./BasePill-B6yfct9B.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BY-ZsA9Y.js";import"./rangeifyGrades-DaAomh2g.js";import"./IconProfile-CyDmUgam.js";import"./IconTime-B8AITl_j.js";import"./CalendarChip-Z2fvWT-i.js";import"./MetadataEvent-adUyj7xW.js";import"./IconCalendar-CKTy0NcZ.js";import"./IconLocation-8a2j4yAs.js";import"./BlockLinkTile-BMFpmJyk.js";const te={title:"Components/Blocks/BlockLinkCarousel",component:D,tags:["wagtail-blocks","carousels","listings"],excludeStories:/.*Data$/},t=[{url:"/news/placeholder-slug-1",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-1",label:"Mars",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}},{url:"/news/placeholder-slug-2",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-2",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}},{url:"/news/placeholder-slug-3",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-3",label:"Solar System",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}},{url:"/news/placeholder-slug-4",title:"How engineers at NASA-JPL persevered to develop a ventilator",slug:"placeholder-slug-4",label:"Technology",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"}}],ae=[{url:"/topics/placeholder-slug-1",title:"Perseverance",label:"Mars",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}},{url:"/topics/placeholder-slug-2",title:"OCO-2",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}},{url:"/topics/placeholder-slug-3",title:"Mars 2020",label:"Solar System",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}},{url:"/topics/placeholder-slug-4",title:"Lorem ipsum dolor sit amet",label:"Mars",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}}],T=[{endDate:null,startDate:"2019-11-11",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Past event",url:"/events/becoming-a-nasa-engineer",startDatetime:"2019-11-11T00:00:00-08:00",ongoing:!1,isVirtualEvent:!1,endDatetime:null,eventType:"Internship",locationName:"Webcast",locationLink:"https://www.nasa.gov",customDate:void 0},{endDate:"2021-12-1",startDate:"2021-11-27",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Future event",eventType:"Workshop",url:"/events/becoming-a-nasa-engineer",startDatetime:"2021-11-11T00:00:00-08:00",ongoing:!1,isVirtualEvent:!1,endDatetime:"2021-12-01T23:59:59.999999-08:00",locationName:"Webcast",locationLink:"https://www.nasa.gov",customDate:void 0},{endDate:"2021-12-1",startDate:"2021-11-27",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Custom event",eventType:"Workshop",url:"/events/becoming-a-nasa-engineer",startDatetime:"2021-11-11T00:00:00-08:00",customDate:"Custom date goes here",ongoing:!1,isVirtualEvent:!1,endDatetime:"2021-12-01T23:59:59.999999-08:00",locationName:"Webcast",locationLink:"https://www.nasa.gov"},{endDate:"2021-12-1",startDate:"2021-11-27",thumbnailImage:{src:{height:"288",url:"https://picsum.photos/512/288",width:"512"}},title:"Ongoing event",url:"/events/becoming-a-nasa-engineer",startDatetime:"2021-11-11T00:00:00-08:00",customDate:"Custom date goes here",ongoing:!0,isVirtualEvent:!1,endDatetime:"2021-12-01T23:59:59.999999-08:00",locationName:"Webcast",locationLink:"https://www.nasa.gov"}],B=L=>({components:{BlockLinkCarousel:D},setup(){return{args:L}},template:'<div><BlockLinkCarousel class="mb-20" v-bind="args[0]" /><BlockLinkCarousel v-bind="args[1]" /></div>'}),a={name:"Card Carousel",args:{itemType:"cards",heading:"Related Pages",items:t}},s={args:{itemType:"tiles",heading:"Explore More",items:t}},r={args:{itemType:"cards",heading:"More Events",items:T}},o={args:{itemType:"cards",heading:"Related Pages",items:t.slice(0,2)}},e=B.bind({});e.args=[{itemType:"cards",heading:"Related Pages",otherHeading:"Explore More",items:t},{itemType:"cards",heading:"More Related Pages",otherHeading:"Explore Even More",items:t}];var l,i,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Card Carousel',
  args: {
    itemType: 'cards',
    heading: 'Related Pages',
    items: BlockLinkCardCarouselData
  }
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,p,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    itemType: 'tiles',
    heading: 'Explore More',
    items: BlockLinkCardCarouselData
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,g,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    itemType: 'cards',
    heading: 'More Events',
    items: EventsBlockLinkCarouselData
  }
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var h,v,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    itemType: 'cards',
    heading: 'Related Pages',
    items: BlockLinkCardCarouselData.slice(0, 2)
  }
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var C,w,b;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    BlockLinkCarousel
  },
  setup() {
    return {
      args
    };
  },
  template: \`<div><BlockLinkCarousel class="mb-20" v-bind="args[0]" /><BlockLinkCarousel v-bind="args[1]" /></div>\`
})`,...(b=(w=e.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const se=["BlockLinkCardCarouselData","BlockLinkTileCarouselData","EventsBlockLinkCarouselData","BaseStory","TileCarousel","MoreEventsCarousel","TwoItems","MultipleCarousels"];export{a as BaseStory,t as BlockLinkCardCarouselData,ae as BlockLinkTileCarouselData,T as EventsBlockLinkCarouselData,r as MoreEventsCarousel,e as MultipleCarousels,s as TileCarousel,o as TwoItems,se as __namedExportsOrder,te as default};
