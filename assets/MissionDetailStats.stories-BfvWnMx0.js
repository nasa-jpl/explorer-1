import{M}from"./MissionDetailStats-B5doNScB.js";import{M as u}from"./MissionDetailStatsMini-CznvAKyX.js";import{M as S}from"./MissionDetailStatsMicro-Bgg5AbTv.js";import"./iframe-CTVWvntx.js";import"./preload-helper-D6kgxu3v.js";import"./dayjs.min-BuRsCg53.js";import"./BaseUnitToggle-CWOeK_BZ.js";import"./BaseTimer-DTUY-VO1.js";const b={title:"Components/WWW/MissionDetail/MissionDetailStats",component:M,subcomponents:{MissionDetailStatsMini:u,MissionDetailStatsMicro:S},decorators:[()=>({template:'<div id="storyRoot" class="mt-20"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*(Data)$/},s={showClock:!0,showDistance:!0,clockType:"countdown",startDateTime:"2021-02-18T20:55:00+00:00",distanceType:"earth",distanceValue:4986444,distanceApiUrls:"",displayDate:"Oct. 1, 2020",missionTypes:[{missionType:"Landers/Rovers"}],missionTargets:[{target:"Mars"}],status:"future"},e={name:"Full",args:s,render:t=>({setup(){return{args:t}},components:{MissionDetailStats:M},template:'<MissionDetailStats v-bind="args" />'})},a={args:{showClock:s.showClock,showDistance:s.showDistance,clockType:s.clockType,startDateTime:"2021-02-18T20:55:00+00:00",distanceType:s.distanceType,distanceValue:s.distanceValue},render:t=>({setup(){return{args:t}},components:{MissionDetailStatsMini:u},template:'<MissionDetailStatsMini v-bind="args" />'})},n={args:{showClock:s.showClock,clockType:s.clockType,startDateTime:"2021-02-18T20:55:00+00:00"},render:t=>({setup(){return{args:t}},components:{MissionDetailStatsMicro:S},template:'<MissionDetailStatsMicro v-bind="args" />'})};var i,o,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,D,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(D=n.parameters)==null?void 0:D.docs)==null?void 0:d.source}}};const f=["MissionDetailStatsData","BaseStory","Mini","Micro"];export{e as BaseStory,n as Micro,a as Mini,s as MissionDetailStatsData,f as __namedExportsOrder,b as default};
