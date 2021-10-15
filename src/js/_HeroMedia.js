/*
 **
 ** HeroMedia show/hide caption on mobile
 **
 */

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const HeroMediaCaptionToggle = document.querySelector(
      '#HeroMediaCaptionToggle'
    )
    const HeroMediaCaption = document.querySelector('#HeroMediaCaption')

    const handleHeroMediaCaptionToggleClick = (e) => {
      HeroMediaCaptionToggle.classList.toggle('expanded')
      HeroMediaCaption.classList.toggle('hidden')
    }

    if (HeroMediaCaptionToggle) {
      HeroMediaCaptionToggle.addEventListener(
        'click',
        handleHeroMediaCaptionToggleClick
      )
    }
  },
  { once: true }
)
