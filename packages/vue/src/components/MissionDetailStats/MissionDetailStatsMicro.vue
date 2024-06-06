<template>
  <div class="MissionDetailStatsMicro bg-dark-blue sm:py-0 p-3 py-1 text-white">
    <div v-if="showClock && startDateTime">
      <BaseTimer
        :target-date-time="startDateTime"
        inline
        :countdown="clockType === 'countdown'"
      />
    </div>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { clockTypes } from './MissionDetailStats.vue'
import type { ClockType } from './MissionDetailStats.vue'
import BaseTimer from './../BaseTimer/BaseTimer.vue'

export default defineComponent({
  name: 'MissionDetailStatsMicro',
  components: {
    BaseTimer
  },
  props: {
    showClock: Boolean,
    startDateTime: String,
    clockType: {
      type: String as PropType<ClockType>,
      required: true,
      validator: (val: ClockType): boolean => Boolean(clockTypes[val])
    }
  }
})
</script>
<style lang="scss">
.MissionDetailStatsMicro {
  .text-stats-xl {
    @apply text-base leading-none;

    @screen sm {
      @apply text-4xl;
    }
  }

  .legend {
    @apply text-sm;
    @screen sm {
      @apply text-base;
    }
  }
}
</style>
