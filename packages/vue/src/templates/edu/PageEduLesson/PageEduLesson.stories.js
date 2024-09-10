import { HeroMediaData } from './../../../components/HeroMedia/HeroMedia.stories'
import { BlockIframeEmbedData } from './../../../components/BlockIframeEmbed/BlockIframeEmbed.stories.js'
import { BlockImageCarouselData } from './../../../components/BlockImageCarousel/BlockImageCarousel.stories'
import { BlockImageData } from './../../../components/BlockImage/BlockImage.stories'
import { BlockHeadingData } from './../../../components/BlockHeading/BlockHeading.stories'
import { BlockImageComparisonData } from './../../../components/BlockImageComparison/BlockImageComparison.stories'
import { BaseVideoData } from './../../../components/BaseVideo/BaseVideo.stories'
import { BlockVideoEmbedData } from './../../../components/BlockVideoEmbed/BlockVideoEmbed.stories'
import { BlockRelatedLinksData } from './../../../components/BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import {
  BlockStreamfieldTruncatedData,
  BlockStreamfieldMinimalData
} from './../../../components/BlockStreamfield/BlockStreamfield.stories'
import PageEduLesson from './PageEduLesson.vue'
import { AboutTheAuthorData } from './../../../components/AboutTheAuthor/AboutTheAuthor.stories'

export default {
  title: 'Templates/EDU/PageEduLesson',
  component: PageEduLesson,
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
      __typename: 'EDULessonPage',
      title: 'Test Lesson',
      url: 'http://localhost:3000/edu/resources/test-lesson',
      pageType: 'EDUExplainerArticlePage',
      contentType: 'edu_resources.EDUExplainerArticlePage',
      searchDescription: '',
      seoTitle: 'Test Lesson',
      slug: 'test-lesson',
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
          blockType: 'HeroImageBlock'
        }
      ],
      heroConstrain: true,

      studentProject: {
        title: 'Student Project',
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
            type: 'ccss_math'
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
            type: 'ccss_math'
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

      overview: [],
      overviewHeading: 'Custom Overview heading',
      overviewImage: BlockImageData.image,

      materials:
        '<ul><li data-block-key="nvq4l">list item one</li><li data-block-key="efmt7">list item two</li><li data-block-key="d0f66">list item three this one is really long and the text just keeps on going lorem ipsum dolor sit amet consectatur</li></ul><p data-block-key="bksrq">Paragraph to appear below.</p>',
      materialsHeading: 'Materials stuff',
      materialsImage: BlockImageData.image,

      management: BlockStreamfieldMinimalData.body,
      managementHeading: 'Management stuff',

      background: [
        ...BlockStreamfieldMinimalData.body,
        {
          blockType: 'RichTextBlock',
          value:
            '<ol><li data-block-key="wv2pw">A list<ol><li data-block-key="mc91">A nested list should be a.<ol><li data-block-key="3p0pb">Another nested should be i.<ol><li data-block-key="22afo">Another is a number again.</li></ol></li></ol></li></ol></li></ol>'
        }
      ],
      backgroundHeading: 'Background heading',

      procedures: [
        {
          sectionHeading: 'Section Heading 1',
          stepsNumbering: true,
          steps: [
            {
              blocks: [
                // {
                //   blockType: 'HeadingBlock',
                //   heading: 'Heading Text',
                //   level: 'h3',
                //   size: 'h3',
                //   blockId: `${Math.random().toString(36).slice(2)}`
                // },
                ...BlockStreamfieldMinimalData.body,
                {
                  blockType: 'HeadingBlock',
                  heading: 'Heading Text',
                  level: 'h3',
                  size: 'h3',
                  blockId: `${Math.random().toString(36).slice(2)}`
                },

                {
                  blockType: 'RichTextBlock',
                  value:
                    '<ol><li data-block-key="wv2pw">A list<ol><li data-block-key="mc91">A nested list should be a.<ol><li data-block-key="3p0pb">Another nested should be i.<ol><li data-block-key="22afo">Another is a number again.</li></ol></li></ol></li></ol></li></ol>'
                }
              ]
            },
            {
              blocks: BlockStreamfieldMinimalData.body
            },
            {
              blocks: BlockStreamfieldMinimalData.body
            }
          ]
        },
        {
          // sectionHeading: 'Section Heading 2',
          stepsNumbering: true,
          steps: [
            {
              blocks: BlockStreamfieldMinimalData.body
            },
            {
              blocks: BlockStreamfieldMinimalData.body
            },
            {
              blocks: BlockStreamfieldMinimalData.body
            }
          ]
        },
        {
          sectionHeading: 'Section Heading 3',
          stepsNumbering: false,
          steps: [
            {
              blocks: BlockStreamfieldMinimalData.body
            },
            {
              blocks: BlockStreamfieldMinimalData.body
            },
            {
              blocks: BlockStreamfieldMinimalData.body
            }
          ]
        }
      ],
      proceduresHeading: 'Procedures heading',

      discussion: BlockStreamfieldMinimalData.body,
      discussionHeading: 'Discussion heading',

      assessment: BlockStreamfieldMinimalData.body,
      assessmentHeading: 'Assessment heading',

      extensions: BlockStreamfieldMinimalData.body,
      extensionsHeading: 'Extensions heading',

      techAddons: BlockStreamfieldMinimalData.body,
      techAddonsHeading: 'Tech addons heading',

      customSections: [
        {
          blockType: 'EDULessonCustomSectionBlock',
          content: BlockStreamfieldTruncatedData.body,
          heading: BlockHeadingData,
          position: 'after_procedures'
        }
      ],

      body: BlockStreamfieldTruncatedData.body,

      relatedLinks: BlockRelatedLinksData.data,
      relatedContentHeading: 'Related Content',
      relatedContent: BlockLinkCardCarouselData
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
          blockType: 'VideoEmbedBlock'
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
