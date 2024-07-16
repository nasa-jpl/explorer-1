import NewsDetailMediaContact from './NewsDetailMediaContact.vue'

export default {
  title: 'WWW/NewsDetail/NewsDetailMediaContact',
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

export const BaseStory = { args: { contacts, releaseNumber: '2020-140' } }

export const Multiple = {
  args: {
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
}
