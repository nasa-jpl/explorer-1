export default {
  title: 'Foundation/Grid and Layout/Column Layout Helpers',
  tags: ['!autodocs'],
}

const BaseWidthTemplate =
  () => `<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base border border-success-green p-4">
    <code>.indent-col-base</code>
  </div>
</div>`

export const BaseWidth = BaseWidthTemplate.bind()

const ColTwoStartTemplate =
  () => `<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base indent-col-2 border border-success-green p-4">
    <code>.indent-col-base.indent-col-2</code>
  </div>
</div>`

export const ColTwoStart = {
  name: 'Start at col-2',
  render: ColTwoStartTemplate.bind({}),
}
ColTwoStart.parameters = {
  docs: {
    source: {
      state: 'open',
    },
  },
}

const ColThreeStartTemplate =
  () => `<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base indent-col-3 border border-success-green p-4">
    <code>.indent-col-base.indent-col-3</code>
  </div>
</div>`

export const ColThreeStart = {
  name: 'Start at col-3',
  render: ColThreeStartTemplate.bind({}),
}

const ColFourStartTemplate =
  () => `<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base indent-col-4 border border-success-green p-4">
    <code>.indent-col-base.indent-col-4</code>
  </div>
</div>`

export const ColFourStart = {
  name: 'Start at col-4',
  render: ColFourStartTemplate.bind({}),
}
