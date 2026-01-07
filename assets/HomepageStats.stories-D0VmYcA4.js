import{a as U,_ as z,s as k,o as t,g as a,h as n,k as f,l,t as i,p as s,F as S,y as c,n as Q,m as J}from"./iframe-bnomvYc_.js";import{B as Y}from"./BaseLink--QKwlp_B.js";import{B as Z}from"./BaseUnitToggle-CyMQWOPh.js";import{B as x}from"./BaseTimer-Ddb_6bjf.js";import{I as ee}from"./IconArrow-eNfd0Z2A.js";import{I as te}from"./IconArrows-DWXCkZKm.js";import{D as ae}from"./DsnWidget-_Tc9PFL0.js";const L=U({name:"HomepageStats",components:{BaseLink:Y,IconArrow:ee,IconArrows:te,BaseUnitToggle:Z,BaseTimer:x,DsnWidget:ae},props:{statistics:{type:Array,required:!1},missionCount:{type:Number,required:!1},dsn:{type:Object,required:!1},asteroidWatch:{type:Object,required:!1},featuredEmbed:{type:Array,required:!1}},data(){return{autoplayAdded:!1}},computed:{dataMissionStatsBlock(){const e=this.filterBlocksByType("StatisticsMissionBlock");return e&&e.length?e[0]:null},dataGenericStatsBlock(){const e=this.filterBlocksByType("StatisticsGenericBlock");return e&&e.length?e[0]:null},hasFeaturedEmbed(){return!!(this.featuredEmbed&&this.featuredEmbed.length&&this.featuredEmbed[0].display)}},methods:{playVideo(){if(this.hasFeaturedEmbed){const e=document.getElementById("featuredEmbed");if(e){e.scrollIntoView({behavior:"smooth"});const o=e.querySelector("iframe");o&&this.autoplayAdded===!1&&(o.src+="&autoplay=1",this.autoplayAdded=!0)}}return null},filterBlocksByType(e){return this.statistics?this.statistics.filter(B=>B.blockType===e):null}}}),se={key:0,"aria-label":"Featured mission statistics",class:"HomepageStats -mt-14 relative z-20 overflow-hidden"},ne={class:"MixedBleedGrid lg:pl-0 pl-4"},ie={class:"ThemeVariantGray bg-gray-light text-gray-dark col-start-container col-end-container lg:py-18 lg:px-0 text-body-lg px-8 py-10 pr-0"},oe={class:"gap-y-10 lg:col-end-9 grid grid-cols-12 gap-6"},re={key:0,class:"lg:col-span-2 sm:col-span-5 col-span-full"},de={key:0,class:"text-subtitle text-primary mb-4"},le={key:0,class:"text-subtitle text-primary mb-4"},ce={key:2,class:"text-body-sm mb-4"},pe={key:3,class:"text-stats-xl"},me={key:1,class:"lg:col-span-3 sm:col-span-6 col-span-full"},ue={key:0,class:"text-subtitle text-primary mb-4"},ge={key:0,class:"text-subtitle text-primary mb-4"},ye={key:2,class:"text-body-sm mb-4"},he={key:3},ke={key:4,class:"text-stats-lg"},be={class:"text-gray-mid-dark flex flex-wrap mt-2 text-sm"},fe={class:"sm:whitespace-nowrap"},Se={key:0,class:"lg:-mb-8 can-hover:group-hover:ml-3 text-jpl-red-light text-7xl ml-0 transition-all duration-200 ease-in"},Be={key:2,class:"lg:col-span-3 sm:col-span-6 col-span-full"},ve={key:0,class:"text-subtitle text-primary mb-4"},We={key:0,class:"text-subtitle text-primary mb-4"},Ee={key:2,class:"text-body-sm mb-4"},Te={key:0,class:"text-stats-lg"},Me={class:"text-sm font-primary"},Ce={class:"lg:-mb-8 can-hover:group-hover:ml-3 text-jpl-red-light text-7xl ml-0 transition-all duration-200 ease-in"};function we(e,o,B,Ge,He,_e){const b=k("BaseLink"),V=k("BaseTimer"),v=k("IconArrow"),$=k("FetchDsnWidget"),K=k("BaseUnitToggle");return e.statistics||e.dsn||e.asteroidWatch||e.missionCount?(t(),a("section",se,[n("div",ne,[n("div",ie,[n("div",oe,[o[2]||(o[2]=n("div",{class:"lg:block hidden"},null,-1)),e.dataMissionStatsBlock?(t(),a("div",re,[e.dataMissionStatsBlock.link?(t(),f(b,{key:0,variant:"none",target:e.dataMissionStatsBlock.linkTarget?"_blank":"_self",href:e.dataMissionStatsBlock.link,"link-class":"block"},{default:l(()=>[e.dataMissionStatsBlock.heading?(t(),a("p",de,i(e.dataMissionStatsBlock.heading),1)):s("",!0)]),_:1},8,["target","href"])):(t(),a(S,{key:1},[e.dataMissionStatsBlock.heading?(t(),a("p",le,i(e.dataMissionStatsBlock.heading),1)):s("",!0)],64)),e.dataMissionStatsBlock.title?(t(),a("p",ce,i(e.dataMissionStatsBlock.title),1)):s("",!0),e.missionCount?(t(),a("p",pe,i(e.missionCount),1)):s("",!0)])):s("",!0),e.dataGenericStatsBlock?(t(),a("div",me,[e.dataGenericStatsBlock.link?(t(),f(b,{key:0,variant:"none",target:e.dataGenericStatsBlock.linkTarget?"_blank":"_self",href:e.dataGenericStatsBlock.link,"link-class":"block"},{default:l(()=>[e.dataGenericStatsBlock.heading?(t(),a("p",ue,i(e.dataGenericStatsBlock.heading),1)):s("",!0)]),_:1},8,["target","href"])):(t(),a(S,{key:1},[e.dataGenericStatsBlock.heading?(t(),a("p",ge,i(e.dataGenericStatsBlock.heading),1)):s("",!0)],64)),e.dataGenericStatsBlock.title?(t(),a("p",ye,i(e.dataGenericStatsBlock.title),1)):s("",!0),e.dataGenericStatsBlock.dateDisplay==="countdown"||e.dataGenericStatsBlock.dateDisplay==="time_elapsed"?(t(),a("div",he,[c(V,{"target-date-time":e.dataGenericStatsBlock.date,countdown:e.dataGenericStatsBlock.dateDisplay==="countdown"},null,8,["target-date-time","countdown"])])):e.dataGenericStatsBlock.dateDisplay==="static"?(t(),a("p",ke,i(e.$filters.displayDate(e.dataGenericStatsBlock.date)),1)):e.dataGenericStatsBlock.dateDisplay==="live"?(t(),f(J(e.hasFeaturedEmbed?"a":"div"),{key:5,href:e.hasFeaturedEmbed?"#featuredEmbed":null,class:Q(["group block",{"cursor-pointer":e.hasFeaturedEmbed}]),onClick:e.playVideo},{default:l(()=>[o[1]||(o[1]=n("p",{class:"text-stats-lg flex items-center"},[n("span",{class:"relative flex w-3 h-3 mr-3"},[n("span",{class:"motion-safe:animate-ping bg-green absolute inline-flex w-full h-full rounded-full opacity-75"}),n("span",{class:"bg-green relative inline-flex w-3 h-3 rounded-full"})]),n("span",null,"Watch Live")],-1)),n("p",be,[o[0]||(o[0]=n("span",{class:"mr-1 -mb-3"},"Estimated:",-1)),n("span",fe,i(e.$filters.displayDate(e.dataGenericStatsBlock.date,"DateTime"))+" UTC ",1)]),e.hasFeaturedEmbed?(t(),a("div",Se,[c(v)])):s("",!0)]),_:1},8,["href","class","onClick"])):s("",!0)])):s("",!0),c($),e.asteroidWatch?(t(),a("div",Be,[e.asteroidWatch.link?(t(),f(b,{key:0,variant:"none",target:e.asteroidWatch.linkTarget?"_blank":"_self",href:e.asteroidWatch.link,"link-class":"block"},{default:l(()=>[e.asteroidWatch.heading?(t(),a("p",ve,i(e.asteroidWatch.heading),1)):s("",!0)]),_:1},8,["target","href"])):(t(),a(S,{key:1},[e.asteroidWatch.heading?(t(),a("p",We,i(e.asteroidWatch.heading),1)):s("",!0)],64)),e.asteroidWatch.title?(t(),a("p",Ee,i(e.asteroidWatch.title),1)):s("",!0),e.asteroidWatch.asteroidApproach?(t(),a(S,{key:3},[e.asteroidWatch.asteroidApproach.date?(t(),a("p",Te,i(e.$filters.displayDate(e.asteroidWatch.asteroidApproach.date)),1)):s("",!0),c(K,{"unit-pair":"MI_KM",value:parseFloat(e.asteroidWatch.asteroidApproach.distanceMiles),"second-value":parseFloat(e.asteroidWatch.asteroidApproach.distanceKilometers),"value-system":"imperial",inline:"",class:"text-gray-mid-dark mt-2"},{default:l(X=>[n("span",Me," Proximity "+i(X.formattedValue),1)]),_:1},8,["value","second-value"]),c(b,{"link-class":"block",variant:"none","aria-label":"View the next five approaches",to:"/asteroid-watch/next-five-approaches"},{default:l(()=>[n("div",Ce,[c(v)])]),_:1})],64)):s("",!0)])):s("",!0)])]),o[3]||(o[3]=n("div",{class:"bg-gray-light col-start-container-end col-end-bleed sm:block hidden"},null,-1))])])):s("",!0)}const j=z(L,[["render",we]]);L.__docgenInfo={exportName:"default",displayName:"HomepageStats",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"statistics",global:!1,description:"",tags:[],required:!1,type:"unknown[]",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"missionCount",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"dsn",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"asteroidWatch",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",declarations:[],schema:"Record<string, any>"},{name:"featuredEmbed",global:!1,description:"",tags:[],required:!1,type:"HomePageEmbedBlock",declarations:[],schema:{kind:"array",type:"HomePageEmbedBlock"}}],events:[],slots:[],exposed:[{name:"statistics",type:"unknown[]",description:"",declarations:[],schema:{kind:"array",type:"unknown[]"}},{name:"missionCount",type:"number",description:"",declarations:[],schema:"number"},{name:"dsn",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"asteroidWatch",type:"Record<string, any>",description:"",declarations:[],schema:"Record<string, any>"},{name:"featuredEmbed",type:"HomePageEmbedBlock",description:"",declarations:[],schema:{kind:"array",type:"HomePageEmbedBlock"}},{name:"autoplayAdded",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"dataMissionStatsBlock",type:"blockObject",description:"",declarations:[],schema:{kind:"object",type:"blockObject"}},{name:"dataGenericStatsBlock",type:"blockObject",description:"",declarations:[],schema:{kind:"object",type:"blockObject"}},{name:"hasFeaturedEmbed",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/components/HomepageStats/HomepageStats.vue"};const Ne={title:"Components/WWW/Homepage/HomepageStats",component:j,excludeStories:/.*Data$/},d={asteroidWatchWidget:{asteroidApproach:{date:"2020-12-21",distanceKilometers:415e4,distanceMiles:258e4,externalLink:"https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2017%20XQ60;orb=1"},heading:"ASTEROID WATCH",title:"Next close approach"},dsnWidget:{heading:"DEEP SPACE NETWORK",location:"Goldstone",spacecraftName:"MMS 1",transmitStatus:"both",transmitTitle:"Currently transmitting"},statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-03T12:55:00-08:00",dateDisplay:"countdown",heading:"NEXT LANDING",title:"Custom title"}],statisticsMissionCount:43,featuredEmbed:[]},h=e=>({setup(){return{args:e}},components:{HomepageStats:j},template:`<HomepageStats
    :statistics="args.statistics"
    :mission-count="args.statisticsMissionCount"
    :dsn="args.dsnWidget"
    :asteroid-watch="args.asteroidWatchWidget"
    :featured-embed="args.featuredEmbed"
  />`}),r=h.bind({});r.storyName="HomepageStats";r.args=d;const p=h.bind({});p.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"static",heading:"NEXT LANDING",title:"Mars Perseverance"}]};const m=h.bind({});m.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"time_elapsed",heading:"TIME ON MARS",title:"Mars Perseverance"}]};const u=h.bind({});u.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"live",heading:"NEXT LANDING",title:"Mars Perseverance"}],featuredEmbed:[{heading:"Watch Live",display:!0}]};const g=h.bind({});g.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"live",heading:"NEXT LANDING",title:"Mars Perseverance"}]};const y=h.bind({});y.args={...d,dsnWidget:{heading:"DEEP SPACE NETWORK",location:"",spacecraftName:null,transmitStatus:"",transmitTitle:""}};var W,E,T;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
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
})`,...(T=(E=r.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var M,C,w;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
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
})`,...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var N,D,G;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
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
})`,...(G=(D=m.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var H,_,I;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
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
})`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var A,O,P;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
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
})`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var q,R,F;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
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
})`,...(F=(R=y.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const De=["HomepageStatsData","BaseStory","StaticDate","TimeElapsed","WatchLive","WatchLiveNoVideo","NoDsn"],Le=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:r,HomepageStatsData:d,NoDsn:y,StaticDate:p,TimeElapsed:m,WatchLive:u,WatchLiveNoVideo:g,__namedExportsOrder:De,default:Ne},Symbol.toStringTag,{value:"Module"}));export{j as H,d as a,Le as b};
