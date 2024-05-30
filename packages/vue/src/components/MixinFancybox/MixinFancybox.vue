<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import { Fullscreen } from '@fancyapps/ui/src/shared/utils/Fullscreen.js'
import '@fancyapps/ui/dist/fancybox.css'
import MixinFancyboxOpenButton from './MixinFancyboxOpenButton.vue'

export const fancyboxThemes = {
  // Normal  (Vanilla fancybox theme)
  normal: 'fancybox-theme-normal ThemeLight',
  // Light   (WCP default lighter lightbox)
  light: 'fancybox-theme-light ThemeLight',
  // Dark    (WWW default black lightbox)
  dark: 'fancybox-theme-dark ThemeDark'
}

export default defineComponent({
  name: 'MixinFancybox',
  components: {
    MixinFancyboxOpenButton
  },
  filters: {
    truncate(value) {
      if (value && value.length > 280) {
        value = value.substring(0, 277) + '...'
      }
      return value
    }
  },
  props: {
    infinite: {
      type: Boolean,
      required: false,
      default: true
    },
    showThumbnails: {
      type: Boolean,
      required: false,
      default: false
    },
    animated: {
      type: Boolean,
      required: false,
      default: false
    },
    galleryName: {
      type: String,
      required: false,
      default: null
    },
    src: {
      type: String,
      required: false
    },
    srcSet: {
      type: String,
      required: false
    },
    sizes: {
      type: String,
      required: false
    },
    downloadSrc: {
      type: String,
      required: false
    },
    caption: {
      type: String,
      required: false
    },
    credit: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    detailUrl: {
      type: String,
      required: false
    },
    width: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: false
    },
    theme: {
      type: String,
      required: false,
      default: 'dark',
      validator: (prop) => Object.keys(fancyboxThemes).includes(prop)
    }
  },
  computed: {
    computedClass() {
      return fancyboxThemes[this.theme]
    },
    computedCaption() {
      let caption =
        this.caption && this.caption.length ? this.$options.filters.truncate(this.caption, 180) : ''
      if (this.credit) {
        caption = `${caption} Credit: ${this.credit}`
      }
      return caption
    }
  },
  mounted() {
    return Fancybox.bind('[data-fancybox]', {
      infinite: this.infinite,
      // mainClass from theme variants
      mainClass: this.computedClass ? this.computedClass : fancyboxThemes.dark,
      showClass: 'fancybox-fadeIn', // "fancybox-fadeIn" | "fancybox-zoomInUp" | false
      hideClass: 'fancybox-fadeOut', // "fancybox-fadeOut" | "fancybox-zoomOutDown" | false
      autoFocus: true,
      maxScale: 6,
      slideshow: {
        delay: 10000
      },
      // see https://fancyapps.com/docs/ui/fancybox#animations
      animated: this.animated,
      Image: {
        zoom: this.animated
      },
      Thumbs: {
        autoStart: this.showThumbnails
      },
      Toolbar: {
        items: {
          counter: {
            type: 'div',
            class: 'fancybox__counter',
            html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
            tabindex: -1,
            position: 'left'
          },
          prev: {
            type: 'button',
            class: 'fancybox__button--prev',
            label: 'PREV',
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 4l-8 8 8 8"/></svg>',
            click(event) {
              event.preventDefault()

              this.fancybox.prev()
            }
          },
          next: {
            type: 'button',
            class: 'fancybox__button--next',
            label: 'NEXT',
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M8 4l8 8-8 8"/></svg>',
            click(event) {
              event.preventDefault()

              this.fancybox.next()
            }
          },
          fullscreen: {
            type: 'button',
            class: 'fancybox__button--fullscreen',
            label: 'TOGGLE_FULLSCREEN',
            html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g><g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g></svg>`,
            click(event) {
              event.preventDefault()

              if (Fullscreen.element()) {
                Fullscreen.deactivate()
              } else {
                Fullscreen.activate(this.fancybox.$container)
              }
            }
          },
          slideshow: {
            type: 'button',
            class: 'fancybox__button--slideshow',
            label: 'TOGGLE_SLIDESHOW',
            html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g><g><path d="M7 4v15M17 4v15"/></g></svg>`,
            click(event) {
              event.preventDefault()

              this.Slideshow.toggle()
            }
          },
          zoom: {
            type: 'button',
            class: 'fancybox__button--zoom',
            label: 'TOGGLE_ZOOM',
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
            click(event) {
              event.preventDefault()

              const panzoom = this.fancybox.getSlide().Panzoom

              if (panzoom) {
                panzoom.toggleZoom()
              }
            }
          },
          download: {
            type: 'link',
            label: 'DOWNLOAD',
            class: 'fancybox__button--download',
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
            click(event) {
              event.stopPropagation()
            }
          },
          thumbs: {
            type: 'button',
            label: 'TOGGLE_THUMBS',
            class: 'fancybox__button--thumbs',
            html: '<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 576 512" width="24" height="21" stroke-width="3px"><path stroke-width="3px" fill="white" d="M512 0C547.3 0 576 28.65 576 64V288C576 323.3 547.3 352 512 352H64C28.65 352 0 323.3 0 288V64C0 28.65 28.65 0 64 0H512zM512 64H64V288H512V64zM0 448C0 430.3 14.33 416 32 416H64C81.67 416 96 430.3 96 448V480C96 497.7 81.67 512 64 512H32C14.33 512 0 497.7 0 480V448zM224 416C241.7 416 256 430.3 256 448V480C256 497.7 241.7 512 224 512H192C174.3 512 160 497.7 160 480V448C160 430.3 174.3 416 192 416H224zM320 448C320 430.3 334.3 416 352 416H384C401.7 416 416 430.3 416 448V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V448zM544 416C561.7 416 576 430.3 576 448V480C576 497.7 561.7 512 544 512H512C494.3 512 480 497.7 480 480V448C480 430.3 494.3 416 512 416H544z"/></svg>',
            click(event) {
              event.stopPropagation()

              const thumbs = this.fancybox.plugins.Thumbs

              if (thumbs) {
                thumbs.toggle()
              }
            }
          },
          close: {
            type: 'button',
            label: 'CLOSE',
            class: 'fancybox__button--close',
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
            tabindex: 1,
            click(event) {
              event.stopPropagation()
              event.preventDefault()

              this.fancybox.close()
            }
          }
        },
        display: [
          { id: 'counter', position: 'left' },
          'zoom',
          'slideshow',
          'fullscreen',
          // 'download',
          'thumbs',
          'captions',
          'close'
        ]
      },
      caption(_fancybox, _carousel, slide) {
        let caption = slide.caption

        if (slide.type === 'image') {
          caption = `<div class="mx-auto container">
              ${slide.title ? `<h6 class="font-semibold text-4xl mb-1">${slide.title}</h6>` : ''}
              ${
                caption.length
                  ? `<div class="caption inline sm:flex text-body-md pb-2 mr-2 sm:mr-0"><div class="inline">${caption}</div></div>`
                  : ''
              }
              ${
                slide.url
                  ? `<a href="${slide.url}" class="inline-block text-body-md whitespace-nowrap relative text-theme-red can-hover:hover:text-theme-red-hover cursor-pointer focus:outline-none" title="Full Image Details">Full Image Details</a>`
                  : ''
              }
            </div>`
        }

        return caption
      }
    })
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    }
  }
})
</script>
<template>
  <a
    class="MixinFancybox group cursor-pointer block"
    aria-label="Open in Lightbox"
    :href="src"
    :data-fancybox="galleryName || ''"
    :data-src="src"
    :data-width="src ? src.width : null"
    :data-height="src ? src.height : null"
    :data-srcset="srcSet"
    :data-sizes="sizes"
    :data-theme="computedClass"
    :data-caption="computedCaption"
    :data-title="title"
    :data-animated="animated"
    :data-download-src="downloadSrc"
    :data-url="detailUrl"
    :data-max-width="src ? src.width : null"
    @click="$emit('click')"
  >
    <MixinFancyboxOpenButton />
    <slot></slot>
  </a>
</template>

<style lang="scss">
.MixinFancybox {
  @apply relative; 

  &:active {
    outline: none;
  }

  .MixinFancyboxOpenButton {
    @apply can-hover:opacity-0 opacity-70 transition-opacity duration-300 block top-px right-px z-10;
  }

  &:hover {
    .MixinFancyboxOpenButton {
      @apply can-hover:opacity-100 duration-200;
    }
  }

  &:focus {
    .MixinFancyboxOpenButton {
      @apply can-hover:opacity-100;
    }
  }

  img {
    @apply min-w-full h-auto block;
  }
}

// Fancybox overrides for various themes
.fancybox-theme-dark.fancybox__container {
  z-index: 9999;

  --fancybox-color: rgba(255, 255, 255, var(--tw-text-opacity));
  --fancybox-bg: #000000;
  --fancybox-accent-color: #ffffff;
  --fancybox-thumbs-width: 100px;
  --fancybox-thumbs-border-radius: 0;
  --fancybox-thumbs-ratio: 1 / 1;
  --carousel-button-bg: rgba(0, 0, 0, 0.9);
  --carousel-button-border-radius: 0;
  --carousel-button-svg-width: 30px;
  --carousel-button-svg-height: 30px;
  --carousel-button-svg-stroke-width: 3;
  --carousel-button-svg-filter: none;

  .fancybox__content {
    @apply z-50;
  }

  .fancybox__nav {
    @apply hidden;

    @screen sm {
      @apply block;
    }
  }

  .fancybox__caption {
    @apply z-40 text-left relative inline-block pt-3 lg:pt-4 w-full;

    h1 {
      text-overflow: ellipsis;
    }

    p {
      @apply inline;
    }
  }

  .fancybox__slide.has-image.has-caption.is-draggable {
    .fancybox__caption {
      @apply opacity-0 transition-opacity duration-200;
    }
  }

  .fancybox__slide.has-image:not(.is-draggable),
  .fancybox__slide.has-image.has-caption.can-zoom_in,
  .fancybox__slide.has-image.has-caption.is-selected:not(.is-draggable) {
    .fancybox__caption {
      @apply opacity-100 transition-opacity duration-200;
    }
  }

  .caption-width {
    background: rgba(0, 0, 0, 0.95);
    -webkit-transition: max-width 0.15s ease;
    transition: max-width 0.15s ease;
    width: 100%;
  }

  @screen lg {
    .fancybox__toolbar {
      padding: 25px;
    }
  }
}
</style>
