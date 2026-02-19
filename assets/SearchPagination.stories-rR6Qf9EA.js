import{B}from"./BaseButton-CFcHEwKv.js";import{I as L,a as C}from"./IconPrev-BEmS4B4d.js";import{e as q,f as n,B as c,w as _,j as g,x as l,F as N,G as F,n as v,y as I,E as f,o}from"./iframe-Cbo-gMoN.js";import"./preload-helper-PPVm8Dsz.js";const k={name:"SearchPagination",components:{BaseButton:B,IconPrev:C,IconNext:L},props:{totalPages:Number,currentPage:Number},data(){return{ellipsis:"…"}},computed:{generatePageList(){const t=this.totalPages-4+1;if(this.totalPages>4){if(this.currentPage<=4)return[...this.generatePageRange(1,4),this.ellipsis,this.totalPages];if(this.currentPage===4){const e=this.currentPage+4-1;return[...this.generatePageRange(1,e),this.ellipsis,this.totalPages]}else if(this.currentPage>4&&this.currentPage<t){const e=this.currentPage-1,s=this.currentPage+1;return[1,this.ellipsis,...this.generatePageRange(e,s),this.ellipsis,this.totalPages]}else if(this.currentPage>=t){const e=this.currentPage-2;return[1,this.ellipsis,...this.generatePageRange(e,this.totalPages)]}else return[...this.generatePageRange(1,this.totalPages)]}else return[...this.generatePageRange(1,this.totalPages)]}},watch:{currentPage:{handler(){const a={...this.$route.query,page:this.currentPage};this.$router.push({query:a})}}},methods:{toPage(a){this.$emit("update:currentPage",a)},nextPage(){const a=this.currentPage+1;this.$emit("update:currentPage",a)},previousPage(){const a=this.currentPage-1;this.$emit("update:currentPage",a)},generatePageRange(a,t){const e=[];a=a>0?a:1;for(let s=a;s<=t;s++)e.push(s);return e}}},O={key:0,class:"SearchPagination flex items-center justify-center"},M={class:"sm:hidden px-4 pt-1"},V={class:"sm:flex items-center justify-center hidden px-5 pt-1"},E=["onClick"],T={key:1,class:"min-w-12 block py-3 text-lg leading-normal text-center cursor-default"},j={class:"inline-block px-1 pb-1"};function D(a,t,e,s,x,i){const S=f("IconPrev"),b=f("BaseButton"),R=f("IconNext");return e.totalPages>0?(o(),n("div",O,[c(b,{class:"xl:!text-base","aria-label":"Previous",rel:"prev",disabled:e.currentPage===1,onClick:t[0]||(t[0]=r=>i.previousPage())},{iconRight:_(()=>[c(S)]),_:1},8,["disabled"]),g("div",M,"Page "+l(e.currentPage)+" of "+l(e.totalPages),1),g("div",V,[(o(!0),n(N,null,F(i.generatePageList,(r,w)=>(o(),n("div",{key:w},[r!==x.ellipsis?(o(),n("button",{key:0,class:v(["group min-w-12 can-hover:hover:font-medium block py-3 text-lg leading-normal text-center",{"-current":r===e.currentPage}]),onClick:z=>i.toPage(r)},[g("span",{class:v(["inline-block px-1 pb-1",{"can-hover:group-hover:border-b-2 can-hover:group-hover:border-primary":r!==x.ellipsis}])},l(r),3)],10,E)):(o(),n("span",T,[g("span",j,l(r),1)]))]))),128))]),c(b,{class:"xl:!text-base",disabled:e.currentPage===e.totalPages,rel:"next","aria-label":"Next",onClick:t[1]||(t[1]=r=>i.nextPage())},{iconRight:_(()=>[c(R)]),_:1},8,["disabled"])])):I("",!0)}const K=q(k,[["render",D]]);k.__docgenInfo={exportName:"default",displayName:"SearchPagination",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"currentPage",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"totalPages",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"}],events:[],slots:[],exposed:[{name:"currentPage",type:"number",description:"",declarations:[],schema:"number"},{name:"totalPages",type:"number",description:"",declarations:[],schema:"number"},{name:"ellipsis",type:"string",description:"",declarations:[],schema:"string"},{name:"generatePageList",type:"any[]",description:"",declarations:[],schema:{kind:"array",type:"any[]"}}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/components/SearchPagination/SearchPagination.vue"};const Q={title:"Components/Search/SearchPagination",component:K,tags:["search"],excludeStories:/.*Data$/},u={name:"Two Pages",args:{totalPages:2,currentPage:1}},m={args:{totalPages:3,currentPage:2}},d={args:{totalPages:4,currentPage:2}},p={args:{totalPages:5,currentPage:4}},P={args:{totalPages:10,currentPage:1}},h={args:{totalPages:10,currentPage:5}},y={args:{totalPages:10,currentPage:10}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Two Pages',
  args: {
    totalPages: 2,
    currentPage: 1
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 3,
    currentPage: 2
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 4,
    currentPage: 2
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 5,
    currentPage: 4
  }
}`,...p.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    currentPage: 1
  }
}`,...P.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    currentPage: 5
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    currentPage: 10
  }
}`,...y.parameters?.docs?.source}}};const U=["BaseStory","ThreePages","FourPages","FivePages","FirstOfMany","MiddleOfMany","LastOfMany"];export{u as BaseStory,P as FirstOfMany,p as FivePages,d as FourPages,y as LastOfMany,h as MiddleOfMany,m as ThreePages,U as __namedExportsOrder,Q as default};
