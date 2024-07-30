import '@fancyapps/ui'
import 'lazysizes'
import { initMixinCarousel, initBlockImageCarousel } from './assets/js/vendors/_swiper.js'
import initBlockAccordion from './assets/js/components/_BlockAccordion.js'
import initBackToTop from './assets/js/components/_BackToTop.js'
import initHeaderInternal from './assets/js/components/_HeaderInternal.js'
import initHeroMedia from './assets/js/components/_HeroMedia.js'
import './assets/scss/styles-with-fonts.scss'

initBackToTop()
initBlockAccordion()
initHeaderInternal()
initHeroMedia()
initMixinCarousel()
initBlockImageCarousel()
