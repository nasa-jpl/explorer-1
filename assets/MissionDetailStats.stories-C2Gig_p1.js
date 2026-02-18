import{M as i}from"./MissionDetailStats-CMV_12uI.js";import{M as o}from"./MissionDetailStatsMini-BMBsNYUU.js";import{M as r}from"./MissionDetailStatsMicro-DYPvMs7s.js";import"./iframe-UYtirdi4.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseUnitToggle-jvOX3jTo.js";import"./BaseTimer-V6S7DYWs.js";const u={title:"Components/WWW/MissionDetail/MissionDetailStats",component:i,subcomponents:{MissionDetailStatsMini:o,MissionDetailStatsMicro:r},decorators:[()=>({template:'<div id="storyRoot" class="mt-20"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},s={showClock:!0,showDistance:!0,clockType:"countdown",startDateTime:"2021-02-18T20:55:00+00:00",distanceType:"earth",distanceValue:4986444,distanceApiUrls:"",displayDate:"Oct. 1, 2020",missionTypes:[{missionType:"Landers/Rovers"}],missionTargets:[{target:"Mars"}],status:"future"},e={name:"Full",args:s,render:t=>({setup(){return{args:t}},components:{MissionDetailStats:i},template:'<MissionDetailStats v-bind="args" />'})},a={args:{showClock:s.showClock,showDistance:s.showDistance,clockType:s.clockType,startDateTime:"2021-02-18T20:55:00+00:00",distanceType:s.distanceType,distanceValue:s.distanceValue},render:t=>({setup(){return{args:t}},components:{MissionDetailStatsMini:o},template:'<MissionDetailStatsMini v-bind="args" />'})},n={args:{showClock:s.showClock,clockType:s.clockType,startDateTime:"2021-02-18T20:55:00+00:00"},render:t=>({setup(){return{args:t}},components:{MissionDetailStatsMicro:r},template:'<MissionDetailStatsMicro v-bind="args" />'})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Full',
  args: MissionDetailStatsData,
  render: args => ({
    setup() {
      return {
        args
      };
    },
    components: {
      MissionDetailStats
    },
    template: '<MissionDetailStats v-bind="args" />'
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showClock: MissionDetailStatsData.showClock,
    showDistance: MissionDetailStatsData.showDistance,
    clockType: MissionDetailStatsData.clockType,
    startDateTime: '2021-02-18T20:55:00+00:00',
    distanceType: MissionDetailStatsData.distanceType,
    distanceValue: MissionDetailStatsData.distanceValue
  },
  render: args => ({
    setup() {
      return {
        args
      };
    },
    components: {
      MissionDetailStatsMini
    },
    template: '<MissionDetailStatsMini v-bind="args" />'
  })
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    showClock: MissionDetailStatsData.showClock,
    clockType: MissionDetailStatsData.clockType,
    startDateTime: '2021-02-18T20:55:00+00:00'
  },
  render: args => ({
    setup() {
      return {
        args
      };
    },
    components: {
      MissionDetailStatsMicro
    },
    template: '<MissionDetailStatsMicro v-bind="args" />'
  })
}`,...n.parameters?.docs?.source}}};const S=["MissionDetailStatsData","BaseStory","Mini","Micro"];export{e as BaseStory,n as Micro,a as Mini,s as MissionDetailStatsData,S as __namedExportsOrder,u as default};
