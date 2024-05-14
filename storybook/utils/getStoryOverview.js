export const getStoryOverview = (meta) => {
  const preppedStory = meta.Default
  preppedStory.parameters = {
    docs: {
      description: {
        story: meta.default.parameters.docs.description.component,
      },
    },
  }
  return preppedStory
}
