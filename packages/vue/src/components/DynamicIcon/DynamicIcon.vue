<template>
  <component
    :is="theIcon"
    v-if="theIcon"
  />
</template>

<script lang="ts">
import { defineComponent, type Component } from 'vue'
import Icon360 from './../Icons/Icon360.vue'
import IconArrow from './../Icons/IconArrow.vue'
import IconArrows from './../Icons/IconArrows.vue'
import IconAudio from './../Icons/IconAudio.vue'
import IconBook from './../Icons/IconBook.vue'
import IconBookmark from './../Icons/IconBookmark.vue'
import IconBookUser from './../Icons/IconBookUser.vue'
import IconBriefcase from './../Icons/IconBriefcase.vue'
import IconCalendar from './../Icons/IconCalendar.vue'
import IconCaret from './../Icons/IconCaret.vue'
import IconCheckbox from './../Icons/IconCheckbox.vue'
import IconCheckboxSelected from './../Icons/IconCheckboxSelected.vue'
import IconClose from './../Icons/IconClose.vue'
import IconCloseLightbox from './../Icons/IconCloseLightbox.vue'
import IconDownload from './../Icons/IconDownload.vue'
import IconDropdown from './../Icons/IconDropdown.vue'
import IconEduArt from './../Icons/IconEduArt.vue'
import IconEduEngineering from './../Icons/IconEduEngineering.vue'
import IconEduEnglishLanguageArts from './../Icons/IconEduEnglishLanguageArts.vue'
import IconEduMathematics from './../Icons/IconEduMathematics.vue'
import IconEduScience from './../Icons/IconEduScience.vue'
import IconEduTechnology from './../Icons/IconEduTechnology.vue'
import IconEnvelope from './../Icons/IconEnvelope.vue'
import IconExpand from './../Icons/IconExpand.vue'
import IconExternal from './../Icons/IconExternal.vue'
import IconFilter from './../Icons/IconFilter.vue'
import IconForwardTen from './../Icons/IconForwardTen.vue'
import IconGrid from './../Icons/IconGrid.vue'
import IconHand from './../Icons/IconHand.vue'
import IconHourglass from './../Icons/IconHourglass.vue'
import IconInfo from './../Icons/IconInfo.vue'
import IconLink from './../Icons/IconLink.vue'
import IconList from './../Icons/IconList.vue'
import IconLocation from './../Icons/IconLocation.vue'
import IconLocationCrosshairs from './../Icons/IconLocationCrosshairs.vue'
import IconMagnifyingGlass from './../Icons/IconMagnifyingGlass.vue'
import IconMap from './../Icons/IconMap.vue'
import IconMedal from './../Icons/IconMedal.vue'
import IconMenu from './../Icons/IconMenu.vue'
import IconMinus from './../Icons/IconMinus.vue'
import IconMute from './../Icons/IconMute.vue'
import IconNext from './../Icons/IconNext.vue'
import IconPause from './../Icons/IconPause.vue'
import IconPlay from './../Icons/IconPlay.vue'
import IconPlus from './../Icons/IconPlus.vue'
import IconPrev from './../Icons/IconPrev.vue'
import IconProfile from './../Icons/IconProfile.vue'
import IconRewindTen from './../Icons/IconRewindTen.vue'
import IconSearch from './../Icons/IconSearch.vue'
import IconShare from './../Icons/IconShare.vue'
import IconSlideshow from './../Icons/IconSlideshow.vue'
import IconSocialEmail from './../Icons/IconSocialEmail.vue'
import IconSocialFacebook from './../Icons/IconSocialFacebook.vue'
import IconSocialGoogleClassroom from './../Icons/IconSocialGoogleClassroom.vue'
import IconSocialInstagram from './../Icons/IconSocialInstagram.vue'
import IconSocialPinterest from './../Icons/IconSocialPinterest.vue'
import IconSocialReddit from './../Icons/IconSocialReddit.vue'
import IconSocialTwitter from './../Icons/IconSocialTwitter.vue'
import IconSocialYoutube from './../Icons/IconSocialYoutube.vue'
import IconStop from './../Icons/IconStop.vue'
import IconTime from './../Icons/IconTime.vue'
import IconUniversity from './../Icons/IconUniversity.vue'
import IconUser from './../Icons/IconUser.vue'
import IconVolume from './../Icons/IconVolume.vue'

export const iconMap: Record<string, Component> = {
  Icon360,
  IconArrow,
  IconArrows,
  IconAudio,
  IconBook,
  IconBookmark,
  IconBookUser,
  IconBriefcase,
  IconCalendar,
  IconCaret,
  IconCheckbox,
  IconCheckboxSelected,
  IconClose,
  IconCloseLightbox,
  IconDownload,
  IconDropdown,
  IconEduArt,
  IconEduEngineering,
  IconEduEnglishLanguageArts,
  IconEduMathematics,
  IconEduScience,
  IconEduTechnology,
  IconEnvelope,
  IconExpand,
  IconExternal,
  IconFilter,
  IconForwardTen,
  IconGrid,
  IconHand,
  IconHourglass,
  IconInfo,
  IconLink,
  IconList,
  IconLocation,
  IconLocationCrosshairs,
  IconMagnifyingGlass,
  IconMap,
  IconMedal,
  IconMenu,
  IconMinus,
  IconMute,
  IconNext,
  IconPause,
  IconPlay,
  IconPlus,
  IconPrev,
  IconProfile,
  IconRewindTen,
  IconSearch,
  IconShare,
  IconSlideshow,
  IconSocialEmail,
  IconSocialFacebook,
  IconSocialGoogleClassroom,
  IconSocialInstagram,
  IconSocialPinterest,
  IconSocialReddit,
  IconSocialTwitter,
  IconSocialYoutube,
  IconStop,
  IconTime,
  IconUniversity,
  IconUser,
  IconVolume
}

export default defineComponent({
  name: 'DynamicIcon',
  props: {
    icon: {
      type: String,
      required: false,
      default: undefined
    }
  },
  computed: {
    theIcon() {
      return this.icon ? iconMap[this.icon] : undefined
    }
  },
})
</script>