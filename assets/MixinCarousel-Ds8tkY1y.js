import{B as u}from"./BaseLink-DVdOPU1x.js";import{a as f,I as v}from"./IconPrev-yIQlxMWd.js";const w=({title:e})=>(e||(e="Title"),`
    <div
      class="swiper-slide bg-gray-dark text-white text-center font-bold py-28"
    >
      <span class="uppercase">${e}</span><br />
      each slide must have class "swiper-slide"
    </div>
  `),h=({noLinks:e,heading:a,link:t,linkTitle:i,variant:o,items:l,indent:n,center:x,customClass:p,slot:r})=>{o||(o="-cards"),a||(a=""),i||(i=""),p||(p=""),l||(l="");let c="nav";e&&(c="div");let s="lg:col-start-2";n=="col-1"?s="":n=="col-2"?s="lg:col-start-2":n=="col-3"&&(s="lg:col-start-3");let d="mx-auto";if(x?d="mx-auto":x===!1&&(d=""),!r&&l&&(r="",l.length>0))for(const[$,b]of l.entries())r+=`${w({title:b.title})}`;const m=`
  <div
    class="lg:pl-0 col-start-1 col-end-13 px-4 mb-1 ${s}"
  >
    <div class="sm:flex flex-wrap items-center justify-between">
      ${a.length>0?`<h2
          class="font-primary text-gray-dark lg:text-6xl text-3xl font-semibold leading-normal tracking-normal uppercase"
        >
          ${a}
        </h2>`:""}
      ${t?u({wrapperClass:"sm:block hidden",text:i,variant:"primary",link:t}):""}
    </div>
  </div>
  `;return`
  <${c}
    class="MixinCarousel w-full overflow-x-hidden ${o} ${p}"
    aria-label="${a}"
  >
    <div class="BaseGrid container overflow-x-visible ${d}">
      ${a||t?m:""}
      <div
        class="lg:pl-0 sm:col-end-11 3xl:col-end-12 col-start-1 col-end-13 pl-4 overflow-x-visible  ${s}"
      >
        <!-- Slider main container -->
        <div
          class="swiper transition-opacity duration-500 ease-in opacity-0"
        >
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            ${r}
          </div>
          <div class="swiper-navigation xl:block absolute top-0 left-0 hidden w-full">
            <div class="xl:-ml-22 top-1/2 absolute left-0 z-30 -ml-20">
              <button
                aria-label="${a} - Previous slide"
                class="BaseButton text-contrast-none swiper-prev xl:text-xl -primary -icon-only inline-block"
              >
                <span class="label block">
                  <span class="arrow-wrapper" aria-hidden="true">
                    <span class="arrow">
                      ${f({})}
                    </span>
                    <span class="arrow-fixed">
                      ${f({})}
                    </span>
                  </span>
                </span>
              </button>
            </div>

            <div class="xl:-mr-22 top-1/2 absolute right-0 z-30 -mr-20">
              <button
                aria-label="${a} - Next slide"
                class="BaseButton text-contrast-none swiper-next xl:text-xl -primary -icon-only inline-block"
              >
                <span class="label block">
                  <span class="arrow-wrapper" aria-hidden="true">
                    <span class="arrow">
                      ${v({})}
                    </span>
                    <span class="arrow-fixed">
                      ${v({})}
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </${c}>
  `};export{h as M};
