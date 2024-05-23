import { Icon360Template } from '../../components/Icons/Icon360'
import { IconArrowTemplate } from '../../components/Icons/IconArrow'
import { IconArrowsTemplate } from '../../components/Icons/IconArrows'
import { IconAudioTemplate } from '../../components/Icons/IconAudio'
import { IconCalendarTemplate } from '../../components/Icons/IconCalendar'
import { IconCaretTemplate } from '../../components/Icons/IconCaret'
import { IconCheckboxTemplate } from '../../components/Icons/IconCheckbox'
import { IconCheckboxSelectedTemplate } from '../../components/Icons/IconCheckboxSelected'
import { IconCloseTemplate } from '../../components/Icons/IconClose'
import { IconCloseLightboxTemplate } from '../../components/Icons/IconCloseLightbox'
import { IconDownloadTemplate } from '../../components/Icons/IconDownload'
import { IconDropdownTemplate } from '../../components/Icons/IconDropdown'
import { IconExpandTemplate } from '../../components/Icons/IconExpand'
import { IconExternalTemplate } from '../../components/Icons/IconExternal'
import { IconFilterTemplate } from '../../components/Icons/IconFilter'
import { IconGridTemplate } from '../../components/Icons/IconGrid'
import { IconInfoTemplate } from '../../components/Icons/IconInfo'
import { IconListTemplate } from '../../components/Icons/IconList'
import { IconLocationTemplate } from '../../components/Icons/IconLocation'
import { IconMenuTemplate } from '../../components/Icons/IconMenu'
import { IconMinusTemplate } from '../../components/Icons/IconMinus'
import { IconNextTemplate } from '../../components/Icons/IconNext'
import { IconPlayTemplate } from '../../components/Icons/IconPlay'
import { IconPauseTemplate } from '../../components/Icons/IconPause'
import { IconMuteTemplate } from '../../components/Icons/IconMute'
import { IconStopTemplate } from '../../components/Icons/IconStop'
import { IconVolumeTemplate } from '../../components/Icons/IconVolume'
import { IconPlusTemplate } from '../../components/Icons/IconPlus'
import { IconPrevTemplate } from '../../components/Icons/IconPrev'
import { IconSearchTemplate } from '../../components/Icons/IconSearch'
import { IconSocialEmailTemplate } from '../../components/Icons/IconSocialEmail'
import { IconSocialFacebookTemplate } from '../../components/Icons/IconSocialFacebook'
import { IconSocialInstagramTemplate } from '../../components/Icons/IconSocialInstagram'
import { IconSocialTwitterTemplate } from '../../components/Icons/IconSocialTwitter'
import { IconSocialYoutubeTemplate } from '../../components/Icons/IconSocialYoutube'
import { IconSocialRedditTemplate } from '../../components/Icons/IconSocialReddit'
import { IconTimeTemplate } from '../../components/Icons/IconTime'
import { IconUserTemplate } from '../../components/Icons/IconUser'

export default {
  title: 'Foundation/Icons',
  argTypes: {
    customClass: {
      type: 'string',
      description:
        'Use Tailwind CSS text size, color and background classes to control the icon styling. Icon dimensions are set in `em`s to allow for relative sizing.',
      control: { type: 'text' }
    }
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'Icons are rendered by inserting their SVG markup directly into the DOM. We encourage taking advantage of your templating system to do this in a more developer-friendly way than copying and pasting the entire HTML code. For example, in our Django templates, we store the SVG markup in individual template files and then insert it with Django’s `include` tag, like so: `{% include "components/Icons/IconClose.html" %}`.' +
          '\n\n' +
          'Icon size and color are handled by Tailwind CSS text classes. These can be applied directly to the `<svg>` element or to a wrapping element.'
      }
    }
  }
}
const IconData = {
  customClass: 'text-base text-black'
}
const IconSquareData = {
  customClass: 'text-base text-white bg-jpl-red'
}

export const Arrow = IconArrowTemplate.bind({})
Arrow.args = IconData

export const Arrows = IconArrowsTemplate.bind({})
Arrows.args = IconData

export const Calendar = IconCalendarTemplate.bind({})
Calendar.args = IconData

export const Caret = IconCaretTemplate.bind({})
Caret.args = IconData

export const Checkbox = IconCheckboxTemplate.bind({})
Checkbox.args = IconData

export const CheckboxSelected = IconCheckboxSelectedTemplate.bind({})
CheckboxSelected.args = IconData

export const Close = IconCloseTemplate.bind({})
Close.args = IconData

export const CloseLightbox = IconCloseLightboxTemplate.bind({})
CloseLightbox.args = IconData

export const Download = IconDownloadTemplate.bind({})
Download.args = IconData

export const Dropdown = IconDropdownTemplate.bind({})
// Dropdown.args = IconData;

export const External = IconExternalTemplate.bind({})
External.args = IconData

export const Filter = IconFilterTemplate.bind({})
Filter.args = IconData

export const Grid = IconGridTemplate.bind({})
Grid.args = IconData

export const Info = IconInfoTemplate.bind({})
Info.args = IconData

export const List = IconListTemplate.bind({})
List.args = IconData

export const Location = IconLocationTemplate.bind({})
Location.args = IconData

export const Menu = IconMenuTemplate.bind({})
Menu.args = IconData

export const Minus = IconMinusTemplate.bind({})
Minus.args = IconData

export const Plus = IconPlusTemplate.bind({})
Plus.args = IconData

export const Search = IconSearchTemplate.bind({})
Search.args = IconData

export const Time = IconTimeTemplate.bind({})
Time.args = IconData

export const User = IconUserTemplate.bind({})
User.args = IconData

export const SocialEmail = IconSocialEmailTemplate.bind({})
SocialEmail.args = { customClass: 'text-base text-black' }

export const SocialFacebook = IconSocialFacebookTemplate.bind({})
SocialFacebook.args = { customClass: 'text-base text-facebook' }

export const SocialInstagram = IconSocialInstagramTemplate.bind({})
SocialInstagram.args = { customClass: 'text-base text-instagram' }

export const SocialReddit = IconSocialRedditTemplate.bind({})
SocialReddit.args = { customClass: 'text-base text-reddit' }

export const SocialYoutube = IconSocialYoutubeTemplate.bind({})
SocialYoutube.args = { customClass: 'text-base text-youtube' }

export const SocialX = IconSocialTwitterTemplate.bind({})
SocialX.args = { customClass: 'text-base text-twitter' }

// Square Icons

export const Prev = IconPrevTemplate.bind({})
Prev.args = IconSquareData
Prev.parameters = {
  docs: {
    description: {
      story: 'This icon includes padding for a square dimension'
    }
  }
}

export const Next = IconNextTemplate.bind({})
Next.args = IconSquareData
Next.parameters = Prev.parameters

export const Expand = IconExpandTemplate.bind({})
Expand.args = IconSquareData
Expand.parameters = Prev.parameters

export const Audio = IconAudioTemplate.bind({})
Audio.args = IconSquareData
Audio.parameters = Prev.parameters

export const Play = IconPlayTemplate.bind({})
Play.args = IconSquareData
Play.parameters = Prev.parameters

export const Pause = IconPauseTemplate.bind({})
Pause.args = IconSquareData
Pause.parameters = Prev.parameters

export const Stop = IconStopTemplate.bind({})
Stop.args = { customClass: 'text-sm text-jpl-red' }

export const Volume = IconVolumeTemplate.bind({})
Volume.args = { customClass: 'text-base text-jpl-red' }

export const Mute = IconMuteTemplate.bind({})
Mute.args = { customClass: 'text-base text-jpl-red' }

export const ThreeSixty = Icon360Template.bind({})
ThreeSixty.args = IconSquareData
ThreeSixty.parameters = Prev.parameters
