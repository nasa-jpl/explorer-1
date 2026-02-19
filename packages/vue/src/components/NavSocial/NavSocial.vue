<template>
  <div class="NavSocial relative flex flex-row items-start border-collapse">
    <BaseButton
      v-for="(item, index) in socialLinks"
      :key="index"
      :variant="dark ? 'dark' : 'social'"
      class="-facebook w-12 h-12 !text-2xl"
      :class="{
        '-facebook': item.facebook,
        '-twitter': item.twitter,
        '-instagram': item.instagram,
        '-youtube': item.youtube,
        '-mr-px': index !== socialLinks.length - 1
      }"
      :href="item.url"
      :aria-label="item.label"
      target="_blank"
      rel="noopener"
    >
      <template #iconRight>
        <IconSocialFacebook v-if="item.facebook" />
        <IconSocialTwitter v-else-if="item.twitter" />
        <IconSocialInstagram v-else-if="item.instagram" />
        <IconSocialYoutube v-else-if="item.youtube" />
      </template>
    </BaseButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseButton from './../BaseButton/BaseButton.vue'
import IconSocialFacebook from './../Icons/IconSocialFacebook.vue'
import IconSocialTwitter from './../Icons/IconSocialTwitter.vue'
import IconSocialInstagram from './../Icons/IconSocialInstagram.vue'
import IconSocialYoutube from './../Icons/IconSocialYoutube.vue'

const wwwSocialLinks = [
  {
    facebook: true,
    url: 'http://www.facebook.com/NASAJPL',
    label: 'Follow JPL on Facebook'
  },
  {
    twitter: true,
    url: 'https://x.com/NASAJPL',
    label: 'Follow JPL on X'
  },
  {
    instagram: true,
    url: 'http://instagram.com/nasajpl',
    label: 'Follow JPL on Instagram'
  },
  {
    youtube: true,
    url: 'http://www.youtube.com/user/JPLnews?sub_confirmation=1',
    label: 'Follow JPL on YouTube'
  }
]

const eduSocialLinks = [
  {
    facebook: true,
    url: 'http://facebook.com/nasajpledu',
    label: 'Follow JPL Education on Facebook'
  },
  {
    twitter: true,
    url: 'http://x.com/nasajpl_edu',
    label: 'Follow JPL Education on X'
  },
  {
    instagram: true,
    url: 'http://instagram.com/nasajpl_edu',
    label: 'Follow JPL Education on Instagram'
  },
  {
    youtube: true,
    url: 'https://www.youtube.com/@nasajpledu3401',
    label: 'Follow JPL Education on YouTube'
  }
]

export default defineComponent({
  name: 'NavSocial',
  components: {
    BaseButton,
    IconSocialFacebook,
    IconSocialTwitter,
    IconSocialInstagram,
    IconSocialYoutube
  },
  props: {
    dark: {
      type: Boolean,
      required: false,
      default: false
    },
    edu: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    socialLinks() {
      return this.edu ? eduSocialLinks : wwwSocialLinks
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/NavSocial';
</style>
