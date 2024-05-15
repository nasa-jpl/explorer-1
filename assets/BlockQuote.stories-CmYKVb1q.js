import{B as p}from"./BaseLink-BM1wc07I.js";const i=({attribution:a,thumbnail:e,quoteLink:o,quote:d})=>{let n="";return a&&(e=e?`<img loading="lazy" class="attribution-image" src="${e.src}" alt="${e.alt}" />`:"",o=o?p({text:a,computedClass:"",wrapperClass:"attribution-text",link:o.externalLink,caret:!0,externalTargetBlank:!0}):`<div class="attribution-text"><span>${a}</span></div>`,n=`
    <div class="inline-block">
      <div class="flex items-center justify-center">
        ${e}
        ${o}
      </div>
    </div>
    <hr aria-hidden="true" class="lg:mt-6 mt-3" />
    `),`
  <div class="BlockQuote md:px-0 px-4 mx-auto text-center">
    <hr aria-hidden="true" class="lg:mb-6 mb-3" />
    <p class="quote">
      ${d}
    </p>
    ${n}
  </div>
  `},b={title:"Components/Blocks/BlockQuote",tags:["autodocs"],excludeStories:/.*Data$/,argTypes:{quote:{type:{name:"string",required:!1},description:""},attribution:{type:{name:"string",required:!1},description:""}},parameters:{viewMode:"docs",docs:{description:{component:"A big, fancy pull quote, with optional attribution and link. Can also be used for non-quotation callouts."}}}},t={quote:"“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties.”",attribution:"Amy Ross, Spacesuit Designer",quoteLink:{externalLink:"",page:{url:"/"}},thumbnail:{src:"https://picsum.photos/80/80",alt:"An image"}},s=i.bind({});s.args={quote:t.quote,attribution:t.attribution};const r=i.bind({});r.args={quote:t.quote,attribution:t.attribution,thumbnail:t.thumbnail};const l=i.bind({});l.args={quote:t.quote,attribution:t.attribution,quoteLink:{externalLink:"https://www.jpl.nasa.gov"}};const u=i.bind({});u.args=t;const c=i.bind({});c.args={quote:t.quote};const m=["BlockQuoteData","Default","WithImage","ExternalLinkedAttribution","ImageWithLocalLinkedAttribution","NoAttribution"],k=Object.freeze(Object.defineProperty({__proto__:null,BlockQuoteData:t,Default:s,ExternalLinkedAttribution:l,ImageWithLocalLinkedAttribution:u,NoAttribution:c,WithImage:r,__namedExportsOrder:m,default:b},Symbol.toStringTag,{value:"Module"}));export{k as B};
