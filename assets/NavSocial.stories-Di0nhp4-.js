import{N as e}from"./NavSocial-BQ1bojnk.js";import"./iframe-Bnf9h3W1.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseButton-tYSxM46m.js";import"./IconSocialTwitter-C-ssoVsM.js";import"./IconSocialYoutube-C9okjJHX.js";const d={title:"Navigation/Elements/NavSocial",component:e,tags:["navigation"],excludeStories:/.*Data$/},a={args:{dark:!1}},r={args:{dark:!0},render:s=>({components:{NavSocial:e},setup(){return{args:s}},template:'<div class="bg-gray-dark p-8"><NavSocial v-bind="args" /></div>'})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
