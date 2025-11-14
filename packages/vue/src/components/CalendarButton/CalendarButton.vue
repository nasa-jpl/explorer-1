<template>
  <BaseButton
    ref="CalendarButton"
    class="w-full"
    variant="secondary"
    compact
    @click="handleDownload"
  >
    Add to calendar
  </BaseButton>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ICalendar } from 'datebook'
import type { CalendarOptions } from 'datebook'
import { kebabCase } from 'lodash'
// @ts-ignore
import dayjs from 'dayjs'
import BaseButton from './../BaseButton/BaseButton.vue'

export default defineComponent({
  name: 'CalendarButton',
  components: {
    BaseButton
  },
  props: {
    /** Used to generate ICS file */
    isAllDay: {
      type: Boolean,
      required: false,
      default: false
    },
    /** Used to generate ICS file */
    startDate: {
      type: String,
      default: undefined
    },
    /** Used to generate ICS file */
    startDatetime: {
      type: String,
      default: undefined
    },
    /** Used to generate ICS file */
    endDatetime: {
      type: String,
      required: false,
      default: undefined
    },
    /** Used to generate ICS file */
    title: {
      type: String,
      required: false,
      default: undefined
    },
    /** Used to generate ICS file */
    location: {
      type: String,
      required: false,
      default: undefined
    },
    /** Used to generate ICS file */
    description: {
      type: String,
      required: false,
      default: undefined
    }
  },
  data(): {
    icalendar: any
    options: CalendarOptions | undefined
  } {
    return {
      icalendar: undefined,
      options: undefined
    }
  },
  computed: {
    icsDescription() {
      return `${(this.description ? this.description + '\n\n' : '') + window?.location.href}`
    }
  },

  mounted() {
    this.init()
  },
  methods: {
    init() {
      let recurrence = undefined
      if ((this.isAllDay && this.endDatetime) || (this.startDate && this.endDatetime)) {
        // Calculate how many full days
        const startDateDayjs = this.startDatetime
          ? dayjs(this.startDatetime)
          : dayjs(this.startDate).tz('America/Los_Angeles')
        const endDateDayjs = dayjs(this.endDatetime)
        const difference = endDateDayjs.diff(startDateDayjs, 'day') + 1
        recurrence = { frequency: 'DAILY', interval: 1, count: difference }
      }

      this.options = {
        title: this.title ? this.title : undefined,
        location: this.location ? this.location : undefined,
        description: this.icsDescription,
        start: this.startDatetime
          ? // @ts-ignore
            new Date(dayjs(this.startDatetime))
          : this.startDate
            ? // @ts-ignore
              new Date(dayjs(this.startDate).tz('America/Los_Angeles'))
            : new Date(),
        end: !this.isAllDay && this.endDatetime ? new Date(this.endDatetime) : undefined,
        recurrence
      }

      this.icalendar = new ICalendar(this.options)
    },
    handleDownload() {
      const ics = this.icalendar.render()
      const blob = new Blob([ics], {
        type: 'text/calendar'
      })
      const objectUrl = window.URL.createObjectURL(blob)
      let fileLink = document.createElement('a')
      fileLink.href = objectUrl
      fileLink.download = kebabCase(this.title)
      fileLink.click()
    }
  }
})
</script>
