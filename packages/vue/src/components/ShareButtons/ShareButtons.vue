<template>
  <div
    class="ShareButtons relative flex flex-row items-start border-collapse print:hidden"
    :class="{ 'lg:absolute lg:top-0 lg:left-0 lg:flex-col': !inline }"
  >
    <BaseButton
      variant="social"
      class="-facebook w-12 h-12 !text-2xl"
      :href="facebookLink"
      aria-label="Share to Facebook"
      target="_blank"
      rel="noopener"
    >
      <template #icon>
        <IconSocialFacebook />
      </template>
    </BaseButton>

    <BaseButton
      variant="social"
      class="-twitter w-12 h-12 -ml-px !text-2xl"
      :class="{ 'lg:ml-0 lg:-mt-px': !inline }"
      :href="twitterLink"
      aria-label="Share to X"
      target="_blank"
      rel="noopener"
    >
      <template #icon>
        <IconSocialTwitter />
      </template>
    </BaseButton>

    <BaseButton
      variant="social"
      class="-reddit w-12 h-12 -ml-px !text-2xl"
      :class="{ 'lg:ml-0 lg:-mt-px': !inline }"
      :href="redditLink"
      aria-label="Share to Reddit"
      target="_blank"
      rel="noopener"
    >
      <template #icon>
        <IconSocialReddit />
      </template>
    </BaseButton>

    <BaseButton
      variant="social"
      class="w-12 h-12 -ml-px !text-2xl"
      :class="{ 'lg:ml-0 lg:-mt-px': !inline }"
      :href="mailLink"
      aria-label="Share via Email"
      target="_blank"
      rel="noopener"
    >
      <template #icon>
        <IconSocialEmail />
      </template>
    </BaseButton>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mixinCanonicalUrl } from './../../utils/mixins'
import BaseButton from './../BaseButton/BaseButton.vue'
import IconSocialFacebook from './../Icons/IconSocialFacebook.vue'
import IconSocialTwitter from './../Icons/IconSocialTwitter.vue'
import IconSocialReddit from './../Icons/IconSocialReddit.vue'
import IconSocialEmail from './../Icons/IconSocialEmail.vue'

export default defineComponent({
  name: 'ShareButtons',
  components: {
    BaseButton,
    IconSocialFacebook,
    IconSocialTwitter,
    IconSocialReddit,
    IconSocialEmail
  },
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    inline: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    encodedTitle(): string {
      return encodeURIComponent(this.title)
    },
    encodedURL(): string {
      return encodeURIComponent(mixinCanonicalUrl(this.url))
    },
    facebookLink(): string {
      // See: https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.5
      // https://www.facebook.com/dialog/feed?app_id=${appID}&link=${this.encodedURL}
      // If we don't want an app id, this article describes an alternate way:
      // https://css-tricks.com/simple-social-sharing-links/
      // e.g. https://www.facebook.com/sharer.php?u=${this.encodedURL}
      return `https://www.facebook.com/dialog/feed?app_id=361412888534196&link=${this.encodedURL}`
    },
    twitterLink(): string {
      const handle = encodeURIComponent('NASAJPL')
      return `https://twitter.com/share?url=${this.encodedURL}&text=${this.encodedTitle}&via=${handle}`
    },
    redditLink(): string {
      return `https://reddit.com/submit?url=${this.encodedURL}&title=${this.encodedTitle}`
    },
    mailLink(): string {
      return `mailto:?body=${this.encodedTitle}:%20${this.encodedURL}&subject=${this.encodedTitle}`
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/ShareButtons';
</style>
