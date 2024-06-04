<template>
  <div v-if="loading" class="loading-page animate-fadeIn">
    <div class="loading-wrapper">
      <slot name="loading">
        <div class="loading"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingTransition',
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped lang="scss">
.loading-page {
  @apply fixed top-0 left-0 block w-full h-full bg-white opacity-75;

  z-index: 99999;

  .loading-wrapper {
    @apply w-full h-full min-h-full min-w-full flex flex-col justify-center items-center;

    .loading {
      @apply animate-rotate bg-transparent p-0 z-50 rounded-full h-14 w-14 opacity-75;

      border: 4px solid #888888;
      border-bottom-color: #ffffff;
    }
  }
}
</style>
