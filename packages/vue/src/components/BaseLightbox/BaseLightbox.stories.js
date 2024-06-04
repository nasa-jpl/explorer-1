import BaseLightbox from './../BaseLightbox/BaseLightbox.vue'
import BaseLightboxOpenButton from './../BaseLightboxOpenButton/BaseLightboxOpenButton.vue'

export default {
  title: 'Appendix/Deprecated/BaseLightbox',
  component: {
    BaseLightbox,
    BaseLightboxOpenButton
  },
  parameters: {
    docs: {
      description: {
        component: 'This component is **deprecated** and has been replaced by `MixinFancybox`.'
      }
    }
  },
  excludeStories: /.*Data$/,
  argTypes: {}
}

// data
export const BaseLightboxData = {
  gallery: true,
  showThumbs: true,
  lightboxItems: [
    {
      title: "NASA's 1",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/700/787',
      width: '700',
      height: '787'
    },
    {
      title: "NASA's 2",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "NASA's 3",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/300/787',
      width: '300',
      height: '787'
    },
    {
      title: "NASA's 4",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "NASA's 5",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/700/787',
      width: '700',
      height: '787'
    },
    {
      title: "NASA's 6",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "NASA's 7",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/300/787',
      width: '300',
      height: '787'
    },
    {
      title: "NASA's 4",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "NASA's 8",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/700/787',
      width: '700',
      height: '787'
    },
    {
      title: "NASA's 9",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "NASA's 10",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/300/787',
      width: '300',
      height: '787'
    },
    {
      title: "NASA's 11",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "NASA's 12",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/200',
      width: '1400',
      height: '200'
    },
    {
      title: "NASA's 6",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/400/400',
      width: '400',
      height: '400'
    },
    {
      title: "NASA's 13",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/2800/1287',
      width: '2800',
      height: '1287'
    },
    {
      title:
        "14 NASA's AIRS Maps Carbon Monoxide from Brazil Fires Really Really Really long title test Really Really Really long title test",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "15 NASA's AIRS Maps Carbon Monoxide from Brazil Fires",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "16 NASA's AIRS Maps Carbon Monoxide from Brazil Fires",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "17 NASA's AIRS Maps Carbon Monoxide from Brazil Fires",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "18 NASA's AIRS Maps Carbon Monoxide from Brazil Fires",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "19 NASA's AIRS Maps Carbon Monoxide from Brazil Fires",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "20 NASA's AIRS Maps Carbon Monoxide from Brazil Fires",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    },
    {
      title: "21 NASA's AIRS Maps Carbon Monoxide from Brazil Fires",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1400/787',
      width: '1400',
      height: '787'
    }
  ],
  lightboxIndex: null,
  imageIndex: null
}

// BaseLightboxTemplate
const BaseLightboxTemplate = (args) => ({
  props: Object.keys(args),
  components: { BaseLightbox, BaseLightboxOpenButton },
  template: `<div>
          <BaseLightboxOpenButton
            v-for="(image, imageIndex) in lightboxItems"
            :key="imageIndex"
            @click="lightboxIndex = imageIndex"
          /><BaseLightbox
            :gallery="gallery"
            :show-thumbs="showThumbs"
            :key="imageIndex"
            :lightbox-index="lightboxIndex"
            :lightbox-items="lightboxItems"
            @close="lightboxIndex = null"
          /></div>`
})

export const Default = BaseLightboxTemplate.bind({})
Default.args = {
  ...BaseLightboxData
}

export const SingleImage = BaseLightboxTemplate.bind({})
SingleImage.args = {
  ...BaseLightboxData,
  gallery: false,
  showThumbs: false,
  lightboxItems: [
    {
      title: "NASA's 1",
      credit: 'NASA/JPL',
      url: 'https://picsum.photos/1600/900',
      width: '1600',
      height: '900'
    }
  ]
}
