import PagePressKitIndex from './PagePressKitIndex.vue'

export default {
  title: 'PressKits/PagePressKitIndex',
  component: PagePressKitIndex,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0 disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    viewMode: 'canvas'
  },
  excludeStories: /.*(Data)$/
}

// template
const PagePressKitIndexTemplate = (args) => ({
  props: Object.keys(args),
  components: { PagePressKitIndex },
  template: `<PagePressKitIndex :data="data"/>`
})

// stories
export const Default = PagePressKitIndexTemplate.bind({})
Default.storyName = 'PagePressKitIndex' // single story hoisting
Default.args = {
  data: {
    title: 'Press Kits',
    summary: `Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.`,
    callToAction: [
      {
        heading: 'View all other press kits',
        text: 'Legacy Press Kits',
        page: {
          url: '/who-we-are/media-information/legacy-press-kits'
        },
        externalLink: ''
      }
    ],
    children: [
      {
        id: 1,
        label: 'Label',
        topicLabel: 'Topic Label',
        url: '/press-kits/placeholder',
        title: 'Title of the press kit homepage',
        summary:
          'Maecenas tristique tortor non ornare lobortis. Nam sollicitudin sapien sit amet enim vulputate laoreet. Sed mattis dui metus, sit amet faucibus arcu volutpat ut. Vestibulum sit amet felis sem. Duis interdum risus nulla, sed varius enim viverra vitae.',
        thumbnailImage: {
          src: {
            url: 'https://source.unsplash.com/Q1p7bh3SHj8/560x560',
            width: '560',
            height: '560'
          }
        }
      },
      {
        id: 2,
        label: 'Label',
        topicLabel: null,
        url: '/press-kits/placeholder',
        title: 'Title of the press kit homepage',
        thumbnailImage: {
          src: {
            url: 'https://source.unsplash.com/Q1p7bh3SHj8/560x560',
            width: '560',
            height: '560'
          }
        }
      }
    ]
  }
}
