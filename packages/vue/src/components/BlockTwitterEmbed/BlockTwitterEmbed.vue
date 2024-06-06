<template>
  <div
    v-if="data"
    class="BlockTwitterEmbed lg:px-0 px-8"
  >
    <div
      ref="timeline"
      class="border-gray-light-mid mx-auto border"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'BlockTwitterEmbed',
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    render() {
      // TODO: PORT -- find another way to make this client-only
      if (typeof require !== 'undefined') {
        require('twitter-widgets').load((err, twttr) => {
          if (err) {
            console.log('[twitter-widgets] Error: ' + err)
            return
          }
          twttr.widgets.createTimeline(
            {
              sourceType: 'profile',
              screenName: this.data.username
            },
            this.$refs.timeline
          )
        })
      }
    }
  }
}
</script>

<style lang="scss">
.BlockTwitterEmbed {
  > div {
    height: 400px;
    max-height: 60vh;
    @apply overflow-y-auto;
    @screen md {
      height: 600px;
      @apply w-xl max-h-none;
    }
  }
}
</style>
