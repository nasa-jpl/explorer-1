<template>
  <div>
    <base-button variant="secondary"> Button Text </base-button>
    <base-link
      variant="primary"
      href="#"
      >Base Link</base-link
    >
    <base-unit-toggle
      v-slot="slotProps"
      unit-pair="MI_KM"
      :value="14.33"
      :second-value="undefined"
      value-system="imperial"
    >
      <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
    </base-unit-toggle>
    <p class="text-action">Action color</p>
    <p class="text-primary">Primary color</p>
    <p class="text-secondary">Secondary color</p>
  </div>
</template>
