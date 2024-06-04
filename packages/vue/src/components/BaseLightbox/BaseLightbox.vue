<template>
  <transition name="BaseLightbox-modal">
    <div
      v-if="isVisible"
      ref="baseLightbox"
      class="BaseLightbox ThemeDark"
      :class="lightboxClasses"
      :style="lightboxStyles"
      @click="closeModal"
    >
      <!-- Lightbox Button Toolbar -->
      <div class="BaseLightbox-toolbar" :class="buttonsClasses">
        <!-- Toggle thumbnails button -->
        <button
          v-if="lightboxItems.length > 1 && gallery"
          type="button"
          title="Show/Hide thumbnails"
          class="BaseLightbox-toolbar__btn BaseLightbox-toggle-thumbnail__btn"
          @click="toggleThumbs()"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 40 40"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Group" fill-rule="nonzero">
                <g id="thumbs">
                  <path
                    id="thumbnailIcon"
                    d="M32.4853801,0.142857143 L32.4853801,7 L25.4990409,7 L25.4990409,0.142857143 L32.4853801,0.142857143 Z M24.0175439,0.142857143 L24.0175439,7 L17.0312047,7 L17.0312047,0.142857143 L24.0175439,0.142857143 Z M41,0.142857143 L41,7 L34.0136608,7 L34.0136608,0.142857143 L41,0.142857143 Z M15.4853801,0.142857143 L15.4853801,7 L8.49904094,7 L8.49904094,0.142857143 L15.4853801,0.142857143 Z M7.01754386,0.142857143 L7.01754386,7 L0.0312046784,7 L0.0312046784,0.142857143 L7.01754386,0.142857143 Z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <!-- Fullscreen Button -->
        <button
          v-if="fullScreen"
          type="button"
          class="BaseLightbox-toolbar__btn BaseLightbox-toggle-fullscreen__btn"
          title="Toggle Fullscreen"
          @click="toggleFullScreenMode"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"
            ></path>
          </svg>
        </button>

        <BaseLightboxCloseButton
          v-if="showCloseButton"
          class="BaseLightbox-toolbar__btn"
          title="Close Lightbox"
          @click="close"
        />
      </div>
      <!-- /Lightbox Button Toolbar -->

      <div
        class="BaseLightbox__inner"
        :style="innerStyles"
        @mousedown="startSwipe"
        @mousemove="continueSwipe"
        @mouseup="endSwipe"
        @touchstart="startSwipe"
        @touchmove="continueSwipe"
        @touchend="endSwipe"
      >
        <div class="BaseLightbox__progressbar" :style="stylesInterval"></div>

        <!-- TODO: add swiping effect with drag and infinite loop -->

        <div v-if="effect === 'fade'" class="BaseLightbox__wrapper">
          <div
            ref="lightboxItems"
            class="BaseLightbox__slide BaseLightbox__slide--current"
          >
            <transition name="BaseLightbox-slide-change" mode="out-in">
              <div
                v-if="getMediaType(imgIndex) === 'image'"
                key="image"
                :style="imgWrapperStyle"
                class="BaseLightbox__slide__img"
              >
                <transition name="BaseLightbox-slide-change" mode="out-in">
                  <img
                    :key="imgIndex"
                    :src="getItemSrc(imgIndex)"
                    draggable="false"
                    :alt="getItemAlt(imgIndex)"
                    :width="lightboxItems[imgIndex].width"
                    :height="lightboxItems[imgIndex].height"
                    @load="imageLoaded"
                    @click="zoomImage"
                    @mousedown="handleMouseDown($event)"
                    @mouseup="handleMouseUp($event)"
                    @mousemove="handleMouseMove($event)"
                  />
                </transition>
                <div class="BaseLightbox-caption">
                  <transition name="BaseLightbox-modal">
                    <div
                      v-show="
                        checkIfIsObject(imgIndex) &&
                        (lightboxItems[imgIndex].title ||
                          lightboxItems[imgIndex].credit ||
                          lightboxItems[imgIndex].detailUrl)
                      "
                      key="credit-block"
                      class="BaseLightbox-credit"
                    >
                      <transition
                        name="BaseLightbox-slide-change"
                        mode="out-in"
                      >
                        <h6
                          v-if="
                            checkIfIsObject(imgIndex) &&
                            lightboxItems[imgIndex].title
                          "
                          key="title"
                          v-html="lightboxItems[imgIndex].title"
                        ></h6>
                      </transition>

                      <transition
                        name="BaseLightbox-slide-change"
                        mode="out-in"
                      >
                        <p>
                          <span
                            v-if="
                              checkIfIsObject(imgIndex) &&
                              lightboxItems[imgIndex].credit
                            "
                          >
                            Image Credit:&nbsp;
                          </span>
                          <span
                            v-if="
                              checkIfIsObject(imgIndex) &&
                              lightboxItems[imgIndex].credit
                            "
                            key="credit"
                            v-html="lightboxItems[imgIndex].credit"
                          ></span>
                          <span
                            v-if="
                              checkIfIsObject(imgIndex) &&
                              lightboxItems[imgIndex].detailUrl
                            "
                            key="detailUrl"
                          >
                            <nuxt-link :to="lightboxItems[imgIndex].detailUrl">
                              Full Image Details
                            </nuxt-link>
                          </span>
                        </p>
                      </transition>
                    </div>
                    <!--/BaseLightbox-credit-->
                  </transition>
                  <transition name="BaseLightbox-slide-change" mode="out-in">
                    <div class="BaseLightbox__navigation">
                      <button
                        v-show="hasPreviousButton && lightboxItems.length > 1"
                        type="button"
                        class="BaseLightbox-button BaseLightbox-button--prev"
                        title="Previous Slide"
                        :class="buttonsClasses"
                        @click="onPrevClick"
                      >
                        <slot name="icon-previous">
                          <div class="BaseLightbox-button__icon">
                            <IconPrev />
                          </div>
                        </slot>
                      </button>

                      <button
                        v-show="hasNextButton && lightboxItems.length > 1"
                        type="button"
                        class="BaseLightbox-button BaseLightbox-button--next"
                        title="Next Slide"
                        :class="buttonsClasses"
                        @click="onNextClick(false)"
                      >
                        <slot name="icon-next">
                          <div class="BaseLightbox-button__icon">
                            <IconNext />
                          </div>
                        </slot>
                      </button>
                    </div>
                  </transition>
                  <!--/BaseLightbox__navigation-->
                </div>

                <div v-show="imageLoading" class="BaseLightbox-loading-wrapper">
                  <slot name="loading">
                    <div class="BaseLightbox-loading"></div>
                  </slot>
                </div>
                <!--/loading-wrapper-->
              </div>
              <!--/imgs-slide-->

              <div v-else key="video" class="BaseLightbox__iframe">
                <transition name="BaseLightbox-slide-change" mode="out-in">
                  <iframe
                    v-if="
                      !checkIsMp4(getItemSrc(imgIndex)) &&
                      getMediaType(imgIndex) === 'video'
                    "
                    :key="getVideoUrl(getItemSrc(imgIndex))"
                    v-autoplayObserver
                    class="BaseLightbox-video"
                    :data-autoplay="setAutoplay(imgIndex)"
                    :src="getVideoUrl(getItemSrc(imgIndex))"
                    :style="aspectRatioVideo"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  >
                  </iframe>

                  <iframe
                    v-if="
                      getMediaType(imgIndex) === 'iframe' ||
                      getPDFurl(getItemSrc(imgIndex))
                    "
                    :key="imgIndex"
                    class="BaseLightbox-pdf"
                    :src="getItemSrc(imgIndex)"
                    allowfullscreen
                  >
                  </iframe>

                  <video
                    v-if="
                      checkIsMp4(getItemSrc(imgIndex)) &&
                      getMediaType(imgIndex) === 'video'
                    "
                    :key="checkIsMp4(getItemSrc(imgIndex))"
                    v-autoplayObserver
                    class="BaseLightbox-video"
                    :data-autoplay="setAutoplay(imgIndex)"
                    :style="aspectRatioVideo"
                    controls=""
                    controlslist="nodownload"
                    poster=""
                  >
                    <source
                      :src="checkIsMp4(getItemSrc(imgIndex))"
                      :type="'video/' + getVideoExt(getItemSrc(imgIndex))"
                    />
                    Sorry, your browser doesn't support embedded videos
                  </video>
                </transition>
              </div>
              <!--/BaseLightbox__iframe-->
            </transition>
          </div>
          <!--/BaseLightbox__slide-->
        </div>
        <!--/BaseLightbox__wrapper-->

        <div v-if="gallery" class="BaseLightbox-thumbs">
          <div class="BaseLightbox-thumbs__list">
            <div class="fake-thumb pl-1"></div>
            <button
              v-for="(item, lightboxItemIndex) in lightboxItems"
              :key="lightboxItemIndex"
              type="button"
              :class="{
                active: lightboxItemIndex === imgIndex,
                'is-video': getMediaType(lightboxItemIndex) === 'video',
              }"
              class="BaseLightbox__thumb"
              @click="imgIndex = lightboxItemIndex"
            >
              <svg
                v-if="getMediaType(lightboxItemIndex) === 'video'"
                class="BaseLightbox__thumb__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M6.5 5.4v13.2l11-6.6z"></path>
              </svg>

              <img
                :key="lightboxItemIndex"
                :src="
                  itemThumb(getItemSrc(lightboxItemIndex), lightboxItemIndex)
                "
                alt=""
              />
            </button>
            <div class="fake-thumb pr-1"></div>
          </div>
        </div>
        <!--/BaseLightbox-thumbs-->
      </div>
      <!--/BaseLightbox-inner-->

      <transition name="BaseLightbox-modal">
        <div v-if="isZooming && useZoomBar" class="BaseLightbox-zoom">
          <svg
            height="469pt"
            class="BaseLightbox-zoom__icon"
            viewBox="0 -192 469.33333 469"
            width="469pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m437.332031.167969h-405.332031c-17.664062
            0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938
            32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0"
            />
          </svg>
          <input
            v-model="zoomBar"
            type="range"
            name="points"
            min="0"
            max="50"
          />
          <svg
            height="426.66667pt"
            class="BaseLightbox-zoom__icon"
            viewBox="0 0 426.66667 426.66667"
            width="426.66667pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031
            9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0
            11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031
            21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594
            21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"
            />
          </svg>
        </div>
      </transition>
    </div>
    <!--/BaseLightbox-->
  </transition>
  <!--/transition-->
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import BaseLightboxCloseButton from './../BaseLightboxCloseButton/BaseLightboxCloseButton.vue'
import IconPrev from './../Icons/IconPrev.vue'
import IconNext from './../Icons/IconNext.vue'
import LazyLoadDirective from '@/scripts/LazyLoad'
import AutoplayObserver from '@/scripts/AutoplayObserver'

export default {
  name: 'BaseLightbox',
  components: {
    BaseLightboxCloseButton,
    IconPrev,
    IconNext,
  },
  directives: {
    lazyload: LazyLoadDirective,
    autoplayObserver: AutoplayObserver,
  },

  props: {
    // Lightbox slide index
    lightboxIndex: {
      type: Number,
      default: 0,
    },
    // Lightbox slide effect
    effect: {
      type: String,
      // swipe or fade
      // TODO: swipe still wip
      default: 'fade',
    },
    // Lightbox items array
    lightboxItems: {
      type: [Array, Boolean],
      required: false,
    },
    // whether or not the slides should loop (false is a little buggy)
    loop: {
      type: Boolean,
      default: true,
    },
    // experimental, when you click on an image that is bigger than the lightbox it will zoom and bring up a zoom slider
    useZoomBar: {
      type: Boolean,
      default: false,
    },
    // whether or not clicking on the overlay will close the mobile lightbox
    closeOnClickOutsideMobile: {
      type: Boolean,
      default: false,
    },
    // object the lightbox is looking for, url or src could be used
    srcName: {
      type: String,
      default: 'url',
    },
    // object for thumbnails
    srcThumb: {
      type: String,
      default: 'thumb',
    },
    // source media type after identified
    srcMediaType: {
      type: String,
      default: 'mediaType',
    },
    // background overlay color when lightbox is open
    overlayColor: {
      type: String,
      default: 'rgba(0, 0, 0, 1)',
    },
    // makes sure lightbox is always on top of content
    zIndex: {
      type: Number,
      default: 9999,
    },
    // prop to tell the lightbox it's loading a gallery with thumbnails
    gallery: {
      type: Boolean,
      default: false,
    },
    // whether or not the lightbox should allow fullscreen button
    fullScreen: {
      type: Boolean,
      default: true,
    },
    // future ability to move the thumbs around with additional styles
    thumbsPosition: {
      type: String,
      default: 'bottom',
    },
    // youtube cookies prop
    youtubeCookies: {
      type: Boolean,
      default: true,
    },
    // Hide the close button
    showCloseButton: {
      type: Boolean,
      default: true,
    },
    // direction of swipe
    dir: {
      type: String,
      default: 'ltr',
    },
    // enable or disable scrollLock, doesn't matter too much when bg isn't opaque
    enableScrollLock: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      imageIndex: 0,
      // swipe data
      initialMouseX: 0,
      initialMouseY: 0,
      endMouseX: 0,
      endMouseY: 0,
      swipeType: null,
      IsSwiping: false,
      isDraggingSwipe: false,

      // use for mouse wheel
      prevTime: 0,

      // swipe effect
      xSwipeWrapper: 0,
      ySwipeWrapper: 0,
      // swipe animation e.g. 'all .3s ease'
      swipeAnimation: null,
      swipeInterval: null,
      // lightbox inner width prop
      lightboxInnerWidth: null,
      // lightbox image index
      imgIndex: this.lightboxIndex,
      // is the lightbox visible
      isVisible: false,
      // if true, pads for the thumbnails
      paddingBottom: false,
      // image is loading
      imageLoading: false,
      // show the thumbnails (only for galleries)
      showThumbs: false,
      // sets fullscreen on open if needed
      isFullScreenMode: false,

      // aspect ratio for videos
      aspectRatioVideo: {
        width: 'auto',
        height: 'auto',
      },

      // props to bind styles
      buttonsVisible: true,
      scale: 1,
      top: 0,
      left: 0,
      lastX: 0,
      lastY: 0,
      isDragging: false,
      canZoom: false,
      isZooming: false,
      transition: 'all .3s ease',
      zoomBar: 0,
      loopData: false,
      stylesInterval: {
        display: 'block',
      },
    }
  },

  computed: {
    // Image wrapper styles to use drag and zoom
    imgWrapperStyle() {
      return {
        top: `50%`,
        left: `50%`,
        transition: this.transition,
      }
    },

    // lightbox styles
    lightboxStyles() {
      return {
        'z-index': this.zIndex,
        'background-color': this.overlayColor,
      }
    },

    innerStyles() {
      return {
        'padding-bottom': this.paddingBottom + 'px',
      }
    },

    // get item src
    itemSrc() {
      if (this.imgIndex === null) {
        return false
      }

      const item = this.lightboxItems[this.imgIndex]
      if (this.checkIfIsObject(this.imgIndex)) {
        return item[this.srcName]
      }

      return item
    },

    // Lightbox classes
    lightboxClasses() {
      const classesReturn = [
        { 'BaseLightbox--can-zoom': this.canZoom },
        { 'BaseLightbox--is-zooming': this.isZooming },
        { 'BaseLightbox--is-fullscreen': this.isFullScreenMode },
        { 'BaseLightbox--show-thumbs': this.showThumbs },
        { 'BaseLightbox--is-swiping': this.isDraggingSwipe },
      ]

      const classString = 'BaseLightbox--thumbs-' + this.thumbsPosition
      classesReturn.push(classString)

      return classesReturn
    },

    // Buttons classes
    buttonsClasses() {
      return {
        hidden: !this.buttonsVisible,
      }
    },

    // check if the slide has next element
    hasNextButton() {
      if (this.dir === 'rtl') {
        return this.imgIndex - 1 >= 0
      }

      return this.imgIndex + 1 < this.lightboxItems.length
    },

    // check if the slide has previous element
    hasPreviousButton() {
      if (this.dir === 'rtl') {
        return this.imgIndex + 1 < this.lightboxItems.length
      }

      return this.imgIndex - 1 >= 0
    },

    // check if the slide has next element
    hasNext() {
      return this.imgIndex + 1 < this.lightboxItems.length
    },

    // check if the slide has previous element
    hasPrevious() {
      return this.imgIndex - 1 >= 0
    },
  },

  watch: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    zoomBar(newVal, prevVal) {
      let item
      if (this.isZooming) {
        if (this.effect === 'swipe') {
          item = this.$refs.lightboxItems[this.imgIndex].childNodes[0]
        } else {
          item = this.$refs.lightboxItems.childNodes[0]
        }

        const newZoom = 1.6 + newVal / 10
        item.style.transform =
          'translate3d(calc(-50% + ' +
          this.left +
          'px), calc(-50% + ' +
          this.top +
          'px), 0) scale3d(' +
          newZoom +
          ', ' +
          newZoom +
          ', ' +
          newZoom +
          ')'
      }
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    showThumbs(prev, val) {
      let widthGalleryBlock = 212
      let swipeAnimation = 'all .3s ease'
      if (window.innerWidth < 767) {
        widthGalleryBlock = 120
        swipeAnimation = null
      }

      const self = this
      this.swipeAnimation = swipeAnimation

      if (prev) {
        if (this.dir === 'rtl') {
          this.xSwipeWrapper =
            this.imgIndex * (window.innerWidth - widthGalleryBlock) +
            30 * this.imgIndex
        } else {
          this.xSwipeWrapper =
            -this.imgIndex * (window.innerWidth - widthGalleryBlock) -
            30 * this.imgIndex
        }
      } else if (this.dir === 'rtl') {
        this.xSwipeWrapper =
          this.imgIndex * window.innerWidth + 30 * this.imgIndex
      } else {
        this.xSwipeWrapper =
          -this.imgIndex * window.innerWidth - 30 * this.imgIndex
      }

      setTimeout(function () {
        self.swipeAnimation = null
      }, 300)
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    lightboxIndex(prev, val) {
      const self = this

      // for body scroll lock
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const $body = document.querySelector('body')

      if (prev !== null) {
        // swipe type
        this.swipeType = null
        this.initialMouseY = 0
        this.ySwipeWrapper = 0

        // set loop from data
        this.loopData = this.loop

        // swipe effect case remove loop
        if (this.effect === 'swipe') {
          this.loopData = false
          window.addEventListener('resize', this.xPositionOnResize)
        }

        // add img index
        this.imgIndex = prev
        this.isVisible = true

        // add events listener on downpress
        window.addEventListener('keydown', this.eventListener)

        // only in mobile
        if (window.innerWidth < 700) {
          // add click event
          setTimeout(function () {
            window.addEventListener('click', self.showButtons)
          }, 200)
        }

        if (this.enableScrollLock) {
          setTimeout(function () {
            self.setCompensateForScrollbar()
            disableBodyScroll(self.$refs.baseLightbox)
          }, 50)
        }
      } else {
        this.isVisible = false

        // set starts X to 0
        this.startsX = 0
        this.initialMouseY = 0
        this.swipeType = null
        this.swipeAnimation = null

        // finish swipe
        this.isDraggingSwipe = false
        this.isZooming = true

        // remove events listener
        window.removeEventListener('keydown', this.eventListener)

        if (this.enableScrollLock) {
          self.removeCompensateForScrollbar()
          enableBodyScroll(self.$refs.baseLightbox)
        }

        // remove click event
        window.removeEventListener('click', this.showButtons)

        // remove resize event
        window.removeEventListener('resize', this.xPositionOnResize)
      }
    },

    imgIndex(prev, val) {
      // when animation is loaded
      this.$nextTick(() => {
        if (this.effect === 'swipe') {
          this.setLightboxInnerWidth()
          this.setXPosition(prev)
        }

        if ((prev !== null) & (val === null)) {
          this.$emit('on-open', prev)
          // opens thumbnails if lightbox is a gallery
          if (this.gallery === true) {
            this.showThumbs = true
          }
        }

        if (prev !== null) {
          if (prev !== val) {
            if (
              !this.getYoutubeUrl(this.getItemSrc(prev)) &&
              !this.getVimeoUrl(this.getItemSrc(prev))
            ) {
              this.stopVideos()
            }
          }

          // if is an image change imageLoading to true
          if (!this.getVideoUrl(this.getItemSrc(prev))) {
            if (!this.imageCached(this.getItemSrc(prev))) {
              this.imageLoading = true
            }
          }

          // setAspectRatioVideo when animation type is swipe
          if (this.effect === 'swipe') {
            this.setAspectRatioVideo()
          } else if (this.getVideoUrl(this.getItemSrc(prev))) {
            this.setAspectRatioVideo()
          }
        }

        // reset zoom
        this.resetZoom()

        // reset swipe type
        this.swipeType = null
        this.ySwipeWrapper = 0
      })
    },
  },

  beforeDestroy() {
    if (this.enableScrollLock) {
      this.removeCompensateForScrollbar()
      if (this.$refs.baseLightbox) {
        enableBodyScroll(this.$refs.baseLightbox)
      }
    }
  },

  methods: {
    toggleThumbs() {
      this.showThumbs = !this.showThumbs
    },

    stopVideos() {
      const videos = document.getElementsByClassName('BaseLightbox-video')
      const isVideoPlaying = (video) =>
        !!(
          video.currentTime > 0 &&
          !video.paused &&
          !video.ended &&
          video.readyState > 2
        )
      if (videos.length > 0) {
        Array.prototype.forEach.call(videos, (video) => {
          const type = video.tagName

          if (type === 'IFRAME') {
            const iframeSrc = video.src
            return (video.src = iframeSrc)
          }

          if (isVideoPlaying(video)) {
            return video.pause()
          }
        })
      }
    },

    removeCompensateForScrollbar() {
      document.body.classList.remove('compensate-for-scrollbar')
      const noscrollStyle = document.getElementById(
        'baselightbox-style-noscroll'
      )
      if (noscrollStyle !== null) {
        document.getElementById('baselightbox-style-noscroll').remove()
      }
    },

    setCompensateForScrollbar() {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )

      if (!isMobile && document.body.scrollHeight > window.innerHeight) {
        document
          .getElementsByTagName('head')[0]
          .insertAdjacentHTML(
            'beforeend',
            '<style id="baselightbox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
              (window.innerWidth - document.documentElement.clientWidth) +
              'px;}</style>'
          )

        document.body.classList.add('compensate-for-scrollbar')
      }
    },

    setAutoplay(lightboxItemIndex) {
      if (
        this.checkIfIsObject(lightboxItemIndex) &&
        // eslint-disable-next-line no-prototype-builtins
        this.lightboxItems[lightboxItemIndex].hasOwnProperty('autoplay') &&
        this.lightboxItems[lightboxItemIndex].autoplay
      ) {
        return true
      }

      return false
    },

    toggleFullScreenMode() {
      this.isFullScreenMode = !this.isFullScreenMode
      if (!this.isFullScreenMode) {
        this.closeFullscreen()
      } else {
        this.fullScreenMode()
      }
    },

    closeFullscreen() {
      if (document) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitExitFullscreen) {
          /* Safari still requires a prefix */
          document.webkitExitFullscreen()
        }
        this.isFullScreenMode = false
      }
    },

    fullScreenMode() {
      /* Get the documentElement (<html>) to display the page in fullscreen */
      const elem = document.documentElement
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } else if (elem.webkitRequestFullscreen) {
        /* Safari still requires a prefix */
        elem.webkitRequestFullscreen()
      }
    },

    // check if event is arrow button or toolbar button
    checkIfIsButton(event) {
      const elements =
        '.BaseLightbox-button, .BaseLightbox-button *, .BaseLightbox-toolbar__btn, .BaseLightbox-toolbar__btn *, .BaseLightbox-credit h6, .BaseLightbox-credit p, .BaseLightbox-credit a'
      if (event.target.matches(elements)) {
        return true
      }

      return false
    },

    // start swipe event
    startSwipe(event) {
      if (this.isZooming) {
        return false
      }

      // check if is some button
      if (this.checkIfIsButton(event)) {
        return false
      }

      // clear interval
      clearInterval(this.swipeInterval)
      this.swipeAnimation = null

      // starts swipe
      this.isDraggingSwipe = true
      this.initialMouseX = this.getMouseXPosFromEvent(event)
      this.initialMouseY = this.getMouseYPosFromEvent(event)
    },

    // continue swipe event
    continueSwipe(event) {
      if (this.isDraggingSwipe) {
        this.IsSwiping = true
        const currentPosX = this.getMouseXPosFromEvent(event)
        const currentPosY = this.getMouseYPosFromEvent(event)
        const windowWidth = this.lightboxInnerWidth

        // diffs
        const diffX = Math.abs(currentPosX - this.initialMouseX)
        const diffY = Math.abs(currentPosY - this.initialMouseY)

        // swipe type
        if (this.swipeType === null) {
          if (diffY > 5 || diffX > 5) {
            if (diffY > diffX) {
              this.swipeType = 'v'
            } else {
              this.swipeType = 'h'
            }
          }
        }

        // swipe
        if (this.swipeType === 'h') {
          // swipe wrapper
          if (this.dir === 'rtl') {
            this.xSwipeWrapper =
              windowWidth * this.imgIndex +
              currentPosX -
              this.initialMouseX +
              30 * this.imgIndex
          } else {
            this.xSwipeWrapper =
              -(windowWidth * this.imgIndex) +
              currentPosX -
              this.initialMouseX -
              30 * this.imgIndex
          }
        } else {
          this.ySwipeWrapper = currentPosY - this.initialMouseY
        }

        // mobile caseS
        if (event.type === 'touchmove') {
          this.endMouseX = this.getMouseXPosFromEvent(event)
          this.endMouseY = this.getMouseYPosFromEvent(event)
        }
      }
    },

    // end swipe event
    endSwipe(event) {
      if (this.checkIfIsButton(event) && this.initialMouseX === 0) {
        return false
      }

      // event check is dragging and swipe
      const self = this
      const swipeType = this.swipeType
      this.isDraggingSwipe = false

      // horizontal swipe type
      if (this.initialMouseX === 0 && swipeType === 'h') {
        return false
      }

      // touch end fixes
      if (event.type !== 'touchend') {
        this.endMouseX = this.getMouseXPosFromEvent(event)
        this.endMouseY = this.getMouseYPosFromEvent(event)
      } else if (this.endMouseX === 0) {
        return
      }

      // check if is dragged
      if (
        (this.endMouseX - this.initialMouseX === 0 && swipeType === 'h') ||
        this.isZooming ||
        (this.endMouseY - this.initialMouseY === 0 && swipeType === 'v')
      ) {
        return
      }

      // set swipe animation
      this.setSwipeAnimation()

      // reset swipe data
      setTimeout(function () {
        self.IsSwiping = false
        self.initialMouseX = 0
        self.endMouseX = 0
      }, 10)

      // type of swipe
      if (this.swipeType === 'h') {
        // if the swipe is to the right
        if (this.endMouseX - this.initialMouseX < -40) {
          if (this.dir === 'rtl') {
            return this.swipeToLeft()
          }
          return this.swipeToRight()
        }

        // if the swipe is to the left
        if (this.endMouseX - this.initialMouseX > 40) {
          if (this.dir === 'rtl') {
            return this.swipeToRight()
          }
          return this.swipeToLeft()
        }
      }

      if (this.swipeType === 'v') {
        const diffY = Math.abs(this.endMouseY - this.initialMouseY)

        // diff Y
        if (diffY >= 90) {
          this.close()
        } else {
          this.ySwipeWrapper = 0
        }
      }

      this.swipeType = null
      const windowWidth = this.lightboxInnerWidth

      if (this.dir === 'rtl') {
        this.xSwipeWrapper = this.imgIndex * windowWidth + 30 * this.imgIndex
        return
      }

      this.xSwipeWrapper = -this.imgIndex * windowWidth - 30 * this.imgIndex
    },

    // swipe to left effect
    swipeToLeft() {
      if (!this.hasPrevious && this.effect === 'swipe') {
        if (this.dir === 'rtl') {
          return (this.xSwipeWrapper =
            this.imgIndex * this.lightboxInnerWidth + 30 * this.imgIndex)
        }

        return (this.xSwipeWrapper =
          -this.imgIndex * this.lightboxInnerWidth - 30 * this.imgIndex)
      }

      this.changeIndexToPrev()
    },

    // swipe to right effect
    swipeToRight() {
      if (!this.hasNext && this.effect === 'swipe') {
        if (this.dir === 'rtl') {
          return (this.xSwipeWrapper =
            this.imgIndex * this.lightboxInnerWidth + 30 * this.imgIndex)
        }

        return (this.xSwipeWrapper =
          -this.imgIndex * this.lightboxInnerWidth - 30 * this.imgIndex)
      }

      this.changeIndexToNext()
    },

    // function that return x position from event
    getMouseXPosFromEvent(event) {
      if (event.type.includes('mouse')) {
        return event.clientX
      }
      return event.touches[0].clientX
    },

    // function that return Y position from event
    getMouseYPosFromEvent(event) {
      if (event.type.includes('mouse')) {
        return event.clientY
      }
      return event.touches[0].clientY
    },

    // check if the image is cached
    imageCached(src) {
      const image = new Image()
      image.src = src

      return image.complete
    },

    // image loaded event
    imageLoaded() {
      this.imageLoading = false
    },

    // get video url
    itemThumb(itemUrl, lightboxItemIndex) {
      const thumb = this.getItemThumb(lightboxItemIndex)
      if (thumb) {
        return thumb
      }

      const youtubeID = this.getYoutubeID(itemUrl)
      if (youtubeID) {
        return 'https://img.youtube.com/vi/' + youtubeID + '/mqdefault.jpg'
      }

      const vimeoID = this.getVimeoID(itemUrl)
      if (vimeoID) {
        return false
      }

      return itemUrl
    },

    // get item src
    getItemSrc(imgIndex) {
      if (imgIndex === null) {
        return false
      }

      const item = this.lightboxItems[imgIndex]
      if (this.checkIfIsObject(imgIndex)) {
        return item[this.srcName]
      }

      return item
    },

    getItemAlt(imgIndex) {
      if (imgIndex === null) {
        return false
      }

      const item = this.lightboxItems[imgIndex]
      if (this.checkIfIsObject(imgIndex)) {
        return item.alt
      }

      return null
    },

    getItemThumb(imgIndex) {
      if (imgIndex === null) {
        return false
      }

      const item = this.lightboxItems[imgIndex]
      if (this.checkIfIsObject(imgIndex)) {
        return item[this.srcThumb]
      }

      if (this.getVideoUrl(item)) {
        return false
      }

      return item
    },

    // get item media type
    getMediaType(imgIndex) {
      if (imgIndex === null) {
        return false
      }

      if (this.checkIfIsObject(imgIndex)) {
        const item = this.lightboxItems[imgIndex]
        // item type is specified, so return it
        if (item[this.srcMediaType]) {
          return item[this.srcMediaType]
        }
      }

      if (this.getVideoUrl(this.getItemSrc(imgIndex))) {
        return 'video'
      } else if (this.getPDFurl(this.getItemSrc(imgIndex))) {
        return 'iframe'
      } else {
        return 'image'
      }
    },

    // move event in zoom
    move() {
      const self = this
      this.progressWidth = 100

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      function frame() {
        self.stylesInterval = {
          transform: 'scaleX(0)',
          transition: 'none',
        }

        if (self.dir === 'rtl') {
          self.onPrevClick(true)
        } else {
          self.onNextClick(true)
        }
      }
    },

    // show buttons event
    showButtons(event) {
      if (!this.checkIfIsButton(event)) {
        const self = this
        setTimeout(function () {
          self.buttonsVisible = !self.buttonsVisible
        }, 100)
      }
    },

    // check if is allowed to drag
    checkMouseEventPropButton(button) {
      if (!this.isZooming) return false
      // mouse left btn click
      return button === 0
    },

    // handle mouse down event
    handleMouseDown(e) {
      if (!this.checkMouseEventPropButton(e.button)) return
      this.lastX = e.clientX
      this.lastY = e.clientY
      this.isDragging = true
      e.stopPropagation()
    },

    // handle mouse up event
    handleMouseUp(e) {
      if (!this.checkMouseEventPropButton(e.button)) return
      this.isDragging = false
      this.lastX = this.lastY = 0

      // Fix drag zoom out
      const thisContext = this
      setTimeout(function () {
        thisContext.canZoom = true
      }, 100)
    },

    // handle mouse move event
    handleMouseMove(e) {
      if (!this.checkMouseEventPropButton(e.button)) return
      if (this.isDragging) {
        this.top = this.top - this.lastY + e.clientY
        this.left = this.left - this.lastX + e.clientX
        this.lastX = e.clientX
        this.lastY = e.clientY
        this.canZoom = false

        const item = e.target.parentNode
        const newZoom = 1.6 + this.zoomBar / 10
        item.style.transform =
          'translate3d(calc(-50% + ' +
          this.left +
          'px), calc(-50% + ' +
          this.top +
          'px), 0) scale3d(' +
          newZoom +
          ', ' +
          newZoom +
          ', ' +
          newZoom +
          ')'
      }
      e.stopPropagation()
    },

    // zoom image event
    // zoomImage(indexImage) {
    zoomImage() {
      if (window.innerWidth < 768) {
        return false
      }

      if (!this.canZoom) {
        return false
      }

      if (this.IsSwiping) {
        return false
      }

      // item zoom
      let item
      if (this.effect === 'swipe') {
        item = this.$refs.lightboxItems[this.imgIndex].childNodes[0]
      } else {
        item = this.$refs.lightboxItems.childNodes[0]
      }

      // zoom variables
      const isZooming = this.isZooming
      const thisContext = this

      // Is zooming check
      if (isZooming) {
        if (!this.isDragging) {
          this.isZooming = false
          this.zoomBar = 0
        }
      } else {
        this.isZooming = true
      }

      // check if is zooming
      if (this.isZooming) {
        // add scale
        item.style.maxWidth = '100%'

        // hide buttons
        // this.buttonsVisible = false

        // fix drag transition problems
        setTimeout(function () {
          thisContext.transition = 'all .1s ease'
        }, 100)
      } else {
        // show buttons
        this.buttonsVisible = true
        this.resetZoom()
      }
    },

    // Reset zoom data
    resetZoom() {
      this.scale = 1
      this.left = 0
      this.top = 0
      this.zoomBar = 0
      this.isZooming = false
      this.swipeType = null
      this.transition = 'all .3s ease'

      // only if index is not null
      if (this.imgIndex != null) {
        let item
        if (this.effect === 'swipe') {
          item = this.$refs.lightboxItems[this.imgIndex].childNodes[0]
        } else {
          item = this.$refs.lightboxItems.childNodes[0]
        }

        item.style.maxWidth = 'max-content'

        this.initialMouseX = 0
      }
    },

    // Aspect Ratio responsive video
    setAspectRatioVideo() {
      const thisContext = this
      let el = document.getElementsByClassName('BaseLightbox__inner')
      el = el[0]

      const computedStyle = getComputedStyle(el)
      if (window.innerWidth < 700) {
        const width = el.clientWidth
        const height = Math.round((width / 16) * 9)

        this.aspectRatioVideo.height = height + 'px'
        this.aspectRatioVideo.width = width + 'px'
      } else {
        setTimeout(function () {
          let height = el.clientHeight
          height -=
            parseFloat(computedStyle.paddingTop) +
            parseFloat(computedStyle.paddingBottom)

          const width = (height / 9) * 16

          thisContext.aspectRatioVideo.height = height + 'px'
          thisContext.aspectRatioVideo.width = width + 'px'
        }, 150)
      }
    },

    // function to close the lightbox
    close() {
      if (this.isFullScreenMode === true) {
        this.closeFullscreen()
      }
      this.swipeType = null
      this.$emit('close', this.imgIndex)
      this.imgIndex = null
    },

    wheelEvent(event) {
      const delay = 350
      const currentTime = new Date().getTime()
      const direction = event.deltaY > 0 ? 'top' : 'down'

      if (currentTime - this.prevTime < delay) return

      this.prevTime = currentTime

      switch (direction) {
        case 'top':
          return this.changeIndexToPrev()
        // break
        case 'down':
          return this.changeIndexToNext()
      }
    },

    // close event click outside
    closeModal(event) {
      if (!this.closeOnClickOutsideMobile) {
        if (window.innerWidth < 700) {
          return false
        }
      }

      if (this.IsSwiping) {
        return false
      }

      const elements =
        '.BaseLightbox-zoom, .BaseLightbox-zoom *, .BaseLightbox-thumbs, svg, path, rect, .BaseLightbox-thumbs *, .BaseLightbox-button, .BaseLightbox-toolbar__btn, .BaseLightbox-toolbar__btn *, .BaseLightbox-button *, .BaseLightbox__slide__img *, .BaseLightbox-video, .BaseLightbox-credit h6, .BaseLightbox-credit p, .BaseLightbox-credit a'
      if (!event.target.matches(elements)) {
        this.close()
      }
    },

    // set swipe animation
    setSwipeAnimation() {
      const self = this
      clearInterval(this.swipeInterval)
      this.swipeAnimation = null

      // animation swipe
      this.swipeAnimation = 'all .3s ease'

      function interval() {
        self.swipeAnimation = null
      }

      this.swipeInterval = setInterval(interval, 330)
    },

    // next slide event
    onNextClick() {
      if (this.isZooming) {
        return false
      }

      this.setSwipeAnimation()

      if (this.dir === 'rtl') {
        return this.changeIndexToPrev()
      }

      this.changeIndexToNext()
    },

    // prev slide event
    onPrevClick() {
      if (this.isZooming) {
        return false
      }

      this.setSwipeAnimation()

      if (this.dir === 'rtl') {
        return this.changeIndexToNext()
      }

      this.changeIndexToPrev()
    },

    // change to next index
    changeIndexToNext() {
      if (this.hasNext) {
        this.onIndexChange(this.imgIndex + 1)
      }
    },

    // change to prev index
    changeIndexToPrev() {
      if (this.hasPrevious) {
        this.onIndexChange(this.imgIndex - 1)
      }
    },

    // set lightbox inner width
    setLightboxInnerWidth() {
      const el = document.getElementsByClassName('BaseLightbox__inner')
      const width = el[0].clientWidth
      this.lightboxInnerWidth = width
    },

    // x position on resize event
    xPositionOnResize() {
      this.setLightboxInnerWidth()
      const lightboxIndex = this.imgIndex

      if (this.dir === 'rtl') {
        this.xSwipeWrapper =
          lightboxIndex * this.lightboxInnerWidth + 30 * lightboxIndex
        return
      }

      // set x position
      this.xSwipeWrapper =
        -lightboxIndex * this.lightboxInnerWidth - 30 * lightboxIndex
    },

    // set x position by img lightboxIndex
    setXPosition(lightboxIndex) {
      if (this.dir === 'rtl') {
        this.xSwipeWrapper =
          lightboxIndex * this.lightboxInnerWidth + 30 * lightboxIndex
        return
      }

      // set x position
      this.xSwipeWrapper =
        -lightboxIndex * this.lightboxInnerWidth - 30 * lightboxIndex
    },

    // index change
    onIndexChange(lightboxIndex) {
      this.imgIndex = lightboxIndex
      this.$emit('on-change', lightboxIndex)
    },

    getPDFurl(url) {
      if (this.imgIndex === null) {
        return false
      }

      // eslint-disable-next-line no-new-wrappers
      const str = new String(url)
      if (str.endsWith('.pdf')) {
        return url
      }

      return false
    },

    // check if is video
    getVideoUrl(itemSrc) {
      const youtubeUrl = this.getYoutubeUrl(itemSrc)
      const vimeoUrl = this.getVimeoUrl(itemSrc)
      const mp4Url = this.checkIsMp4(itemSrc)

      if (youtubeUrl) {
        return youtubeUrl
      }

      if (vimeoUrl) {
        return vimeoUrl
      }

      if (mp4Url) {
        return mp4Url
      }

      return false
    },

    // getYoutube ID
    getYoutubeID(url) {
      // youtube data
      const youtubeRegex =
        /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
      const ytId = url.match(youtubeRegex) ? RegExp.$1 : false

      if (ytId) {
        return ytId
      }

      return false
    },

    // get youtube url
    getYoutubeUrl(url) {
      // youtube data
      const ytId = this.getYoutubeID(url)

      // if is youtube video
      if (ytId) {
        // check if allows youtube cookies
        if (this.youtubeCookies) {
          return 'https://www.youtube.com/embed/' + ytId
        }

        return 'https://www.youtube-nocookie.com/embed/' + ytId
      }

      return false
    },

    // vimeo ID
    getVimeoID(url) {
      // if is vimeo video
      const result = url.match(
        // eslint-disable-next-line no-useless-escape
        /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i
      )
      if (result !== null) {
        return result[1]
      }

      return false
    },

    // get vimeo url
    getVimeoUrl(url) {
      // if is vimeo video
      const result = url.match(
        // eslint-disable-next-line no-useless-escape
        /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i
      )
      if (result !== null) {
        return (
          '//player.vimeo.com/video/' +
          result[1] +
          '?hd=1&show_title=1&show_byline=1&show_portrait=0&fullscreen=1'
        )
      }

      return false
    },

    // check if video is mp4
    checkIsMp4(url) {
      if (this.imgIndex === null) {
        return false
      }

      // eslint-disable-next-line no-new-wrappers
      const str = new String(url)
      if (
        str.includes('.mp4') ||
        str.includes('.mov') ||
        str.includes('.webm') ||
        str.includes('.ogg') ||
        str.includes('.avi')
      ) {
        return url
      }

      return false
    },

    // if is video get extension
    getVideoExt(url) {
      if (this.imgIndex === null) {
        return false
      }

      // eslint-disable-next-line no-new-wrappers
      const str = new String(url)
      if (str.includes('.mp4') || str.includes('.mov')) {
        return 'mp4'
      }

      if (str.includes('.webm')) {
        return 'webm'
      }

      if (str.includes('.ogg')) {
        return 'ogg'
      }

      if (str.includes('.avi')) {
        return 'avi'
      }

      return false
    },

    // check if item is object
    checkIfIsObject(lightboxItemIndex) {
      const item = this.lightboxItems[lightboxItemIndex]
      if (typeof item === 'object' && item !== null) {
        return true
      }
      return false
    },

    // arrows and escape events for keyboard navigation
    eventListener(e) {
      switch (e.keyCode) {
        case 39:
          return this.onNextClick()
        case 37:
          return this.onPrevClick()
        case 38:
        case 40:
        case ' ':
          return e.preventDefault()
        case 27:
          return this.close()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// BaseLightbox Styles
.BaseLightbox {
  @apply z-0 fixed inset-0 flex items-center justify-center transition duration-200 ease-in-out;

  .BaseLightbox-zoom {
    @apply absolute left-1/2 flex rounded-lg py-0 px-3 items-center mb-4 z-60;

    background-color: rgba(15, 15, 15, 0.8);
    transform: translateX(-50%);

    input[type='range'] {
      -webkit-appearance: none;
      margin: 10px 0;
      width: 105px;
      background: transparent;
    }

    input[type='range']:focus {
      outline: none;
    }

    input[type='range']::-webkit-slider-runnable-track {
      @apply w-full h-1 cursor-pointer duration-200 rounded-xl border-0 shadow-none bg-black;
    }

    input[type='range']::-webkit-slider-thumb {
      box-shadow: 1px 1px 1px #000000;
      border: 1px solid #000000;
      height: 12px;
      width: 12px;
      border-radius: 13px;
      background: #ffffff;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -4.5px;
    }

    input[type='range']:focus::-webkit-slider-runnable-track {
      @apply bg-gray-light-mid;
    }

    input[type='range']::-moz-range-track {
      @apply bg-gray-light-mid duration-200 cursor-pointer h-1 w-full shadow-none rounded-xl border-0;
    }

    input[type='range']::-moz-range-thumb {
      box-shadow: 1px 1px 1px #000000;
      border: 1px solid #000000;
      height: 12px;
      width: 12px;
      border-radius: 13px;
      background: #ffffff;
      cursor: pointer;
    }

    input[type='range']::-ms-track {
      width: 100%;
      height: 4px;
      cursor: pointer;
      transition-duration: 0.2s;
      background: transparent;
      border-color: transparent;
      color: transparent;
    }

    input[type='range']::-ms-fill-lower {
      background: #e6e6e6;
      border: 0 solid #000000;
      border-radius: 22px;
      box-shadow: 0 0 0 #000000;
    }

    input[type='range']::-ms-fill-upper {
      background: #e6e6e6;
      border: 0 solid #000000;
      border-radius: 22px;
      box-shadow: 0 0 0 #000000;
    }

    input[type='range']::-ms-thumb {
      box-shadow: 1px 1px 1px #000000;
      border: 1px solid #000000;
      height: 12px;
      width: 12px;
      border-radius: 13px;
      background: #ffffff;
      cursor: pointer;
    }

    input[type='range']:focus::-ms-fill-lower {
      background: #e6e6e6;
    }

    input[type='range']:focus::-ms-fill-upper {
      background: #e6e6e6;
    }

    .BaseLightbox-zoom__icon {
      height: 15px;
      width: 15px;
      color: #ffffff;

      &:first-of-type {
        margin-right: 10px;
      }

      &:last-of-type {
        margin-left: 10px;
      }
    }
  }

  .BaseLightbox-thumbs {
    @apply z-60 absolute h-screen overflow-y-auto w-26 -mr-26 top-0 overflow-x-hidden transition-none bg-black mb-2 transition-all duration-300;

    scrollbar-width: thin;
    scrollbar-color: #333333 rgba(11, 11, 11, 0.9);
    @screen md {
      transition: all 0.3s ease;
    }

    &::-webkit-scrollbar {
      @apply w-2 h-2;
    }

    &::-webkit-scrollbar-button {
      @apply w-0 h-0;
    }

    &::-webkit-scrollbar-thumb {
      @apply bg-gray-dark rounded-full;
    }

    &::-webkit-scrollbar-thumb:hover {
      @apply bg-gray-mid;
    }

    &::-webkit-scrollbar-thumb:active {
      @apply bg-gray-mid-dark;
    }

    &::-webkit-scrollbar-track {
      @apply bg-black border-0 border-none border-white rounded-lg;
    }

    &::-webkit-scrollbar-track:hover {
      @apply bg-gray-mid-dark;
    }

    &::-webkit-scrollbar-track:active {
      @apply bg-gray-dark;
    }

    &::-webkit-scrollbar-corner {
      @apply bg-transparent;
    }
    @screen md {
      width: 212px;
      right: -212px;
    }

    .BaseLightbox-thumbs__list {
      @apply flex-wrap py-2px pl-4 pr-8 mb-px hidden;

      @media (min-height: 720px) {
        @apply flex;
      }

      .BaseLightbox__thumb {
        @apply bg-black block relative w-20 h-20 mr-5 mb-3 py-1 z-50;

        @screen md {
          width: calc(100% / 2 - 2px);
        }

        &::before {
          @apply inset-0 opacity-0 absolute invisible;

          content: '';
          z-index: 150;
          transition: all 0.3s ease;
          border: 3px solid #ffffff;
        }

        img {
          @apply object-cover w-full h-full;
        }

        &.is-video {
          .BaseLightbox__thumb__icon {
            @apply absolute z-60 top-1/2 left-1/2 w-6 h-6 transform -translate-x-1/2 -translate-y-1/2;

            path {
              @apply text-white fill-current;
            }
          }

          &::after {
            @apply inset-0 z-30 absolute bg-black;

            content: '';
          }
        }

        &.active,
        &:hover {
          &::before {
            @apply opacity-100 visible;
          }
        }
      }
    }
  }

  .BaseLightbox__inner {
    @apply absolute z-40 flex flex-col justify-center items-center inset-0 overflow-hidden transition-none top-0;

    min-height: 300px;
    @screen md {
      transition: all 0.3s ease;
    }
    @media (min-height: 720px) {
      @screen 2xl {
        @apply pt-0;
      }
    }
  }

  .BaseLightbox__progressbar {
    @apply absolute top-0 left-0 right-0 h-2px z-50 block;

    transform-origin: 0;
    transform: scaleX(0);
    transition: transform 3s linear;
  }

  &.BaseLightbox--is-swiping {
    cursor: -webkit-grabbing;
    cursor: grabbing;

    iframe {
      @apply pointer-events-none;
    }

    .BaseLightbox__slide {
      transition: none;

      &.BaseLightbox__slide--hide {
        @apply flex z-50;
      }
    }
  }

  &.BaseLightbox--zoom-disabled {
    .BaseLightbox__slide {
      .BaseLightbox__slide__img {
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }

  &.BaseLightbox--can-zoom {
    .BaseLightbox__slide {
      img {
        cursor: zoom-in;
      }
    }
  }

  &.BaseLightbox--is-zooming {
    .BaseLightbox__slide {
      img {
        cursor: move; /* fallback if grab cursor is unsupported */
        cursor: grab;
        cursor: -moz-grab;
        cursor: -webkit-grab;
      }
    }

    .BaseLightbox-credit {
      @apply opacity-0;
    }
  }
  // classes only when fullscreen mode is active
  &.BaseLightbox--is-fullscreen {
    .BaseLightbox__slide {
      .BaseLightbox__slide__img {
        max-height: calc(98vh - 195px);
      }
    }
  }
  // idea of having thumbs to the right
  // &.BaseLightbox--thumbs-right {
  //   &.BaseLightbox--show-thumbs {
  //     @apply transition-all duration-100;
  //     .BaseLightbox__inner {
  //       right: 102px;
  //       @screen md {
  //         right: 212px;
  //       }
  //     }
  //     .BaseLightbox-thumbs {
  //       @apply right-0;
  //     }
  //   }
  // }
  // thumbs on the bottom
  &.BaseLightbox--thumbs-bottom {
    .BaseLightbox-thumbs {
      @apply w-full left-0 right-0 top-auto h-auto overflow-auto;

      bottom: -120px;

      .BaseLightbox-thumbs__list {
        @apply w-auto flex-nowrap justify-start;

        @screen lg {
          @apply justify-center;
        }

        .BaseLightbox__thumb {
          @apply w-25 h-25 flex-shrink-0 mb-0;
        }
      }
    }
    // class applied when thumbs are shown
    &.BaseLightbox--show-thumbs {
      .BaseLightbox-toolbar {
        // styles for toolbar when thumbs are shown
        @apply mt-0;
        @screen 3xl {
          margin-top: 1.8vh;
        }
      }

      .BaseLightbox__inner {
        @apply bottom-0;
        @media (min-height: 720px) {
          @apply pb-30;
        }
      }

      .BaseLightbox-thumbs {
        @apply bottom-0;
      }
    }
  }

  button {
    @apply cursor-pointer bg-none border-none outline-none;
  }

  svg {
    path,
    rect {
      @apply fill-current;
    }
  }

  .BaseLightbox-button {
    @apply absolute visible text-white h-18 w-18 opacity-100 cursor-pointer;

    padding: 21px 16px 21px 4px;
    transition: all 0.3s ease;
    top: calc(50% - 50px);
    @screen md {
      padding: 31px 26px 31px 6px;
    }

    &.hidden {
      @apply invisible opacity-0;
    }

    &:hover {
      @apply text-gray-light;
    }

    > .BaseLightbox-button__icon {
      @apply flex items-center justify-center p-2 bg-gray-dark;

      > svg {
        @apply w-full h-full;
      }
    }

    &.BaseLightbox-button--prev {
      @apply relative p-0 transition-all duration-100;
    }

    &.BaseLightbox-button--next {
      @apply relative p-0 transition-all duration-100;
    }
  }

  .BaseLightbox__navigation {
    @apply inline-flex absolute z-50 bottom-0 right-0 justify-end;

    max-height: 75px;

    @screen md {
      @apply -mb-2;
    }
  }

  .BaseLightbox-pdf {
    @apply max-w-full;
  }

  .BaseLightbox__iframe {
    @apply w-full flex top-1/2 left-1/2 items-center justify-center relative;

    transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);

    .BaseLightbox-video {
      // Video Styles
    }

    iframe {
      @apply w-full h-full border-none;

      @screen md {
        max-width: 80vw;
        max-height: 80vh;
      }
    }
  }

  .BaseLightbox__wrapper {
    @apply w-full h-full max-h-screen relative max-w-screen-3xl mx-auto transition-all duration-300;

    &.BaseLightbox__wrapper--swipe {
      @apply flex items-center;

      .BaseLightbox__slide {
        @apply flex flex-shrink-0 justify-center items-center relative h-full opacity-40;

        transition: opacity 0.3s linear;

        &.BaseLightbox__slide--current {
          @apply opacity-100;
        }
      }
    }
  }

  .BaseLightbox__slide {
    @apply w-full inset-0 hidden absolute mr-8;

    min-height: 100px;

    &:last-of-type {
      @apply mr-auto;
    }

    transition: transform 0.3s ease;

    &.BaseLightbox__slide--current {
      @apply flex;
    }

    .BaseLightbox__slide__img {
      @apply absolute h-full w-full max-w-full left-1/2 top-1/2 flex flex-col justify-center transition-all duration-100;

      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
      transition: all 0.3s ease;
      max-height: 64vh;
      min-height: 100px;
      min-width: 350px;

      @screen sm {
        max-height: 75vh;
        min-width: 500px;
      }

      @screen lg {
        min-width: 650px;
      }

      @screen xl {
        max-height: 80vh;
      }
    }

    img {
      @apply z-40 object-scale-down max-w-full max-h-full mx-auto my-0;

      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -ms-transform: translateZ(0);
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.45);
    }
  }
}

.BaseLightbox-toolbar {
  @apply z-50 mx-auto opacity-100 flex w-full justify-end top-0 absolute visible transition-all duration-300 ease-in-out max-w-full;

  @screen 3xl {
    @apply mt-26 max-w-screen-3xl;

    margin-top: 3vh;
  }

  @screen 4xl {
    @apply mt-36 max-w-screen-4xl flex-col-reverse items-end;

    margin-top: 6.5vh;
  }

  &.hidden {
    @apply opacity-0 invisible;
  }

  .BaseLightbox-toolbar__btn {
    @apply bg-black border-0 rounded-none shadow-none cursor-pointer inline-flex justify-center items-center m-0 p-3 w-12 h-12 text-white opacity-90;

    @screen 3xl {
      @apply w-12 h-12 p-2;
    }

    > svg {
      @apply w-full h-full;
    }

    &:hover {
      @apply text-gray-light-mid;
    }

    &.BaseLightbox-toggle-fullscreen__btn {
      @apply hidden;

      @screen xl {
        @apply inline-flex;
      }
    }

    &.BaseLightbox-toggle-thumbnail__btn {
      @apply hidden pt-5 mt-1;

      @media (min-height: 720px) {
        @screen sm {
          @apply inline-flex;
        }
      }
    }
  }
}

.BaseLightbox-caption {
  @apply animate-fadeIn opacity-0 relative z-40 flex flex-row flex-wrap items-start justify-between w-full mx-auto bg-black px-3 max-w-screen-3xl;

  min-height: 72px;

  @screen 3xl {
    @apply px-0;
  }

  .BaseLightbox-credit {
    @apply animate-fadeInSlow relative opacity-100 inline-block leading-normal text-white bg-black text-lg font-normal text-left pt-3 pl-3 z-40;

    max-width: calc(100% - 150px);
    direction: ltr;
    transition: opacity 0.25s ease, visibility 0s ease 0.25s;
    @screen xl {
      @apply pl-0;
    }

    a {
      @apply text-jpl-red-light underline;
    }

    h6 {
      @apply text-lg text-white leading-normal;

      margin: 0 0 6px 0;
      @screen md {
        @apply text-xl mr-8;

        text-overflow: ellipsis;
      }

      @screen xl {
        @apply whitespace-nowrap overflow-x-hidden;
      }
    }

    p {
      @apply text-sm leading-tight text-jpl-red-light whitespace-nowrap overflow-hidden;

      text-overflow: ellipsis;
      @screen md {
        @apply text-base;
      }

      a {
        @apply text-jpl-red;

        &:hover {
          @apply text-jpl-red-light;
        }
      }
    }
  }
}

.BaseLightbox-modal-enter-active,
.BaseLightbox-modal-leave-active {
  transition: opacity 0.35s;
}

.BaseLightbox-modal-enter,
.BaseLightbox-modal-leave-to {
  @apply opacity-0;
}

.BaseLightbox-slide-change-enter-active,
.BaseLightbox-slide-change-leave-active {
  transition: opacity 0.27s;
}

.BaseLightbox-slide-change-enter,
.BaseLightbox-slide-change-leave-to {
  @apply opacity-0;
}

.BaseLightbox-loading-wrapper {
  @apply top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2;

  .BaseLightbox-loading {
    @apply relative animate-rotate bg-transparent p-0 z-50 rounded-full h-14 w-14 opacity-75;

    border: 4px solid #888888;
    border-bottom-color: #ffffff;
  }
}
</style>
