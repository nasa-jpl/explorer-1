export const HeroFeatureTemplate = ({}) => {
  return `
  <section
    aria-label="Feature"
    class="HeroFeature ThemeDark relative flex items-center overflow-hidden"
  >
    <div class="absolute inset-0 z-10 overflow-hidden bg-black">
      <BaseVideoBg v-if="theVideo" :video="theVideo" />
      <picture v-else-if="theImage">
        <source media="(min-width: 768px)" :srcset="theImage.srcSet" />
        <source media="(min-width: 420px)" :srcset="theImage.screenMd.url" />
        <source :data-srcset="theImage.screenSm.url" />
        <img
          class="object-cover w-full h-full"
          :src="theImage.src.url"
          :width="theImage.src.width"
          :height="theImage.src.height"
          alt=""
        />
      </picture>
    </div>
    <div class="lg:flex lg:items-end lg:relative lg:h-full absolute bottom-0 z-20 w-full">
      <div class="bg-gradient-to-b lg:bg-gradient-to-bl from-transparent lg:from-transparent-w50 to-black lg:to-transparent-black-75 absolute inset-0"></div>
      <div class="lg:px-10 2xl:px-0 lg:pb-0 lg:py-0 text-contrast container relative px-4 pt-40 pb-2 mx-auto mb-10 text-white">
        <a href="" class="lg:w-1/2 xl:w-5/12 block">
          <p v-if="customLabel || feature.label" class="text-subtitle lg:mb-3 mb-2">
            {{ customLabel || feature.label }}
            <span class="sr-only">.</span>
          </p>
          <p class="text-h4 mb-0">
            <span class="mr-2">{{ feature.title }}</span>
            <span class="text-jpl-red-light lg:hidden can-hover:group-hover:ml-2 ml-0 text-4xl transition-all duration-200 ease-in">
              <IconArrow class="inline" />
            </span>
          </p>
        </a>
        <BaseLink
          :to="feature.url"
          class="lg:block hidden"
          link-class="inline-block"
          caret-wrapper-class="py-3"
          variant="primary"
        >
          {{ cta }}
        </BaseLink>
      </div>
    </div>
  </section>
  `
}
