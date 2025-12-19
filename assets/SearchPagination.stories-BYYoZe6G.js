import{B as U}from"./BaseButton-BAeEWpSW.js";import{I as W,a as X}from"./IconNext-TDL9emRl.js";import{_ as Y,s as f,o as n,g as o,y as c,l as _,h as g,t as l,F as Z,B as $,n as v,p as ee}from"./iframe-By5L8iBS.js";import"./preload-helper-D6kgxu3v.js";const G={name:"SearchPagination",components:{BaseButton:U,IconPrev:W,IconNext:X},props:{totalPages:Number,currentPage:Number},data(){return{ellipsis:"…"}},computed:{generatePageList(){const t=this.totalPages-4+1;if(this.totalPages>4){if(this.currentPage<=4)return[...this.generatePageRange(1,4),this.ellipsis,this.totalPages];if(this.currentPage===4){const e=this.currentPage+4-1;return[...this.generatePageRange(1,e),this.ellipsis,this.totalPages]}else if(this.currentPage>4&&this.currentPage<t){const e=this.currentPage-1,s=this.currentPage+1;return[1,this.ellipsis,...this.generatePageRange(e,s),this.ellipsis,this.totalPages]}else if(this.currentPage>=t){const e=this.currentPage-2;return[1,this.ellipsis,...this.generatePageRange(e,this.totalPages)]}else return[...this.generatePageRange(1,this.totalPages)]}else return[...this.generatePageRange(1,this.totalPages)]}},watch:{currentPage:{handler(){const a={...this.$route.query,page:this.currentPage};this.$router.push({query:a})}}},methods:{toPage(a){this.$emit("update:currentPage",a)},nextPage(){const a=this.currentPage+1;this.$emit("update:currentPage",a)},previousPage(){const a=this.currentPage-1;this.$emit("update:currentPage",a)},generatePageRange(a,t){const e=[];a=a>0?a:1;for(let s=a;s<=t;s++)e.push(s);return e}}},ae={key:0,class:"SearchPagination flex items-center justify-center"},te={class:"sm:hidden px-4 pt-1"},re={class:"sm:flex items-center justify-center hidden px-5 pt-1"},se=["onClick"],ne={key:1,class:"min-w-12 block py-3 text-lg leading-normal text-center cursor-default"},oe={class:"inline-block px-1 pb-1"};function ie(a,t,e,s,x,i){const H=f("IconPrev"),b=f("BaseButton"),J=f("IconNext");return e.totalPages>0?(n(),o("div",ae,[c(b,{class:"xl:!text-base","aria-label":"Previous",rel:"prev",disabled:e.currentPage===1,onClick:t[0]||(t[0]=r=>i.previousPage())},{icon:_(()=>[c(H)]),_:1},8,["disabled"]),g("div",te,"Page "+l(e.currentPage)+" of "+l(e.totalPages),1),g("div",re,[(n(!0),o(Z,null,$(i.generatePageList,(r,Q)=>(n(),o("div",{key:Q},[r!==x.ellipsis?(n(),o("button",{key:0,class:v(["group min-w-12 can-hover:hover:font-medium block py-3 text-lg leading-normal text-center",{"-current":r===e.currentPage}]),onClick:ge=>i.toPage(r)},[g("span",{class:v(["inline-block px-1 pb-1",{"can-hover:group-hover:border-b-2 can-hover:group-hover:border-primary":r!==x.ellipsis}])},l(r),3)],10,se)):(n(),o("span",ne,[g("span",oe,l(r),1)]))]))),128))]),c(b,{class:"xl:!text-base",disabled:e.currentPage===e.totalPages,rel:"next","aria-label":"Next",onClick:t[1]||(t[1]=r=>i.nextPage())},{icon:_(()=>[c(J)]),_:1},8,["disabled"])])):ee("",!0)}const ce=Y(G,[["render",ie]]);G.__docgenInfo={exportName:"default",displayName:"SearchPagination",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"totalPages",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"currentPage",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"}],events:[],slots:[],exposed:[{name:"totalPages",type:"number",description:"",declarations:[],schema:"number"},{name:"currentPage",type:"number",description:"",declarations:[],schema:"number"},{name:"ellipsis",type:"string",description:"",declarations:[],schema:"string"},{name:"generatePageList",type:"any[]",description:"",declarations:[],schema:{kind:"array",type:"any[]"}}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/components/SearchPagination/SearchPagination.vue"};const pe={title:"Components/Search/SearchPagination",component:ce,tags:["search"],excludeStories:/.*Data$/},u={name:"Two Pages",args:{totalPages:2,currentPage:1}},m={args:{totalPages:3,currentPage:2}},d={args:{totalPages:4,currentPage:2}},p={args:{totalPages:5,currentPage:4}},P={args:{totalPages:10,currentPage:1}},h={args:{totalPages:10,currentPage:5}},y={args:{totalPages:10,currentPage:10}};var k,S,B;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Two Pages',
  args: {
    totalPages: 2,
    currentPage: 1
  }
}`,...(B=(S=u.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var w,L,R;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    totalPages: 3,
    currentPage: 2
  }
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var C,q,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    totalPages: 4,
    currentPage: 2
  }
}`,...(N=(q=d.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var F,I,O;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    totalPages: 5,
    currentPage: 4
  }
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var M,V,T;P.parameters={...P.parameters,docs:{...(M=P.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    currentPage: 1
  }
}`,...(T=(V=P.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var E,j,D;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    currentPage: 5
  }
}`,...(D=(j=h.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var K,z,A;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    currentPage: 10
  }
}`,...(A=(z=y.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const Pe=["BaseStory","ThreePages","FourPages","FivePages","FirstOfMany","MiddleOfMany","LastOfMany"];export{u as BaseStory,P as FirstOfMany,p as FivePages,d as FourPages,y as LastOfMany,h as MiddleOfMany,m as ThreePages,Pe as __namedExportsOrder,pe as default};
