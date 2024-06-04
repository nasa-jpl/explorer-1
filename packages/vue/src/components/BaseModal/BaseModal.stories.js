import BaseButton from '../BaseButton/BaseButton.vue'
import BaseModal from './BaseModal.vue'
import BaseModalDialog from './BaseModalDialog.vue'

export default {
  title: 'WWW/Components/Base/BaseModal',
  component: BaseModal,
  argTypes: {
    bgClose: { control: { type: 'boolean' } }
  },
  excludeStories: /.*Data$/
}

// templates
const BaseModalTemplate = (args) => ({
  props: Object.keys(args),
  components: { BaseModal },
  template: `<BaseModal :bg-close="bgClose"><div>Modal content. Lorem ipsum dolor sit amet.</div></BaseModal>`
})
const BaseModalWithTriggerTemplate = (args) => ({
  props: Object.keys(args),
  components: { BaseModal, BaseButton },
  template: `<BaseModal :bg-close="bgClose">
    <template #modalTrigger>
      <BaseButton variant="secondary">
        Custom Trigger
      </BaseButton>
    </template>
    <div>Modal content. Lorem ipsum dolor sit amet.</div>
  </BaseModal>`
})
const BaseModalNested = (args) => ({
  props: Object.keys(args),
  components: { BaseModal, BaseButton },
  template: `
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
  </BaseModal>`
})

const BaseModalDialogTemplate = (args) => ({
  props: Object.keys(args),
  components: { BaseModalDialog },
  template: `<BaseModalDialog><template v-if="modalHeaderSlot" #modalHeader>{{ modalHeaderSlot }}</template><div>{{ modalContentSlot }}</div></BaseModalDialog>`
})

// data
export const BaseModalData = {
  bgClose: true
}
export const BaseModalDialogData = {
  modalHeaderSlot: 'Modal Header',
  modalContentSlot:
    'Modal content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu arcu lacinia, fringilla dui sed, vestibulum augue. Nunc quis leo neque. Pellentesque tempor magna risus, vitae volutpat lorem mattis nec. '
}

// stories
export const Default = BaseModalTemplate.bind({})
Default.args = { ...BaseModalData }

export const CustomTrigger = BaseModalWithTriggerTemplate.bind({})
CustomTrigger.args = { ...BaseModalData }

export const Nested = BaseModalNested.bind({})
Nested.args = { ...BaseModalData }

export const Dialog = BaseModalDialogTemplate.bind({})
Dialog.args = { ...BaseModalDialogData, modalHeaderSlot: '' }

export const DialogWithHeader = BaseModalDialogTemplate.bind({})
DialogWithHeader.args = {
  ...BaseModalDialogData,
  modalHeaderSlot: 'Modal Header'
}
