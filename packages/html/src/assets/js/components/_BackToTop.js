/*
 **
 ** Back To Top button for scrolling to the top
 **
 */

export default function () {
  const initBackToTop = (backToTop) => {
    const backToTopBtn = backToTop.querySelector('button')
    const threshold = parseFloat(backToTop.dataset.threshold) || 300
    const scrollTo = parseFloat(backToTop.dataset.scrollto) || 0
    const alwaysVisible = backToTop.dataset.alwaysvisible

    const debounce = (func, wait = 0) => {
      let timeoutId
      return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          func(...args)
        }, wait)
      }
    }

    const onScroll = () => {
      if (!alwaysVisible) {
        let showBackToTop = window.scrollY > threshold
        showBackToTop
          ? (backToTopBtn.style.display = 'block')
          : (backToTopBtn.style.display = 'none')
      }
    }

    const debouncedOnScroll = debounce(onScroll, 500)

    const scrollToTop = () => {
      window.scrollTo({ top: scrollTo, behavior: 'smooth' })
    }

    if (!alwaysVisible) {
      backToTopBtn.style.display = 'none'
      window.addEventListener('scroll', debouncedOnScroll, { passive: true })
      backToTopBtn.addEventListener('click', scrollToTop)
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const backToTopElements = document.querySelectorAll('.BackToTop')
    backToTopElements.forEach(initBackToTop)
  })
}
