import{M as s}from"./MixinCarousel-BKwNpe_r.js";const c={title:"Mixins/MixinCarousel",component:s,tags:["autodocs","carousels"]},e={name:"BaseCarousel",args:{heading:"Heading",variant:"tiles"},render:i=>({components:{MixinCarousel:s},setup(){return{args:i}},template:`<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide bg-gray-dark">
      <img src="https://picsum.photos/550/483" width="550" height="483" :alt="'Demo slide ' + index" data-chromatic="ignore">
    </div>
  </MixinCarousel>`})},n={name:"BaseCarousel w/ Link",args:{heading:"Heading",variant:"tiles",link:"/placeholder",linkTitle:"See more"},render:i=>({components:{MixinCarousel:s},setup(){return{args:i}},template:`<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide">
      <img src="https://picsum.photos/550/483" width="550" height="483" alt="test slide" data-chromatic="ignore">
    </div>
  </MixinCarousel>`})};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'BaseCarousel',
  args: {
    heading: 'Heading',
    variant: 'tiles'
  },
  render: args => ({
    components: {
      MixinCarousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide bg-gray-dark">
      <img src="https://picsum.photos/550/483" width="550" height="483" :alt="'Demo slide ' + index" data-chromatic="ignore">
    </div>
  </MixinCarousel>\`
  })
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var o,d,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'BaseCarousel w/ Link',
  args: {
    heading: 'Heading',
    variant: 'tiles',
    link: '/placeholder',
    linkTitle: 'See more'
  },
  render: args => ({
    components: {
      MixinCarousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide">
      <img src="https://picsum.photos/550/483" width="550" height="483" alt="test slide" data-chromatic="ignore">
    </div>
  </MixinCarousel>\`
  })
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const m=["BaseStory","BaseCarouselWLink"],u=Object.freeze(Object.defineProperty({__proto__:null,BaseCarouselWLink:n,BaseStory:e,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{e as B,u as M,n as a};
