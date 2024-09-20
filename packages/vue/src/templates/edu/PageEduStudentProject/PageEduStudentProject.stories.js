import { HeroMediaData } from './../../../components/HeroMedia/HeroMedia.stories'
import { BlockIframeEmbedData } from './../../../components/BlockIframeEmbed/BlockIframeEmbed.stories.js'
import { BlockImageCarouselData } from './../../../components/BlockImageCarousel/BlockImageCarousel.stories'
import { BlockImageData } from './../../../components/BlockImage/BlockImage.stories'
import { BlockInlineImageData } from './../../../components/BlockInlineImage/BlockInlineImage.stories'
import { BlockHeadingData } from './../../../components/BlockHeading/BlockHeading.stories'
import { BlockImageComparisonData } from './../../../components/BlockImageComparison/BlockImageComparison.stories'
import { BaseVideoData } from './../../../components/BaseVideo/BaseVideo.stories'
import { BlockVideoEmbedData } from './../../../components/BlockVideoEmbed/BlockVideoEmbed.stories'
import { BlockRelatedLinksData } from './../../../components/BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { RichTextMediaData } from './../../../components/BlockText/BlockText.stories.js'
import { BlockRichTableData } from './../../../components/BlockRichTable/BlockRichTable.stories'
import {
  BlockStreamfieldTruncatedData,
  BlockStreamfieldMinimalData
} from './../../../components/BlockStreamfield/BlockStreamfield.stories'
import PageEduStudentProject from './PageEduStudentProject.vue'
import { AboutTheAuthorData } from './../../../components/AboutTheAuthor/AboutTheAuthor.stories'

export default {
  title: 'Templates/EDU/PageEduStudentProject',
  component: PageEduStudentProject,
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
  excludeStories: /.*Data$/
}

export const BaseStory = {
  args: {
    data: {
      __typename: 'EDUStudentProjectPage',
      title: 'Test Student Project',
      url: '/edu/resources/test-student-project',
      pageType: 'EDUStudentProjectPage',
      contentType: 'edu_resources.EDUStudentProjectPage',
      searchDescription: '',
      seoTitle: 'Test Student Project',
      slug: 'test-student-project',
      publicationDate: '2024-08-16',
      lastPublishedAt: '2024-08-22T02:33:13.507206+00:00',
      thumbnailImage: {
        __typename: 'CustomImage',
        original: 'http://127.0.0.1:9000/media/original_images/imagessirtfsirtf-090303-16.jpg',
        alt: ''
      },
      authors: AboutTheAuthorData,
      hero: [
        {
          ...HeroMediaData,
          blockType: 'HeroImageBlock',
          displayCaption: false
        }
      ],
      heroConstrain: false,
      heroPosition: 'full_bleed',

      lesson: {
        title: 'Lesson',
        url: '/path-to-student-project'
      },

      primarySubject: {
        subject: 'Arts'
      },
      additionalSubjects: [
        {
          subject: 'Science'
        }
      ],
      gradeLevels: [
        {
          gradeLevel: 'K'
        },
        {
          gradeLevel: '1'
        }
      ],
      time: {
        time: 'Under 30 mins'
      },
      customTime: undefined,
      standards: [
        {
          standard: {
            code: 'CCRA.R.1',
            definition:
              'Read closely to determine what the text says explicitly and to make logical inferences from it; cite specific textual evidence when writing or speaking to support conclusions drawn from the text.',
            domain: {
              domain: 'College and Career Readiness Anchor Standards for Reading'
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
            code: 'K-PS2-1',
            definition:
              'Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls on the motion of an object.',
            domain: {
              domain: 'Physical Sciences'
            },
            type: 'ngss'
          }
        }
      ],

      overview: BlockStreamfieldMinimalData.body,
      overviewHeading: undefined,
      overviewImage: BlockImageData.image,

      materials:
        '<ul><li data-block-key="nvq4l">list item one</li><li data-block-key="efmt7">list item two</li><li data-block-key="d0f66">list item three this one is really long and the text just keeps on going lorem ipsum dolor sit amet consectatur</li></ul><p data-block-key="bksrq">Paragraph to appear below.</p>',
      materialsHeading: 'Custom Materials Heading',
      materialsImage: BlockImageData.image,

      stepsNumbering: true,

      steps: [
        {
          heading: 'Lorem ipsum dolor no media',
          media: [],
          content: [
            BlockImageData,
            ...BlockStreamfieldMinimalData.body,
            BlockInlineImageData.block,
            {
              blockType: 'RichTextBlock',
              value: RichTextMediaData
            }
          ]
        },
        {
          heading: 'Sit amet',
          media: [
            {
              blockType: 'VideoBlock',
              video: BaseVideoData,
              caption: 'Lorem ipsum dolor sit amet',
              credit: 'NASA/JPL'
            }
          ],
          content: BlockStreamfieldMinimalData.body
        },
        {
          heading: 'Consectatur adipscing',
          media: [BlockImageComparisonData],
          content: BlockStreamfieldTruncatedData.body
        }
      ],

      customSections: [
        {
          blockType: 'EDUStudentProjectCustomSectionBlock',
          content: BlockStreamfieldTruncatedData.body,
          heading: BlockHeadingData,
          position: 'after_overview'
        }
      ],

      body: BlockStreamfieldTruncatedData.body,

      relatedLinks: BlockRelatedLinksData.data,
      relatedContentHeading: 'Related Content',
      relatedContent: BlockLinkCardCarouselData
    }
  }
}

export const HeroTitle = {
  args: {
    data: {
      ...BaseStory.args.data,
      hero: [
        {
          ...HeroMediaData,
          heroSummary: 'Text appears below the title',
          blockType: 'HeroTitleBlock'
        }
      ]
    }
  }
}

export const InlineHero = {
  args: {
    data: {
      ...BaseStory.args.data,
      heroPosition: 'inline'
    }
  }
}
export const HeroCarousel = {
  args: {
    data: {
      ...BaseStory.args.data,
      hero: [{ blockType: 'CarouselBlock', blocks: BlockImageCarouselData }]
    }
  }
}

export const HeroImageComparison = {
  args: {
    data: {
      ...BaseStory.args.data,
      hero: [
        {
          ...BlockImageComparisonData
        }
      ]
    }
  }
}

export const HeroVideo = {
  args: {
    data: {
      ...BaseStory.args.data,
      hero: [
        {
          blockType: 'VideoBlock',
          video: BaseVideoData,
          caption: 'Lorem ipsum dolor sit amet',
          credit: 'NASA/JPL'
        }
      ]
    }
  }
}

export const HeroVideoEmbed = {
  args: {
    data: {
      ...BaseStory.args.data,
      hero: [
        {
          ...BlockVideoEmbedData.data,
          embed: {
            embed: `<iframe title="Meet NASA's Diana Trujillo - Embedded Hero" width="480" height="270" src="https://www.youtube.com/embed/vUuUyYqI83Q?feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          },
          blockType: 'VideoEmbedBlock',
          displayCaption: false
        }
      ]
    }
  }
}

export const HeroIframeEmbed = {
  args: {
    data: {
      ...BaseStory.args.data,
      hero: [
        {
          ...BlockIframeEmbedData
        }
      ]
    }
  }
}

export const NoHero = {
  args: {
    data: {
      ...BaseStory.args.data,
      hero: []
    }
  }
}
