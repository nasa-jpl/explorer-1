import { FormInputLabelTemplate } from '../FormInputLabel/FormInputLabel.js'
export const FormTextInputTemplate = ({
  placeholder,
  label,
  inputName,
  required,
}) => {
  // interpret props
  if (!placeholder) placeholder = ''
  if (!inputName) inputName = 'input_name'
  const labelTemplate = label
    ? FormInputLabelTemplate({
        label,
        inputName,
        required,
      })
    : ''
  return `${labelTemplate}
<input
  type="text"
  name="${inputName}"${
    required
      ? `
  required=""`
      : ``
  }
  placeholder="${placeholder}"
  class="border-gray-light-mid w-full px-4 py-3 border mt-2 focus:border-focus-blue focus:shadow-jpl"
/>`
}
