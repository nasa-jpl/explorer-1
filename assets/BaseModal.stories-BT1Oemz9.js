import{B as H}from"./BaseButton-DpiePXR3.js";import{B as r}from"./BaseModal-Cc6tQ7Jp.js";import{B as h}from"./BaseModalDialog-D53ktY7X.js";import"./iframe-bnomvYc_.js";import"./preload-helper-D6kgxu3v.js";import"./BaseHeading-B9dDlbad.js";const _={title:"Components/Base/BaseModal",component:r,excludeStories:/.*Data$/},j=e=>({props:Object.keys(e),components:{BaseModal:r},template:'<BaseModal :bg-close="bgClose"><div>{{ bgClose }} Modal content. Lorem ipsum dolor sit amet.</div></BaseModal>'}),k=e=>({props:Object.keys(e),components:{BaseModal:r,BaseButton:H},template:`<BaseModal :bg-close="bgClose">
    <template #modalTrigger>
      <BaseButton variant="secondary">
        Custom Trigger
      </BaseButton>
    </template>
    <div>Modal content. Lorem ipsum dolor sit amet.</div>
  </BaseModal>`}),f=e=>({props:Object.keys(e),components:{BaseModal:r,BaseButton:H},template:`
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
  </BaseModal>`}),T=e=>({props:Object.keys(e),components:{BaseModalDialog:h},template:'<BaseModalDialog><template v-if="modalHeaderSlot" #modalHeader>{{ modalHeaderSlot }}</template><div>{{ modalContentSlot }}</div></BaseModalDialog>'}),n={bgClose:!0},O={modalHeaderSlot:"Modal Header",modalContentSlot:"Modal content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu arcu lacinia, fringilla dui sed, vestibulum augue. Nunc quis leo neque. Pellentesque tempor magna risus, vitae volutpat lorem mattis nec. "},a=j.bind({});a.args=n;const o=k.bind({});o.args=n;const t=f.bind({});t.args=n;const s=T.bind({});s.args={...O,modalHeaderSlot:""};const l=T.bind({});l.args={...O,modalHeaderSlot:"Modal Header"};var d,m,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  props: Object.keys(args),
  components: {
    BaseModal
  },
  template: \`<BaseModal :bg-close="bgClose"><div>{{ bgClose }} Modal content. Lorem ipsum dolor sit amet.</div></BaseModal>\`
})`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,c,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var B,u,M;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
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
})`,...(M=(u=t.parameters)==null?void 0:u.docs)==null?void 0:M.source}}};var b,v,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  props: Object.keys(args),
  components: {
    BaseModalDialog
  },
  template: \`<BaseModalDialog><template v-if="modalHeaderSlot" #modalHeader>{{ modalHeaderSlot }}</template><div>{{ modalContentSlot }}</div></BaseModalDialog>\`
})`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,D,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  props: Object.keys(args),
  components: {
    BaseModalDialog
  },
  template: \`<BaseModalDialog><template v-if="modalHeaderSlot" #modalHeader>{{ modalHeaderSlot }}</template><div>{{ modalContentSlot }}</div></BaseModalDialog>\`
})`,...(y=(D=l.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};const F=["BaseModalData","BaseModalDialogData","BaseStory","CustomTrigger","Nested","Dialog","DialogWithHeader"];export{n as BaseModalData,O as BaseModalDialogData,a as BaseStory,o as CustomTrigger,s as Dialog,l as DialogWithHeader,t as Nested,F as __namedExportsOrder,_ as default};
