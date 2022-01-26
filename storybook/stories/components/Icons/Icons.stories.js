import React from 'react'
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs'
import { Icon360Template } from './Icon360'
import { IconArrowTemplate } from './IconArrow'
import { IconArrowsTemplate } from './IconArrows'
import { IconAudioTemplate } from './IconAudio'
import { IconCalendarTemplate } from './IconCalendar'
import { IconCaretTemplate } from './IconCaret'
import { IconCheckboxTemplate } from './IconCheckbox'
import { IconCheckboxSelectedTemplate } from './IconCheckboxSelected'
import { IconCloseTemplate } from './IconClose'
import { IconCloseLightboxTemplate } from './IconCloseLightbox'
import { IconDownloadTemplate } from './IconDownload'
import { IconDropdownTemplate } from './IconDropdown'
import { IconExpandTemplate } from './IconExpand'
import { IconExternalTemplate } from './IconExternal'
import { IconFilterTemplate } from './IconFilter'
import { IconGridTemplate } from './IconGrid'
import { IconInfoTemplate } from './IconInfo'
import { IconListTemplate } from './IconList'
import { IconLocationTemplate } from './IconLocation'
import { IconMenuTemplate } from './IconMenu'
import { IconMinusTemplate } from './IconMinus'
import { IconNextTemplate } from './IconNext'
import { IconPlayTemplate } from './IconPlay'
import { IconPauseTemplate } from './IconPause'
import { IconMuteTemplate } from './IconMute'
import { IconStopTemplate } from './IconStop'
import { IconVolumeTemplate } from './IconVolume'
import { IconPlusTemplate } from './IconPlus'
import { IconPrevTemplate } from './IconPrev'
import { IconSearchTemplate } from './IconSearch'
import { IconSocialEmailTemplate } from './IconSocialEmail'
import { IconSocialFacebookTemplate } from './IconSocialFacebook'
import { IconSocialInstagramTemplate } from './IconSocialInstagram'
import { IconSocialTwitterTemplate } from './IconSocialTwitter'
import { IconSocialYoutubeTemplate } from './IconSocialYoutube'
import { IconTimeTemplate } from './IconTime'

export default {
  title: 'Brand Identity/Icons',
  argTypes: {
    customClass: {
      type: 'string',
      description:
        'Use Tailwind CSS text size, color and background classes to control the icon styling. Icon dimensions are set in `em`s to allow for relative sizing.',
      control: { type: 'text' },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories includePrimary={true} title="All icons" />
        </>
      ),
      description: {
        component:
          'Icons are rendered by inserting their SVG markup directly into the DOM. We encourage taking advantage of your templating system to do this in a more developer-friendly way than copying and pasting the entire HTML code. For example, in our Django templates, we store the SVG markup in individual template files and then insert it with Django’s `include` tag, like so: `{% include "components/Icons/IconClose.html" %}`.' +
          '\n\n' +
          'Icon size and color are handled by Tailwind CSS text classes. These can be applied directly to the `<svg>` element or to a wrapping element.',
      },
    },
  },
}
const IconData = {
  customClass: 'text-base text-black',
}
const IconSquareData = {
  customClass: 'text-base text-white bg-jpl-red',
}

export const Arrow = IconArrowTemplate.bind()
Arrow.args = IconData

export const Arrows = IconArrowsTemplate.bind()
Arrows.args = IconData

export const Calendar = IconCalendarTemplate.bind()
Calendar.args = IconData

export const Caret = IconCaretTemplate.bind()
Caret.args = IconData

export const Checkbox = IconCheckboxTemplate.bind()
Checkbox.args = IconData

export const CheckboxSelected = IconCheckboxSelectedTemplate.bind()
CheckboxSelected.args = IconData

export const Close = IconCloseTemplate.bind()
Close.args = IconData

export const CloseLightbox = IconCloseLightboxTemplate.bind()
CloseLightbox.args = IconData

export const Download = IconDownloadTemplate.bind()
Download.args = IconData

export const Dropdown = IconDropdownTemplate.bind()
Dropdown.args = IconData

export const External = IconExternalTemplate.bind()
External.args = IconData

export const Filter = IconFilterTemplate.bind()
Filter.args = IconData

export const Grid = IconGridTemplate.bind()
Grid.args = IconData

export const Info = IconInfoTemplate.bind()
Info.args = IconData

export const List = IconListTemplate.bind()
List.args = IconData

export const Location = IconLocationTemplate.bind()
Location.args = IconData

export const Menu = IconMenuTemplate.bind()
Menu.args = IconData

export const Minus = IconMinusTemplate.bind()
Minus.args = IconData

export const Plus = IconPlusTemplate.bind()
Plus.args = IconData

export const Search = IconSearchTemplate.bind()
Search.args = IconData

export const Time = IconTimeTemplate.bind()
Time.args = IconData

export const SocialEmail = IconSocialEmailTemplate.bind()
SocialEmail.args = { customClass: 'text-base text-black' }

export const SocialFacebook = IconSocialFacebookTemplate.bind()
SocialFacebook.args = { customClass: 'text-base text-facebook' }

export const SocialInstagram = IconSocialInstagramTemplate.bind()
SocialInstagram.args = { customClass: 'text-base text-instagram' }

export const SocialTwitter = IconSocialTwitterTemplate.bind()
SocialTwitter.args = { customClass: 'text-base text-twitter' }

export const SocialYoutube = IconSocialYoutubeTemplate.bind()
SocialYoutube.args = { customClass: 'text-base text-youtube' }

// Square Icons

export const Prev = IconPrevTemplate.bind()
Prev.args = IconSquareData
Prev.parameters = {
  docs: {
    description: {
      story: 'This icon includes padding for a square dimension',
    },
  },
}

export const Next = IconNextTemplate.bind()
Next.args = IconSquareData
Next.parameters = Prev.parameters

export const Expand = IconExpandTemplate.bind()
Expand.args = IconSquareData
Expand.parameters = Prev.parameters

export const Audio = IconAudioTemplate.bind()
Audio.args = IconSquareData
Audio.parameters = Prev.parameters

export const Play = IconPlayTemplate.bind()
Play.args = IconSquareData
Play.parameters = Prev.parameters

export const Pause = IconPauseTemplate.bind()
Pause.args = IconSquareData
Pause.parameters = Prev.parameters

export const Stop = IconStopTemplate.bind()
Stop.args = { customClass: 'text-sm text-jpl-red' }

export const Volume = IconVolumeTemplate.bind()
Volume.args = { customClass: 'text-base text-jpl-red' }

export const Mute = IconMuteTemplate.bind()
Mute.args = { customClass: 'text-base text-jpl-red' }

export const ThreeSixty = Icon360Template.bind()
ThreeSixty.args = IconSquareData
ThreeSixty.parameters = Prev.parameters
