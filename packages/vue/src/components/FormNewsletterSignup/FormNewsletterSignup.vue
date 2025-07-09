<template>
  <div>
    <img
      :src="iContactTrackingGif"
      alt=""
    />
    <LayoutHelper indent="col-3">
      <hr
        ref="FormNewsletterSignup"
        class="text-gray-light-mid mb-10"
      />
      <!-- iContact form -->
      <div
        v-show="!submitted"
        class="mb-10"
      >
        <form
          id="ic_signupform"
          :captcha-key="captchaKey"
          captcha-theme="light"
          new-captcha="true"
          method="POST"
          :action="iContactForm"
        >
          <BaseHeading
            level="h2"
            size="h6"
            >Contact Information</BaseHeading
          >
          <TextInput
            v-model="prefilledEmail"
            class="mt-8"
            input-name="data[email]"
            label="Email"
            type="email"
            required
            placeholder="enter your email"
          />

          <TextInput
            class="mt-8"
            input-name="data[fname]"
            label="First Name"
            type="text"
            placeholder="enter your first name"
          />

          <TextInput
            class="mt-8"
            input-name="data[lname]"
            label="Last Name"
            type="text"
            maxlength="64"
            placeholder="enter your last name"
          />

          <TextInput
            class="mt-8"
            input-name="data[zip]"
            label="Zip"
            type="text"
            maxlength="10"
            pattern="[0-9]{5}(-[0-9]{4})?"
            title="Five digit zip code"
            placeholder="enter your 5-digit zip code"
          />

          <BaseHeading
            level="h2"
            size="h6"
            class="mt-12"
          >
            Subscribe to Email Groups
          </BaseHeading>
          <div
            dataname="listGroups"
            data-label="Which email groups would you like to join?"
          >
            <div class="mt-8">
              <BaseRadioGroup
                heading="JPL News"
                sub-heading="Choose how frequently you want to receive updates (opt out anytime):"
                group="email"
                title="Email Groups"
                preselected="breaking"
                :options="emailGroups"
              />
            </div>
          </div>
          <div class="mt-4 lg:mt-8 submit-container">
            <BaseButton
              type="submit"
              variant="primary"
              >Submit</BaseButton
            >
          </div>
        </form>
      </div>

      <!-- success -->
      <div
        v-show="submitted"
        class="pt-10 text-center"
      >
        <BaseHeading level="h2">Thank you!</BaseHeading>
        <div
          class="text-jpl-blue-light h-22 w-22 p-5 mx-auto my-8 text-6xl font-bold border-4 rounded-full"
        >
          &#10003;
        </div>
        <p class="text-h6">Check your inbox to verify your email.</p>
      </div>
    </LayoutHelper>
    <div class="hidden-container"></div>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { stringify } from 'fast-qs'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
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
    text: 'All JPL News delivered immediately',
    value: '41031',
    alt: 'Lists',
    name: 'data[listGroups][]'
  },
  {
    id: 'daily',
    title: 'Day in Review',
    text: 'Daily JPL news summary',
    value: '41032',
    alt: 'Lists',
    name: 'data[listGroups][]'
  },
  {
    id: 'weekly',
    title: 'Week in Review',
    text: 'Weekly JPL news summary',
    value: '41033',
    alt: 'Lists',
    name: 'data[listGroups][]'
  },
  {
    id: 'monthly',
    title: 'Month in Review',
    text: 'Monthly JPL news summary',
    value: '41034',
    alt: 'Lists',
    name: 'data[listGroups][]'
  }
]

export default defineComponent({
  name: 'FormNewsletterSignup',
  components: {
    LayoutHelper,
    BaseHeading,
    BaseButton,
    BaseRadioGroup,
    TextInput
  },
  data() {
    return {
      prefilledEmail: null,
      submitted: false,
      iContactForm,
      iContactTrackingGif,
      captchaKey,
      emailGroups
    }
  },
  mounted() {
    if (this.$route && this.$route.query.email != null) {
      this.prefilledEmail = this.$route.query.email
    }
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
    focus(elem) {
      window.scrollTo(0, elem.offsetTop + 100)
      elem.focus()
    },
    validate(e) {
      const fields = ['email']
      const data = {}
      for (const index in fields) {
        const key = fields[index]
        const elem = e.target.elements[key]
        if (elem.value === '') {
          this.focus(elem)
          const name = key.replace('_', ' ')
          alert('Please fill out the ' + name + ' field.')
          return false
        } else {
          data[key] = elem.value
        }
      }
      return data
    },
    submit(e) {
      const data = this.validate(e)
      if (data !== false) {
        this.reveal()
        const request = {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          body: stringify({
            'data[email]': data.email,
            'data[fname]': data.first_name,
            'data[lname]': data.last_name,
            'data[zip]': data.zip_code,
            'data[listGroups][]': data.listGroups
          })
        }
        fetch(iContactForm, request)
      }
    },
    reveal() {
      this.submitted = true
      if (this.$refs && this.$refs.FormNewsletterSignup) {
        this.$scrollTo(this.$refs.FormNewsletterSignup, 0, { offset: 100 })
      }
    }
  }
})
</script>

<style lang="css">
html {
  scroll-padding-top: 150px;
}
</style>
