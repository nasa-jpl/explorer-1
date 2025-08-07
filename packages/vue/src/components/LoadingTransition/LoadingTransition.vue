<template>
  <div
    v-if="loading"
    class="loading-page animate-fadeIn"
  >
    <div class="loading-wrapper">
      <slot name="loading">
        <div class="loading"></div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoadingTransition',
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/LoadingTransition';
</style>
