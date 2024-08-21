import FontVariants from './FontVariants.vue'
import IconLocation from './../../components/Icons/IconLocation.vue'
import BaseHeading from './../../components/BaseHeading/BaseHeading.vue'

export default {
  title: 'Foundations/Typography',
  component: FontVariants,
  tags: ['!autodocs']
}

export const Fonts = {
  args: {}
}

export const TextColors = {
  args: {},
  render: () => ({
    template: `<div>
  <div class="md:grid-cols-3 inline-grid gap-4 p-8 mt-8 bg-white">
    <div>
      <div class="bg-gray-dark w-16 h-8"></div>
      <code class="text-gray-dark">.text-gray-dark</code>
    </div>
    <div>
      <div class="bg-gray-mid-dark w-16 h-8"></div>
      <code class="text-gray-mid-dark">.text-gray-mid-dark</code>
    </div>
    <div>
      <div class="bg-jpl-red w-16 h-8"></div>
      <code class="text-jpl-red">.text-jpl-red</code>
    </div>
  </div>
  <div class="inline-grid grid-cols-3 gap-4 p-8 bg-black">
    <div>
      <div class="w-16 h-8 bg-white"></div>
      <code class="text-white">.text-white</code>
    </div>
    <div>
      <div class="bg-gray-mid w-16 h-8"></div>
      <code class="text-gray-mid">.text-gray-mid</code>
    </div>
    <div>
      <div class="bg-jpl-red-light w-16 h-8"></div>
      <code class="text-jpl-red-light">.text-jpl-red-light</code>
    </div>
  </div>
</div>`
  })
}

export const TextStyles = {
  args: {},
  render: () => ({
    template: `<div>
  <p class="text-h1-alt mt-8">Header H1 Alt</p>
  <code>.text-h1-alt</code>
  <p class="text-h1 mt-8">Header H1</p>
  <code>h1, .text-h1</code>
  <p class="text-h2 mt-8">Header H2</p>
  <code>h2, .text-h2</code>
  <p class="text-h3 mt-8">Header H3</p>
  <code>h3, .text-h3</code>
  <p class="text-h4 mt-8">Header H4</p>
  <code>h4, .text-h4</code>
  <p class="text-h5 mt-8">Header H5</p>
  <code>h5, .text-h5</code>
  <p class="text-h6 mt-8">Header H6</p>
  <code>h6, .text-h6</code>
  <p class="text-subtitle mt-8">Subtitle</p>
  <code>.text-subtitle</code>
  <p class="text-body-lg mt-8">Body large</p>
  <code>.text-body-lg</code>
  <p class="text-body-md mt-8">Body medium</p>
  <code>.text-body-md</code>
  <p class="text-body-sm mt-8">Body small</p>
  <code>.text-body-sm</code>
  <p class="text-body-xs mt-8">Body extra small</p>
  <code>.text-body-xs</code>
  <p class="mt-8"><mark>Highlighted text</mark></p>
  <code>mark</code>
  <p class="mt-8"><span class="math-text">This is math text. a<sup>2</sup> + a<sub>b</sub> = c</span></p>
  <code>.math-text</code>
</div>`
  })
}

export const HeadingIcons = {
  argTypes: {
    size: {
      type: { name: 'string', required: true },
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }
  },
  args: {
    size: 'h1'
  },
  render: (args) => ({
    components: { BaseHeading, IconLocation },
    setup() {
      return { args }
    },
    template: `<div>
      <BaseHeading v-bind="args"><IconLocation class="inline" /> Heading H1</BaseHeading>
    </div>`
  })
}

export const TextContrast = {
  args: {},
  render: () => ({
    template: `<div style="background-image: url('https://picsum.photos/1000/400');" class="bg-cover bg-no-repeat bg-center">
  <div class="p-10 bg-black/30">
    <span class="text-h3 text-white text-contrast">
      This text uses a text shadow that increases readability when used with a semi-transparent overlay.
    </span>
  </div>
</div>`
  })
}
