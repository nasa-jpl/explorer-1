import{R as p,a as c}from"./RoboticsDetailStatsMini-11Tv2usi.js";import"./iframe-DI0ok8AA.js";import"./preload-helper-D6kgxu3v.js";import"./BaseUnitToggle-DTGAhm5-.js";const d={title:"Components/WWW/RoboticsDetail/RoboticsDetailStats",component:p,subcomponents:{RoboticsDetailStatsMini:c},decorators:[()=>({template:'<div id="storyRoot" class="mt-20"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},t={mass:123,height:.24,speed:.5,status:"In Development (since 2011)",animalAnalogName:"Lemur",animalAnalogIcon:{webp:{url:"https://picsum.photos/320/320"},src:{url:"https://picsum.photos/320/320"}},robotDestinations:[{destination:"Mars"},{destination:"Moon"},{destination:"Europa"}],alternativeStats:[{metricLabel:"Legs",metricUnit:"unitless",metricValue:"6"},{metricLabel:"Ability",metricUnit:"unitless",metricValue:"Climbing"},{metricLabel:"Wingspan",metricUnit:"meters",metricValue:"8"}]},a={args:{mass:t.mass,height:t.height,speed:t.speed,status:t.status,animalAnalogName:t.animalAnalogName,animalAnalogIcon:t.animalAnalogIcon,robotDestinations:t.robotDestinations,alternativeStats:t.alternativeStats}},s={args:{mass:t.mass,height:t.height,speed:t.speed,alternativeStats:t.alternativeStats},render:m=>({setup(){return{args:m}},components:{RoboticsDetailStatsMini:c},template:'<RoboticsDetailStatsMini v-bind="args" />'})};var e,i,o;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var n,r,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(r=s.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const u=["RoboticsDetailStatsData","BaseStory","Mini"];export{a as BaseStory,s as Mini,t as RoboticsDetailStatsData,u as __namedExportsOrder,d as default};
