import{N as e}from"./NavSocial-CYjB7oWT.js";import"./iframe-DwvVnlic.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseButton-B4xv4p0u.js";import"./IconSocialTwitter-0g9EOFoY.js";import"./IconSocialYoutube-d-W-hiiF.js";const d={title:"Navigation/Elements/NavSocial",component:e,tags:["navigation"],excludeStories:/.*Data$/},a={args:{dark:!1}},r={args:{dark:!0},render:s=>({components:{NavSocial:e},setup(){return{args:s}},template:'<div class="bg-gray-dark p-8"><NavSocial v-bind="args" /></div>'})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    dark: false
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    dark: true
  },
  render: args => ({
    components: {
      NavSocial
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="bg-gray-dark p-8"><NavSocial v-bind="args" /></div>\`
  })
}`,...r.parameters?.docs?.source}}};const m=["BaseStory","Dark"];export{a as BaseStory,r as Dark,m as __namedExportsOrder,d as default};
