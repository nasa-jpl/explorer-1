const __vite__fileDeps=["./axe-DfKoHBCo.js","./_commonjsHelpers-Cpj98o6Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as d}from"./iframe-Cix3w9F9.js";import"../sb-preview/runtime.js";const{global:S}=__STORYBOOK_MODULE_GLOBAL__,{addons:y}=__STORYBOOK_MODULE_PREVIEW_API__;var o="storybook/a11y",U=`${o}/result`,L=`${o}/request`,v=`${o}/running`,A=`${o}/error`,T=`${o}/manual`,a={RESULT:U,REQUEST:L,RUNNING:v,ERROR:A,MANUAL:T},{document:g}=S,r=y.getChannel(),_=!1,l,E={config:{},options:{}},h=async(n,e=E)=>{e!=null&&e.manual||await i(n,e)},i=async(n,e=E)=>{l=n;try{if(!_){_=!0,r.emit(a.RUNNING);let t=(await d(async()=>{const{default:f}=await import("./axe-DfKoHBCo.js").then(N=>N.a);return{default:f}},__vite__mapDeps([0,1]),import.meta.url)).default,{element:R="#storybook-root",config:s,options:c={}}=e,u=g.querySelector(R);if(!u)return;t.reset(),s&&t.configure(s);let m=await t.run(u,c),O=JSON.parse(JSON.stringify(m));l===n?r.emit(a.RESULT,O):(_=!1,i(l))}}catch(t){r.emit(a.ERROR,t)}finally{_=!1}};r.on(a.REQUEST,h);r.on(a.MANUAL,i);
