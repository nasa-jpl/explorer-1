export const HeroLargeTemplate = ({ image, eyebrow, title, summary }) => {
  return `
  <section aria-label="Feature" class="HeroLarge ThemeVariantDark max-w-screen-3xl relative mx-auto">
    <div class="absolute inset-0 z-10 bg-black">
      <picture>
        <source media="(min-width: 768px)" srcset="${image.srcSet}" />
        <source media="(min-width: 420px)" srcset="${image.screenMd.url}" />
        <source srcset="${image.screenSm.url}" />
        <img
          class="md:object-right object-cover object-bottom w-full h-full"
          src="${image.src.url}"
          width="${image.src.width}"
          height="${image.src.height}"
          alt="${image.alt}"
        />
      </picture>
    </div>
    <div class="content-wrapper lg:flex lg:items-center relative z-20 w-full h-full">
      <div class="bg-gradient-to-t lg:bg-gradient-to-l from-transparent-w25 lg:from-transparent-w50 to-transparent-black-50 lg:to-transparent-black-50 absolute inset-0"></div>
      <div class="text-contrast relative w-full text-white">
        <div class="lg:py-0 pb-80 container pt-8 mx-auto">
          <div class="lg:px-10 2xl:px-0 lg:pt-6 lg:pb-18 px-4">
            ${
              eyebrow
                ? `<div class="lg:mb-6 font-secondary mb-4 text-base font-semibold tracking-wider no-underline uppercase">${eyebrow}<span class="sr-only">.</span></div>`
                : ''
            }
            ${
              title
                ? `<h1 class="lg:w-3/4 xl:w-3/5 xl:text-10xl lg:text-9xl md:text-8xl text-7xl lg:tracking-tightest lg:leading-tighter mb-5 font-bold leading-tight uppercase">${title}</h1>`
                : ''
            }
            ${
              summary
                ? `<p class="lg:w-1/2 2xl:w-2/5 xl:text-6xl lg:text-4xl md:text-2xl lg:leading-tight text-lg font-medium">${summary}</p>`
                : ''
            }
          </div>
        </div>
      </div>
    </div>
  </section>
  `
}
