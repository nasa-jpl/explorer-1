export const FormInputLabelTemplate = ({ label, required, inputName }) => {
  // interpret props
  if (!inputName) inputName = 'input_name'
  return `<div class="mb-2">
  <label for="${inputName}" class="text-subtitle text-gray-dark">
    ${label}
  </label>
  ${
    required ? `<span class="text-xl text-jpl-red-dark font-bold">*</span>` : ''
  }
</div>`
}
