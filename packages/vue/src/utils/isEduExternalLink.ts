export const isEduExternalLink = (url: string): boolean => {
  if (
    url &&
    (url.startsWith('/edu/') ||
      url.startsWith('/edu/') ||
      url.startsWith('https://www.jpl.nasa.gov/edu/') ||
      url.startsWith('https://jpl.nasa.gov/edu/'))
  ) {
    return false
  }
  return true
}
