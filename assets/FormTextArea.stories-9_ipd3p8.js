import{F as l}from"./FormInputLabel-DPYog2P7.js";const s=({placeholder:t,label:a,inputName:e,required:o})=>(t||(t=""),e||(e="input_name"),`${a?l({label:a,inputName:e,required:o}):""}
<textarea
  name="${e}"${o?`
  required=""`:""}
  placeholder="${t}"
  cols="40"
  rows="5"
  class="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
></textarea>`),i={title:"Components/Forms/TextArea",argTypes:{label:{type:{name:"string",required:!1},description:"A label for the field. Leave blank to remove."},inputName:{type:{name:"string",required:!1},description:"Machine-readable name for the form field. Should be unique to other fields in the form."},placeholder:{type:{name:"string",required:!1}}},parameters:{viewMode:"docs",docs:{description:{component:'A simple text area input with stylized label, placeholder text, and "required" asterisk, if applicable.'}}}},r=s.bind({});r.storyName="TextArea";r.args={label:"Label",placeholder:"placeholder text...",inputName:"message_input",required:!1};const n=["Default"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:n,default:i},Symbol.toStringTag,{value:"Module"}));export{m as F};
