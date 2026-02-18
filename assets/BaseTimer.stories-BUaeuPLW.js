import{B as c}from"./BaseTimer-V6S7DYWs.js";import"./iframe-UYtirdi4.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Components/Base/BaseTimer",component:c,decorators:[()=>({template:'<div id="storyRoot" class="w-full"><story/></div>'})],parameters:{html:{root:"#storyRoot"}}},e={name:"Full Date Time",args:{targetDateTime:"2011-11-26 15:02:21+01:00",selectedUnits:["years","months","days","hours","minutes","seconds"],inline:!1,countdown:!1,legendClass:"text-gray-mid-dark"}},t={args:{targetDateTime:"2011-11-26 15:02:21+01:00",selectedUnits:["years","months","days"],inline:!1,countdown:!1}},s={args:{targetDateTime:"2011-11-26 15:02:21+01:00",selectedUnits:["months","days","hours"],inline:!1,countdown:!1}},n={args:{targetDateTime:new Date(new Date().getTime()+999999999).toISOString(),selectedUnits:["years","months","days","hours","minutes","seconds"],inline:!1,countdown:!0}},a={args:{targetDateTime:new Date(new Date().getTime()+1e3*10).toISOString(),selectedUnits:["years","months","days","hours","minutes","seconds"],inline:!1,countdown:!0}},r={args:{targetDateTime:new Date(new Date().getTime()-999999999).toISOString(),selectedUnits:[],inline:!1,countdown:!1}},o={args:{targetDateTime:new Date(new Date().getTime()+1e3*10).toISOString(),selectedUnits:[],inline:!1,countdown:!0}},i={args:{targetDateTime:"2011-11-26 15:02:21+01:00",selectedUnits:["years","months","days","hours","minutes","seconds"],inline:!0,countdown:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Full Date Time',
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: false,
    countdown: false,
    legendClass: 'text-gray-mid-dark'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['years', 'months', 'days'],
    inline: false,
    countdown: false
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['months', 'days', 'hours'],
    inline: false,
    countdown: false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    targetDateTime: new Date(new Date().getTime() + 999999999).toISOString(),
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: false,
    countdown: true
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    targetDateTime: new Date(new Date().getTime() + 1000 * 10).toISOString(),
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: false,
    countdown: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    targetDateTime: new Date(new Date().getTime() - 999999999).toISOString(),
    selectedUnits: [],
    inline: false,
    countdown: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    targetDateTime: new Date(new Date().getTime() + 1000 * 10).toISOString(),
    selectedUnits: [],
    inline: false,
    countdown: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: true,
    countdown: false
  }
}`,...i.parameters?.docs?.source}}};const g=["BaseStory","DateOnly","Mixed","Countdown","CountdownStop","AutoUnits","AutoUnitsCountdown","Inline"];export{r as AutoUnits,o as AutoUnitsCountdown,e as BaseStory,n as Countdown,a as CountdownStop,t as DateOnly,i as Inline,s as Mixed,g as __namedExportsOrder,u as default};
