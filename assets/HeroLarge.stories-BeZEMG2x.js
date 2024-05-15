const a=({image:e,eyebrow:s,title:r,summary:i})=>`
  <section aria-label="Feature" class="HeroLarge ThemeDark max-w-screen-3xl relative mx-auto">
    <div class="absolute inset-0 z-10 bg-black">
      <picture>
        <source media="(min-width: 768px)" srcset="${e.srcSet}" />
        <source media="(min-width: 420px)" srcset="${e.screenMd.url}" />
        <source srcset="${e.screenSm.url}" />
        <img
          class="md:object-right object-cover object-bottom w-full h-full"
          src="${e.src.url}"
          width="${e.src.width}"
          height="${e.src.height}"
          alt="${e.alt}"
        />
      </picture>
    </div>
    <div class="content-wrapper lg:flex lg:items-center relative z-20 w-full h-full">
      <div class="bg-gradient-to-t lg:bg-gradient-to-l from-transparent-w25 lg:from-transparent-w50 to-transparent-black-50 lg:to-transparent-black-50 absolute inset-0"></div>
      <div class="text-contrast relative w-full text-white">
        <div class="lg:py-0 pb-80 container pt-8 mx-auto">
          <div class="lg:px-10 2xl:px-0 lg:pt-6 lg:pb-18 px-4">
            ${s?`<div class="lg:mb-6 font-secondary mb-4 text-base font-semibold tracking-wider no-underline uppercase">${s}<span class="sr-only">.</span></div>`:""}
            ${r?`<h1 class="lg:w-3/4 xl:w-3/5 xl:text-10xl lg:text-9xl md:text-8xl text-7xl lg:tracking-tightest lg:leading-tighter mb-5 font-bold leading-tight uppercase">${r}</h1>`:""}
            ${i?`<p class="lg:w-1/2 2xl:w-2/5 xl:text-6xl lg:text-4xl md:text-2xl lg:leading-tight text-lg font-medium">${i}</p>`:""}
          </div>
        </div>
      </div>
    </div>
  </section>
  `,o={title:"Components/Blocks/Heroes/Large",argTypes:{eyebrow:{type:{name:"string",required:!1},description:"Header label"},title:{type:{name:"string",required:!0},description:"Hero title"},summary:{type:{name:"string",required:!1},description:"Summary/description of the hero item"},image:{type:{name:"object",required:!0},description:"Background image. Works best with images that have a focal point on the right side."}},parameters:{docs:{description:{component:"`HeroLarge` works best with background images that have a focal point on the right side of the image. The markup and styles attempt to keep the right side of the image visible on smaller screens rather than doing a center crop. This works best in tandem with Wagtail image renditions, so it isn't foolproof, but it sets up a decent basis."}}}},t=a.bind({});t.storyName="Large";t.args={eyebrow:"Robotics at JPL",title:"FreeClimber: LEMUR 3",summary:"Crawl, walk and even climb rock walls, this robot was designed to operate in extreme terrains.",image:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"},alt:"Robotics detail page hero image"}};const l=["Default"],n=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:l,default:o},Symbol.toStringTag,{value:"Module"}));export{n as H};
