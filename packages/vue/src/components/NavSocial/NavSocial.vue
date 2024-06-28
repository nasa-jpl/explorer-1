<template>
  <div class="NavSocial relative flex flex-row items-start border-collapse">
    <BaseButton
      :variant="dark ? 'dark' : 'social'"
      class="-facebook w-12 h-12 text-2xl"
      href="http://www.facebook.com/NASAJPL"
      aria-label="Follow JPL on Facebook"
      target="_blank"
      rel="noopener"
    >
      <template #icon>
        <IconSocialFacebook />
      </template>
    </BaseButton>
    <BaseButton
      :variant="dark ? 'dark' : 'social'"
      class="-twitter w-12 h-12 text-2xl"
      :class="{ '-ml-px': !dark }"
      href="https://x.com/NASAJPL"
      aria-label="Follow JPL on X"
      target="_blank"
      rel="noopener"
    >
      <template #icon>
        <IconSocialTwitter />
      </template>
    </BaseButton>
    <BaseButton
      :variant="dark ? 'dark' : 'social'"
      class="-instagram w-12 h-12 text-2xl"
      :class="{ '-ml-px': !dark }"
      href="http://instagram.com/nasajpl"
      aria-label="Follow JPL on Instagram"
      target="_blank"
      rel="noopener"
    >
      <template #icon>
        <IconSocialInstagram />
      </template>
    </BaseButton>
    <BaseButton
      :variant="dark ? 'dark' : 'social'"
      class="-youtube w-12 h-12 text-3xl"
      :class="{ '-ml-px': !dark }"
      href="http://www.youtube.com/user/JPLnews?sub_confirmation=1"
      aria-label="Follow JPL on YouTube"
      target="_blank"
      rel="noopener"
    >
      <template #icon>
        <IconSocialYoutube />
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
    }
  }
})
</script>
<style lang="scss" scoped>
.BaseButton {
  @apply relative;
  &:hover {
    @apply z-10;
  }
  // we have to define these here to override the extracted border styles native to BaseButton
  &.-dark {
    @apply border-l-0 #{!important};

    &:first-child {
      @apply border-l #{!important};
    }
  }
}
</style>
