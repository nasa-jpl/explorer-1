import{B as a}from"./BlockDialog-CMR0VE2S.js";import"./iframe-Cbo-gMoN.js";import"./preload-helper-PPVm8Dsz.js";import"./IconClose-BO1gWqBk.js";const l={title:"Components/Utilities/BlockDialog",component:a,tags:["!autodocs","deprecated"],argTypes:{overlayClose:{control:{type:"boolean"}}}},e={name:"BlockDialog",args:{dialogId:"dialog-id",headingId:"heading-id"},render:i=>({components:{BlockDialog:a},setup(){return{args:i}},template:`<div>
    <button type="button" data-a11y-dialog-show="dialog-id">Open the dialog</button>
    <BlockDialog v-bind="args" dialog-box-class="max-w-2xl">
      <div class="p-3 sm:p-5">
        <h2 id="heading-id">Dialog title</h2>
        <hr
          aria-hidden="true"
          class="bg-gray-light-mid w-full h-2px border-0 my-3"
        />
        <div class="dialog-main py-3 max-h-64 overflow-auto relative">
          <p class="py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="my-3">
          <a
            href="#"
            target=""
            rel=""
            class="group cursor-pointer -default underline text-theme-color can-hover:hover:text-theme-color-hover"
          >
            <span class="break-words">Explore</span>
          </a>
        </div>
      </div>
    </BlockDialog>
  </div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'BlockDialog',
  args: {
    dialogId: 'dialog-id',
    headingId: 'heading-id'
  },
  render: args => ({
    components: {
      BlockDialog
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div>
    <button type="button" data-a11y-dialog-show="dialog-id">Open the dialog</button>
    <BlockDialog v-bind="args" dialog-box-class="max-w-2xl">
      <div class="p-3 sm:p-5">
        <h2 id="heading-id">Dialog title</h2>
        <hr
          aria-hidden="true"
          class="bg-gray-light-mid w-full h-2px border-0 my-3"
        />
        <div class="dialog-main py-3 max-h-64 overflow-auto relative">
          <p class="py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="my-3">
          <a
            href="#"
            target=""
            rel=""
            class="group cursor-pointer -default underline text-theme-color can-hover:hover:text-theme-color-hover"
          >
            <span class="break-words">Explore</span>
          </a>
        </div>
      </div>
    </BlockDialog>
  </div>\`
  })
}`,...e.parameters?.docs?.source}}};const d=["BaseStory"];export{e as BaseStory,d as __namedExportsOrder,l as default};
