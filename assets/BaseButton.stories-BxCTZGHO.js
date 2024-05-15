import{B as e}from"./BaseButton-DpIDzJwf.js";const k={title:"Components/Base/BaseButton",argTypes:{label:{type:"string",description:"Button label"},ariaLabel:{type:"string",description:"ARIA label. Recommended if your button label isn't descriptive, or if it only contains an icon."},variant:{type:"string",description:"Button variant type",control:{type:"select",options:["primary","secondary","dark","social"]},table:{defaultValue:{summary:"default"}}},link:{type:"string",description:"Button URL"},caret:{type:"boolean",description:"Display caret",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},compact:{type:"boolean",description:"",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},disabled:{type:"boolean",description:"",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},icon:{type:"string",description:"Button variant type",control:{type:"select",options:["next","prev","expand","external","facebook","twitter","instagram","youtube","reddit","dropdown"]},table:{defaultValue:{summary:"none"}}},iconBefore:{type:"boolean",description:"If the icon should be positioned before the text.",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}},iconOnly:{type:"boolean",description:"If the button will only include an icon and no text.",control:{type:"boolean"},table:{defaultValue:{summary:"false"}}}},parameters:{docs:{description:{component:"Simple button with several style variations."}}}},n=e.bind({});n.storyName="Primary Button";n.args={label:"Explore",variant:"primary",link:"#",caret:!1,compact:!1,disabled:!1,icon:null,iconBefore:!1,iconOnly:!1};const c=e.bind({});c.args={label:"Explore",variant:"primary",link:"#",caret:!1,compact:!1,disabled:!1};const d=e.bind({});d.args={label:"Explore",variant:"secondary",link:"#",caret:!1,compact:!1,disabled:!1};const l=e.bind({});l.args={label:"Explore",variant:"dark",link:"#",caret:!1,compact:!1,disabled:!1};l.decorators=[t=>`<div class="p-5 bg-dark-blue">${t()}</div>`];const u=e.bind({});u.args={label:"Explore",variant:"primary",link:"#",caret:!1,compact:!1,disabled:!1,icon:"next",iconOnly:!0};const b=e.bind({});b.args={label:"Explore",variant:"secondary",link:"#",caret:!1,compact:!1,disabled:!1,icon:"next",iconOnly:!0};const o=e.bind({});o.args={label:"Explore",variant:"dark",link:"#",caret:!1,compact:!1,disabled:!1,icon:"next",iconOnly:!0};o.decorators=[t=>`<div class="p-5 bg-dark-blue">${t()}</div>`];const a=()=>{let t=e({label:"Facebook",variant:"social",link:"#",caret:!1,compact:!0,disabled:!1,icon:"facebook",iconOnly:!0,cssClass:"-facebook w-12 h-12 text-2xl mr-3"}),f=e({label:"X",variant:"social",link:"#",caret:!1,compact:!0,disabled:!1,icon:"twitter",iconOnly:!0,cssClass:"-twitter w-12 h-12 text-2xl mr-3"}),y=e({label:"Instagram",variant:"social",link:"#",caret:!1,compact:!0,disabled:!1,icon:"instagram",iconOnly:!0,cssClass:"-instagram w-12 h-12 text-2xl mr-3"}),B=e({label:"YouTube",variant:"social",link:"#",caret:!1,compact:!0,disabled:!1,icon:"youtube",iconOnly:!0,cssClass:"-youtube w-12 h-12 text-2xl mr-3"}),x=e({label:"Reddit",variant:"social",link:"#",caret:!1,compact:!0,disabled:!1,icon:"reddit",iconOnly:!0,cssClass:"-reddit w-12 h-12 text-2xl mr-3"});return`${t} ${f} ${y} ${B} ${x}`};a.decorators=[t=>`<div class="p-5 flex items-center">${t()}</div>`];const p=e.bind({});p.args={label:"Explore",variant:"primary",link:"#",caret:!1,compact:!1,disabled:!0};const m=e.bind({});m.args={label:"Explore",variant:"primary",link:"#",caret:!1,compact:!1,disabled:!0,icon:"next",iconOnly:!0};var r,s,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  let facebook = BaseButtonTemplate({
    label: 'Facebook',
    variant: 'social',
    link: '#',
    caret: false,
    compact: true,
    disabled: false,
    icon: 'facebook',
    iconOnly: true,
    cssClass: '-facebook w-12 h-12 text-2xl mr-3'
  });
  let twitter = BaseButtonTemplate({
    label: 'X',
    variant: 'social',
    link: '#',
    caret: false,
    compact: true,
    disabled: false,
    icon: 'twitter',
    iconOnly: true,
    cssClass: '-twitter w-12 h-12 text-2xl mr-3'
  });
  let instagram = BaseButtonTemplate({
    label: 'Instagram',
    variant: 'social',
    link: '#',
    caret: false,
    compact: true,
    disabled: false,
    icon: 'instagram',
    iconOnly: true,
    cssClass: '-instagram w-12 h-12 text-2xl mr-3'
  });
  let youtube = BaseButtonTemplate({
    label: 'YouTube',
    variant: 'social',
    link: '#',
    caret: false,
    compact: true,
    disabled: false,
    icon: 'youtube',
    iconOnly: true,
    cssClass: '-youtube w-12 h-12 text-2xl mr-3'
  });
  let reddit = BaseButtonTemplate({
    label: 'Reddit',
    variant: 'social',
    link: '#',
    caret: false,
    compact: true,
    disabled: false,
    icon: 'reddit',
    iconOnly: true,
    cssClass: '-reddit w-12 h-12 text-2xl mr-3'
  });
  return \`\${facebook} \${twitter} \${instagram} \${youtube} \${reddit}\`;
}`,...(i=(s=a.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const _=["Default","Primary_Internal_Button","Secondary_Button","Dark_Button","Primary_Icon_Button","Secondary_Icon_Button","Dark_Icon_Button","Social_Icon_Button","Disabled_Button","Disabled_Icon_Button"],g=Object.freeze(Object.defineProperty({__proto__:null,Dark_Button:l,Dark_Icon_Button:o,Default:n,Disabled_Button:p,Disabled_Icon_Button:m,Primary_Icon_Button:u,Primary_Internal_Button:c,Secondary_Button:d,Secondary_Icon_Button:b,Social_Icon_Button:a,__namedExportsOrder:_,default:k},Symbol.toStringTag,{value:"Module"}));export{g as B};
