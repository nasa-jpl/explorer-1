import{M as s}from"./MixinCarousel-BaSp7VOX.js";const a={title:"Mixins/MixinCarousel",component:s,tags:["autodocs","carousels"]},e={name:"BaseCarousel",args:{heading:"Heading",variant:"tiles"},render:i=>({components:{MixinCarousel:s},setup(){return{args:i}},template:`<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide bg-gray-dark">
      <img src="https://picsum.photos/550/483" width="550" height="483" :alt="'Demo slide ' + index" data-chromatic="ignore">
    </div>
  </MixinCarousel>`})},n={name:"BaseCarousel w/ Link",args:{heading:"Heading",variant:"tiles",link:"/placeholder",linkTitle:"See more"},render:i=>({components:{MixinCarousel:s},setup(){return{args:i}},template:`<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide">
      <img src="https://picsum.photos/550/483" width="550" height="483" alt="test slide" data-chromatic="ignore">
    </div>
  </MixinCarousel>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const r=["BaseStory","BaseCarouselWLink"],o=Object.freeze(Object.defineProperty({__proto__:null,BaseCarouselWLink:n,BaseStory:e,__namedExportsOrder:r,default:a},Symbol.toStringTag,{value:"Module"}));export{e as B,o as S,n as a};
