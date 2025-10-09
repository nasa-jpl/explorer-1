import{M as i,v as s}from"./MixinCarousel-C31cUfKP.js";const t={title:"Mixins/MixinCarousel",component:i,tags:["!autodocs"],argTypes:{variant:{control:{type:"select"},options:Object.keys(s)}}},a={name:"BaseCarousel",args:{heading:"Heading",variant:"tiles"},render:e=>({components:{MixinCarousel:i},setup(){return{args:e}},template:`<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide bg-gray-dark">
      <img src="https://picsum.photos/550/483" width="550" height="483" :alt="'Demo slide ' + index" data-chromatic="ignore">
    </div>
  </MixinCarousel>`})},r={name:"BaseCarousel w/ Link",args:{heading:"Heading",variant:"tiles",link:"/placeholder",linkTitle:"See more"},render:e=>({components:{MixinCarousel:i},setup(){return{args:e}},template:`<MixinCarousel v-bind="args">
    <div v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7]" :key="index" class="swiper-slide">
      <img src="https://picsum.photos/550/483" width="550" height="483" alt="test slide" data-chromatic="ignore">
    </div>
  </MixinCarousel>`})},n=["BaseStory","BaseCarouselWLink"],l=Object.freeze(Object.defineProperty({__proto__:null,BaseCarouselWLink:r,BaseStory:a,__namedExportsOrder:n,default:t},Symbol.toStringTag,{value:"Module"}));export{a as B,l as M,r as a};
