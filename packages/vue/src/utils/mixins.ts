// import Vue from 'vue'
// @ts-ignore
import dayjs from './dayjs'
import { useHeaderStore } from './../store/header'
import { useRoute } from 'vue-router'
import type {
  BreadcrumbPathObject,
  ImageObject,
  ImageSrcObject,
  RelatedLinkObject
} from '@explorer-1/vue/src/interfaces'
// srcSet data structure
export interface SrcSetDataValue {
  url: string
  width: number
}
// nav link object
export type LinkObject = {
  linkPage: {
    title: string
    url: string
  } | null
  title: string | null
  path: string | null
}
// breadcrumbs used for nav and secondary nav
export type BreadcrumbObject = {
  menu_links: {
    [key: string]: [BreadcrumbPathObject]
  } | null
  more: [BreadcrumbPathObject] | null
}
// general related link object used in various places

// image object used to construct lightbox items
export type BaseImageObject = {
  title: string | null
  original: string | null
  credit: string | null
  detailUrl: string | null
}
// lightbox item used to construct lightbox items array
export type lightboxObject = {
  title: string | null
  url: string | null
  detailUrl: string | null
  credit: string | null
}

// lightbox item used to construct lightbox items array
export type lightboxGalleryObject = {
  title: string | null
  original: string | null
  detailUrl: string | null
  credit: string | null
}

export interface EventDateObject {
  day: string
  month: string
  year: string
  monthAndYear: string
}

/* -- mixinTransparentHeader --
      This mixin is used on the component level to make the header transparent.
      Mostly used by hero image components.
    */
export const mixinTransparentHeader = () => {
  const headerStore = useHeaderStore()
  if (headerStore) {
    headerStore.makeTransparent(true)
  }
}

/* -- mixinGetLinkText --
      This is used frequently in the navigation components
      and provides a graceful fallback to use the page title
      if one exists.
    */
export const mixinGetLinkText = (item: LinkObject): string => {
  if (item.title) {
    return item.title
  } else if (item.linkPage) {
    return item.linkPage.title
  }
  return ''
}

/* -- mixinGetRouterLink --
     Checks if nav links are a router link
     - Necessary for url query links as those are passed as external links but should be treated as router links
     - Only checks for /missions? and /news? to keep it safe
     - If a router link, returns a router-compatible string, otherwise null
     TODO: unit test would be good for this
     TODO: need to modify this to work with breadcrumb-passed objects too
           strategy: check if path starts with a slash.
    */
export const mixinGetRouterLink = (link: LinkObject): string | undefined => {
  if (link.linkPage && link.linkPage.url) {
    return link.linkPage.url
  } else if (link.path) {
    // TODO: VUE3 get env vars properly
    // const domain = process?.env?.SITE_HOSTNAME || 'http://localhost:3000'
    const domain = 'http://localhost:3000'
    // keeping it specific and only checking for mission slug with url query
    if (link.path.startsWith(domain + '/missions?') || link.path.startsWith(domain + '/news?')) {
      return link.path.replace(domain, '')
    } else if (link.path.startsWith('/')) {
      // if it's actually a relative link, make it so
      // (applies when breadcrumbs are passed to mobile secondary nav)
      return link.path
    }
  }
  return undefined
}

/* -- mixinUpdateGlobalChildren --
      This mixin is used by the navigation to share secondary nav items between the global nav and components
    */
export const mixinUpdateGlobalChildren = (value: [BreadcrumbPathObject] | null) => {
  const headerStore = useHeaderStore()
  headerStore.updateGlobalChildren(value)
}
/* -- mixinUpdateSecondary --
      This mixin is used by the navigation to share secondary nav override items between components
    */
export const mixinUpdateSecondary = (
  value: BreadcrumbPathObject[] | undefined,
  isJumpMenu: boolean = false
) => {
  const headerStore = useHeaderStore()
  headerStore.updateSecondary(value)
  headerStore.updateSecondaryNavIsJumpMenu(isJumpMenu)
}
/* -- mixinHighlightPrimary --
      This mixin is used to specify if active primary navigation items should be highlighted/underlined
      Use case: If a page displays a secondary nav, the active primary navigation item should have a different style treatment
    */
export const mixinHighlightPrimary = (value: boolean) => {
  const headerStore = useHeaderStore()
  headerStore.updateHighlightPrimary(value)
}
/* -- mixinIsActivePath --
      Used in various navigation components to determine if a navigation
      item matches the active path, or is an ancestor of the active path.
      Both cases will return true.
      Useful for dropdown toggles.
    */
export const mixinIsActivePath = (itemPath: string): Boolean => {
  const route = useRoute()
  const currentPath = route ? route.path : null
  const path = itemPath
  const ancestorPath = path ? (path.endsWith('/') ? path : path + '/') : null
  if (currentPath && path && ancestorPath) {
    if (currentPath === path) {
      return true
    } else {
      return currentPath.startsWith(ancestorPath)
    }
  }
  return false
}

/* -- mixinGetSrcSet --
      Use this when you are querying custom cropped renditions
      from Wagtail and want to use the image's srcset attribute.

      The only requirement is that the image query must include
      custom rendition queries that start with the string `screen`
      and query for both the `url` and `width`

      Example Query:
        image {
          screenXs: rendition(fill: "320x180-c10") {
            url
            width
          }
          screenMd: rendition(fill: "768x432-c10") {
            url
            width
          }
          screenXl: rendition(fill: "1280x640-c10") {
            url
            width
          }
        }
    */
export const mixinGetSrcSet = (srcSetObject: Partial<ImageObject>): string => {
  let srcSet = ''
  const valid = Object.keys(srcSetObject).some(function (key) {
    if (key.startsWith('screen')) {
      return true
    }
    return false
  })
  if (valid) {
    const srcSetArray: string[] = []
    for (const [key, value] of Object.entries(srcSetObject)) {
      if (key.startsWith('screen') && typeof value === 'object') {
        if ((value as ImageSrcObject).url && (value as ImageSrcObject).width) {
          srcSetArray.push(`${(value as ImageSrcObject).url} ${(value as ImageSrcObject).width}w`)
        }
      }
    }
    srcSet = srcSetArray.join(', ')
  }
  return srcSet
}
// Use with RelatedLinkBlock to retrieve the external link to use with an href prop
export const mixinGetExternalLink = (link: RelatedLinkObject): string | undefined => {
  if (link.externalLink) {
    return link.externalLink
  } else if (link.document) {
    return link.document.url
  }
  return undefined
}
// Gets the fully qualified canonical URL of the current page if passed $route.path string
export const mixinCanonicalUrl = (path: string): string => {
  const domain = 'https://www.jpl.nasa.gov'
  if (path.startsWith('http')) {
    return path
  } else {
    return domain + path
  }
}
// Used to construct an array of image objects to use with BaseLightbox
// TODO: currently only assembles an array of 1 item (single image lightbox).
// This will need to be modified to work for image gallery lightbox (multiple items)
export const mixinLightboxItems = (
  image: BaseImageObject,
  title: string
): lightboxObject[] | false => {
  // check for image original src url at minimum
  if (image && image.original) {
    let theTitle = image.title
    if (title) {
      theTitle = title
    }
    // kind of a hacky way to ensure the credit only shows up if there isn't a detailUrl link
    let theCredit = image.credit
    if (image.detailUrl) {
      theCredit = ''
    }
    return [
      {
        title: theTitle,
        url: image.original,
        detailUrl: image.detailUrl,
        credit: theCredit
      }
    ]
  }
  return false
}

export const mixinLightboxGalleryItems = (items: object | any): object | false => {
  const res = []
  const itemsArr: Array<object> = Object.keys(items).map(
    (key: string): lightboxGalleryObject => items[key]
  )
  if (items) {
    for (const images of itemsArr) {
      for (const image of Object.values(images)) {
        if (image && image.original !== undefined) {
          res.push({
            title: image.title,
            url: image.original,
            detailUrl: image.detailUrl,
            credit: image.credit
          })
        }
      }
    }
    return res
  } else {
    return false
  }
}

// return event dates for the red box that appears in the corner of the hero and thumbnail images
export const mixinFormatSplitEventDates = (
  startDatetime: string,
  endDatetime?: string
): EventDateObject => {
  const startDateDayjs = dayjs(startDatetime)

  let day = startDateDayjs.format('D')
  const month = startDateDayjs.format('MMM').replace('.', '')
  const year = startDateDayjs.format('YYYY')
  const monthAndYear = startDateDayjs.format('MMM YYYY')

  if (endDatetime) {
    const endDateDayjs = dayjs(endDatetime)

    if (
      startDateDayjs.format('MM') === endDateDayjs.format('MM') &&
      startDateDayjs.format('ll') !== endDateDayjs.format('ll')
    ) {
      // If event spans multiple days within the same month, show both days
      day = `${day}-${endDateDayjs.format('D')}`
    }
    // Otherwise, we only show the start date
  }
  return { day, month, year, monthAndYear }
}

// return event dates formatted for listing cards
export const mixinFormatEventDates = (startDatetime: string, endDatetime?: string): string => {
  const startDateDayjs = dayjs(startDatetime)

  let eventDate = startDateDayjs.format('ll')

  if (endDatetime) {
    const endDateDayjs = dayjs(endDatetime)

    if (startDateDayjs.format('YYYY') !== endDateDayjs.format('YYYY')) {
      // Event spans into another year
      eventDate = `${startDateDayjs.format('ll')} - ${endDateDayjs.format('ll')}`
    } else if (startDateDayjs.format('MM') !== endDateDayjs.format('MM')) {
      // Event spans multiple months
      eventDate = `${startDateDayjs.format('MMM D')} - ${endDateDayjs.format('ll')}`
    } else if (
      endDateDayjs.diff(startDateDayjs, 'hour') >= 24 &&
      startDateDayjs.format('ll') !== endDateDayjs.format('ll')
    ) {
      // Event spans multiple days within a calendar month and is greater than 24 hours
      eventDate = `${startDateDayjs.format('MMM D')}-${endDateDayjs.format(
        'D'
      )}, ${startDateDayjs.format('YYYY')}`
    }
  }
  return eventDate
}

export const mixinFormatEventTimeInHoursAndMinutes = (
  startDatetime: string,
  endDatetime?: string,
  endTime?: string
): string => {
  const startDateDayjs = dayjs(startDatetime)
  let time = ''

  if (endDatetime) {
    const endDateDayjs = dayjs(endDatetime)
    // Only display time if event spans less than one day
    // if (
    //   endDateDayjs.diff(startDateDayjs, 'hour') <= 24 &&
    //   endDateDayjs.diff(startDateDayjs, 'day') === 0
    // ) {
    // Event is less than 24 hours and spans 1 day
    if (endTime) {
      if (startDateDayjs.format('a') === endDateDayjs.format('a')) {
        time = `${startDateDayjs.format('h:mm')} - ${endDateDayjs.format('h:mm a z')}`
      } else {
        time = `${startDateDayjs.format('h:mm a')} - ${endDateDayjs.format('h:mm a z')}`
      }
    } else {
      time = `${startDateDayjs.format('h:mm a z')}`
    }
    // }
  }
  return time
}
