import{h as N,e as D,f as a,j as n,l as f,w as l,x as i,y as s,F as S,B as c,n as G,m as H,E as k,o as t}from"./iframe-Cbo-gMoN.js";import{B as _}from"./BaseLink-C7mdSZaT.js";import{B as I}from"./BaseUnitToggle-Cr2TusLk.js";import{B as A}from"./BaseTimer-CVRgLFgW.js";import{I as O}from"./IconArrow-DWMJwvtB.js";import{I as P}from"./IconArrows-Bc6SjuTC.js";import{D as q}from"./DsnWidget-BxWbNGvQ.js";const W=N({name:"HomepageStats",components:{BaseLink:_,IconArrow:O,IconArrows:P,BaseUnitToggle:I,BaseTimer:A,DsnWidget:q},props:{statistics:{type:Array,required:!1},missionCount:{type:Number,required:!1},dsn:{type:Object,required:!1},asteroidWatch:{type:Object,required:!1},featuredEmbed:{type:Array,required:!1}},data(){return{autoplayAdded:!1}},computed:{dataMissionStatsBlock(){const e=this.filterBlocksByType("StatisticsMissionBlock");return e&&e.length?e[0]:null},dataGenericStatsBlock(){const e=this.filterBlocksByType("StatisticsGenericBlock");return e&&e.length?e[0]:null},hasFeaturedEmbed(){return!!(this.featuredEmbed&&this.featuredEmbed.length&&this.featuredEmbed[0].display)}},methods:{playVideo(){if(this.hasFeaturedEmbed){const e=document.getElementById("featuredEmbed");if(e){e.scrollIntoView({behavior:"smooth"});const o=e.querySelector("iframe");o&&this.autoplayAdded===!1&&(o.src+="&autoplay=1",this.autoplayAdded=!0)}}return null},filterBlocksByType(e){return this.statistics?this.statistics.filter(B=>B.blockType===e):null}}}),R={key:0,"aria-label":"Featured mission statistics",class:"HomepageStats -mt-14 relative z-20 overflow-hidden"},F={class:"MixedBleedGrid lg:pl-0 pl-4"},j={class:"ThemeVariantGray bg-gray-light text-gray-dark col-start-container col-end-container lg:py-18 lg:px-0 text-body-lg px-8 py-10 pr-0"},L={class:"gap-y-10 lg:col-end-9 grid grid-cols-12 gap-6"},V={key:0,class:"lg:col-span-2 sm:col-span-5 col-span-full"},$={key:0,class:"text-subtitle text-primary mb-4"},K={key:0,class:"text-subtitle text-primary mb-4"},X={key:2,class:"text-body-sm mb-4"},U={key:3,class:"text-stats-xl"},z={key:1,class:"lg:col-span-3 sm:col-span-6 col-span-full"},Q={key:0,class:"text-subtitle text-primary mb-4"},x={key:0,class:"text-subtitle text-primary mb-4"},J={key:2,class:"text-body-sm mb-4"},Y={key:3},Z={key:4,class:"text-stats-lg"},ee={class:"text-gray-mid-dark flex flex-wrap mt-2 text-sm"},te={class:"sm:whitespace-nowrap"},ae={key:0,class:"lg:-mb-8 can-hover:group-hover:ml-3 text-jpl-red-light text-7xl ml-0 transition-all duration-200 ease-in"},se={key:2,class:"lg:col-span-3 sm:col-span-6 col-span-full"},ne={key:0,class:"text-subtitle text-primary mb-4"},ie={key:0,class:"text-subtitle text-primary mb-4"},oe={key:2,class:"text-body-sm mb-4"},re={key:0,class:"text-stats-lg"},de={class:"text-sm font-primary"},le={class:"lg:-mb-8 can-hover:group-hover:ml-3 text-jpl-red-light text-7xl ml-0 transition-all duration-200 ease-in"};function ce(e,o,B,ue,ge,ye){const b=k("BaseLink"),T=k("BaseTimer"),v=k("IconArrow"),M=k("FetchDsnWidget"),w=k("BaseUnitToggle");return e.statistics||e.dsn||e.asteroidWatch||e.missionCount?(t(),a("section",R,[n("div",F,[n("div",j,[n("div",L,[o[2]||(o[2]=n("div",{class:"lg:block hidden"},null,-1)),e.dataMissionStatsBlock?(t(),a("div",V,[e.dataMissionStatsBlock.link?(t(),f(b,{key:0,variant:"none",target:e.dataMissionStatsBlock.linkTarget?"_blank":"_self",href:e.dataMissionStatsBlock.link,"link-class":"block"},{default:l(()=>[e.dataMissionStatsBlock.heading?(t(),a("p",$,i(e.dataMissionStatsBlock.heading),1)):s("",!0)]),_:1},8,["target","href"])):(t(),a(S,{key:1},[e.dataMissionStatsBlock.heading?(t(),a("p",K,i(e.dataMissionStatsBlock.heading),1)):s("",!0)],64)),e.dataMissionStatsBlock.title?(t(),a("p",X,i(e.dataMissionStatsBlock.title),1)):s("",!0),e.missionCount?(t(),a("p",U,i(e.missionCount),1)):s("",!0)])):s("",!0),e.dataGenericStatsBlock?(t(),a("div",z,[e.dataGenericStatsBlock.link?(t(),f(b,{key:0,variant:"none",target:e.dataGenericStatsBlock.linkTarget?"_blank":"_self",href:e.dataGenericStatsBlock.link,"link-class":"block"},{default:l(()=>[e.dataGenericStatsBlock.heading?(t(),a("p",Q,i(e.dataGenericStatsBlock.heading),1)):s("",!0)]),_:1},8,["target","href"])):(t(),a(S,{key:1},[e.dataGenericStatsBlock.heading?(t(),a("p",x,i(e.dataGenericStatsBlock.heading),1)):s("",!0)],64)),e.dataGenericStatsBlock.title?(t(),a("p",J,i(e.dataGenericStatsBlock.title),1)):s("",!0),e.dataGenericStatsBlock.dateDisplay==="countdown"||e.dataGenericStatsBlock.dateDisplay==="time_elapsed"?(t(),a("div",Y,[c(T,{"target-date-time":e.dataGenericStatsBlock.date,countdown:e.dataGenericStatsBlock.dateDisplay==="countdown"},null,8,["target-date-time","countdown"])])):e.dataGenericStatsBlock.dateDisplay==="static"?(t(),a("p",Z,i(e.$filters.displayDate(e.dataGenericStatsBlock.date)),1)):e.dataGenericStatsBlock.dateDisplay==="live"?(t(),f(H(e.hasFeaturedEmbed?"a":"div"),{key:5,href:e.hasFeaturedEmbed?"#featuredEmbed":null,class:G(["group block",{"cursor-pointer":e.hasFeaturedEmbed}]),onClick:e.playVideo},{default:l(()=>[o[1]||(o[1]=n("p",{class:"text-stats-lg flex items-center"},[n("span",{class:"relative flex w-3 h-3 mr-3"},[n("span",{class:"motion-safe:animate-ping bg-green absolute inline-flex w-full h-full rounded-full opacity-75"}),n("span",{class:"bg-green-400 relative inline-flex w-3 h-3 rounded-full"})]),n("span",null,"Watch Live")],-1)),n("p",ee,[o[0]||(o[0]=n("span",{class:"mr-1 -mb-3"},"Estimated:",-1)),n("span",te,i(e.$filters.displayDate(e.dataGenericStatsBlock.date,"DateTime"))+" UTC ",1)]),e.hasFeaturedEmbed?(t(),a("div",ae,[c(v)])):s("",!0)]),_:1},8,["href","class","onClick"])):s("",!0)])):s("",!0),c(M),e.asteroidWatch?(t(),a("div",se,[e.asteroidWatch.link?(t(),f(b,{key:0,variant:"none",target:e.asteroidWatch.linkTarget?"_blank":"_self",href:e.asteroidWatch.link,"link-class":"block"},{default:l(()=>[e.asteroidWatch.heading?(t(),a("p",ne,i(e.asteroidWatch.heading),1)):s("",!0)]),_:1},8,["target","href"])):(t(),a(S,{key:1},[e.asteroidWatch.heading?(t(),a("p",ie,i(e.asteroidWatch.heading),1)):s("",!0)],64)),e.asteroidWatch.title?(t(),a("p",oe,i(e.asteroidWatch.title),1)):s("",!0),e.asteroidWatch.asteroidApproach?(t(),a(S,{key:3},[e.asteroidWatch.asteroidApproach.date?(t(),a("p",re,i(e.$filters.displayDate(e.asteroidWatch.asteroidApproach.date)),1)):s("",!0),c(w,{"unit-pair":"MI_KM",value:parseFloat(e.asteroidWatch.asteroidApproach.distanceMiles),"second-value":parseFloat(e.asteroidWatch.asteroidApproach.distanceKilometers),"value-system":"imperial",inline:"",class:"text-gray-mid-dark mt-2"},{default:l(C=>[n("span",de," Proximity "+i(C.formattedValue),1)]),_:1},8,["value","second-value"]),c(b,{"link-class":"block",variant:"none","aria-label":"View the next five approaches",to:"/asteroid-watch/next-five-approaches"},{default:l(()=>[n("div",le,[c(v)])]),_:1})],64)):s("",!0)])):s("",!0)])]),o[3]||(o[3]=n("div",{class:"bg-gray-light col-start-container-end col-end-bleed sm:block hidden"},null,-1))])])):s("",!0)}const E=D(W,[["render",ce]]);W.__docgenInfo={exportName:"default",displayName:"HomepageStats",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"statistics",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"missionCount",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"dsn",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"asteroidWatch",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"featuredEmbed",global:!1,description:"",tags:[],required:!1,type:"HomePageEmbedBlock",declarations:[],schema:{kind:"array",type:"HomePageEmbedBlock"}}],events:[],slots:[],exposed:[{name:"statistics",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"missionCount",type:"number",description:"",declarations:[],schema:"number"},{name:"dsn",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"asteroidWatch",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"featuredEmbed",type:"HomePageEmbedBlock",description:"",declarations:[],schema:{kind:"array",type:"HomePageEmbedBlock"}},{name:"autoplayAdded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"dataMissionStatsBlock",type:"blockObject",description:"",declarations:[],schema:{kind:"object",type:"blockObject"}},{name:"dataGenericStatsBlock",type:"blockObject",description:"",declarations:[],schema:{kind:"object",type:"blockObject"}},{name:"hasFeaturedEmbed",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/components/HomepageStats/HomepageStats.vue"};const pe={title:"Components/WWW/Homepage/HomepageStats",component:E,excludeStories:/.*Data$/},d={asteroidWatchWidget:{asteroidApproach:{date:"2020-12-21",distanceKilometers:415e4,distanceMiles:258e4,externalLink:"https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2017%20XQ60;orb=1"},heading:"ASTEROID WATCH",title:"Next close approach"},dsnWidget:{heading:"DEEP SPACE NETWORK",location:"Goldstone",spacecraftName:"MMS 1",transmitStatus:"both",transmitTitle:"Currently transmitting"},statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-03T12:55:00-08:00",dateDisplay:"countdown",heading:"NEXT LANDING",title:"Custom title"}],statisticsMissionCount:43,featuredEmbed:[]},h=e=>({setup(){return{args:e}},components:{HomepageStats:E},template:`<HomepageStats
    :statistics="args.statistics"
    :mission-count="args.statisticsMissionCount"
    :dsn="args.dsnWidget"
    :asteroid-watch="args.asteroidWatchWidget"
    :featured-embed="args.featuredEmbed"
  />`}),r=h.bind({});r.storyName="HomepageStats";r.args=d;const p=h.bind({});p.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"static",heading:"NEXT LANDING",title:"Mars Perseverance"}]};const m=h.bind({});m.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"time_elapsed",heading:"TIME ON MARS",title:"Mars Perseverance"}]};const u=h.bind({});u.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"live",heading:"NEXT LANDING",title:"Mars Perseverance"}],featuredEmbed:[{heading:"Watch Live",display:!0}]};const g=h.bind({});g.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"live",heading:"NEXT LANDING",title:"Mars Perseverance"}]};const y=h.bind({});y.args={...d,dsnWidget:{heading:"DEEP SPACE NETWORK",location:"",spacecraftName:null,transmitStatus:"",transmitTitle:""}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    return {
      args
    };
  },
  components: {
    HomepageStats
  },
  template: \`<HomepageStats
    :statistics="args.statistics"
    :mission-count="args.statisticsMissionCount"
    :dsn="args.dsnWidget"
    :asteroid-watch="args.asteroidWatchWidget"
    :featured-embed="args.featuredEmbed"
  />\`
})`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    return {
      args
    };
  },
  components: {
    HomepageStats
  },
  template: \`<HomepageStats
    :statistics="args.statistics"
    :mission-count="args.statisticsMissionCount"
    :dsn="args.dsnWidget"
    :asteroid-watch="args.asteroidWatchWidget"
    :featured-embed="args.featuredEmbed"
  />\`
})`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    return {
      args
    };
  },
  components: {
    HomepageStats
  },
  template: \`<HomepageStats
    :statistics="args.statistics"
    :mission-count="args.statisticsMissionCount"
    :dsn="args.dsnWidget"
    :asteroid-watch="args.asteroidWatchWidget"
    :featured-embed="args.featuredEmbed"
  />\`
})`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    return {
      args
    };
  },
  components: {
    HomepageStats
  },
  template: \`<HomepageStats
    :statistics="args.statistics"
    :mission-count="args.statisticsMissionCount"
    :dsn="args.dsnWidget"
    :asteroid-watch="args.asteroidWatchWidget"
    :featured-embed="args.featuredEmbed"
  />\`
})`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    return {
      args
    };
  },
  components: {
    HomepageStats
  },
  template: \`<HomepageStats
    :statistics="args.statistics"
    :mission-count="args.statisticsMissionCount"
    :dsn="args.dsnWidget"
    :asteroid-watch="args.asteroidWatchWidget"
    :featured-embed="args.featuredEmbed"
  />\`
})`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    return {
      args
    };
  },
  components: {
    HomepageStats
  },
  template: \`<HomepageStats
    :statistics="args.statistics"
    :mission-count="args.statisticsMissionCount"
    :dsn="args.dsnWidget"
    :asteroid-watch="args.asteroidWatchWidget"
    :featured-embed="args.featuredEmbed"
  />\`
})`,...y.parameters?.docs?.source}}};const me=["HomepageStatsData","BaseStory","StaticDate","TimeElapsed","WatchLive","WatchLiveNoVideo","NoDsn"],We=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:r,HomepageStatsData:d,NoDsn:y,StaticDate:p,TimeElapsed:m,WatchLive:u,WatchLiveNoVideo:g,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{E as H,d as a,We as b};
