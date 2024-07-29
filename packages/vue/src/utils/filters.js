// must include `.js`
import dayjs from './dayjs.js'

const filters = {
  // To support more locales update add imports to dayjs.js'
  displayDate(value, format, locale = 'en') {
    if (value) {
      const dateDayjs = dayjs(value).locale(locale)
      let date
      switch (format) {
        case 'DateTime':
          date = dateDayjs.format('MMM D YYYY, HH:mm') // Feb 18 2021, 20:55
          break
        case 'Date':
          date = dateDayjs.format('MMM D YYYY') // Feb 18 2021
          break
        case 'Time':
          date = dateDayjs.format('HH:mm') // 20:55
          break
        case 'MonthAndYear':
          date = dateDayjs.format('MMM YYYY') // Feb. 2021
          break
        case 'Day':
          date = dateDayjs.format('D') // 1-31
          break
        default:
          date = dateDayjs.format('ll') // Feb. 18, 2021 (en)
      }
      return date
    }
  }
}

export default filters
