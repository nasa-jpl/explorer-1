import PageInfographicDetail from './PageInfographicDetail.vue'

export default {
  title: 'Templates/WWW/PageInfographicDetail',
  component: PageInfographicDetail,
  tags: ['!autodocs'],
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'fullscreen',
    viewMode: 'canvas'
  }
}

// stories
export const BaseStory = {
  name: 'PageInfographicDetail',
  args: {
    data: {
      getTopicsForDisplay: [
        {
          title: 'Stars and Galaxies',
          url: '/topics/stars-and-galaxies/'
        }
      ],
      image: {
        alt: 'Milky Way',
        caption: 'An infographic image.\n',
        credit: '',
        detailUrl: null,
        original: 'https://picsum.photos/1920/1080',
        src: {
          height: '1080',
          url: 'https://picsum.photos/1920/1080',
          width: '1920'
        },
        srcSet:
          'https://picsum.photos/1400/787 320w, https://picsum.photos/1400/787 1024w,  https://picsum.photos/1920/1080 1400w'
      },
      label: 'Infographic',
      publicationDate: '2012-07-05T20:04:21+00:00',
      title: 'Milky Way',
      topicLabel: 'Stars and Galaxies',
      description:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis lorem non purus consequat rutrum. Nulla vel convallis urna, eu porta purus. In hendrerit odio id diam volutpat auctor. Curabitur imperdiet dolor ipsum, quis luctus quam hendrerit eu. Quisque gravida lacus velit, a tempor dolor facilisis interdum. Sed pharetra mi eget feugiat bibendum. Donec vel nisi non nisi ultrices pellentesque eget non massa. Proin hendrerit sodales auctor. Phasellus egestas tortor eget ullamcorper tempor. Cras quis mauris erat. Curabitur tempor quam eget tellus aliquam semper. Morbi fringilla sodales dapibus. Proin pellentesque turpis eu neque pretium, in sodales sem auctor.</p>'
    }
  }
}
