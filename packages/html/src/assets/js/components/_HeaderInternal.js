/*
 **
 ** Main navigation mega menu dropdowns and search toggling
 **
 */

/*
 ** Mega Menus
 */

let navOpened = null
const HeaderInternal = document.getElementById('HeaderInternal')
const NavBgOverlay = document.getElementById('NavBgOverlay')
const NavInternal = document.getElementById('NavInternalContainer')
const NavMobileToggle = document.getElementById('NavMobileToggle')
const NavMobileSearchInput = document.getElementById('NavMobileSearchInput')

const toggleNavMobileVisibility = (e) => {
  HeaderInternal.classList.toggle('h-screen')
  HeaderInternal.classList.toggle('overflow-y-scroll')
  NavInternal.classList.toggle('hidden')
  NavMobileToggle.classList.toggle('expanded')
  if (NavMobileToggle.classList.contains('expanded')) {
    NavMobileToggle.setAttribute('aria-label', 'Close menu')
  } else {
    NavMobileSearchInput.value = ''
    NavMobileToggle.setAttribute('aria-label', 'Open menu')
  }
  document.body.classList.toggle('overflow-hidden')
}

const toggleNavDropdownVisibility = (e) => {
  const clickedItem = e.parentElement
  // disable body scroll when panel is open
  document.body.classList.toggle('lg:overflow-hidden')
  // toggle bg overlay
  NavBgOverlay.classList.toggle('invisible-overlay')
  // toggle menu panels and states
  clickedItem.classList.toggle('expanded')
  if (clickedItem.classList.contains('expanded')) {
    e.setAttribute('aria-expanded', 'true')
  } else {
    e.setAttribute('aria-expanded', 'false')
  }
}

// TODO: allow for clicking anywhere without closing opened panels on mobile
const handleNavDropdown = (e) => {
  toggleNavDropdownVisibility(e)
  if (!navOpened) {
    navOpened = e
  } else if (navOpened == e) {
    navOpened = null
  } else {
    toggleNavDropdownVisibility(navOpened)
    navOpened = e
  }
}

const handleNavClickInsideDropdown = (e) => {
  if (navOpened) {
    const openItemPanel = document.getElementById('target_' + navOpened.id)
    if (!openItemPanel.contains(e.target)) {
      toggleNavDropdownVisibility(navOpened)
      navOpened = null
    }
  }
}

const handleNavClick = (e) => {
  if (NavMobileToggle && NavMobileToggle.contains(e.target)) {
    toggleNavMobileVisibility(e)
    // comment out next line if opened menu item should be preserved when toggling the menu
    handleNavClickInsideDropdown(e)
  } else if (e.target.classList && e.target.classList.contains('toggle-NavInternalPanel')) {
    handleNavDropdown(e.target)
  } else if (navOpened) {
    handleNavClickInsideDropdown(e)
  }
}

const resetNav = (e) => {
  document.body.classList.remove('overflow-hidden', 'lg:overflow-hidden')
  NavBgOverlay.classList.add('invisible-overlay')
  HeaderInternal.classList.remove('h-screen')
  HeaderInternal.classList.remove('overflow-y-scroll')
  NavInternal.classList.add('hidden')
  NavMobileToggle.classList.remove('expanded')
  NavMobileToggle.setAttribute('aria-label', 'Open menu')
  if (navOpened) {
    navOpened.parentElement.classList.remove('expanded')
    navOpened.setAttribute('aria-expanded', 'false')
    navOpened = null
  }
}

/*
 ** Search Toggling
 */

const NavSearchOpenButton = document.getElementById('NavSearchOpen')
const NavSearchCloseButton = document.getElementById('NavSearchClose')
const NavSearchContainer = document.getElementById('NavSearchContainer')
const NavSearchInput = document.getElementById('NavSearchInput')

const handleNavSearchOpen = (e) => {
  if (NavSearchContainer && NavSearchInput) {
    NavSearchContainer.classList.add('lg:block')
    NavSearchInput.focus()
  }
}

const handleNavSearchClose = (e) => {
  if (NavSearchContainer && NavSearchInput) {
    NavSearchContainer.classList.remove('lg:block')
    NavSearchInput.value = ''
  }
}

/*
 ** Event listeners
 */

if (NavSearchOpenButton) {
  NavSearchOpenButton.addEventListener('click', handleNavSearchOpen)
}
if (NavSearchCloseButton) {
  NavSearchCloseButton.addEventListener('click', handleNavSearchClose)
}

document.addEventListener('click', handleNavClick)
window.addEventListener(
  'orientationchange',
  function (e) {
    resetNav()
    handleNavSearchClose()
  },
  false
)
// reset nav on esc
document.addEventListener('keydown', function (e) {
  const key = e.key
  if (key === 'Escape') {
    resetNav()
    handleNavSearchClose()
  }
})
