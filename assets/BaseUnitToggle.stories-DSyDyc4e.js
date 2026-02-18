import{B as a}from"./BaseUnitToggle-jvOX3jTo.js";import"./iframe-UYtirdi4.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/Base/BaseUnitToggle",component:a},r=e=>({components:{BaseUnitToggle:a},setup(){return{args:e}},template:`
  <BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>`}),s=r.bind({});s.args={unitPair:"MI_KM",value:999999,secondValue:void 0,valueSystem:"imperial"};const n={name:"Metric",args:{unitPair:"MI_KM",value:999999,secondValue:void 0,valueSystem:"metric"},render:e=>({components:{BaseUnitToggle:a},setup(){return{args:e}},template:`<BaseUnitToggle
        v-slot="slotProps"
        v-bind="args"
      >
        <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
      </BaseUnitToggle>`})},t={args:{unitPair:"MI_KM",value:14.33,secondValue:void 0,valueSystem:"imperial",formattedValue:123},render:e=>({components:{BaseUnitToggle:a},setup(){return{args:e}},template:`<BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>`})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BaseUnitToggle
  },
  setup() {
    return {
      args
    };
  },
  template: \`
  <BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>\`
})`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Metric',
  args: {
    unitPair: 'MI_KM',
    value: 999999,
    secondValue: undefined,
    valueSystem: 'metric'
  },
  render: args => ({
    components: {
      BaseUnitToggle
    },
    setup() {
      return {
        args
      };
    },
    template: \`<BaseUnitToggle
        v-slot="slotProps"
        v-bind="args"
      >
        <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
      </BaseUnitToggle>\`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    unitPair: 'MI_KM',
    value: 14.33,
    secondValue: undefined,
    valueSystem: 'imperial',
    formattedValue: 123
  },
  render: args => ({
    components: {
      BaseUnitToggle
    },
    setup() {
      return {
        args
      };
    },
    template: \`<BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>\`
  })
}`,...t.parameters?.docs?.source}}};const g=["Imperial","BaseStory","KeepsPrecision"];export{n as BaseStory,s as Imperial,t as KeepsPrecision,g as __namedExportsOrder,i as default};
