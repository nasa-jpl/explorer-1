import{R as e,a as o}from"./RoboticsDetailStatsMini-Cglo5mKV.js";import"./iframe-Cbo-gMoN.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseUnitToggle-Cr2TusLk.js";const m={title:"Components/WWW/RoboticsDetail/RoboticsDetailStats",component:o,subcomponents:{RoboticsDetailStatsMini:e},decorators:[()=>({template:'<div id="storyRoot" class="mt-20"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},t={mass:123,height:.24,speed:.5,status:"In Development (since 2011)",animalAnalogName:"Lemur",animalAnalogIcon:{webp:{url:"https://picsum.photos/320/320"},src:{url:"https://picsum.photos/320/320"}},robotDestinations:[{destination:"Mars"},{destination:"Moon"},{destination:"Europa"}],alternativeStats:[{metricLabel:"Legs",metricUnit:"unitless",metricValue:"6"},{metricLabel:"Ability",metricUnit:"unitless",metricValue:"Climbing"},{metricLabel:"Wingspan",metricUnit:"meters",metricValue:"8"}]},a={args:{mass:t.mass,height:t.height,speed:t.speed,status:t.status,animalAnalogName:t.animalAnalogName,animalAnalogIcon:t.animalAnalogIcon,robotDestinations:t.robotDestinations,alternativeStats:t.alternativeStats}},s={args:{mass:t.mass,height:t.height,speed:t.speed,alternativeStats:t.alternativeStats},render:i=>({setup(){return{args:i}},components:{RoboticsDetailStatsMini:e},template:'<RoboticsDetailStatsMini v-bind="args" />'})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    mass: RoboticsDetailStatsData.mass,
    height: RoboticsDetailStatsData.height,
    speed: RoboticsDetailStatsData.speed,
    status: RoboticsDetailStatsData.status,
    animalAnalogName: RoboticsDetailStatsData.animalAnalogName,
    animalAnalogIcon: RoboticsDetailStatsData.animalAnalogIcon,
    robotDestinations: RoboticsDetailStatsData.robotDestinations,
    alternativeStats: RoboticsDetailStatsData.alternativeStats
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    mass: RoboticsDetailStatsData.mass,
    height: RoboticsDetailStatsData.height,
    speed: RoboticsDetailStatsData.speed,
    alternativeStats: RoboticsDetailStatsData.alternativeStats
  },
  render: args => ({
    setup() {
      return {
        args
      };
    },
    components: {
      RoboticsDetailStatsMini
    },
    template: '<RoboticsDetailStatsMini v-bind="args" />'
  })
}`,...s.parameters?.docs?.source}}};const p=["RoboticsDetailStatsData","BaseStory","Mini"];export{a as BaseStory,s as Mini,t as RoboticsDetailStatsData,p as __namedExportsOrder,m as default};
