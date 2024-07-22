import PageGoDirectory from './PageGoDirectory.vue'

export default {
  title: 'Templates/WWW/PageGoDirectory',
  component: PageGoDirectory,
  tags: ['!autodocs'],
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    layout: 'fullscreen',
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*(Data)$/
}
// stories
export const BaseStory = {
  name: 'PageGoDirectory',
  args: {
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
              url: 'https://picsum.photos/560/560',
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
              url: 'https://picsum.photos/560/560',
              width: '560',
              height: '560'
            }
          }
        }
      ]
    }
  }
}
