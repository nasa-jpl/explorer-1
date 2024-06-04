<template>
  <form class="TheFooterSignup">
    <div
      class="border-opacity-40 relative flex items-center border border-white"
    >
      <input
        v-model="email"
        class="EmailInput border-0 text-opacity-90 pl-14 relative z-10 w-full py-3 pr-3 text-sm text-white bg-transparent"
        type="email"
        name="email"
        required
        placeholder="Enter your email address"
        aria-label="Email"
      />
      <div class="absolute inset-0 flex items-center">
        <button
          type="submit"
          class="relative z-20 p-3 pl-5"
          aria-label="Submit"
          @click.prevent="submit"
        >
          <IconSocialEmail class="text-xl text-white" />
        </button>
      </div>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import IconSocialEmail from './../Icons/IconSocialEmail.vue'

export default defineComponent({
  name: 'TheFooterSignUp',
  components: {
    IconSocialEmail,
  },
  data() {
    return {
      email: null,
    }
  },
  methods: {
    submit() {
      // TODO: Make it work w/ Router Push and get callback from iContact API
      // this.$router.push({
      //   name: 'JPL Newsletter Signup',
      //   path: '/newsletter-signup',
      //   query: {
      //     email: this.email,
      //   },
      // })
      window.location.href = '/newsletter-signup?email=' + this.email
    },
  },
})
</script>
<style lang="scss">
.TheFooterSignup {
  .EmailInput::placeholder {
    @apply text-white text-opacity-40;
  }
}
</style>
