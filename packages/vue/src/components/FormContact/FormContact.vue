<template>
  <LayoutHelper indent="col-3">
    <hr
      ref="FormContact"
      class="text-gray-light-mid mb-10"
    />
    <div
      v-show="!submitted"
      class="mb-10"
    >
      <form @submit.prevent="submit">
        <BaseHeading
          level="h2"
          size="h6"
          >Contact Information</BaseHeading
        >
        <TextInput
          class="mt-8"
          input-name="full_name"
          label="Name"
          type="text"
          required
          placeholder="enter your first and last name"
        />
        <TextInput
          class="mt-8"
          input-name="email"
          label="Email"
          type="email"
          required
          placeholder="enter your email"
        />
        <BaseHeading
          level="h2"
          size="h6"
          class="mt-12"
          >Write Us</BaseHeading
        >
        <TextInput
          class="mt-8"
          input-name="subject"
          label="Subject"
          type="text"
          required
          placeholder="write a subject"
        />
        <TextArea
          class="mt-8"
          input-name="message"
          label="Message"
          input-class="w-full px-4 py-3"
          required
          placeholder="write your message..."
        />

        <div class="mt-8">
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
      <p class="text-h5">Your feedback has been sent.</p>
    </div>
  </LayoutHelper>
</template>
<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { stringify } from 'fast-qs'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BaseButton from './../BaseButton/BaseButton.vue'
import TextInput from './../TextInput/TextInput.vue'
import TextArea from './../TextArea/TextArea.vue'

export default defineComponent({
  name: 'FormContact',
  components: {
    LayoutHelper,
    BaseHeading,
    BaseButton,
    TextArea,
    TextInput
  },
  data() {
    return {
      submitted: false
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
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          body: stringify({
            full_name: data.full_name,
            email: data.email,
            subject: data.subject,
            message: data.message
          })
        }
        fetch(url, request)
      }
    },
    reveal() {
      this.submitted = true
      if (this.$refs && this.$refs.FormContact) {
        this.$scrollTo(this.$refs.FormContact, 0, { offset: -100 })
      }
    }
  }
})
</script>
