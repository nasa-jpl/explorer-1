const e={title:"Components/Forms/ExampleForm"},t=()=>`<form>
  <div class="mb-8">
    <div class="mb-2">
      <label for="name" class="text-subtitle text-gray-dark">
        Name
      </label>
    </div>
    <input
      type="text"
      name="name"
      placeholder="enter your name"
      class="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
    />
  </div>
  <div class="mb-4">
    <div class="mb-2">
      <label for="message" class="text-subtitle text-gray-dark">
        Message
      </label>
      <span class="text-xl text-jpl-red-dark font-bold">*</span>
    </div>
    <textarea
      name="message"
      required="true"
      placeholder="enter your message..."
      cols="40"
      rows="5"
      class="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
    ></textarea>
  </div>
  <button
    class="BaseButton text-contrast-none inline-block -primary"
    aria-label="Submit"
  >
    <span class="label block">Submit</span>
  </button>
</form>`,a={render:t.bind({})},s=["Default"],l=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:s,default:e},Symbol.toStringTag,{value:"Module"}));export{a as D,l as E};
