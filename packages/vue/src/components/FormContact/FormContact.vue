<template>
  <LayoutHelper indent="col-3">
    <hr ref="FormContact" class="text-gray-light-mid mb-10" />
    <div v-show="!submitted" class="mb-10">
      <form @submit.prevent="submit">
        <BaseHeading level="h2" size="h6">Contact Information</BaseHeading>
        <div class="mt-8">
          <label
            id="full_name_label"
            for="full_name"
            class="text-gray-dark text-subtitle"
          >
            Name <span class="text-jpl-red">*</span>
          </label>
          <div class="mt-2">
            <input
              id="full_name"
              type="text"
              name="full_name"
              required
              aria-required="true"
              aria-labelledby="full_name_label"
              placeholder="enter your first and last name"
              class="w-full px-4 py-3"
            />
          </div>
        </div>
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
              type="text"
              name="email"
              required
              aria-required="true"
              aria-labelledby="email_label"
              placeholder="enter your email"
              class="w-full px-4 py-3"
            />
          </div>
        </div>
        <BaseHeading level="h2" size="h6" class="mt-12">Write Us</BaseHeading>
        <div class="mt-8">
          <label
            id="subject_label"
            for="subject"
            class="text-gray-dark text-subtitle"
          >
            Subject <span class="text-jpl-red">*</span>
          </label>
          <div class="mt-2">
            <input
              id="subject"
              type="text"
              name="subject"
              required
              aria-required="true"
              aria-labelledby="subject_label"
              placeholder="write a subject"
              class="w-full px-4 py-3"
            />
          </div>
        </div>
        <div class="mt-8">
          <label
            id="message_label"
            for="message"
            class="text-subtitle text-gray-dark"
          >
            Message <span class="text-jpl-red">*</span>
          </label>
          <div class="mt-2">
            <textarea
              id="message"
              name="message"
              required
              aria-required="true"
              aria-labelledby="message_label"
              placeholder="write your message..."
              rows="4"
              class="w-full px-4 py-3"
            ></textarea>
          </div>
        </div>
        <div class="mt-4">
          <BaseButton type="submit" variant="primary">Submit</BaseButton>
        </div>
      </form>
    </div>

    <!-- success -->
    <div v-show="submitted" class="pt-10 text-center">
      <BaseHeading level="h2">Thank you!</BaseHeading>
      <div
        class="text-jpl-aqua h-22 w-22 p-5 mx-auto my-8 text-6xl font-bold border-4 rounded-full"
      >
        &#10003;
      </div>
      <p class="text-h5">Your feedback has been sent.</p>
    </div>
  </LayoutHelper>
</template>
<script>
import { defineComponent } from 'vue'
import qs from 'qs'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseButton from './../BaseButton/BaseButton.vue'

export default defineComponent({
  name: 'FormContact',
  components: {
    LayoutHelper,
    BaseHeading,
    BaseButton,
  },
  data() {
    return {
      submitted: false,
    }
  },
  methods: {
    focus(elem) {
      window.scrollTo(0, elem.offsetTop + 100)
      elem.focus()
    },
    validate(e) {
      const fields = ['full_name', 'email', 'subject', 'message']
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
        const url = 'https://formspree.io/f/xpzvnnzn'
        const request = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body: qs.stringify({
            full_name: data.full_name,
            email: data.email,
            subject: data.subject,
            message: data.message,
          }),
        }
        fetch(url, request)
      }
    },
    reveal() {
      this.submitted = true
      if (this.$refs && this.$refs.FormContact) {
        this.$scrollTo(this.$refs.FormContact, 0, { offset: -100 })
      }
    },
  },
})
</script>
