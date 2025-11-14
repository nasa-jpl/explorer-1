import AboutTheAuthor from './AboutTheAuthor.vue'

export default {
  title: 'Components/Utilities/AboutTheAuthor',
  component: AboutTheAuthor,
  tags: ['listings'],
  excludeStories: /.*Data$/
}

export const AboutTheAuthorData = [
  {
    author: {
      biography:
        '<p data-block-key="8meb7">I&#x27;m someone that has a bio!  Test <a href="http://localhost:3000/edu/news">link</a>.</p>',
      image: {
        src: {
          url: 'https://picsum.photos/512/512',
          width: 512,
          height: 512
        },
        alt: ''
      },
      jobTitle: 'Job title',
      name: 'Author name',
      organization: 'Organization'
    }
  },
  {
    author: {
      biography:
        '<p data-block-key="8meb7">I&#x27;m someone that has a bio!  Test <a href="http://localhost:3000/edu/news">link</a>. Lorem ipsum dolor sit amet long author bio here.</p><p>Lorem ipsum dolor site amet consectatur.</p>',
      image: {
        src: {
          url: 'https://picsum.photos/512/512',
          width: 512,
          height: 512
        },
        alt: ''
      },
      jobTitle: 'Job title',
      name: 'Another author',
      organization: 'Organization'
    }
  }
]
// stories
export const BaseStory = {
  name: 'AboutTheAuthor',
  args: { authors: AboutTheAuthorData }
}
