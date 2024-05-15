import{B as e}from"./BaseHeading-2dYQ5eTW.js";import{I as h}from"./IconLocation-CUyqMFQl.js";import{I as l}from"./IconArrows-f9_vo7fG.js";import{I as H}from"./IconUser-CqYZ7HgZ.js";const u={title:"Components/Base/BaseHeading",tags:["autodocs"],argTypes:{text:{type:"string"},size:{type:{name:"string",required:!0},description:"The display size of the heading.",control:{type:"select",options:["h1","h2","h3","h4","h5","h6"]},table:{defaultValue:{summary:"h3"}}},tag:{type:{name:"string",required:!1},description:"The semantic heading tag if different from the display size (ex: a heading looks like an `h4`, but semantically, it is an `h1`.",control:{type:"select",options:["h1","h2","h3","h4","h5","h6"]}}},parameters:{viewMode:"docs",docs:{description:{component:"Base component for headings. Allows for retaining semantic markup while varying the text size."}}}},a=e.bind({});a.storyName="H1";a.args={text:"Heading 1",size:"h1",tag:"h1"};const o=e.bind({});o.storyName="H2";o.args={text:"Heading 2",size:"h2",tag:"h2"};const i=e.bind({});i.storyName="H3";i.args={text:"Heading 3",size:"h3",tag:"h3"};const r=e.bind({});r.storyName="H4";r.args={text:"Heading 4",size:"h4",tag:"h4"};const c=e.bind({});c.storyName="H5";c.args={text:"Heading 5",size:"h5",tag:"h5"};const d=e.bind({});d.storyName="H6";d.args={text:"Heading 6",size:"h6",tag:"h6"};const t=(n=>{const s={customClass:"inline"};return`
    ${e({...n,icon:h(s)})}
    ${e({...n,icon:H(s)})}
    ${e({...n,icon:l(s)})}
  `}).bind({});t.args={text:"Heading 3",size:"h3",tag:"h3",headingClass:"mt-8"};var g,m,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`(args => {
  const iconProps = {
    customClass: 'inline'
  };

  // Test with icons of different shapes.
  return \`
    \${BaseHeadingTemplate({
    ...args,
    icon: IconLocationTemplate(iconProps)
  })}
    \${BaseHeadingTemplate({
    ...args,
    icon: IconUserTemplate(iconProps)
  })}
    \${BaseHeadingTemplate({
    ...args,
    icon: IconArrowsTemplate(iconProps)
  })}
  \`;
}).bind({})`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const f=["Default","H2","H3","H4","H5","H6","HeadingsWithIcons"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:a,H2:o,H3:i,H4:r,H5:c,H6:d,HeadingsWithIcons:t,__namedExportsOrder:f,default:u},Symbol.toStringTag,{value:"Module"}));export{z as B};
