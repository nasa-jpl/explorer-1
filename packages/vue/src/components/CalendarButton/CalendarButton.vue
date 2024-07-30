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
    isAllDay: {
      type: Boolean,
      required: false,
      default: false
    },

    startDatetime: {
      type: String,
      required: true
    },
    endDatetime: {
      type: String,
      required: false,
      default: undefined
    },
    title: {
      type: String,
      required: false,
      default: undefined
    },
    location: {
      type: String,
      required: false,
      default: undefined
    },
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

  mounted() {
    this.init()
  },
  methods: {
    init() {
      // this.icalendar = new ICalendar(this.options)
      let recurrence = {}
      if (this.endDatetime && this.isAllDay) {
        // Calculate how many full days
        const startDateDayjs = dayjs(this.startDatetime)
        const endDateDayjs = dayjs(this.endDatetime)
        const difference = endDateDayjs.diff(startDateDayjs, 'day') + 1
        recurrence = { frequency: 'DAILY', interval: 1, count: difference }
      }

      this.options = {
        title: this.title ? this.title : undefined,
        location: this.location ? this.addSlashes(this.location) : undefined,
        description: this.description ? this.description : undefined,
        start: new Date(this.startDatetime),
        end: !this.isAllDay && this.endDatetime ? new Date(this.endDatetime) : undefined,
        recurrence
      }
      this.icalendar = new ICalendar(this.options)
    },
    addSlashes(string: string): string {
      // Escape special characters COMMA, SEMI-COLON and BACKSLASH
      // as temporary fix for this issue https://github.com/jshor/datebook/issues/179
      // regex based of https://stackoverflow.com/a/770533
      // eslint-disable-next-line
      return string.replace(/[,;\\]/g, '\\$&').replace(/\u0000/g, '\\0')
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
      // this.icalendar.render()
      console.log(this.icalendar.render())
    }
  }
})
</script>
