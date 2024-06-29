<template>
  <BaseButton
    class="w-full"
    variant="secondary"
    compact
    @click="
      // @ts-ignore
      icalendar.download()
    "
  >
    Add to calendar
  </BaseButton>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ICalendar } from 'datebook'
import type { CalendarOptions } from 'datebook'
// @ts-ignore
import * as dayjs from 'dayjs'
import BaseButton from './../BaseButton/BaseButton.vue'

export default defineComponent({
  name: 'CalendarButton',
  components: {
    BaseButton
  },
  props: {
    isAllDay: {
      type: Boolean,
      required: true
    },
    startDatetime: {
      type: String,
      required: true
    },
    endDatetime: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    }
  },
  computed: {
    icalendar(): ICalendar {
      let recurrence = {}
      if (this.endDatetime && this.isAllDay) {
        // Calculate how many full days
        const startDateDayjs = dayjs(this.startDatetime)
        const endDateDayjs = dayjs(this.endDatetime)
        const difference = endDateDayjs.diff(startDateDayjs, 'day') + 1
        recurrence = { frequency: 'DAILY', interval: 1, count: difference }
      }

      const options: CalendarOptions = {
        title: this.title ? this.title : undefined,
        location: this.location ? this.addSlashes(this.location) : undefined,
        description: this.description ? this.description : undefined,
        start: new Date(this.startDatetime),
        end: !this.isAllDay && this.endDatetime ? new Date(this.endDatetime) : undefined,
        recurrence
      }

      return new ICalendar(options)
    }
  },
  methods: {
    addSlashes(string: string): string {
      // Escape special characters COMMA, SEMI-COLON and BACKSLASH
      // as temporary fix for this issue https://github.com/jshor/datebook/issues/179
      // regex based of https://stackoverflow.com/a/770533
      // eslint-disable-next-line
      return string.replace(/[,;\\]/g, '\\$&').replace(/\u0000/g, '\\0')
    }
  }
})
</script>
