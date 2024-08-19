import MetaPanel from './MetaPanel.vue'

export default {
  title: 'Components/Utilities/MetaPanel',
  component: MetaPanel,
  tags: ['!autodocs'],
  decorators: [
    () => ({
      template: `<div><div class="h-40 w-full max-w-screen-3xl mx-auto bg-gray-dark"><p class="text-white">Dark background for demo purposes only and not part of the component.</p></div><div id="storyDecorator"><story/></div><div class="h-40 w-full max-w-screen-3xl mx-auto bg-gray-dark"><p class="text-white">Dark background for demo purposes only and not part of the component.</p></div></div>`
    })
  ],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    theme: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: ['primary', 'secondary', 'stars']
    }
  }
}

// stories
export const BaseStory = {
  name: 'MetaPanel',
  args: {
    negativeTop: true,
    negativeBottom: true,
    button: 'View Standards',
    primarySubject: { subject: 'Math' },
    additionalSubjects: [{ subject: 'Science' }],
    time: '30mins - hr',
    gradeLevels: [
      { gradeLevel: 'All Ages' },
      { gradeLevel: 'K' },
      { gradeLevel: '1' },
      { gradeLevel: '2' },
      { gradeLevel: '5' },
      { gradeLevel: '6' },
      { gradeLevel: '7' },
      { gradeLevel: '8' }
    ],
    standards: [
      {
        standard: {
          code: 'CCRA.R.1',
          definition:
            'Read closely to determine what the text says explicitly and to make logical inferences from it; cite specific textual evidence when writing or speaking to support conclusions drawn from the text. Test<sub>render</sub> and test<sup>render</sup>. ',
          domain: {
            domain: 'College and Career Readiness Anchor Standards for Reading'
          },
          type: 'ccss_english_language_arts'
        }
      },
      {
        standard: {
          code: 'RL.3.2',
          definition:
            'Recount stories, including fables, folktales, and myths from diverse cultures; determine the central message, lesson, or moral and explain how it is conveyed through key details in the text.',
          domain: {
            domain: 'Reading Standards for Literature'
          },
          type: 'ccss_english_language_arts'
        }
      },
      {
        standard: {
          code: 'RL.1.5',
          definition:
            'Explain major differences between books that tell stories and books that give information, drawing on a wide reading of a range of text types.',
          domain: {
            domain: 'Reading Standards for Literature'
          },
          type: 'ccss_english_language_arts'
        }
      },
      {
        standard: {
          code: 'K.CC.A',
          definition: 'Know number names and the count sequence.',
          domain: {
            domain: 'Counting and Cardinality'
          },
          type: 'ccss_maths'
        }
      },
      {
        standard: {
          code: 'K.CC.A.3',
          definition:
            'Write numbers from 0 to 20. Represent a number of objects with a written numeral 0-20 (with 0 representing a count of no objects).',
          domain: {
            domain: 'Counting and Cardinality'
          },
          type: 'ccss_maths'
        }
      },
      {
        standard: {
          code: 'K-PS2-1',
          definition:
            'Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls on the motion of an object.',
          domain: {
            domain: 'Physical Sciences'
          },
          type: 'ngss'
        }
      }
    ]
  }
}
