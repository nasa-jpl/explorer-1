export default {
  title: 'Guides/Responsive Design',
  tags: ['!autodocs']
}

const ResponsiveDesignTemplate = () => `<div class="bg-gray-light border">
  <code>body</code>
  <div class="max-w-screen-3xl mx-auto bg-black text-white">
    <code>.max-w-screen-3xl</code>
      <div class="sm:BaseGrid container mx-auto bg-gray-light text-black">
        <div class="col-start-1 col-end-13">
          <code class="text-black">.container with nested grid</code>
        </div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">1</div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">2</div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">3</div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">4</div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">5</div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">6</div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">7</div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">8</div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">9</div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">10</div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">11</div>
        <div class="text-center border border-dashed border-gray-mid-dark p-4">12</div>
      </div>
  </div>
</div>`

export const Demo = {
  render: ResponsiveDesignTemplate.bind({})
}
