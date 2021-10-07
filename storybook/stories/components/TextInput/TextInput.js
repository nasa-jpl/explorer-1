// TODO: officially include TextInput and other Form fields
export const TextInputTemplate = ({ placeholder }) => {
  // interpret props
  if (!placeholder) placeholder = ''
  return `<input
  type="text"
  name="text_input"
  placeholder="${placeholder}"
  class="w-full px-4 py-3"
/>`
}
