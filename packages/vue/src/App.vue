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
    unitPair="MI_KM"
    :value="14.33"
    :secondValue="undefined"
    valueSystem="imperial"
    >
    <span class="text-stats-xl">{{ slotProps.formattedValue }}</span>
    </base-unit-toggle>
    <block-twitter-embed :data="{username: 'NASAJPL'}" />
    <p class="text-action">Action color</p>
    <p class="text-emphasis">Emphasis color</p>
  </div>
</template>
