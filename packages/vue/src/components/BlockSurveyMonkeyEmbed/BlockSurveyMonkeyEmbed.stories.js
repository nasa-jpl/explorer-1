import BlockSurveyMonkeyEmbed from './BlockSurveyMonkeyEmbed.vue'

export default {
  title: 'Components/Blocks/BlockSurveyMonkeyEmbed',
  component: BlockSurveyMonkeyEmbed,
  tags: ['wagtail-blocks'],
  excludeStories: /.*Data$/
}

export const BlockSurveyMonkeyEmbedData = {
  data: {
    url: "https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdxG4BYR8r7xXFgQ1FpKsw5ByCCBzGq87KdjQe3fXtgtU.js"
  }
}

export const EmbeddedSurvey = {
  args: {
    ...BlockSurveyMonkeyEmbedData
  }
}
