<template>
  <div
    class="BlockNewsletterSignup bg-gray-light edu:bg-stars edu:bg-primary-dark md:mx-0 sm:py-8 md:px-10 sm:mx-20 px-6 py-6 edu:text-white"
  >
    <div class="md:mx-16 xl:mx-24 text-center">
      <p class="text-h6 edu:text-white mb-3">{{ data.title }}</p>
      <p>{{ data.description }}</p>
    </div>
    <hr class="text-gray-mid mt-6 mb-5" />

    <div class="mb-3">
      <form
        id="ic_signupform"
        target="_blank"
        :captcha-key="captchaKey"
        captcha-theme="light"
        new-captcha="true"
        method="POST"
        :action="iContactForm"
      >
        <div
          dataname="listGroups"
          data-label="Which email groups would you like to join?"
        >
          <div>
            <BaseRadioGroup
              v-model="form.listgroups"
              heading="Frequency:"
              group="email"
              title="Email Groups"
              preselected="breaking"
              :options="emailGroups"
            />
          </div>
        </div>
        <div class="flex flex-row flex-nowrap">
          <TextInput
            v-model="form.email"
            class="email-container h-auto w-full"
            input-name="data[email]"
            label="Email"
            type="email"
            required
            placeholder="Email address"
            :show-label="false"
          />
          <div class="submit-container h-auto">
            <BaseButton
              class="text-nowrap h-full"
              variant="primary"
              compact
            >
              {{ data.buttonText }}
            </BaseButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent, type PropType } from 'vue'
import { mapStores } from 'pinia'
import type { BlockData } from './../../interfaces.ts'
import { useThemeStore } from '../../store/theme'
import BaseButton from './../BaseButton/BaseButton.vue'
import BaseRadioGroup from './../BaseRadioGroup/BaseRadioGroup.vue'
import TextInput from './../TextInput/TextInput.vue'

const iContactForm =
  'https://app.icontact.com/icp/core/mycontacts/signup/designer/form/?id=5&cid=1389932&lid=11365'

const captchaKey = '6LeCZCcUAAAAALhxcQ5fN80W6Wa2K3GqRQK6WRjA'

const iContactTrackingGif =
  'https://app.icontact.com/icp/core/signup/tracking.gif?id=5&cid=1389932&lid=11365'

const emailGroups = [
  {
    id: 'breaking',
    title: 'Latest News',
    value: '41031',
    alt: 'Lists',
    name: 'data[listGroups][]'
  },
  {
    id: 'daily',
    title: 'Daily',
    value: '41032',
    alt: 'Lists',
    name: 'data[listGroups][]'
  },
  {
    id: 'weekly',
    title: 'Weekly',
    value: '41033',
    alt: 'Lists',
    name: 'data[listGroups][]'
  },
  {
    id: 'monthly',
    title: 'Monthly',
    value: '41034',
    alt: 'Lists',
    name: 'data[listGroups][]'
  }
]

export default defineComponent({
  name: 'BlockNewsletterSignup',
  components: {
    BaseButton,
    BaseRadioGroup,
    TextInput
  },
  props: {
    data: {
      type: Object as PropType<BlockData>,
      required: true,
      default: () => ({})
    }
  },
  data() {
    return {
      submitted: false,
      form: {
        email: undefined,
        listGroups: undefined
      }
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    buttonVariant() {
      return this.themeStore.theme === 'ThemeEdu' ? 'dark' : 'primary'
    },
    iContactForm() {
      return iContactForm
    },
    iContactTrackingGif() {
      return iContactTrackingGif
    },
    captchaKey() {
      return captchaKey
    },
    emailGroups() {
      return emailGroups
    }
  },
  mounted() {
    const validationScript = document.createElement('script')
    validationScript.setAttribute(
      'src',
      'https://app.icontact.com/icp/static/form/javascripts/validation-captcha.js'
    )
    const trackingScript = document.createElement('script')
    trackingScript.setAttribute(
      'src',
      'https://app.icontact.com/icp/static/form/javascripts/tracking.js'
    )
    document.head.appendChild(validationScript, trackingScript)
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockNewsletterSignup';
</style>
