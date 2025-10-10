import{B as t,u as s}from"./iframe-CIczggiG.js";import"./preload-helper-D6kgxu3v.js";const l={title:"Components/Base/BaseUnitToggle",component:t,argTypes:{unitPair:{control:{type:"select",options:Object.keys(s)}},valueSystem:{description:"The system of measurement that corresponds with the provided `value`",control:{type:"select",options:["imperial","metric"]}},value:{description:"The initial value to be converted"},secondValue:{description:"Manually override the converted value"}}},a=e=>({components:{BaseUnitToggle:t},setup(){return{args:e}},template:`
  <BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>`}),o=a.bind({});o.args={unitPair:"MI_KM",value:999999,secondValue:void 0,valueSystem:"imperial"};const i={name:"Metric",args:{unitPair:"MI_KM",value:999999,secondValue:void 0,valueSystem:"metric"},render:e=>({components:{BaseUnitToggle:t},setup(){return{args:e}},template:`<BaseUnitToggle
        v-slot="slotProps"
        v-bind="args"
      >
        <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
      </BaseUnitToggle>`})},p={args:{unitPair:"MI_KM",value:14.33,secondValue:void 0,valueSystem:"imperial",formattedValue:123},render:e=>({components:{BaseUnitToggle:t},setup(){return{args:e}},template:`<BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>`})},u=["Imperial","BaseStory","KeepsPrecision"];export{i as BaseStory,o as Imperial,p as KeepsPrecision,u as __namedExportsOrder,l as default};
