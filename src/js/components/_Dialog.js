import A11yDialog from 'a11y-dialog'

const initDialog = (dialogElement) => {
  const dialog = new A11yDialog(dialogElement)

  // scroll lock
  dialog
    .on('show', () => document.body.classList.add('overflow-hidden'))
    .on('hide', () => document.body.classList.remove('overflow-hidden'))
}

document.addEventListener('DOMContentLoaded', () => {
  const dialogs = document.querySelectorAll('.dialog-container')
  dialogs.forEach(initDialog)
})
