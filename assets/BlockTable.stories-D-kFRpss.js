const n=({caption:r,table:s})=>{let e="",t="",a="th",l="bg-dark-blue text-subtitle text-white text-left font-normal";for(const[i,d]of s.data.entries()){i>0&&(a="td",l="bg-white text-gray-dark"),e+="<tr>";for(const b of d)t+=`<${a} class="border-gray-light-mid lg:p-5 p-3 border-b ${l}">${b}</${a}>`;e+=t+"</tr>",t=""}return`
  <div class="BlockTable">
    <div class="overflow-x-auto scrolling-touch">
      <table class="border-gray-light-mid w-full border-t border-b border-collapse table-auto">
        ${e}
      </table>
    </div>
    <div class="text-gray-mid-dark text-body-sm mt-4">
      ${r}
    </div>
  </div>
  `},c={title:"Components/Blocks/BlockTable",excludeStories:/.*Data$/,argTypes:{caption:{type:{name:"string",required:!1},description:"Table caption."},table:{type:{name:"array",required:!0},description:"An array of table data objects."}},parameters:{docs:{description:{component:"A simple table with some basic formatting."}}}},o=n.bind({});o.storyName="BlockTable";o.args={caption:"Third row intentionally blank to test parsing.",table:{data:[["Header 1","Header 2","Header 3"],["Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet","Lorem ipsum dolor sit amet"],["","",""]]}};const m=["Default"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{p as B};
