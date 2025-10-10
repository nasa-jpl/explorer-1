import{c as l,_ as u,o as i,h as n,i as m,F as h,j as p,$ as a}from"./iframe-CIczggiG.js";const r=l({name:"BaseSwimlane",props:{words:{type:Array,default:()=>["Artists","Communicators","Designers","Disruptors","Dreamers","Educators","Engineers","Innovators","Inventors","Makers","Problem Solvers","Roboticists","Scientists","Software Engineers","Thinkers","Visualizers"]},rows:{type:Number,default:1},scale:{type:Number,default:1},transitionDuration:{type:Number,default:1e3},transitionDelay:{type:Number,default:500},transition:{type:String,default:"ease-out"},pauseOnHover:{type:Boolean,default:!0}},data(){return{list:[],listTop:0,isPaused:!1,isMovingBackwards:!1}},computed:{listCount(){return this.list.length},fontSize(){return 16*this.scale},itemHeight(){return this.fontSize*1.5},listHeight(){return this.itemHeight*this.listCount},listParentHeight(){return this.itemHeight*this.rows},itemStyle(){return`font-size: ${this.fontSize}px;
              height: ${this.itemHeight}px;`},listStyle(){return`height: ${this.listHeight}px;
              transition-delay: ${this.transitionDelay}ms;
              transition-duration: ${this.transitionDuration}ms;
              transition-timing-function: ${this.transition};
              will-change: transform;
              transform: translateY(${this.listTop}px)`},listParentStyle(){return`height: ${this.listParentHeight}px;`}},watch:{words(e){this.list=e}},created(){this.list=this.words},mounted(){setTimeout(this.updateState,this.transitionDelay)},methods:{updateState(){this.listCount<=this.rows||this.isPaused||(this.isMovingBackwards?this.listTop+=this.itemHeight:this.listTop-=this.itemHeight,this.listTop<this.rows*this.itemHeight-this.listHeight&&(this.listTop=0),this.timeOutId=window.setTimeout(()=>{this.updateState()},this.transitionDuration+this.transitionDelay))},toggleAnimation(){this.pauseOnHover&&(this.isPaused=!this.isPaused,this.isPaused?clearTimeout(this.timeOutId):this.updateState())}}}),d=["innerHTML"];function f(e,s,g,y,c,S){return i(),n("div",{style:a(e.listParentStyle),class:"BaseSwimlane",onMouseenter:s[0]||(s[0]=(...t)=>e.toggleAnimation&&e.toggleAnimation(...t)),onMouseleave:s[1]||(s[1]=(...t)=>e.toggleAnimation&&e.toggleAnimation(...t))},[m("ul",{style:a(e.listStyle)},[(i(!0),n(h,null,p(e.list,(t,o)=>(i(),n("li",{key:o,style:a(e.itemStyle),innerHTML:t},null,12,d))),128))],4)],36)}const v=u(r,[["render",f]]);r.__docgenInfo={displayName:"BaseSwimlane",exportName:"default",description:"",tags:{},props:[{name:"words",type:{name:"array"},defaultValue:{func:!1,value:`[
  'Artists',
  'Communicators',
  'Designers',
  'Disruptors',
  'Dreamers',
  'Educators',
  'Engineers',
  'Innovators',
  'Inventors',
  'Makers',
  'Problem Solvers',
  'Roboticists',
  'Scientists',
  'Software Engineers',
  'Thinkers',
  'Visualizers'
]`}},{name:"rows",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"scale",type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"transitionDuration",type:{name:"number"},defaultValue:{func:!1,value:"1000"}},{name:"transitionDelay",type:{name:"number"},defaultValue:{func:!1,value:"500"}},{name:"transition",type:{name:"string"},defaultValue:{func:!1,value:"'ease-out'"}},{name:"pauseOnHover",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/explorer-1/explorer-1/apps/vue-storybook/node_modules/@explorer-1/vue/src/components/BaseSwimlane/BaseSwimlane.vue"]};export{v as B};
