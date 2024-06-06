<template>
  <div class="BaseAudio">
    <div class="BaseAudio__stage sm:pr-5">
      <div class="BaseAudio__player w-full select-none">
        <div class="flex flex-row w-full">
          <div class="z-30 text-sm md:text-base">
            <template v-if="paused">
              <button
                class="cursor-pointer"
                title="Play"
                aria-label="Play"
                @click="play()"
              >
                <IconPlay class="bg-jpl-red text-white" />
              </button>
            </template>
            <template v-else>
              <button
                class="cursor-pointer"
                title="Pause"
                aria-label="Pause"
                @click="pause()"
              >
                <IconPause class="bg-jpl-red text-white" />
              </button>
            </template>
          </div>
          <div class="flex flex-col w-full z-20">
            <div
              class="BaseAudio__playback-time-wrapper cursor-pointer relative inline-block w-full border-t border-jpl-red bg-gray-mid-dark bg-opacity-25 h-2"
              title="Playback Position"
              @click="setPosition"
            >
              <div
                v-if="playing"
                :style="progressStyle"
                class="BaseAudio__playback-time-indicator bg-jpl-red transition-all transform-gpu duration-50 absolute top-0 left-0 bottom-0 h-2"
              ></div>
            </div>
            <div class="flex flex-row text-white">
              <div class="flex flex-row justify-between w-full py-1.5 px-3">
                <span
                  class="BaseAudio__playback-time-current text-sm md:text-base pr-1 md:pr-3 text-left"
                >
                  {{ currentTime }}
                </span>
                <div
                  v-if="playing"
                  class="BaseAudio__rewind-forward animate-fadeIn"
                >
                  <button
                    class="cursor-pointer"
                    title="Rewind"
                    aria-label="Rewind 10 seconds"
                    @click="rewind(10)"
                  >
                    <IconRewindTen />
                  </button>
                  <button
                    class="cursor-pointer"
                    title="Fast Forward"
                    aria-label="Fast-forward 10 seconds"
                    @click="forward(10)"
                  >
                    <IconForwardTen />
                  </button>
                </div>
                <span class="BaseAudio__playback-time-total">
                  {{ duration }}
                </span>
              </div>
              <div
                class="BaseAudio__extern-wrapper flex flex-row"
                :class="
                  !playing
                    ? '-mt-1.5 sm:mt-0.5 md:mt-1 lg:mt-1.5'
                    : '-mt-1.5 sm:-mt-0.5 md:mt-0 lg:-mt-0.5'
                "
              >
                <template v-if="isMuted">
                  <button
                    class="cursor-pointer"
                    title="Unmute"
                    aria-label="Unmute"
                    @click="toggleMute()"
                  >
                    <IconMute />
                  </button>
                </template>
                <template v-else>
                  <button
                    class="cursor-pointer"
                    title="Mute"
                    aria-label="Mute"
                    @click="toggleMute()"
                  >
                    <IconVolume />
                  </button>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio
        :id="playerId"
        ref="player"
        :src="file"
        preload="auto"
        class="hidden min-w-full left-0 right-0"
      ></audio>
    </div>
    <a
      class="volume-toggle absolute right-5 -bottom-4"
      title="Volume"
      @mouseover="toggleVolume()"
    />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import IconPlay from './../Icons/IconPlay.vue'
import IconPause from './../Icons/IconPause.vue'
import IconVolume from './../Icons/IconVolume.vue'
import IconMute from './../Icons/IconMute.vue'
import IconRewindTen from './../Icons/IconRewindTen.vue'
import IconForwardTen from './../Icons/IconForwardTen.vue'
export const baseVolumeValue = 10

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const convertTimeHHMMSS = (val) => {
  const hhmmss = new Date(val * 1000).toISOString().substr(11, 8)
  return hhmmss.indexOf('00:') === 0 ? hhmmss.substr(3) : hhmmss
}

export default defineComponent({
  name: 'BaseAudio',
  components: {
    IconPlay,
    IconPause,
    IconVolume,
    IconMute,
    IconRewindTen,
    IconForwardTen
  },
  props: {
    file: {
      type: String,
      default: null
    },
    autoPlay: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      firstPlay: true,
      isMuted: false,
      loaded: false,
      playing: false,
      paused: true,
      progressStyle: '',
      currentTime: '00:00',
      uuid: '0',
      audio: undefined,
      totalDuration: 0,
      hideVolumeSlider: false,
      volumeValue: baseVolumeValue
    }
  },
  computed: {
    duration() {
      return this.audio ? convertTimeHHMMSS(this.totalDuration) : ''
    },
    playerId() {
      return 'player-' + this.uuid
    }
  },
  mounted() {
    this.uuid = generateUUID()
    this.audio = this.getAudio()
    this.init()
  },
  beforeUnmount() {
    this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
    this.audio.removeEventListener('loadeddata', this._handleLoaded)
    this.audio.removeEventListener('pause', this._handlePlayPause)
    this.audio.removeEventListener('play', this._handlePlayPause)
  },
  methods: {
    setPosition: function name(e) {
      const tag = e.target
      if (this.paused) return

      if (e.target.tagName === 'SPAN') {
        return
      }
      const pos = tag.getBoundingClientRect()
      const seekPos = (e.clientX - pos.left) / pos.width
      this.audio.currentTime = parseInt(this.audio.duration * seekPos)
    },
    updateVolume() {
      this.hideVolumeSlider = false
      this.audio.volume = this.volumeValue / 100
      if (this.volumeValue / 100 > 0) {
        this.isMuted = this.audio.muted = false
      }

      if (this.volumeValue / 100 === 0) {
        this.isMuted = this.audio.muted = true
      }
    },
    toggleVolume() {
      this.hideVolumeSlider = true
    },
    stop() {
      this.playing = false
      this.paused = true
      this.audio.pause()
      this.audio.currentTime = 0
    },
    play() {
      if (this.playing && !this.paused) return
      this.paused = false
      this.audio.play()
      this.playing = true
      this.$root.$emit('play', this.uuid)
    },
    forward(duration) {
      return (this.audio.currentTime += duration)
    },
    rewind(duration) {
      return (this.audio.currentTime -= duration)
    },
    pause() {
      this.paused = !this.paused
      this.paused ? this.audio.pause() : this.audio.play()
    },
    pauseOthers(activeUuid) {
      if (this.uuid !== activeUuid) {
        this.paused = true
        this.audio.pause()
      }
    },
    toggleMute() {
      this.isMuted = !this.isMuted
      this.audio.muted = this.isMuted
      this.volumeValue = this.isMuted ? 0 : 100
    },
    _handleLoaded() {
      if (this.audio.readyState >= 2) {
        if (this.autoPlay) this.play()

        this.loaded = true
        this.totalDuration = parseInt(this.audio.duration)
      } else {
        throw new Error('Failed to load audio file')
      }
    },
    _handlePlayingUI(_e) {
      const currTime = this.audio.currentTime
      const percentage = (currTime / this.totalDuration) * 100
      this.progressStyle = `width: ${percentage}%;`
      this.currentTime = convertTimeHHMMSS(currTime)
    },
    _handlePlayPause(e) {
      if (e.type === 'play' && this.firstPlay) {
        // in some situations, audio.currentTime is the end one on chrome
        this.audio.currentTime = 0
        if (this.firstPlay) {
          this.firstPlay = false
        }
      }
      if (e.type === 'pause' && this.playing === false) {
        this.progressStyle = 'width:0%'
        this.currentTime = '00:00'
        this.paused = true
      }
    },
    _handleEnded() {
      this.paused = this.playing = false
    },
    init() {
      this.audio.addEventListener('timeupdate', this._handlePlayingUI)
      this.audio.addEventListener('loadeddata', this._handleLoaded)
      this.audio.addEventListener('pause', this._handlePlayPause)
      this.audio.addEventListener('play', this._handlePlayPause)
      this.audio.addEventListener('ended', this._handleEnded)
      // TODO: PORT: find solution for emitting event from slot
      // TODO: find a cleaner way to do this w/o using mounted or root level events
      // scoped slots? https://github.com/vuejs/vue/issues/4332
      this.$root?.$on('play', this.pauseOthers)
    },
    getAudio() {
      return this.$el.querySelectorAll('audio')[0]
    }
  }
})
</script>

<style lang="scss">
.BaseAudio {
  @apply relative w-full;

  .BaseAudio__stage {
    @apply flex flex-row w-full;
  }

  .BaseAudio__playback-time-total {
    @apply text-sm md:text-base pl-1 md:pl-3 text-right;
  }

  .BaseAudio__playback-time-current,
  .BaseAudio__playback-time-total {
    @screen sm {
      min-width: 7ch;
    }
  }

  .BaseAudio__rewind-forward {
    @apply hidden sm:flex flex-row w-25 lg:w-35 mx-auto justify-between;

    > button {
      @apply opacity-100 hover:opacity-80;

      svg {
        @apply w-6 text-white;
      }
    }
  }

  .BaseAudio__playback-time-indicator {
    &::after {
      @apply h-4 bg-white block absolute w-1 -top-1 -right-1;

      content: '';
    }
  }

  .BaseAudio__extern-wrapper {
    > button {
      @apply mr-1 sm:-mt-2 lg:-mt-2.5 ml-2.5 opacity-100 hover:opacity-80;

      svg {
        @apply w-6;
      }
    }
  }
}
</style>
