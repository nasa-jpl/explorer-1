import LayoutHelper from '../../components/LayoutHelper/LayoutHelper.vue'
export default {
  title: 'Components/Forms/ExampleForm',
  component: LayoutHelper
}

const ExampleFormTemplate = () => `<form>
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
      class="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus focus:shadow-jpl"
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
      class="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus focus:shadow-jpl"
    ></textarea>
  </div>
  <button
    class="BaseButton text-contrast-none inline-block -primary"
    aria-label="Submit"
  >
    <span class="label block">Submit</span>
  </button>
</form>`

export const BaseStory = {
  render: ExampleFormTemplate.bind({})
}
