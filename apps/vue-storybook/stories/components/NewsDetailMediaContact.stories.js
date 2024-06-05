import NewsDetailMediaContact from '@explorer-1/vue/src/components/NewsDetailMediaContact/NewsDetailMediaContact.vue'

export default {
  title: 'Components/NewsDetail/NewsDetailMediaContact',
  component: NewsDetailMediaContact
}

const contacts = [
  {
    contact: {
      name: 'Test Person',
      address: 'Jet Propulsion Laboratory, Pasadena, Calif.',
      email: 'test.person@jpl.nasa.gov',
      phone: '818-354-1234'
    }
  }
]

const NewsDetailMediaContactTemplate = (args) => ({
  props: Object.keys(args),
  components: { NewsDetailMediaContact },
  template: `<news-detail-media-contact :contacts="contacts"  :release-number="releaseNumber"/>`
})

export const Single = NewsDetailMediaContactTemplate.bind({})
Single.args = { contacts, releaseNumber: '2020-140' }

export const Multiple = NewsDetailMediaContactTemplate.bind({})
Multiple.args = {
  contacts: [
    ...contacts,
    {
      contact: {
        name: 'Person A / Person B',
        address: '',
        email: 'person_a@jpl.nasa.gov / person_b@jpl.nasa.gov',
        phone: ''
      }
    },
    {
      contact: {
        name: 'Person A and Person B',
        address: '',
        email: 'person_a@jpl.nasa.gov, person_b@jpl.nasa.gov',
        phone: ''
      }
    },
    {
      contact: {
        name: 'Other Person',
        address: '',
        email: 'other.person@jpl.nasa.gov',
        phone: ''
      }
    },
    {
      contact: {
        name: '',
        address: '',
        email: '',
        phone: '818-354-5678'
      }
    }
  ],
  releaseNumber: '2020-140'
}
