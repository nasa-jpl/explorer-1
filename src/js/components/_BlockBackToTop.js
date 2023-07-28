/*
 **
 ** Back To Top button for scrolling to the top
 **
 */

document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('BackToTop')
  const backToTopBtn = backToTop.querySelector('button')
  const threshold = parseInt(backToTop.dataset.threshold) || 300
  const scrollTo = parseInt(backToTop.dataset.scrollto) || 0
  const alwaysVisible = backToTopBtn.classList.contains('always-visible')

  const onScroll = () => {
    if (!alwaysVisible) {
      let showBackToTop = window.scrollY > threshold
      showBackToTop
        ? (backToTopBtn.style.display = 'block')
        : (backToTopBtn.style.display = 'none')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: scrollTo, behavior: 'smooth' })
  }

  window.addEventListener('scroll', onScroll)
  backToTopBtn.addEventListener('click', scrollToTop)
})
