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
          <div class="mt-8">
            <label
              id="email_label"
              for="email"
              class="text-gray-dark text-subtitle"
            >
              Email <span class="text-jpl-red">*</span>
            </label>
            <div class="mt-2">
              <input
                id="email"
                v-model="prefilledEmail"
                type="email"
                name="data[email]"
                required
                aria-required="true"
                aria-labelledby="email_label"
                placeholder="enter your email"
                class="w-full px-4 py-3"
              />
            </div>
          </div>
          <div class="mt-8">
            <label
              id="first_name_label"
              for="first_name"
              class="text-gray-dark text-subtitle"
            >
              First Name
            </label>
            <div class="mt-2">
              <input
                id="first_name"
                type="text"
                name="data[fname]"
                maxlength="32"
                aria-required="false"
                aria-labelledby="first_name_label"
                placeholder="enter your first name"
                class="w-full px-4 py-3"
              />
            </div>
          </div>
          <div class="mt-8">
            <label
              id="last_name_label"
              for="last_name"
              class="text-gray-dark text-subtitle"
            >
              Last Name
            </label>
            <div class="mt-2">
              <input
                id="last_name"
                type="text"
                name="data[lname]"
                maxlength="64"
                aria-required="false"
                aria-labelledby="last_name_label"
                placeholder="enter your last name"
                class="w-full px-4 py-3"
              />
            </div>
          </div>
          <div class="mt-8">
            <label
              id="zip_code_label"
              for="zip_code"
              class="text-gray-dark text-subtitle"
            >
              Zip
            </label>
            <div class="mt-2">
              <input
                id="zip_code"
                type="text"
                name="data[zip]"
                pattern="[0-9]{5-10}"
                maxlength="10"
                title="Five digit zip code"
                aria-required="false"
                aria-labelledby="zip_code_label"
                placeholder="enter your 5-digit zip code"
                class="w-full px-4 py-3"
              />
            </div>
          </div>
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
            <div class="mt-8">
              <BaseCheckboxGroup
                heading="JPL Education Updates"
                sub-heading="The JPL Education Office also offers email updates about classroom activities and workshops for educators, projects and competitons for K-12 students and internship opportunities at JPL and NASA."
                group="education"
                title="Education Email Groups"
                :options="eduEmailGroups"
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
import qs from 'qs'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseButton from './../BaseButton/BaseButton.vue'
import BaseRadioGroup from './../BaseRadioGroup/BaseRadioGroup.vue'
import BaseCheckboxGroup from './../BaseCheckboxGroup/BaseCheckboxGroup.vue'

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

const eduEmailGroups = [
  {
    id: 'educators',
    title: 'Educators',
    text: null,
    value: '21583',
    alt: 'Lists',
    name: 'data[listGroups][]'
  },
  {
    id: 'educator-workshop',
    title: 'Educators Workshops',
    text: 'Southern California',
    value: '51343',
    alt: 'Lists',
    name: 'data[listGroups][]'
  },
  {
    id: 'students',
    title: 'Students K-12',
    text: null,
    value: '29483',
    alt: 'Lists',
    name: 'data[listGroups][]'
  },
  {
    id: 'internships',
    title: 'Internships',
    text: null,
    value: '29484',
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
    BaseCheckboxGroup,
    BaseRadioGroup
  },
  data() {
    return {
      prefilledEmail: null,
      submitted: false,
      iContactForm,
      iContactTrackingGif,
      captchaKey,
      emailGroups,
      eduEmailGroups
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
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          body: qs.stringify({
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
