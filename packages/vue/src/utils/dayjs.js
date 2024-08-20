import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale.js'
import localizedFormat from 'dayjs/plugin/localizedFormat.js'
import timezone from 'dayjs/plugin/timezone.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import duration from 'dayjs/plugin/duration.js'
import minMax from 'dayjs/plugin/minMax.js'
// Locales must be imported manually
// see https://github.com/iamkun/dayjs/tree/dev/src/locale
import 'dayjs/locale/en-gb.js'

dayjs.extend(timezone)
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

export default dayjs
