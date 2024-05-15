import{F as a}from"./FormInputLabel-DPYog2P7.js";const n=({placeholder:t,label:o,inputName:e,required:l})=>(t||(t=""),e||(e="input_name"),`${o?a({label:o,inputName:e,required:l}):""}
<input
  type="text"
  name="${e}"${l?`
  required=""`:""}
  placeholder="${t}"
  class="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
/>`),i={title:"Components/Forms/TextInput",argTypes:{label:{type:{name:"string",required:!1},description:"A label for the field. Leave blank to remove."},inputName:{type:{name:"string",required:!1},description:"Machine-readable name for the form field. Should be unique to other fields in the form."},placeholder:{type:{name:"string",required:!1}}},parameters:{viewMode:"docs",docs:{description:{component:'A simple text input with stylized label, placeholder text, and "required" asterisk, if applicable.'}}}},r=n.bind({});r.storyName="TextInput";r.args={label:"Label",placeholder:"placeholder text",inputName:"text_input",required:!1};const s=["Default"],u=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:s,default:i},Symbol.toStringTag,{value:"Module"}));export{u as F};
