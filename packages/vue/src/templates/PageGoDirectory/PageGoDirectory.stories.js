import PageGoDirectory from './PageGoDirectory.vue'

export default {
  title: 'GoSites/PageGoDirectory',
  component: PageGoDirectory,
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
const PageGoDirectoryTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageGoDirectory },
  template: `<PageGoDirectory :data="data"/>`
})

// stories
export const Default = PageGoDirectoryTemplate.bind({})
Default.storyName = 'PageGoDirectory' // single story hoisting
Default.args = {
  data: {
    title: 'Go Sites',
    summary: `Cras at velit semper, pulvinar odio eu, aliquet orci. Fusce pretium, lectus ut ultricies finibus, dui mi fermentum sapien, non accumsan lectus turpis ac nunc.`,
    children: [
      {
        id: 1,
        label: 'Label',
        topicLabel: 'Topic Label',
        url: '/go/placeholder',
        title: 'Title of the go site homepage',
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
        url: '/go/placeholder',
        title: 'Title of the go site homepage',
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
