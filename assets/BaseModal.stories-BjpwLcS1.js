import{B as t}from"./BaseButton-D9qR0LTj.js";import{B as a}from"./BaseModal-S5olezf3.js";import{B as d}from"./BaseModalDialog-DrHTgSNU.js";import"./iframe-CIczggiG.js";import"./preload-helper-D6kgxu3v.js";import"./BaseHeading-dcfZxEQ4.js";const T={title:"Components/Base/BaseModal",component:a,argTypes:{bgClose:{control:{type:"boolean"}}},excludeStories:/.*Data$/},r=e=>({props:Object.keys(e),components:{BaseModal:a},template:'<BaseModal :bg-close="bgClose"><div>Modal content. Lorem ipsum dolor sit amet.</div></BaseModal>'}),i=e=>({props:Object.keys(e),components:{BaseModal:a,BaseButton:t},template:`<BaseModal :bg-close="bgClose">
    <template #modalTrigger>
      <BaseButton variant="secondary">
        Custom Trigger
      </BaseButton>
    </template>
    <div>Modal content. Lorem ipsum dolor sit amet.</div>
  </BaseModal>`}),n=e=>({props:Object.keys(e),components:{BaseModal:a,BaseButton:t},template:`
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
  </BaseModal>`}),s=e=>({props:Object.keys(e),components:{BaseModalDialog:d},template:'<BaseModalDialog><template v-if="modalHeaderSlot" #modalHeader>{{ modalHeaderSlot }}</template><div>{{ modalContentSlot }}</div></BaseModalDialog>'}),o={bgClose:!0},l={modalHeaderSlot:"Modal Header",modalContentSlot:"Modal content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu arcu lacinia, fringilla dui sed, vestibulum augue. Nunc quis leo neque. Pellentesque tempor magna risus, vitae volutpat lorem mattis nec. "},m=r.bind({});m.args={...o};const p=i.bind({});p.args={...o};const c=n.bind({});c.args={...o};const g=s.bind({});g.args={...l,modalHeaderSlot:""};const B=s.bind({});B.args={...l,modalHeaderSlot:"Modal Header"};const y=["BaseModalData","BaseModalDialogData","BaseStory","CustomTrigger","Nested","Dialog","DialogWithHeader"];export{o as BaseModalData,l as BaseModalDialogData,m as BaseStory,p as CustomTrigger,g as Dialog,B as DialogWithHeader,c as Nested,y as __namedExportsOrder,T as default};
