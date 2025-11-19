import{M as i}from"./MixinCarousel-DDtHbXSu.js";const s={title:"Mixins/MixinCarousel",component:i,tags:["autodocs","carousels"]},a={name:"BaseCarousel",args:{heading:"Heading",variant:"tiles"},render:e=>({components:{MixinCarousel:i},setup(){return{args:e}},template:`<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide bg-gray-dark">
      <img src="https://picsum.photos/550/483" width="550" height="483" :alt="'Demo slide ' + index" data-chromatic="ignore">
    </div>
  </MixinCarousel>`})},t={name:"BaseCarousel w/ Link",args:{heading:"Heading",variant:"tiles",link:"/placeholder",linkTitle:"See more"},render:e=>({components:{MixinCarousel:i},setup(){return{args:e}},template:`<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide">
      <img src="https://picsum.photos/550/483" width="550" height="483" alt="test slide" data-chromatic="ignore">
    </div>
  </MixinCarousel>`})},r=["BaseStory","BaseCarouselWLink"],n=Object.freeze(Object.defineProperty({__proto__:null,BaseCarouselWLink:t,BaseStory:a,__namedExportsOrder:r,default:s},Symbol.toStringTag,{value:"Module"}));export{a as B,n as M,t as a};
