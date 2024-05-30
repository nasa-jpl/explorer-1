<script setup lang="ts">
import BaseButton from './components/BaseButton/BaseButton.vue'
import BaseLink from './components/BaseLink/BaseLink.vue'
</script>

<template>
  <div>
    <base-button variant="secondary"> Button Text </base-button>
    <base-link
      variant="primary"
      href="#"
      >Base Link</base-link
    >
    <p class="text-action">Action color</p>
    <p class="text-emphasis">Emphasis color</p>
  </div>
</template>
