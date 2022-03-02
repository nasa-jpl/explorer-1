export const BaseIframeTemplate = ({ title, url, height }) => {
  return `
  <iframe
    loading="lazy"
    title="${title}"
    data-src="${url}"
    width="100%"
    ${height ? `height="${height}"` : ``}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen="allowfullscreen"
    class="BaseIframe"
    src="${url}"
  ></iframe>`
}
