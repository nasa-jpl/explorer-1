import{B as U}from"./BaseButton-D2UdpPNz.js";import{I as W,a as X}from"./IconNext-CoxZxuIp.js";import{_ as Y,I as f,A as n,p as o,J as c,D as _,q as g,E as l,M as Z,N as $,y as v,G as ee}from"./iframe-CTVWvntx.js";import"./preload-helper-D6kgxu3v.js";const G={name:"SearchPagination",components:{BaseButton:U,IconPrev:W,IconNext:X},props:{totalPages:Number,currentPage:Number},data(){return{ellipsis:"…"}},computed:{generatePageList(){const t=this.totalPages-4+1;if(this.totalPages>4){if(this.currentPage<=4)return[...this.generatePageRange(1,4),this.ellipsis,this.totalPages];if(this.currentPage===4){const e=this.currentPage+4-1;return[...this.generatePageRange(1,e),this.ellipsis,this.totalPages]}else if(this.currentPage>4&&this.currentPage<t){const e=this.currentPage-1,s=this.currentPage+1;return[1,this.ellipsis,...this.generatePageRange(e,s),this.ellipsis,this.totalPages]}else if(this.currentPage>=t){const e=this.currentPage-2;return[1,this.ellipsis,...this.generatePageRange(e,this.totalPages)]}else return[...this.generatePageRange(1,this.totalPages)]}else return[...this.generatePageRange(1,this.totalPages)]}},watch:{currentPage:{handler(){const a={...this.$route.query,page:this.currentPage};this.$router.push({query:a})}}},methods:{toPage(a){this.$emit("update:currentPage",a)},nextPage(){const a=this.currentPage+1;this.$emit("update:currentPage",a)},previousPage(){const a=this.currentPage-1;this.$emit("update:currentPage",a)},generatePageRange(a,t){const e=[];a=a>0?a:1;for(let s=a;s<=t;s++)e.push(s);return e}}},ae={key:0,class:"SearchPagination flex items-center justify-center"},te={class:"sm:hidden px-4 pt-1"},re={class:"sm:flex items-center justify-center hidden px-5 pt-1"},se=["onClick"],ne={key:1,class:"min-w-12 block py-3 text-lg leading-normal text-center cursor-default"},oe={class:"inline-block px-1 pb-1"};function ie(a,t,e,s,b,i){const J=f("IconPrev"),x=f("BaseButton"),H=f("IconNext");return e.totalPages>0?(n(),o("div",ae,[c(x,{"aria-label":"Previous",rel:"prev",disabled:e.currentPage===1,onClick:t[0]||(t[0]=r=>i.previousPage())},{icon:_(()=>[c(J)]),_:1},8,["disabled"]),g("div",te,"Page "+l(e.currentPage)+" of "+l(e.totalPages),1),g("div",re,[(n(!0),o(Z,null,$(i.generatePageList,(r,Q)=>(n(),o("div",{key:Q},[r!==b.ellipsis?(n(),o("button",{key:0,class:v(["group min-w-12 can-hover:hover:font-medium block py-3 text-lg leading-normal text-center",{"-current":r===e.currentPage}]),onClick:ge=>i.toPage(r)},[g("span",{class:v(["inline-block px-1 pb-1",{"can-hover:group-hover:border-b-2 can-hover:group-hover:border-primary":r!==b.ellipsis}])},l(r),3)],10,se)):(n(),o("span",ne,[g("span",oe,l(r),1)]))]))),128))]),c(x,{disabled:e.currentPage===e.totalPages,rel:"next","aria-label":"Next",onClick:t[1]||(t[1]=r=>i.nextPage())},{icon:_(()=>[c(H)]),_:1},8,["disabled"])])):ee("",!0)}const ce=Y(G,[["render",ie]]);G.__docgenInfo={exportName:"default",displayName:"SearchPagination",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"totalPages",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"},{name:"currentPage",global:!1,description:"",tags:[],required:!1,type:"number",declarations:[],schema:"number"}],events:[],slots:[],exposed:[{name:"totalPages",type:"number",description:"",declarations:[],schema:"number"},{name:"currentPage",type:"number",description:"",declarations:[],schema:"number"},{name:"ellipsis",type:"string",description:"",declarations:[],schema:"string"},{name:"generatePageList",type:"any[]",description:"",declarations:[],schema:{kind:"array",type:"any[]"}}],sourceFiles:"/home/runner/work/explorer-1/explorer-1/packages/vue/src/components/SearchPagination/SearchPagination.vue"};const pe={title:"Components/Search/SearchPagination",component:ce,tags:["search"],excludeStories:/.*Data$/},u={name:"Two Pages",args:{totalPages:2,currentPage:1}},m={args:{totalPages:3,currentPage:2}},d={args:{totalPages:4,currentPage:2}},p={args:{totalPages:5,currentPage:4}},P={args:{totalPages:10,currentPage:1}},h={args:{totalPages:10,currentPage:5}},y={args:{totalPages:10,currentPage:10}};var k,S,w;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Two Pages',
  args: {
    totalPages: 2,
    currentPage: 1
  }
}`,...(w=(S=u.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var B,L,R;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    totalPages: 3,
    currentPage: 2
  }
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var C,q,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    totalPages: 4,
    currentPage: 2
  }
}`,...(N=(q=d.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var I,M,O;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    totalPages: 5,
    currentPage: 4
  }
}`,...(O=(M=p.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var F,V,E;P.parameters={...P.parameters,docs:{...(F=P.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    currentPage: 1
  }
}`,...(E=(V=P.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var T,D,j;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    currentPage: 5
  }
}`,...(j=(D=h.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var K,z,A;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    currentPage: 10
  }
}`,...(A=(z=y.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const Pe=["BaseStory","ThreePages","FourPages","FivePages","FirstOfMany","MiddleOfMany","LastOfMany"];export{u as BaseStory,P as FirstOfMany,p as FivePages,d as FourPages,y as LastOfMany,h as MiddleOfMany,m as ThreePages,Pe as __namedExportsOrder,pe as default};
