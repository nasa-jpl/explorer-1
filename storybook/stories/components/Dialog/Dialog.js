import { IconCloseTemplate } from '../Icons/IconClose'

export const DialogTemplate = ({
  dialogId = '',
  dialogTrigger = '',
  ariaLabelledBy = '',
  content = '',
  overlayClose = 'true',
  dialogBoxClass = '',
}) => {
  const template = `
    <div class="Dialog">
        <span data-a11y-dialog-show="${dialogId}">${dialogTrigger}</span>  
        <div id="${dialogId}"
        aria-labelledby="${ariaLabelledBy}" aria-hidden='true'
        class="dialog-container fixed top-0 left-0 z-50 flex w-full h-full overflow-auto" >
            <div ${overlayClose ? 'data-a11y-dialog-hide' : ''}
            class="dialog-overlay 
            bg-gray-dark bg-opacity-90 fixed top-0 left-0 w-full h-full"></div> 
            <div class="container m-auto">
                <div role="document" class="dialog-box ${dialogBoxClass} relative m-auto bg-white">
                    <button type="button" data-a11y-dialog-hide aria-label="Close dialog" 
                    class="button-close absolute right-0 flex-shrink-0 text-white focus:outline-none focus:ring-2">
                        ${IconCloseTemplate({})}
                    </button>           
                    ${content}
                </div> 
            </div> 
        </div>
    </div>
  `
  return template
}
