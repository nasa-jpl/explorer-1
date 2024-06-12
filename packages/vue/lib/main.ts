// utils
import dayjs from './../src/utils/dayjs'
import filters from './../src/utils/filters'
import type { Explorer1Theme } from '../src/interfaces'

// stores
import { useHeaderStore } from './../src/store/header'
import { useThemeStore } from './../src/store/theme'
// mixins
import {
  mixinTransparentHeader,
  mixinGetLinkText,
  mixinGetRouterLink,
  mixinUpdateGlobalChildren,
  mixinUpdateSecondary,
  mixinHighlightPrimary,
  mixinIsActivePath,
  mixinGetSrcSet,
  mixinGetExternalLink,
  mixinCanonicalUrl,
  mixinLightboxItems,
  mixinLightboxGalleryItems,
  mixinFormatSplitEventDates,
  mixinFormatEventDates,
  mixinFormatEventTimeInHoursAndMinutes
} from './../src/utils/mixins'
// components here
import BaseButton from './../src/components/BaseButton/BaseButton.vue'
import BaseHeading from './../src/components/BaseButton/BaseButton.vue'
import BaseImage from './../src/components/BaseImage/BaseImage.vue'
import BaseLink from './../src/components/BaseLink/BaseLink.vue'
import BlockHeading from './../src/components/BlockHeading/BlockHeading.vue'
import BlockImage from './../src/components/BlockImage/BlockImage.vue'
import BlockImageFullBleed from './../src/components/BlockImage/BlockImageFullBleed.vue'
import BlockImageStandard from './../src/components/BlockImage/BlockImageStandard.vue'
import IconArrows from './../src/components/Icons/IconArrows.vue'
import IconCaret from './../src/components/Icons/IconCaret.vue'
import IconLocation from './../src/components/Icons/IconLocation.vue'
import IconUser from './../src/components/Icons/IconUser.vue'
import MixinAnimationCaret from './../src/components/MixinAnimationCaret/MixinAnimationCaret.vue'
import MixinFancybox from './../src/components/MixinFancybox/MixinFancybox.vue'

export {
  type Explorer1Theme,
  dayjs,
  filters,
  useHeaderStore,
  useThemeStore,
  mixinTransparentHeader,
  mixinGetLinkText,
  mixinGetRouterLink,
  mixinUpdateGlobalChildren,
  mixinUpdateSecondary,
  mixinHighlightPrimary,
  mixinIsActivePath,
  mixinGetSrcSet,
  mixinGetExternalLink,
  mixinCanonicalUrl,
  mixinLightboxItems,
  mixinLightboxGalleryItems,
  mixinFormatSplitEventDates,
  mixinFormatEventDates,
  mixinFormatEventTimeInHoursAndMinutes,
  BaseButton,
  BaseHeading,
  BaseImage,
  BaseLink,
  BlockHeading,
  BlockImage,
  BlockImageFullBleed,
  BlockImageStandard,
  IconArrows,
  IconCaret,
  IconLocation,
  IconUser,
  MixinAnimationCaret,
  MixinFancybox
}
