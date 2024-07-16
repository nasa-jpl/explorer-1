export default {
  title: 'Foundation/Themes',
  tags: ['!autodocs']
}

const InternalTemplate = () => `<div>
  <div class="ThemeInternal">
    <!-- BaseLink -->
    <div>
      <a
        class="group cursor-pointer -default underline text-action can-hover:hover:text-action-hover"
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
        class="group cursor-pointer -default underline text-action can-hover:hover:text-action-hover"
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

const AdaptiveTextTemplate = () => `<p class="ThemeVariantLight p-4">
  <a class="cursor-pointer font-bold text-action can-hover:hover:text-action-hover">
    ThemeVariantLight (usually the default)
  </a>
  </p>
  <p class="ThemeVariantDark bg-black p-4">
  <a class="cursor-pointer font-bold text-action can-hover:hover:text-action-hover">
    ThemeVariantDark
  </a>
  </p>
  <div class="ThemeInternal">
  <p class="ThemeVariantLight p-4">
    <a class="cursor-pointer font-bold text-action can-hover:hover:text-action-hover">
      ThemeInternal ThemeVariantLight
    </a>
  </p>
  <p class="ThemeVariantDark bg-black p-4">
    <a class="cursor-pointer font-bold text-action can-hover:hover:text-action-hover">
      ThemeInternal ThemeVariantDark
    </a>
  </p>
</div>`

export const AdaptiveText = {
  render: AdaptiveTextTemplate.bind({})
}
