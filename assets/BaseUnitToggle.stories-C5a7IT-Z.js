import{B as a}from"./BaseUnitToggle-CWOeK_BZ.js";import"./iframe-CTVWvntx.js";import"./preload-helper-D6kgxu3v.js";const P={title:"Components/Base/BaseUnitToggle",component:a},d=e=>({components:{BaseUnitToggle:a},setup(){return{args:e}},template:`
  <BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>`}),s=d.bind({});s.args={unitPair:"MI_KM",value:999999,secondValue:void 0,valueSystem:"imperial"};const n={name:"Metric",args:{unitPair:"MI_KM",value:999999,secondValue:void 0,valueSystem:"metric"},render:e=>({components:{BaseUnitToggle:a},setup(){return{args:e}},template:`<BaseUnitToggle
        v-slot="slotProps"
        v-bind="args"
      >
        <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
      </BaseUnitToggle>`})},t={args:{unitPair:"MI_KM",value:14.33,secondValue:void 0,valueSystem:"imperial",formattedValue:123},render:e=>({components:{BaseUnitToggle:a},setup(){return{args:e}},template:`<BaseUnitToggle
    v-slot="slotProps"
    v-bind="args"
  >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
  </BaseUnitToggle>`})};var r,o,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(l=(o=s.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var p,i,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(i=n.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var u,m,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const U=["Imperial","BaseStory","KeepsPrecision"];export{n as BaseStory,s as Imperial,t as KeepsPrecision,U as __namedExportsOrder,P as default};
