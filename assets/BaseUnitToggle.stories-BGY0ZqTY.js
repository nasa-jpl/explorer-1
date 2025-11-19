import{B as t}from"./iframe-BaEhLE_2.js";import"./preload-helper-D6kgxu3v.js";const l={title:"Components/Base/BaseUnitToggle",component:t},s=e=>({components:{BaseUnitToggle:t},setup(){return{args:e}},template:`
  <BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>`}),a=s.bind({});a.args={unitPair:"MI_KM",value:999999,secondValue:void 0,valueSystem:"imperial"};const r={name:"Metric",args:{unitPair:"MI_KM",value:999999,secondValue:void 0,valueSystem:"metric"},render:e=>({components:{BaseUnitToggle:t},setup(){return{args:e}},template:`<BaseUnitToggle
        v-slot="slotProps"
        v-bind="args"
      >
        <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
      </BaseUnitToggle>`})},i={args:{unitPair:"MI_KM",value:14.33,secondValue:void 0,valueSystem:"imperial",formattedValue:123},render:e=>({components:{BaseUnitToggle:t},setup(){return{args:e}},template:`<BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>`})},p=["Imperial","BaseStory","KeepsPrecision"];export{r as BaseStory,a as Imperial,i as KeepsPrecision,p as __namedExportsOrder,l as default};
