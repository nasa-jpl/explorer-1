export const BaseVideoBgTemplate = ({ file, webm, ogg }) => {
  return `
  <video
    loop="loop"
    muted="muted"
    playsinline=""
    autoplay="autoplay"
    preload="auto"
    class="object-cover w-full h-full"
  >
    ${webm ? `<source src="${webm}" type="video/webm" />` : ''}
    ${file ? `<source src="${file}" type="video/mp4" />` : ''}
    ${ogg ? `<source src="${ogg}" type="video/ogg" />` : ''}
  </video>
  `
}
