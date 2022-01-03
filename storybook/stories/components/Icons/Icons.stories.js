import IconArrow from './IconArrow.vue'
import IconCaret from './IconCaret.vue'
import IconClose from './IconClose.vue'
import IconDownload from './IconDownload.vue'
import IconExpand from './IconExpand.vue'
import IconExternal from './IconExternal.vue'
import IconInfo from './IconInfo.vue'
import IconNext from './IconNext.vue'
import IconPrev from './IconPrev.vue'
import IconSearch from './IconSearch.vue'
import IconSocialEmail from './IconSocialEmail.vue'
import IconSocialFacebook from './IconSocialFacebook.vue'
import IconSocialInstagram from './IconSocialInstagram.vue'
import IconSocialTwitter from './IconSocialTwitter.vue'
import IconSocialYoutube from './IconSocialYoutube.vue'

export default {
  title: 'Brand Identity/Icons',
  component: IconNext,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          'text-xs',
          'text-sm',
          'text-base',
          'text-lg',
          'text-xl',
          'text-2xl',
        ],
      },
    },
    colorClass: {
      control: {
        type: 'select',
        options: [
          'text-black',
          'text-jpl-red bg-transparent',
          'text-white bg-jpl-red',
        ],
      },
    },
  },
  decorators: [
    () => ({
      template: `<div class="inline-block"><story/></div>`,
    }),
  ],
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'Use with tailwind text classes to specify size and color',
      },
    },
  },
}

export const Arrow = (args) => ({
  props: Object.keys(args),
  components: { IconArrow },
  template: `<IconArrow :class="size + ' ' + colorClass" />`,
})
Arrow.args = { size: 'text-base', colorClass: 'text-black' }

export const Arrows = (args) => ({
  props: Object.keys(args),
  components: { IconArrows },
  template: `<IconArrows :class="size + ' ' + colorClass" />`,
})
Arrows.args = { size: 'text-base', colorClass: 'text-black' }

export const Calendar = (args) => ({
  props: Object.keys(args),
  components: { IconCalendar },
  template: `<IconCalendar :class="size + ' ' + colorClass" />`,
})
Calendar.args = { ...Arrow.args }

export const Caret = (args) => ({
  props: Object.keys(args),
  components: { IconCaret },
  template: `<IconCaret :class="size + ' ' + colorClass" />`,
})
Caret.args = { ...Arrow.args }

export const Checkbox = (args) => ({
  props: Object.keys(args),
  components: { IconCheckbox },
  template: `<IconCheckbox :class="size + ' ' + colorClass" />`,
})
Checkbox.args = { ...Arrow.args }

export const CheckboxSelected = (args) => ({
  props: Object.keys(args),
  components: { IconCheckboxSelected },
  template: `<IconCheckboxSelected :class="size + ' ' + colorClass" />`,
})
CheckboxSelected.args = { ...Arrow.args }

export const Close = (args) => ({
  props: Object.keys(args),
  components: { IconClose },
  template: `<IconClose :class="size + ' ' + colorClass" />`,
})
Close.args = { ...Arrow.args }

export const Download = (args) => ({
  props: Object.keys(args),
  components: { IconDownload },
  template: `<IconDownload :class="size + ' ' + colorClass" />`,
})
Download.args = { ...Arrow.args }

export const Dropdown = (args) => ({
  props: Object.keys(args),
  components: { IconDropdown },
  template: `<IconDropdown :class="size + ' ' + colorClass" />`,
})
Dropdown.args = { ...Arrow.args }

export const External = (args) => ({
  props: Object.keys(args),
  components: { IconExternal },
  template: `<IconExternal :class="size + ' ' + colorClass" />`,
})
External.args = { ...Arrow.args }

export const Filter = (args) => ({
  props: Object.keys(args),
  components: { IconFilter },
  template: `<IconFilter :class="size + ' ' + colorClass" />`,
})
Filter.args = { ...Arrow.args }

export const Grid = (args) => ({
  props: Object.keys(args),
  components: { IconGrid },
  template: `<IconGrid :class="size + ' ' + colorClass" />`,
})
Grid.args = { ...Arrow.args }

export const Info = (args) => ({
  props: Object.keys(args),
  components: { IconInfo },
  template: `<IconInfo :class="size + ' ' + colorClass" />`,
})
Info.args = { ...Arrow.args }

export const List = (args) => ({
  props: Object.keys(args),
  components: { IconList },
  template: `<IconList :class="size + ' ' + colorClass" />`,
})
List.args = { ...Arrow.args }

export const Location = (args) => ({
  props: Object.keys(args),
  components: { IconLocation },
  template: `<IconLocation :class="size + ' ' + colorClass" />`,
})
Location.args = { ...Arrow.args }

export const Menu = (args) => ({
  props: Object.keys(args),
  components: { IconMenu },
  template: `<IconMenu :class="size + ' ' + colorClass" />`,
})
Menu.args = { ...Arrow.args }

export const Minus = (args) => ({
  props: Object.keys(args),
  components: { IconMinus },
  template: `<IconMinus :class="size + ' ' + colorClass" />`,
})
Minus.args = { ...Arrow.args }

export const Plus = (args) => ({
  props: Object.keys(args),
  components: { IconPlus },
  template: `<IconPlus :class="size + ' ' + colorClass" />`,
})
Plus.args = { ...Arrow.args }

export const Search = (args) => ({
  props: Object.keys(args),
  components: { IconSearch },
  template: `<IconSearch :class="size + ' ' + colorClass" />`,
})
Search.args = { ...Arrow.args }

export const SocialEmail = (args) => ({
  props: Object.keys(args),
  components: { IconSocialEmail },
  template: `<IconSocialEmail :class="size + ' ' + colorClass" />`,
})
SocialEmail.args = { ...Arrow.args }

export const SocialFacebook = (args) => ({
  props: Object.keys(args),
  components: { IconSocialFacebook },
  template: `<IconSocialFacebook :class="size + ' ' + colorClass" />`,
})
SocialFacebook.args = { ...Arrow.args }

export const SocialInstagram = (args) => ({
  props: Object.keys(args),
  components: { IconSocialInstagram },
  template: `<IconSocialInstagram :class="size + ' ' + colorClass" />`,
})
SocialInstagram.args = { ...Arrow.args }

export const SocialTwitter = (args) => ({
  props: Object.keys(args),
  components: { IconSocialTwitter },
  template: `<IconSocialTwitter :class="size + ' ' + colorClass" />`,
})
SocialTwitter.args = { ...Arrow.args }

export const SocialYoutube = (args) => ({
  props: Object.keys(args),
  components: { IconSocialYoutube },
  template: `<IconSocialYoutube :class="size + ' ' + colorClass" />`,
})
SocialYoutube.args = { ...Arrow.args }

export const Time = (args) => ({
  props: Object.keys(args),
  components: { IconTime },
  template: `<IconTime :class="size + ' ' + colorClass" />`,
})
Time.args = { ...Arrow.args }

// these have an inherent square dimension
export const Prev = (args) => ({
  props: Object.keys(args),
  components: { IconPrev },
  template: `<IconPrev :class="size + ' ' + colorClass" />`,
})
Prev.args = { size: 'text-base', colorClass: 'text-white bg-jpl-red' }
Prev.parameters = {
  docs: {
    description: {
      story: 'This icon includes padding for a square dimension',
    },
  },
}

export const Next = (args) => ({
  props: Object.keys(args),
  components: { IconNext },
  template: `<IconNext :class="size + ' ' + colorClass" />`,
})
Next.args = { ...Prev.args }
Next.parameters = {
  docs: {
    description: {
      story: 'This icon includes padding for a square dimension',
    },
  },
}

export const Expand = (args) => ({
  props: Object.keys(args),
  components: { IconExpand },
  template: `<IconExpand :class="size + ' ' + colorClass" />`,
})
Expand.args = { ...Prev.args }
Expand.parameters = {
  docs: {
    description: {
      story: 'This icon includes padding for a square dimension',
    },
  },
}

export const Audio = (args) => ({
  props: Object.keys(args),
  components: { IconAudio },
  template: `<IconAudio :class="size + ' ' + colorClass" />`,
})
Audio.args = { ...Prev.args }
Audio.parameters = {
  docs: {
    description: {
      story: 'This icon includes padding for a square dimension',
    },
  },
}

export const Play = (args) => ({
  props: Object.keys(args),
  components: { IconPlay },
  template: `<IconPlay :class="size + ' ' + colorClass" />`,
})
Play.args = { ...Prev.args }
Play.parameters = {
  docs: {
    description: {
      story: 'This icon includes padding for a square dimension',
    },
  },
}

export const Pause = (args) => ({
  props: Object.keys(args),
  components: { IconPause },
  template: `<IconPause :class="size + ' ' + colorClass" />`,
})
Pause.args = { ...Prev.args }

export const Stop = (args) => ({
  props: Object.keys(args),
  components: { IconStop },
  template: `<IconStop :class="size + ' ' + colorClass" />`,
})
Stop.args = { size: 'text-sm', colorClass: 'text-jpl-red' }

export const Volume = (args) => ({
  props: Object.keys(args),
  components: { IconVolume },
  template: `<IconVolume :class="size + ' ' + colorClass" />`,
})
Volume.args = { size: 'text-base', colorClass: 'text-jpl-red' }

export const Mute = (args) => ({
  props: Object.keys(args),
  components: { IconMute },
  template: `<IconMute :class="size + ' ' + colorClass" />`,
})
Mute.args = { size: 'text-base', colorClass: 'text-jpl-red' }

export const ThreeSixty = (args) => ({
  props: Object.keys(args),
  components: { Icon360 },
  template: `<Icon360 :class="size + ' ' + colorClass" />`,
})
ThreeSixty.args = { ...Prev.args }
ThreeSixty.parameters = {
  docs: {
    description: {
      story: 'This icon includes padding for a square dimension',
    },
  },
}
