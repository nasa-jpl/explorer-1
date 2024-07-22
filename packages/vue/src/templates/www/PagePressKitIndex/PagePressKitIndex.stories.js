import PagePressKitIndex from './PagePressKitIndex.vue'

export default {
  title: 'Templates/WWW/PagePressKitIndex',
  component: PagePressKitIndex,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="disable-nav-offset"><story/></div>`
    })
  ],
  tags: ['!autodocs'],
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
  name: 'PagePressKitIndex', // single story hoisting
  args: {
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
          url: '/press-kits/placeholder',
          title: 'Title of the press kit homepage',
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
