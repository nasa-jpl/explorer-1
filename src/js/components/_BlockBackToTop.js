/*
 **
 ** Back To Top button for scrolling to the top
 **
 */

document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document
    .getElementById('BackToTop')
    .querySelector('button')
  const alwaysVisible = backToTopBtn.classList.contains('always-visible')
  const threshold = 300

  const onScroll = () => {
    if (!alwaysVisible) {
      showBackToTop = window.scrollY > threshold
      showBackToTop
        ? (backToTopBtn.style.display = 'block')
        : (backToTopBtn.style.display = 'none')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', onScroll)
  backToTopBtn.addEventListener('click', scrollToTop)
})
