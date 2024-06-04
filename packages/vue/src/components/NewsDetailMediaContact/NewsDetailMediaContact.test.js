import { mount } from '@vue/test-utils'

import NewsDetailMediaContact from './NewsDetailMediaContact.vue'

describe('NewsDetailMediaContact', () => {
  test('does not display anything if there are no contacts', () => {
    const wrapper = mount(NewsDetailMediaContact, {
      propsData: { contacts: [] },
    })
    expect(wrapper.find('*').exists()).toBe(false)
  })

  test('does not display for empty contacts', () => {
    const wrapper = mount(NewsDetailMediaContact, {
      propsData: {
        contacts: [
          {
            contact: {
              name: '',
              address: '',
              email: '',
              phone: '',
            },
          },
        ],
      },
    })
    expect(wrapper.find('*').exists()).toBe(false)
  })
})
