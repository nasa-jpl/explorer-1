import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import duration from 'dayjs/plugin/duration'
import minMax from 'dayjs/plugin/minMax'
// Locales must be imported manually
// see https://github.com/iamkun/dayjs/tree/dev/src/locale
import enGb from 'dayjs/locale/en-gb'

dayjs.locale(enGb)
dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.extend(advancedFormat)
dayjs.extend(localizedFormat)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  monthsShort: [
    'Jan.',
    'Feb.',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.'
  ]
})

dayjs.extend(duration)
dayjs.extend(minMax)

export { dayjs }
