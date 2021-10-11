export const BlockTableTemplate = ({ caption, table }) => {
  let tableRow = ''
  let tableCol = ''
  let tableColType = 'th'
  let tableColClass = 'bg-dark-blue text-subtitle text-white'
  for (const [index, value] of table.data.entries()) {
    if (index > 0) {
      tableColType = 'td'
      tableColClass = 'bg-white text-gray-dark'
    }
    tableRow += `<tr>`
    for (const col of value) {
      tableCol += `<${tableColType} class="border-gray-light-mid lg:p-5 p-3 border-b ${tableColClass}">${col}</${tableColType}>`
    }
    tableRow += tableCol + `</tr>`
    tableCol = ''
  }

  return `
  <div class="BlockTable">
    <div class="overflow-x-auto scrolling-touch">
      <table class="border-gray-light-mid w-full border-t border-b border-collapse table-auto">
        ${tableRow}
      </table>
    </div>
    <div class="text-gray-mid-dark text-body-sm mt-4">
      ${caption}
    </div>
  </div>
  `
}
