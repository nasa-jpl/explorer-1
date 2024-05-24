import { IconLocationTemplate } from './../../components/Icons/IconLocation'

export default {
  title: 'Foundation/Typography',
  tags: ['!autodocs']
}

const FontsTemplate = () => `<div class="Fonts md:grid-cols-2 grid gap-2 mt-4">
  <div>
    <h3 id="primary" class="inline-block align-top mr-4 font-primary">
      Metropolis
      <br />
      <code class="text-base">.font-primary</code>
    </h3>
    <ol class="list-none inline-block">
      <li>
        <span class="leading-loose">
          <span class="capitalize font-primary font-light">
            Metropolis light
          </span>
          <code>.font-light</code>
        </span>
      </li>
      <li>
        <span class="leading-loose">
          <span class="capitalize font-primary font-normal">
            Metropolis normal
          </span>
          <code>.font-normal</code>
        </span>
      </li>
      <li>
        <span class="leading-loose">
          <span class="capitalize font-primary font-medium">
            Metropolis medium
          </span>
          <code>.font-medium</code>
        </span>
      </li>
      <li>
        <span class="leading-loose">
          <span class="capitalize font-primary font-semibold">
            Metropolis semi bold
          </span>
          <code>.font-semibold</code>
        </span>
      </li>
      <li>
        <span class="leading-loose">
          <span class="capitalize font-primary font-bold">Metropolis bold</span>
          <code>.font-bold</code>
        </span>
      </li>
      <li>
        <span class="leading-loose">
          <span class="capitalize font-primary font-extrabold">
            Metropolis extra bold
          </span>
          <code>.font-extrabold</code>
        </span>
      </li>
    </ol>
  </div>
  <div>
    <h3 id="secondary" class="inline-block align-top mr-4 font-secondary">
      Archivo Narrow
      <br />
      <code class="text-base">.font-secondary</code>
    </h3>
    <ol class="list-none inline-block">
      <li></li>
      <li></li>
      <li></li>
      <li>
        <span class="leading-loose">
          <span class="capitalize font-secondary font-semibold">
            Archivo Narrow semi bold
          </span>
          <code>.font-semibold</code>
        </span>
      </li>
      <li>
        <span class="leading-loose">
          <span class="capitalize font-secondary font-bold">
            Archivo Narrow bold
          </span>
          <code>.font-bold</code>
        </span>
      </li>
      <li></li>
    </ol>
  </div>
</div>`

export const Fonts = {
  render: FontsTemplate.bind({})
}

const TextColorTemplate = () => `<div>
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

export const TextColor = {
  render: TextColorTemplate.bind({})
}

const TextStylesTemplate = () => `<div>
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
</div>`

export const TextStyles = {
  render: TextStylesTemplate.bind({})
}

const testHeadingIcon = IconLocationTemplate({
  customClass: 'inline'
})

const HeadingIconsTemplate = () => `<div>
  <p class="text-h1-alt mt-8">${testHeadingIcon}Header H1 Alt</p>
  <code>.text-h1-alt</code>
  <p class="text-h1 mt-8">${testHeadingIcon}Header H1</p>
  <code>h1, .text-h1</code>
  <p class="text-h2 mt-8">${testHeadingIcon}Header H2</p>
  <code>h2, .text-h2</code>
  <p class="text-h3 mt-8">${testHeadingIcon}Header H3</p>
  <code>h3, .text-h3</code>
  <p class="text-h4 mt-8">${testHeadingIcon}Header H4</p>
  <code>h4, .text-h4</code>
  <p class="text-h5 mt-8">${testHeadingIcon}Header H5</p>
  <code>h5, .text-h5</code>
  <p class="text-h6 mt-8">${testHeadingIcon}Header H6</p>
  <code>h6, .text-h6</code>
</div>`

export const HeadingIcons = {
  render: HeadingIconsTemplate.bind({})
}

const TextContrastTemplate =
  () => `<div style="background-image: url(http://source.unsplash.com/b-P6xrDMFSU); background-color: #000;" class="bg-cover bg-no-repeat bg-center">
  <div class="p-10 bg-black/30">
    <span class="text-h3 text-white text-contrast">
      This text uses a text shadow that increases readability when used with a semi-transparent overlay.
    </span>
  </div>
</div>`

export const TextContrast = {
  render: TextContrastTemplate.bind({})
}
