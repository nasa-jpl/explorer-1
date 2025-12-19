import{B as F}from"./BaseTimer-BaBsCnNN.js";import"./iframe-jyw6MFLl.js";import"./preload-helper-D6kgxu3v.js";const b={title:"Components/Base/BaseTimer",component:F,decorators:[()=>({template:'<div id="storyRoot" class="w-full"><story/></div>'})],parameters:{html:{root:"#storyRoot"}}},e={name:"Full Date Time",args:{targetDateTime:"2011-11-26 15:02:21+01:00",selectedUnits:["years","months","days","hours","minutes","seconds"],inline:!1,countdown:!1,legendClass:"text-gray-mid-dark"}},t={args:{targetDateTime:"2011-11-26 15:02:21+01:00",selectedUnits:["years","months","days"],inline:!1,countdown:!1}},s={args:{targetDateTime:"2011-11-26 15:02:21+01:00",selectedUnits:["months","days","hours"],inline:!1,countdown:!1}},n={args:{targetDateTime:new Date(new Date().getTime()+999999999).toISOString(),selectedUnits:["years","months","days","hours","minutes","seconds"],inline:!1,countdown:!0}},a={args:{targetDateTime:new Date(new Date().getTime()+1e3*10).toISOString(),selectedUnits:["years","months","days","hours","minutes","seconds"],inline:!1,countdown:!0}},r={args:{targetDateTime:new Date(new Date().getTime()-999999999).toISOString(),selectedUnits:[],inline:!1,countdown:!1}},o={args:{targetDateTime:new Date(new Date().getTime()+1e3*10).toISOString(),selectedUnits:[],inline:!1,countdown:!0}},i={args:{targetDateTime:"2011-11-26 15:02:21+01:00",selectedUnits:["years","months","days","hours","minutes","seconds"],inline:!0,countdown:!1}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Full Date Time',
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: false,
    countdown: false,
    legendClass: 'text-gray-mid-dark'
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,u,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['years', 'months', 'days'],
    inline: false,
    countdown: false
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,w,D;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['months', 'days', 'hours'],
    inline: false,
    countdown: false
  }
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var y,T,S;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    targetDateTime: new Date(new Date().getTime() + 999999999).toISOString(),
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: false,
    countdown: true
  }
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var f,h,U;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    targetDateTime: new Date(new Date().getTime() + 1000 * 10).toISOString(),
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: false,
    countdown: true
  }
}`,...(U=(h=a.parameters)==null?void 0:h.docs)==null?void 0:U.source}}};var O,I,C;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    targetDateTime: new Date(new Date().getTime() - 999999999).toISOString(),
    selectedUnits: [],
    inline: false,
    countdown: false
  }
}`,...(C=(I=r.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var B,x,A;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    targetDateTime: new Date(new Date().getTime() + 1000 * 10).toISOString(),
    selectedUnits: [],
    inline: false,
    countdown: true
  }
}`,...(A=(x=o.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var _,k,v;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    targetDateTime: '2011-11-26 15:02:21+01:00',
    selectedUnits: ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
    inline: true,
    countdown: false
  }
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const j=["BaseStory","DateOnly","Mixed","Countdown","CountdownStop","AutoUnits","AutoUnitsCountdown","Inline"];export{r as AutoUnits,o as AutoUnitsCountdown,e as BaseStory,n as Countdown,a as CountdownStop,t as DateOnly,i as Inline,s as Mixed,j as __namedExportsOrder,b as default};
