const e=({label:l,required:a,inputName:t})=>(t||(t="input_name"),`<div class="mb-2">
  <label for="${t}" class="text-subtitle text-gray-dark">
    ${l}
  </label>
  ${a?'<span class="text-xl text-jpl-red-dark font-bold">*</span>':""}
</div>`);export{e as F};
