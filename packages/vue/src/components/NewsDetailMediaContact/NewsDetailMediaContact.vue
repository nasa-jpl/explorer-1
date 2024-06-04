<template>
  <div v-if="hasContent">
    <h2 class="text-h6 pt-5 md:pt-8 border-t border-gray-mid md:mb-8 mb-5">
      News Media Contact
    </h2>
    <address
      v-for="contact in contacts"
      :key="contact.contact.id"
      class="text-body-md mb-5 not-italic"
    >
      <p v-if="contact.contact.name">{{ contact.contact.name }}</p>
      <p v-if="contact.contact.address">{{ contact.contact.address }}</p>
      <p v-if="contact.contact.phone">{{ contact.contact.phone }}</p>
      <p
        v-if="contact.contact.email"
        class="BlockText"
        v-html="formatEmail(contact.contact.email)"
      ></p>
    </address>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

interface Contact {
  contact: {
    name: string
    address: string
    phone: string
    email: string
  }
}

export default defineComponent({
  name: 'NewsDetailMediaContact',
  props: {
    contacts: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  computed: {
    hasContent() {
      return (this.contacts as Contact[]).some(
        (c: Contact) =>
          c.contact.name ||
          c.contact.address ||
          c.contact.phone ||
          c.contact.email
      )
    },
  },
  methods: {
    formatEmail(email: string) {
      const emailAddresses = email.split(/[,/]+/)
      let iterations = emailAddresses.length
      if (iterations === 1) {
        return (
          '<a href="mailto:' + email + '" target="_blank">' + email + '</a>'
        )
      } else {
        let formattedEmailAddresses = ''
        emailAddresses.forEach(function (item) {
          const emailAddress = item.trim()
          if (!--iterations) {
            formattedEmailAddresses +=
              '<a href="mailto:' +
              emailAddress +
              '" target="_blank">' +
              emailAddress +
              '</a>'
          } else {
            formattedEmailAddresses +=
              '<a href="mailto:' +
              emailAddress +
              '" target="_blank">' +
              emailAddress +
              '</a> / '
          }
        })
        return formattedEmailAddresses
      }
    },
  },
})
</script>
