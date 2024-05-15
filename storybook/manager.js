// customizing Storybook's manager UI
// see config options: https://storybook.js.org/docs/vue/configure/features-and-behavior

import { addons } from '@storybook/manager-api'
import customTheme from './customTheme'

// to collapse all sections and use custom theme
addons.setConfig({
  theme: customTheme,
  sidebar: { showRoots: false },
})

/* Custom script that if a node type of "group" is clicked, storybook will immediately open the first child.
 * This is a temporary workaround for a feature request that is yet to be implemented: https://github.com/storybookjs/storybook/issues/2863
 * Usage of setInteral() and setTimeOut() is necessary detect child nodes, as they aren't in the DOM until the parent is clicked,
 * and using mutationObserver seems to break Storybook.
 */

const checkSidebarNodesExist = setInterval(function () {
  if (document.querySelectorAll('.sidebar-item').length) {
    // make sure necessary sidebar content is loaded
    clearInterval(checkSidebarNodesExist)
    handleGroupNodesClick()
  }
}, 100)

function handleGroupNodesClick() {
  Array.prototype.slice
    .call(document.querySelectorAll(`[data-nodetype*="group"]`))
    .forEach(function (group) {
      // TODO: ensure event listener if the node is removed
      group.addEventListener('click', function (event) {
        // listen for click event on any group
        if (group.getAttribute('aria-expanded') === 'false') {
          // if it was collapsed (i.e. it will expand on click)...
          setTimeout(() => {
            // continue with clicking on the first item within
            const nodeList = document.querySelectorAll(
              `[data-parent-id*="${group.getAttribute('data-item-id')}"]`
            )
            if (nodeList) {
              const firstItem = nodeList.item(0)
              if (firstItem) {
                firstItem.click()
                // use recursion to add click event listeners to any new group nodes
                // but wait for them to get added to the DOM first
                setTimeout(() => {
                  handleGroupNodesClick()
                }, 50)
              }
            }
          }, 50)
        }
      })
    })
}
