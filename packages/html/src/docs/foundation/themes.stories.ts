export default {
  title: 'Foundation/Themes',
  tags: ['!autodocs']
}

const InternalTemplate = () => `<div>
  <div class="ThemeInternal">
    <!-- BaseLink -->
    <div>
      <a
        class="group cursor-pointer -default underline text-theme-color can-hover:hover:text-theme-color-hover"
      >
        Internal Theme: BaseLink 
      </a>
    </div>
    <!-- /BaseLink -->
  </div>
  <div>
  <!-- BaseLink -->
    <div>
      <a
        class="group cursor-pointer -default underline text-theme-color can-hover:hover:text-theme-color-hover"
      >
        Default Theme: BaseLink
      </a>
    </div>
    <!-- /BaseLink -->
  </div>
</div>`

export const Internal = {
  render: InternalTemplate.bind({})
}

const AdaptiveTextTemplate = () => `<p class="ThemeLight p-4">
  <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
    ThemeLight (usually the default)
  </a>
  </p>
  <p class="ThemeDark bg-black p-4">
  <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
    ThemeDark
  </a>
  </p>
  <div class="ThemeInternal">
  <p class="ThemeLight p-4">
    <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
      ThemeInternal ThemeLight
    </a>
  </p>
  <p class="ThemeDark bg-black p-4">
    <a class="cursor-pointer font-bold text-theme-color can-hover:hover:text-theme-color-hover">
      ThemeInternal ThemeDark
    </a>
  </p>
</div>`

export const AdaptiveText = {
  render: AdaptiveTextTemplate.bind({})
}
