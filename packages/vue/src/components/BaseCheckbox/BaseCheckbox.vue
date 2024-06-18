<template>
  <div>
    <input
      v-model="model"
      :id="bucket.key_as_string ? generateId(bucket.key_as_string) : generateId(bucket.key)"
      type="checkbox"
      class="text-theme-red focus:ring-2 focus:ring-jpl-red flex-shrink-0 w-5 h-5 mt-px mr-1 align-middle border rounded-none"
    />
    <label
      :for="bucket.key_as_string ? generateId(bucket.key_as_string) : generateId(bucket.key)"
      class="form-check-label pl-2 tracking-normal align-middle"
    >
      {{ prettyFilterNames(bucket.key_as_string ? bucket.key_as_string : bucket.key) }}
      <span class="text-gray-mid"> ({{ bucket.doc_count.toLocaleString() }}) </span>
    </label>
  </div>
</template>
<script setup lang="ts">

import { ref, onMounted } from 'vue'

interface BaseCheckboxProps {
  checked?: boolean
  bucket: any
  groupKey?: string
}

// define props
const props = withDefaults(defineProps<BaseCheckboxProps>(), {
  checked: false,
  value: undefined,
  id: undefined,
  bucket: undefined,
  groupKey: undefined,
})

defineEmits(['input'])

const model = defineModel()

const generateId = (value: any) => {
  let valueString = String(value)
  valueString = valueString.split(' ').join('')
  return `filter_${props.groupKey}_${valueString}`
}

const prettyFilterNames = (key: string) => {
  if (key === 'news.News') {
    return 'News & Features'
  }
  if (key === 'home.HomePage') {
    return 'Homepage'
  }
  if (key === 'missions.Mission') {
    return 'Missions'
  }
  if (key === 'events.EventPage') {
    return 'Events'
  }
  if (key === 'image_detail.ImageDetailPage') {
    return 'Images'
  }
  if (key === 'audio_detail.AudioIndexPage') {
    return 'Audio Index'
  }
  if (key === 'audio_detail.AudioDetailPage') {
    return 'Audio'
  }
  if (key === 'infographics.InfographicsDetailPage') {
    return 'Infographics'
  }
  if (key === 'image_detail.CuratedGalleryPage') {
    return 'Curated Gallery'
  }
  if (key === 'topics.TopicPage') {
    return 'Topics'
  }
  if (key === 'asteroid_watch.AsteroidWatchIndexPage') {
    return 'Asteroid Watch Index'
  }
  if (key === 'asteroid_watch.AsteroidWatchContentPage') {
    return 'Asteroid Watch'
  }
  if (key === 'missions.MissionsIndexPage') {
    return 'Missions Index'
  }
  if (key === 'information_pages.PageContent') {
    return 'Information pages'
  }
  if (key === 'robotics.RobotPage') {
    return 'Robots'
  }
  if (key === 'video_detail.VideoDetailPage') {
    return 'Video'
  }
  if (key === 'podcasts.PodcastPage') {
    return 'Podcasts'
  }
  if (key === 'go_pages.GoHomePage') {
    return 'Go Sites'
  }
  if (key === 'press_kits.PressKitHomePage') {
    return 'Press Kits'
  }
  if (key === 'profiles.ProfilePage') {
    return 'People'
  }
  return key
}


</script>
