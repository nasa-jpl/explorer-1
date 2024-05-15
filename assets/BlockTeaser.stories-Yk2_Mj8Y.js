import{B as m}from"./BaseImage-VZnI4aAI.js";import{B as u}from"./BaseButton-DpIDzJwf.js";const a=({fullWidthImage:e,image:t,label:s,heading:o,introduction:i,buttonText:h,link:g})=>{let l="";if(o){let n=s?"h3":"h2";l=`<${n} class="text-h3 font-semibold tracking-normal lg:mt-2 mt-3">`+o+`</${n}>`}return t=t&&e?t.full:t?t.half:"",`
  <div class="BlockTeaser bg-gray-light lg:grid lg:grid-cols-10 relative" style="${t?`min-height: ${t.height}px;`:""}">
    ${e?'<div class="lg:block bg-gradient-to-l from-transparent-w50 to-transparent-black-50 absolute inset-0 z-10 hidden"></div>':""}
    ${t?m({src:t.src,srcset:t.srcset,alt:"",width:t.width,height:t.height,imageClass:`cover-bg${e?" -full":""}`,objectFitClass:"object-contain"}):""}
    <div class="${t&&e?"relative lg:text-white lg:text-contrast z-20":""} grid lg:col-start-2 lg:col-end-5 px-10 lg:px-0 lg:py-16 py-8">
      <div class="my-auto">
        ${s?'<h2 class="text-subtitle">'+s+"</h2>":""}
        ${l}
        ${i?'<p class="text-body-md lg:mt-2 mt-4">'+i+"</p>":""}
        ${u({variant:"primary",link:g,cssClass:"mt-8",label:h})}
      </div>
    </div>
  </div>
  `},b={title:"Components/Blocks/BlockTeaser",excludeStories:/.*Data$/,argTypes:{fullWidthImage:{type:"boolean",description:"",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},image:{type:{name:"array",required:!1},description:"An array of image data"},label:{type:"string",description:"Teaser label"},heading:{type:"string",description:"Teaser heading"},introduction:{type:"string",description:"Teaser introductory text"},buttonText:{type:"string",description:"Button label"},link:{type:"string",description:"Button URL"}},parameters:{docs:{description:{component:"A combination of label, heading, description, and button in a box on the left with an image on the right. On smaller screens, the image appears above the box with the text elements."}}}},r={fullWidthImage:!1,image:{full:{src:"https://picsum.photos/1096/400",srcset:"https://picsum.photos/1096/400",width:1096,height:400},half:{src:"https://picsum.photos/540/400",srcset:"https://picsum.photos/540/400",width:548,height:400}},label:"Asteroid Watch Overview",heading:"Perseverance",introduction:"The mission marks humanity’s first step in returning samples from another planet.",buttonText:"Read more",link:"#"},c=a.bind({});c.args=r;const p=a.bind({});p.args={...r,fullWidthImage:!0};const d=a.bind({});d.args={heading:"Perseverance",buttonText:"Read More",link:"/missions/perseverance/"};const y=["BlockTeaserData","Default","FullWidth","Empty"],T=Object.freeze(Object.defineProperty({__proto__:null,BlockTeaserData:r,Default:c,Empty:d,FullWidth:p,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{T as B};
