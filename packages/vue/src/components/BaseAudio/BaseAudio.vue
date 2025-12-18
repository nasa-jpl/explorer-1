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
              class="BaseAudio__playback-time-wrapper cursor-pointer relative inline-block w-full border-t border-jpl-red bg-gray-mid bg-opacity-25 h-2"
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
<script lang="ts">
import { defineComponent } from 'vue'
// import { eventBus } from './../../utils/eventBus'
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

export const convertTimeHHMMSS = (val: any) => {
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
    /**
     * Path to audio file
     */
    file: {
      type: String,
      default: null
    },
    autoPlay: {
      /**
       * If audio should play automatically
       */
      type: Boolean,
      default: false
    }
  },
  data(): {
    firstPlay: boolean
    isMuted: boolean
    loaded: boolean
    playing: boolean
    paused: boolean
    progressStyle: string
    currentTime: string
    uuid: string
    audio?: HTMLAudioElement
    totalDuration: number
    hideVolumeSlider: boolean
    volumeValue: number
  } {
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
    if (this.audio) {
      this.audio.removeEventListener('timeupdate', this._handlePlayingUI)
      this.audio.removeEventListener('loadeddata', this._handleLoaded)
      this.audio.removeEventListener('pause', this._handlePlayPause)
      this.audio.removeEventListener('play', this._handlePlayPause)
    }
  },
  methods: {
    setPosition: function name(e: any) {
      if (this.audio) {
        const tag = e.target
        if (this.paused) return

        if (e.target.tagName === 'SPAN') {
          return
        }
        const pos = tag.getBoundingClientRect()
        const seekPos = (e.clientX - pos.left) / pos.width
        this.audio.currentTime = this.audio.duration * seekPos
      }
    },
    updateVolume() {
      if (this.audio) {
        this.hideVolumeSlider = false
        this.audio.volume = this.volumeValue / 100
        if (this.volumeValue / 100 > 0) {
          this.isMuted = this.audio.muted = false
        }

        if (this.volumeValue / 100 === 0) {
          this.isMuted = this.audio.muted = true
        }
      }
    },
    toggleVolume() {
      this.hideVolumeSlider = true
    },
    stop() {
      if (this.audio) {
        this.playing = false
        this.paused = true
        this.audio.pause()
        this.audio.currentTime = 0
      }
    },
    play() {
      if (this.playing && !this.paused) {
        return
      } else if (this.audio) {
        this.paused = false
        this.audio.play()
        this.playing = true
        this.$root?.$emit('play', this.uuid)
      }
    },
    forward(duration: number) {
      return this.audio ? (this.audio.currentTime += duration) : undefined
    },
    rewind(duration: number) {
      return this.audio ? (this.audio.currentTime -= duration) : undefined
    },
    pause() {
      if (this.audio) {
        this.paused = !this.paused
        this.paused ? this.audio.pause() : this.audio.play()
      }
    },
    pauseOthers(activeUuid: string) {
      if (this.audio && this.uuid !== activeUuid) {
        this.paused = true
        this.audio.pause()
      }
    },
    toggleMute() {
      if (this.audio) {
        this.isMuted = !this.isMuted
        this.audio.muted = this.isMuted
        this.volumeValue = this.isMuted ? 0 : 100
      }
    },
    _handleLoaded() {
      if (this.audio && this.audio.readyState >= 2) {
        if (this.autoPlay) this.play()

        this.loaded = true
        this.totalDuration = this.audio.duration
      } else {
        throw new Error('Failed to load audio file')
      }
    },
    _handlePlayingUI(_e: any) {
      if (this.audio) {
        const currTime = this.audio.currentTime
        const percentage = (currTime / this.totalDuration) * 100
        this.progressStyle = `width: ${percentage}%;`
        this.currentTime = convertTimeHHMMSS(currTime)
      }
    },
    _handlePlayPause(e: any) {
      if (this.audio && e.type === 'play' && this.firstPlay) {
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
      if (this.audio) {
        this.audio.addEventListener('timeupdate', this._handlePlayingUI)
        this.audio.addEventListener('loadeddata', this._handleLoaded)
        this.audio.addEventListener('pause', this._handlePlayPause)
        this.audio.addEventListener('play', this._handlePlayPause)
        this.audio.addEventListener('ended', this._handleEnded)
      }
      // TODO: VUE3: pass uuID to pauseOthers() method
      // eventBus.on('play', () => this.pauseOthers())
    },
    getAudio() {
      return this.$el.querySelectorAll('audio')[0]
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseAudio';
</style>
