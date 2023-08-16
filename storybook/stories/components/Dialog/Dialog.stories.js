import { DialogTemplate } from './Dialog'

export default {
  title: 'Components/Dialog',
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => `<div id="storyRoot" class="absolute inset-0">${Story()}</div>`,
  ],
  argTypes: {
    dialogId: {
      type: { name: 'string', required: true },
      description: 'Unique dialog id (needed for instantiation)',
    },
    dialogTrigger: {
      type: { name: 'string', required: true },
      description: 'Custom trigger',
    },
    ariaLabelledBy: {
      type: { name: 'string', required: false },
      description: 'Id of a dialog title element to define an accessible name',
    },
    content: {
      type: { name: 'string', required: true },
      description: 'Dialog content',
    },
    overlayClose: {
      type: { name: 'boolean', required: false },
      description:
        'Determines whether clicking the overlay will close the dialog',
      table: {
        defaultValue: { summary: true },
      },
    },
    dialogBoxClass: {
      type: { name: 'string', required: false },
      description: 'Content wrapper class',
    },
  },
  parameters: {
    html: {
      root: '#storyRoot',
    },
    viewMode: 'docs',
    docs: {
      inlineStories: false,
      iframeHeight: 1050,
      description: {
        component:
          'Accessible dialog (modal) window based on a11y-dialog library.',
      },
    },
  },
}

export const DialogData = {
  dialogId: 'block-dialog',
  dialogTrigger: '<button>Custom trigger</button>',
  ariaLabelledBy: 'block-dialog-title',
  content: `
  <div class="p-3 sm:p-5">
    <h3 id="block-dialog-title">Dialog title</h3>
    <hr aria-hidden="true" class="bg-gray-light-mid w-full h-2px border-0 my-3"/>
    <div class="py-3 max-h-xl overflow-auto">
        <p class="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p class="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div class="my-3">
        <a href="#" target="" rel="" class="group cursor-pointer -default underline text-theme-color can-hover:hover:text-theme-color-hover">
            <span class="break-words">Explore</span> 
        </a>
    </div>
</div>
`,
  dialogBoxClass: 'max-w-2xl',
}

export const Default = DialogTemplate.bind({})
Default.args = DialogData
