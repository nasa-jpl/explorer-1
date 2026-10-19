import{j as T,f as C,E as h,o as t,g as a,k as o,p as f,w as l,A as n,B as s,I as S,F as c,n as w,q as D}from"./iframe-n3lhZlRB.js";import{B as G}from"./BaseLink-CjNxd9gr.js";import{B as _}from"./BaseUnitToggle-vBCN6EzS.js";import{B as I}from"./BaseTimer-CDJSLNY-.js";import{I as R}from"./IconArrow-w7Lj_fNh.js";import{I as A}from"./IconArrows-CbatOdfZ.js";import{D as q}from"./DsnWidget-DJzEVQt0.js";const N=T({name:"HomepageStats",components:{BaseLink:G,IconArrow:R,IconArrows:A,BaseUnitToggle:_,BaseTimer:I,DsnWidget:q},props:{statistics:{type:Array,required:!1},missionCount:{type:Number,required:!1},dsn:{type:Object,required:!1},asteroidWatch:{type:Object,required:!1},featuredEmbed:{type:Array,required:!1}},data(){return{autoplayAdded:!1}},computed:{dataMissionStatsBlock(){const e=this.filterBlocksByType("StatisticsMissionBlock");return e&&e.length?e[0]:null},dataGenericStatsBlock(){const e=this.filterBlocksByType("StatisticsGenericBlock");return e&&e.length?e[0]:null},hasFeaturedEmbed(){return!!(this.featuredEmbed&&this.featuredEmbed.length&&this.featuredEmbed[0].display)}},methods:{playVideo(){if(this.hasFeaturedEmbed){const e=document.getElementById("featuredEmbed");if(e){e.scrollIntoView({behavior:"smooth"});const i=e.querySelector("iframe");i&&this.autoplayAdded===!1&&(i.src+="&autoplay=1",this.autoplayAdded=!0)}}return null},filterBlocksByType(e){return this.statistics?this.statistics.filter(v=>v.blockType===e):null}}}),O={key:0,"aria-label":"Featured mission statistics",class:"HomepageStats -mt-14 relative z-20 overflow-hidden"},P={class:"MixedBleedGrid lg:pl-0 pl-4"},U={class:"ThemeVariantGray bg-gray-light text-gray-dark col-start-container col-end-container lg:py-18 lg:px-0 text-body-lg px-8 py-10 pr-0"},j={class:"gap-y-10 lg:col-end-9 grid grid-cols-12 gap-6"},F={key:0,class:"lg:col-span-2 sm:col-span-5 col-span-full"},L={key:0,class:"text-subtitle text-primary mb-4"},$={key:0,class:"text-subtitle text-primary mb-4"},K={key:2,class:"text-body-sm mb-4"},X={key:3,class:"text-stats-xl"},z={key:1,class:"lg:col-span-3 sm:col-span-6 col-span-full"},Q={key:0,class:"text-subtitle text-primary mb-4"},J={key:0,class:"text-subtitle text-primary mb-4"},Y={key:2,class:"text-body-sm mb-4"},Z={key:3},x={key:4,class:"text-stats-lg"},ee={class:"text-gray-mid-dark flex flex-wrap mt-2 text-sm"},te={class:"sm:whitespace-nowrap"},ae={key:0,class:"lg:-mb-8 can-hover:group-hover:ml-3 text-jpl-red-light text-7xl ml-0 transition-all duration-200 ease-in"},se={key:2,class:"lg:col-span-3 sm:col-span-6 col-span-full"},oe={key:0,class:"text-subtitle text-primary mb-4"},ne={key:0,class:"text-subtitle text-primary mb-4"},ie={key:2,class:"text-body-sm mb-4"},re={key:0,class:"text-stats-lg"},de={class:"text-sm font-primary"},le={class:"lg:-mb-8 can-hover:group-hover:ml-3 text-jpl-red-light text-7xl ml-0 transition-all duration-200 ease-in"};function ce(e,i,v,ue,ge,ye){const b=h("BaseLink"),H=h("BaseTimer"),B=h("IconArrow"),V=h("FetchDsnWidget"),W=h("BaseUnitToggle");return e.statistics||e.dsn||e.asteroidWatch||e.missionCount?(t(),a("section",O,[o("div",P,[o("div",U,[o("div",j,[i[2]||(i[2]=o("div",{class:"lg:block hidden"},null,-1)),e.dataMissionStatsBlock?(t(),a("div",F,[e.dataMissionStatsBlock.link?(t(),f(b,{key:0,variant:"none",target:e.dataMissionStatsBlock.linkTarget?"_blank":"_self",href:e.dataMissionStatsBlock.link,"link-class":"block"},{default:l(()=>[e.dataMissionStatsBlock.heading?(t(),a("p",L,n(e.dataMissionStatsBlock.heading),1)):s("",!0)]),_:1},8,["target","href"])):(t(),a(S,{key:1},[e.dataMissionStatsBlock.heading?(t(),a("p",$,n(e.dataMissionStatsBlock.heading),1)):s("",!0)],64)),e.dataMissionStatsBlock.title?(t(),a("p",K,n(e.dataMissionStatsBlock.title),1)):s("",!0),e.missionCount?(t(),a("p",X,n(e.missionCount),1)):s("",!0)])):s("",!0),e.dataGenericStatsBlock?(t(),a("div",z,[e.dataGenericStatsBlock.link?(t(),f(b,{key:0,variant:"none",target:e.dataGenericStatsBlock.linkTarget?"_blank":"_self",href:e.dataGenericStatsBlock.link,"link-class":"block"},{default:l(()=>[e.dataGenericStatsBlock.heading?(t(),a("p",Q,n(e.dataGenericStatsBlock.heading),1)):s("",!0)]),_:1},8,["target","href"])):(t(),a(S,{key:1},[e.dataGenericStatsBlock.heading?(t(),a("p",J,n(e.dataGenericStatsBlock.heading),1)):s("",!0)],64)),e.dataGenericStatsBlock.title?(t(),a("p",Y,n(e.dataGenericStatsBlock.title),1)):s("",!0),e.dataGenericStatsBlock.dateDisplay==="countdown"||e.dataGenericStatsBlock.dateDisplay==="time_elapsed"?(t(),a("div",Z,[c(H,{"target-date-time":e.dataGenericStatsBlock.date,countdown:e.dataGenericStatsBlock.dateDisplay==="countdown"},null,8,["target-date-time","countdown"])])):e.dataGenericStatsBlock.dateDisplay==="static"?(t(),a("p",x,n(e.$filters.displayDate(e.dataGenericStatsBlock.date)),1)):e.dataGenericStatsBlock.dateDisplay==="live"?(t(),f(D(e.hasFeaturedEmbed?"a":"div"),{key:5,href:e.hasFeaturedEmbed?"#featuredEmbed":null,class:w(["group block",{"cursor-pointer":e.hasFeaturedEmbed}]),onClick:e.playVideo},{default:l(()=>[i[1]||(i[1]=o("p",{class:"text-stats-lg flex items-center"},[o("span",{class:"relative flex w-3 h-3 mr-3"},[o("span",{class:"motion-safe:animate-ping bg-green absolute inline-flex w-full h-full rounded-full opacity-75"}),o("span",{class:"bg-green-400 relative inline-flex w-3 h-3 rounded-full"})]),o("span",null,"Watch Live")],-1)),o("p",ee,[i[0]||(i[0]=o("span",{class:"mr-1 -mb-3"},"Estimated:",-1)),o("span",te,n(e.$filters.displayDate(e.dataGenericStatsBlock.date,"DateTime"))+" UTC ",1)]),e.hasFeaturedEmbed?(t(),a("div",ae,[c(B)])):s("",!0)]),_:1},8,["href","class","onClick"])):s("",!0)])):s("",!0),c(V),e.asteroidWatch?(t(),a("div",se,[e.asteroidWatch.link?(t(),f(b,{key:0,variant:"none",target:e.asteroidWatch.linkTarget?"_blank":"_self",href:e.asteroidWatch.link,"link-class":"block"},{default:l(()=>[e.asteroidWatch.heading?(t(),a("p",oe,n(e.asteroidWatch.heading),1)):s("",!0)]),_:1},8,["target","href"])):(t(),a(S,{key:1},[e.asteroidWatch.heading?(t(),a("p",ne,n(e.asteroidWatch.heading),1)):s("",!0)],64)),e.asteroidWatch.title?(t(),a("p",ie,n(e.asteroidWatch.title),1)):s("",!0),e.asteroidWatch.asteroidApproach?(t(),a(S,{key:3},[e.asteroidWatch.asteroidApproach.date?(t(),a("p",re,n(e.$filters.displayDate(e.asteroidWatch.asteroidApproach.date)),1)):s("",!0),c(W,{"unit-pair":"MI_KM",value:parseFloat(e.asteroidWatch.asteroidApproach.distanceMiles),"second-value":parseFloat(e.asteroidWatch.asteroidApproach.distanceKilometers),"value-system":"imperial",inline:"",class:"text-gray-mid-dark mt-2"},{default:l(E=>[o("span",de," Proximity "+n(E.formattedValue),1)]),_:1},8,["value","second-value"]),c(b,{"link-class":"block",variant:"none","aria-label":"View the next five approaches",to:"/asteroid-watch/next-five-approaches"},{default:l(()=>[o("div",le,[c(B)])]),_:1})],64)):s("",!0)])):s("",!0)])]),i[3]||(i[3]=o("div",{class:"bg-gray-light col-start-container-end col-end-bleed sm:block hidden"},null,-1))])])):s("",!0)}const M=C(N,[["render",ce]]);N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{exportName:"default",displayName:"HomepageStats",name:"HomepageStats",type:1,props:[{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]},declarations:[]},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]},declarations:[]},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",schema:"string",declarations:[]},{name:"onVue:beforeMount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:mounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:beforeUpdate",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:updated",global:!0,description:"",tags:[],required:!1,type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:{kind:"enum",type:"VNodeUpdateHook | VNodeUpdateHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>, oldVNode: VNode<RendererNode, RendererElement, { ...; }>): void"},{kind:"array",type:"VNodeUpdateHook[]"}]},declarations:[]},{name:"onVue:beforeUnmount",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"onVue:unmounted",global:!0,description:"",tags:[],required:!1,type:"VNodeMountHook | VNodeMountHook[]",schema:{kind:"enum",type:"VNodeMountHook | VNodeMountHook[]",schema:[{kind:"event",type:"(vnode: VNode<RendererNode, RendererElement, { [key: string]: any; }>): void"},{kind:"array",type:"VNodeMountHook[]"}]},declarations:[]},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",schema:"unknown",declarations:[]},{name:"statistics",global:!1,description:"",tags:[],required:!1,type:"unknown[]",schema:{kind:"array",type:"unknown[]"},declarations:[]},{name:"missionCount",global:!1,description:"",tags:[],required:!1,type:"number",schema:"number",declarations:[]},{name:"dsn",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",schema:"Record<string, any>",declarations:[]},{name:"asteroidWatch",global:!1,description:"",tags:[],required:!1,type:"Record<string, any>",schema:"Record<string, any>",declarations:[]},{name:"featuredEmbed",global:!1,description:"",tags:[],required:!1,type:"HomePageEmbedBlock",schema:{kind:"array",type:"HomePageEmbedBlock"},declarations:[]}],events:[],slots:[],exposed:[{name:"autoplayAdded",type:"boolean",description:"",tags:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]},{name:"dataMissionStatsBlock",type:"blockObject",description:"",tags:[],schema:{kind:"object",type:"blockObject"},declarations:[]},{name:"dataGenericStatsBlock",type:"blockObject",description:"",tags:[],schema:{kind:"object",type:"blockObject"},declarations:[]},{name:"hasFeaturedEmbed",type:"boolean",description:"",tags:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},declarations:[]}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/components/HomepageStats/HomepageStats.vue"});const pe={title:"Components/WWW/Homepage/HomepageStats",component:M,excludeStories:/.*Data$/},d={asteroidWatchWidget:{asteroidApproach:{date:"2020-12-21",distanceKilometers:415e4,distanceMiles:258e4,externalLink:"https://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2017%20XQ60;orb=1"},heading:"ASTEROID WATCH",title:"Next close approach"},dsnWidget:{heading:"DEEP SPACE NETWORK",location:"Goldstone",spacecraftName:"MMS 1",transmitStatus:"both",transmitTitle:"Currently transmitting"},statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-03T12:55:00-08:00",dateDisplay:"countdown",heading:"NEXT LANDING",title:"Custom title"}],statisticsMissionCount:43,featuredEmbed:[]},k=e=>({setup(){return{args:e}},components:{HomepageStats:M},template:`<HomepageStats
    :statistics="args.statistics"
    :mission-count="args.statisticsMissionCount"
    :dsn="args.dsnWidget"
    :asteroid-watch="args.asteroidWatchWidget"
    :featured-embed="args.featuredEmbed"
  />`}),r=k.bind({});r.storyName="HomepageStats";r.args=d;const p=k.bind({});p.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"static",heading:"NEXT LANDING",title:"Mars Perseverance"}]};const m=k.bind({});m.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"time_elapsed",heading:"TIME ON MARS",title:"Mars Perseverance"}]};const u=k.bind({});u.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"live",heading:"NEXT LANDING",title:"Mars Perseverance"}],featuredEmbed:[{heading:"Watch Live",display:!0}]};const g=k.bind({});g.args={...d,statistics:[{blockType:"StatisticsMissionBlock",heading:"MISSIONS",title:"Currently active"},{blockType:"StatisticsGenericBlock",date:"2021-02-18T12:55:00-08:00",dateDisplay:"live",heading:"NEXT LANDING",title:"Mars Perseverance"}]};const y=k.bind({});y.args={...d,dsnWidget:{heading:"DEEP SPACE NETWORK",location:"",spacecraftName:null,transmitStatus:"",transmitTitle:""}};const me=["HomepageStatsData","BaseStory","StaticDate","TimeElapsed","WatchLive","WatchLiveNoVideo","NoDsn"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
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
})`,...y.parameters?.docs?.source}}};const Be=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:r,HomepageStatsData:d,NoDsn:y,StaticDate:p,TimeElapsed:m,WatchLive:u,WatchLiveNoVideo:g,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{M as H,d as a,Be as b};
