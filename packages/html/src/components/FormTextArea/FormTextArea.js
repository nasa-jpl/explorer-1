import { FormInputLabelTemplate } from '../FormInputLabel/FormInputLabel.js'
export const FormTextAreaTemplate = ({ placeholder, label, inputName, required }) => {
  // interpret props
  if (!placeholder) placeholder = ''
  if (!inputName) inputName = 'input_name'
  const labelTemplate = label
    ? FormInputLabelTemplate({
        label,
        inputName,
        required
      })
    : ''
  return `${labelTemplate}
<textarea
  name="${inputName}"${
    required
      ? `
  required=""`
      : ``
  }
  placeholder="${placeholder}"
  cols="40"
  rows="5"
  class="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus focus:shadow-jpl"
></textarea>`
}
