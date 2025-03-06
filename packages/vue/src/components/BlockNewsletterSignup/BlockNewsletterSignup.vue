<template>
  <div
    class="BlockNewsletterSignup bg-gray-light edu:bg-stars edu:bg-primary md:mx-0 sm:py-8 md:px-10 sm:mx-20 px-6 py-6 edu:text-white"
  >
    <div class="md:mx-16 xl:mx-24 text-center">
      <p class="text-h6 edu:text-white edu:font-extrabold mb-3">{{ data.title }}</p>
      <p>{{ data.description }}</p>
    </div>
    <hr class="text-gray-mid mt-6 mb-5" />

    <div
      v-show="!submitted"
      class="mb-3"
    >
      <form
        id="ic_signupform"
        method="POST"
        @submit.prevent="onSubmit"
      >
        <div
          dataname="listGroups"
          data-label="Which email groups would you like to join?"
        >
          <div>
            <BaseRadioGroup
              v-model="form.listGroups"
              heading="Frequency:"
              group="email"
              title="Email Groups"
              preselected="41031"
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
              class="text-nowrap"
              variant="primary"
              compact
              type="submit"
            >
              {{ data.buttonText }}
            </BaseButton>
          </div>
        </div>
      </form>
      <p
        v-if="error"
        class="mt-3 text-error"
      >
        There was an error. Please try again.
      </p>
    </div>

    <!-- success -->
    <div
      v-show="submitted"
      class="text-center"
    >
      <div
        class="text-jpl-blue-light pt-[.45rem] h-12 w-12 mx-auto mb-2 text-2xl font-bold border-2 rounded-full"
      >
        &#10003;
      </div>
      <BaseHeading
        level="h2"
        size="h6"
      >
        Thank you!
      </BaseHeading>
      <p><strong>Check your inbox to verify your email.</strong></p>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import { stringify } from 'fast-qs'
import BaseButton from './../BaseButton/BaseButton.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
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
    BaseHeading,
    BaseRadioGroup,
    TextInput
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data() {
    return {
      submitted: false,
      error: false,
      formResponse: undefined,
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
  },
  methods: {
    async onSubmit() {
      if (this.form.email) {
        const request = {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          body: stringify({
            'data[email]': this.form.email,
            'data[listGroups][]': this.form.listGroups
          })
        }
        fetch(iContactForm, request).then((response) => {
          if (response.ok) {
            console.log('success', response)
            this.reveal()
          } else {
            console.log('error', response)
            this.revealError()
          }
        })
      }
    },
    reveal() {
      this.error = false
      this.submitted = true
    },
    revealError() {
      this.submitted = false
      this.error = true
    }
  }
})
</script>
<style type="scss">
.BlockNewsletterSignup {
  fieldset > div {
    column-count: 2;
  }
  .email-container input {
    @apply mt-0 -mr-1;
  }
  .BaseRadioGroup label {
    @apply text-base text-left;
  }
}
</style>
