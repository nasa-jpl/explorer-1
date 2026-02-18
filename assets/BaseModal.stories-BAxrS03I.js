import{B as d}from"./BaseButton-DbWpKeGD.js";import{B as r}from"./BaseModal-D3ll3gft.js";import{B as p}from"./BaseModalDialog-BTbCRbW8.js";import"./iframe-UYtirdi4.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseHeading-WJvwHq44.js";const D={title:"Components/Base/BaseModal",component:r,excludeStories:/.*Data$/},c=e=>({props:Object.keys(e),components:{BaseModal:r},template:'<BaseModal :bg-close="bgClose"><div>{{ bgClose }} Modal content. Lorem ipsum dolor sit amet.</div></BaseModal>'}),g=e=>({props:Object.keys(e),components:{BaseModal:r,BaseButton:d},template:`<BaseModal :bg-close="bgClose">
    <template #modalTrigger>
      <BaseButton variant="secondary">
        Custom Trigger
      </BaseButton>
    </template>
    <div>Modal content. Lorem ipsum dolor sit amet.</div>
  </BaseModal>`}),B=e=>({props:Object.keys(e),components:{BaseModal:r,BaseButton:d},template:`
  <BaseModal :bg-close="bgClose">
    <div>First Modal</div>
    <BaseModal :bg-close="bgClose">
      <template #modalTrigger>
        <BaseButton variant="secondary" :compact="true">
          Open Another
        </BaseButton>
      </template>
      <div>Second Modal</div>
      <BaseModal :bg-close="bgClose">
      <template #modalTrigger>
        <BaseButton variant="secondary" :compact="true">
          Open Another
        </BaseButton>
      </template>
      <div>Third Modal</div>
      </BaseModal>
    </BaseModal>
  </BaseModal>`}),m=e=>({props:Object.keys(e),components:{BaseModalDialog:p},template:'<BaseModalDialog><template v-if="modalHeaderSlot" #modalHeader>{{ modalHeaderSlot }}</template><div>{{ modalContentSlot }}</div></BaseModalDialog>'}),n={bgClose:!0},i={modalHeaderSlot:"Modal Header",modalContentSlot:"Modal content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu arcu lacinia, fringilla dui sed, vestibulum augue. Nunc quis leo neque. Pellentesque tempor magna risus, vitae volutpat lorem mattis nec. "},a=c.bind({});a.args=n;const o=g.bind({});o.args=n;const t=B.bind({});t.args=n;const s=m.bind({});s.args={...i,modalHeaderSlot:""};const l=m.bind({});l.args={...i,modalHeaderSlot:"Modal Header"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  props: Object.keys(args),
  components: {
    BaseModal
  },
  template: \`<BaseModal :bg-close="bgClose"><div>{{ bgClose }} Modal content. Lorem ipsum dolor sit amet.</div></BaseModal>\`
})`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  props: Object.keys(args),
  components: {
    BaseModal,
    BaseButton
  },
  template: \`<BaseModal :bg-close="bgClose">
    <template #modalTrigger>
      <BaseButton variant="secondary">
        Custom Trigger
      </BaseButton>
    </template>
    <div>Modal content. Lorem ipsum dolor sit amet.</div>
  </BaseModal>\`
})`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  props: Object.keys(args),
  components: {
    BaseModal,
    BaseButton
  },
  template: \`
  <BaseModal :bg-close="bgClose">
    <div>First Modal</div>
    <BaseModal :bg-close="bgClose">
      <template #modalTrigger>
        <BaseButton variant="secondary" :compact="true">
          Open Another
        </BaseButton>
      </template>
      <div>Second Modal</div>
      <BaseModal :bg-close="bgClose">
      <template #modalTrigger>
        <BaseButton variant="secondary" :compact="true">
          Open Another
        </BaseButton>
      </template>
      <div>Third Modal</div>
      </BaseModal>
    </BaseModal>
  </BaseModal>\`
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  props: Object.keys(args),
  components: {
    BaseModalDialog
  },
  template: \`<BaseModalDialog><template v-if="modalHeaderSlot" #modalHeader>{{ modalHeaderSlot }}</template><div>{{ modalContentSlot }}</div></BaseModalDialog>\`
})`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => ({
  props: Object.keys(args),
  components: {
    BaseModalDialog
  },
  template: \`<BaseModalDialog><template v-if="modalHeaderSlot" #modalHeader>{{ modalHeaderSlot }}</template><div>{{ modalContentSlot }}</div></BaseModalDialog>\`
})`,...l.parameters?.docs?.source}}};const y=["BaseModalData","BaseModalDialogData","BaseStory","CustomTrigger","Nested","Dialog","DialogWithHeader"];export{n as BaseModalData,i as BaseModalDialogData,a as BaseStory,o as CustomTrigger,s as Dialog,l as DialogWithHeader,t as Nested,y as __namedExportsOrder,D as default};
