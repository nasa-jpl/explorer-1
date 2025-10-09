/*
 *  BlockAccordion
 *
 *  This software or document includes material copied from or derived from "Accordion Example"
 *  https://www.w3.org/TR/wai-aria-practices/examples/accordion/js/accordion.js
 *  Copyright © 2015 W3C® (MIT, ERCIM, Keio, Beihang).
 *
 */
export default function () {
  Array.prototype.slice
    .call(document.querySelectorAll('.BlockAccordion'))
    .forEach(function (accordion) {
      // Allow for multiple accordion sections to be expanded at the same time
      var allowMultiple = accordion.hasAttribute('data-allow-multiple')

      // Create the array of toggle elements for the accordion group
      var triggers = Array.prototype.slice.call(
        accordion.querySelectorAll('.BlockAccordion-trigger')
      )
      var panels = Array.prototype.slice.call(accordion.querySelectorAll('.BlockAccordion-panel'))

      accordion.addEventListener('click', function (event) {
        var target = event.target

        if (target.classList.contains('BlockAccordion-trigger')) {
          // Check if the current toggle is expanded.
          var isExpanded = target.getAttribute('aria-expanded') == 'true'
          var active = accordion.querySelector('[aria-expanded="true"]')

          // without allowMultiple, close the open accordion
          if (!allowMultiple && active && active !== target) {
            // Set the expanded state on the triggering element
            active.setAttribute('aria-expanded', 'false')
            active.querySelector('.BlockAccordion-icon').classList.toggle('rotate-45')
            // Hide the accordion sections, using aria-controls to specify the desired section
            const panel = document.getElementById(active.getAttribute('aria-controls'))
            panel.setAttribute('hidden', '')
          }

          if (!isExpanded) {
            // Set the expanded state on the triggering element
            target.setAttribute('aria-expanded', 'true')
            target.querySelector('.BlockAccordion-icon').classList.toggle('rotate-45')
            // Hide the accordion sections, using aria-controls to specify the desired section
            const panel = document.getElementById(target.getAttribute('aria-controls'))
            panel.removeAttribute('hidden')
          } else if (isExpanded) {
            // Set the expanded state on the triggering element
            target.setAttribute('aria-expanded', 'false')
            target.querySelector('.BlockAccordion-icon').classList.toggle('rotate-45')
            // Hide the accordion sections, using aria-controls to specify the desired section
            const panel = document.getElementById(target.getAttribute('aria-controls'))
            panel.setAttribute('hidden', '')
          }

          event.preventDefault()
        }
      })

      // Bind keyboard behaviors on the main accordion container
      accordion.addEventListener('keydown', function (event) {
        var target = event.target
        var key = event.which.toString()

        var isExpanded = target.getAttribute('aria-expanded') == 'true'

        // 33 = Page Up, 34 = Page Down
        var ctrlModifier = event.ctrlKey && key.match(/33|34/)

        // Is this coming from an accordion header?
        if (target.classList.contains('BlockAccordion-trigger')) {
          // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
          // 38 = Up, 40 = Down
          if (key.match(/38|40/) || ctrlModifier) {
            var index = triggers.indexOf(target)
            var direction = key.match(/34|40/) ? 1 : -1
            var length = triggers.length
            var newIndex = (index + length + direction) % length

            triggers[newIndex].focus()

            event.preventDefault()
          } else if (key.match(/35|36/)) {
            // 35 = End, 36 = Home keyboard operations
            switch (key) {
              // Go to first accordion item
              case '36':
                triggers[0].focus()
                break
              // Go to last accordion item
              case '35':
                triggers[triggers.length - 1].focus()
                break
            }
            event.preventDefault()
          }
        }
      })
    })
}
