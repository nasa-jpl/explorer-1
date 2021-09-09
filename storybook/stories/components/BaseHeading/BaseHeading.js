export const BaseHeadingTemplate = ({ text, size }) => {
  return `<${size} class="text-${size}">${text}</${size}>`
}