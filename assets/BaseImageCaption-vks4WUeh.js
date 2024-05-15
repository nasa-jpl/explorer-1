import{B as t}from"./BaseLink-BM1wc07I.js";const p=({caption:s,credit:a,url:e,linkText:n,computedClass:i})=>`
  <div class="BaseImageCaption text-body-sm ${i||""}">
    <div class="inline mr-2">
      <div class="the-caption-text inline">${s}</div>
      ${a?`<span class="inline"> Credit: ${a} </span>`:""}
    </div>
    ${e?t({link:e,text:n,variant:"default",computedClass:"",wrapperClass:"inline-block"}):""}
  </div>
  `;export{p as B};
