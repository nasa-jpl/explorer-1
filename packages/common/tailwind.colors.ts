// Dedicated file for managing tailwind theme colors

export const colorLibrary = {
  white: 'rgb(255, 255, 255)', // #ffffff
  black: 'rgb(0, 0, 0)', // #000000
  /** Gray */
  gray: {
    100: 'rgb(249, 249, 249)', // #f9f9f9
    150: 'rgb(243, 243, 243)', // #f3f3f3 // not official branding color yet
    200: 'rgb(232, 232, 232)', // #e8e8e8
    300: 'rgb(213, 213, 213)', // #d5d5d5
    400: 'rgb(134, 134, 134)', // #868686
    500: 'rgb(118, 118, 118)', // #767676
    600: 'rgb(103, 103, 103)', // #676767
    700: 'rgb(44, 44, 44)', // #2c2c2c
    800: 'rgb(31, 31, 31)', // #1f1f1f
    900: 'rgb(20, 20, 20)' // #141414
  },
  /** JPL Red (hue 349) */
  red: {
    100: 'rgb(253, 245, 246)', // #fdf5f6
    200: 'rgb(251, 226, 231)', // #fbe2e7
    300: 'rgb(252, 200, 209)', // #fcc8d1
    400: 'rgb(255, 46, 84)', // #ff2e54
    500: 'rgb(228, 0, 43)', // #e4002b
    600: 'rgb(206, 0, 38)', // #ce0026
    700: 'rgb(92, 5, 21)', // #5c0515
    800: 'rgb(67, 6, 17)', // #430611
    900: 'rgb(45, 5, 12)' // #2d050c
  },
  /** Mars Orange (hue 19) */
  orange: {
    100: 'rgb(253, 248, 246)', // #fdf8f6
    200: 'rgb(250, 226, 216)', // #fae2d8
    300: 'rgb(249, 196, 171)', // #f9c4ab
    400: 'rgb(232, 87, 20)', // #e85714
    500: 'rgb(204, 76, 17)', // #cc4c11
    600: 'rgb(179, 65, 13)', // #b3410d
    700: 'rgb(76, 30, 8)', // #4c1e08
    800: 'rgb(54, 22, 7)', // #361607
    900: 'rgb(34, 15, 6)' // #220f06
  },
  /** Mylar Gold (hue 49) */
  gold: {
    100: 'rgb(253, 249, 231)', // #fdf9e7
    200: 'rgb(252, 235, 157)', // #fceb9d
    300: 'rgb(246, 209, 43)', // #f6d12b
    400: 'rgb(162, 132, 0)', // #a28400
    500: 'rgb(142, 116, 0)', // #8e7400
    600: 'rgb(124, 101, 0)', // #7c6500
    700: 'rgb(52, 43, 3)', // #342b03
    800: 'rgb(37, 31, 4)', // #251f04
    900: 'rgb(24, 21, 5)' // #181505
  },
  /** Vegetation Green (hue 157) */
  green: {
    100: 'rgb(236, 253, 246)', // #ecfdf6
    200: 'rgb(160, 251, 216)', // #a0fbd8
    300: 'rgb(67, 241, 174)', // #43f1ae
    400: 'rgb(16, 154, 101)', // #109a65
    500: 'rgb(13, 135, 88)', // #0d8758
    600: 'rgb(9, 119, 77)', // #09774d
    700: 'rgb(5, 51, 33)', // #053321
    800: 'rgb(5, 36, 24)', // #052418
    900: 'rgb(5, 24, 17)' // #051811
  },
  /** Earth Blue (hue 199) */
  blue: {
    100: 'rgb(244, 250, 253)', // #f4fafd
    200: 'rgb(208, 237, 251)', // #d0edfb
    300: 'rgb(162, 223, 251)', // #a2dffb
    400: 'rgb(19, 144, 202)', // #1390ca
    500: 'rgb(15, 126, 177)', // #0f7eb1
    600: 'rgb(13, 110, 156)', // #0d6e9c
    700: 'rgb(6, 48, 67)', // #063043
    800: 'rgb(6, 34, 47)', // #06222f
    900: 'rgb(5, 22, 30)' // #05161e
  },
  /** Universe Purple (hue 259) */
  purple: {
    100: 'rgb(249, 248, 252)', // #f9f8fc
    200: 'rgb(236, 229, 250)', // #ece5fa
    300: 'rgb(221, 208, 249)', // #ddd0f9
    400: 'rgb(153, 110, 245)', // #996ef5
    500: 'rgb(135, 85, 243)', // #8755f3
    600: 'rgb(119, 62, 242)', // #773ef2
    700: 'rgb(52, 12, 137)', // #340c89
    800: 'rgb(35, 8, 94)', // #23085e
    900: 'rgb(26, 7, 68)' // #1a0744
  },
  /** Cosmic Magenta (hue 319) */
  magenta: {
    100: 'rgb(253, 247, 251)', // #fdf7fb
    200: 'rgb(251, 225, 243)', // #fbe1f3
    300: 'rgb(251, 199, 235)', // #fbc7eb
    400: 'rgb(247, 33, 181)', // #f721b5
    500: 'rgb(219, 18, 156)', // #db129c
    600: 'rgb(194, 14, 138)', // #c20e8a
    700: 'rgb(86, 7, 61)', // #56073d
    800: 'rgb(63, 7, 45)', // #3f072d
    900: 'rgb(42, 6, 31)' // #2a061f
  }
}
type ColorLibrary = typeof colorLibrary

/**
 * Flattens the a color library object into a single-level
 * object with keys like 'color-shade' (e.g., 'gray-100').
 * @param {object} library - The colorLibrary object.
 * @returns {object} A new flat object.
 */
export function flattenColorLibrary(library: ColorLibrary): Record<string, string> {
  const colors: Record<string, string> = {}
  ;(Object.keys(library) as Array<keyof ColorLibrary>).forEach((colorName) => {
    const value = library[colorName]
    // If the value is a string, it's a top-level color (like white, black)
    if (typeof value === 'string') {
      colors[colorName] = value
    }
    // If it's an object, it's a color category with shades
    else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      ;(Object.keys(value) as unknown as Array<keyof typeof value>).forEach((shade) => {
        // Create the new key, e.g., "gray-100"
        const newKey = `${colorName}-${shade}`
        colors[newKey] = value[shade]
      })
    }
  })
  return colors
}
export const flattenedColorLibrary = flattenColorLibrary(colorLibrary)

/**
 * Aliased Colors used for theming
 * */

export const jplRed = {
  lightest: colorLibrary.red[200],
  lighter: colorLibrary.red[300],
  light: colorLibrary.red[400],
  base: colorLibrary.red[500],
  dark: colorLibrary.red[600],
  darker: colorLibrary.red[700],
  darkest: colorLibrary.red[800]
}

export const jplOrange = {
  lightest: colorLibrary.orange[200],
  lighter: colorLibrary.orange[300],
  light: colorLibrary.orange[400],
  base: colorLibrary.orange[500],
  dark: colorLibrary.orange[600],
  darker: colorLibrary.orange[700],
  darkest: colorLibrary.orange[800]
}

export const jplYellow = {
  lightest: colorLibrary.gold[200],
  lighter: colorLibrary.gold[300],
  light: colorLibrary.gold[400],
  base: colorLibrary.gold[500],
  dark: colorLibrary.gold[600],
  darker: colorLibrary.gold[700],
  darkest: colorLibrary.gold[800]
}

export const jplTeal = {
  lightest: colorLibrary.blue[200],
  lighter: colorLibrary.blue[300],
  light: colorLibrary.blue[400],
  base: colorLibrary.blue[500],
  dark: colorLibrary.blue[600],
  darker: colorLibrary.blue[700],
  darkest: colorLibrary.blue[800]
}

export const jplBlue = jplTeal

export const jplViolet = {
  lightest: colorLibrary.purple[300],
  lighter: colorLibrary.purple[400],
  light: colorLibrary.purple[500],
  base: colorLibrary.purple[600],
  dark: colorLibrary.purple[700],
  darker: colorLibrary.purple[800],
  darkest: colorLibrary.purple[900]
}

export const jplMagenta = {
  lightest: colorLibrary.magenta[200],
  lighter: colorLibrary.magenta[300],
  light: colorLibrary.magenta[400],
  base: colorLibrary.magenta[500],
  dark: colorLibrary.magenta[600],
  darker: colorLibrary.magenta[700],
  darkest: colorLibrary.magenta[800]
}

export const foundationColors = {
  'jpl-red-lighter': jplRed.lighter,
  'jpl-red-light': jplRed.light,
  'jpl-red': jplRed.base,
  'jpl-red-dark': jplRed.dark,
  'jpl-red-darker': jplRed.darker,
  'jpl-teal-lighter': jplTeal.lighter,
  'jpl-teal-light': jplTeal.light,
  'jpl-teal': jplTeal.base,
  'jpl-teal-dark': jplTeal.dark,
  'jpl-teal-darker': jplTeal.darker,
  'jpl-violet-lighter': jplViolet.lighter,
  'jpl-violet-light': jplViolet.light,
  'jpl-violet': jplViolet.base,
  'jpl-violet-dark': jplViolet.dark,
  'jpl-violet-darker': jplViolet.darker,
  'jpl-orange-lighter': jplOrange.lighter,
  'jpl-orange-light': jplOrange.light,
  'jpl-orange': jplOrange.base,
  'jpl-orange-dark': jplOrange.dark,
  'jpl-orange-darker': jplOrange.darker,
  'jpl-yellow-lighter': jplYellow.lighter,
  'jpl-yellow-light': jplYellow.light,
  'jpl-yellow': jplYellow.base,
  'jpl-yellow-dark': jplYellow.dark,
  'jpl-yellow-darker': jplYellow.darker,
  'jpl-blue-lighter': jplBlue.lighter,
  'jpl-blue-light': jplBlue.light,
  'jpl-blue': jplBlue.base,
  'jpl-blue-dark': jplBlue.dark,
  'jpl-blue-darker': jplBlue.darker,
  'jpl-magenta-lighter': jplMagenta.lighter,
  'jpl-magenta-light': jplMagenta.light,
  'jpl-magenta': jplMagenta.base,
  'jpl-magenta-dark': jplMagenta.dark,
  'jpl-magenta-darker': jplMagenta.darker
}

export const grayScaleColors = {
  // white: colorLibrary.white,
  'off-white': colorLibrary.gray[100],
  'gray-light': colorLibrary.gray[150],
  'gray-light-mid': colorLibrary.gray[300],
  'gray-mid': colorLibrary.gray[400],
  'gray-mid-dark': colorLibrary.gray[600],
  'gray-dark': colorLibrary.gray[800]
  // black: colorLibrary.black
}

export const semanticColors = {
  error: '#E42020',
  'error-light': '#FFEBEB',
  'error-dark': '#700000',
  warning: '#FFBA32',
  'warning-light': '#FFF3DB',
  'warning-dark': '#573A00',
  success: '#2E8452',
  'success-light': '#D7F9E5',
  'success-dark': '#00421C',
  focus: '#2072E4',
  'focus-light': '#EBF3FF',
  'focus-dark': '#00337A',
  disabled: grayScaleColors['gray-light-mid'] // same as Light Mid Gray
}

export const socialColors = {
  facebook: '#3b5998',
  twitter: '#000000',
  instagram: '#dd2a7b',
  youtube: '#ff0000',
  reddit: '#ff4500'
}

// custom css vars
export const themeVariantColors = {
  primary: 'var(--color-primary)',
  'primary-lighter': 'var(--color-primary-lighter)',
  'primary-light': 'var(--color-primary-light)',
  'primary-dark': 'var(--color-primary-dark)',
  'primary-darker': 'var(--color-primary-darker)',
  'primary-hover': 'var(--color-primary-dark)',
  secondary: 'var(--color-secondary)',
  'secondary-lighter': 'var(--color-secondary-lighter)',
  'secondary-light': 'var(--color-secondary-light)',
  'secondary-dark': 'var(--color-secondary-dark)',
  'secondary-darker': 'var(--color-secondary-darker)',
  'secondary-hover': 'var(--color-secondary-dark)',
  action: 'var(--color-action)',
  'action-lighter': 'var(--color-action-lighter)',
  'action-light': 'var(--color-action-light)',
  'action-dark': 'var(--color-action-dark)',
  'action-darker': 'var(--color-action-darker)',
  'action-hover': 'var(--color-action-dark)'
}

// www default
export const ThemeWww = {
  default: {
    '--color-primary': foundationColors['jpl-red'],
    '--color-primary-lighter': foundationColors['jpl-red-lighter'],
    '--color-primary-light': foundationColors['jpl-red-light'],
    '--color-primary-dark': foundationColors['jpl-red-dark'],
    '--color-primary-darker': foundationColors['jpl-red-darker'],
    '--color-secondary': 'var(--color-primary)',
    '--color-secondary-lighter': 'var(--color-primary-lighter)',
    '--color-secondary-light': 'var(--color-primary-light)',
    '--color-secondary-dark': 'var(--color-primary-dark)',
    '--color-secondary-darker': 'var(--color-primary-darker)',
    '--color-action': 'var(--color-primary)',
    '--color-action-lighter': 'var(--color-primary-lighter)',
    '--color-action-light': 'var(--color-primary-light)',
    '--color-action-dark': 'var(--color-primary-dark)',
    '--color-action-darker': 'var(--color-primary-darker)'
  },
  dark: {
    '--color-primary': foundationColors['jpl-red-light'],
    '--color-primary-lighter': foundationColors['jpl-red-lighter'],
    '--color-primary-light': foundationColors['jpl-red-light'],
    '--color-primary-dark': foundationColors['jpl-red'],
    '--color-primary-darker': foundationColors['jpl-red-dark'],
    '--color-secondary': 'var(--color-primary)',
    '--color-secondary-lighter': 'var(--color-primary-lighter)',
    '--color-secondary-light': 'var(--color-primary-light)',
    '--color-secondary-dark': 'var(--color-primary-dark)',
    '--color-secondary-darker': 'var(--color-primary-darker)',
    '--color-action': 'var(--color-primary)',
    '--color-action-lighter': 'var(--color-primary-lighter)',
    '--color-action-light': 'var(--color-primary-light)',
    '--color-action-dark': 'var(--color-primary-dark)',
    '--color-action-darker': 'var(--color-primary-darker)'
  },
  gray: {
    '--color-primary': foundationColors['jpl-red-dark'],
    '--color-primary-lighter': foundationColors['jpl-red'],
    '--color-primary-light': foundationColors['jpl-red'],
    '--color-primary-dark': foundationColors['jpl-red-darker'],
    '--color-primary-darker': foundationColors['jpl-red-darker'],
    '--color-secondary': 'var(--color-primary)',
    '--color-secondary-lighter': 'var(--color-primary-lighter)',
    '--color-secondary-light': 'var(--color-primary-light)',
    '--color-secondary-dark': 'var(--color-primary-dark)',
    '--color-secondary-darker': 'var(--color-primary-darker)',
    '--color-action': 'var(--color-secondary)',
    '--color-action-lighter': 'var(--color-secondary-lighter)',
    '--color-action-light': 'var(--color-secondary-light)',
    '--color-action-dark': 'var(--color-secondary-dark)',
    '--color-action-darker': 'var(--color-secondary-darker)'
  }
}

// asdfasdfasdfasd

export const ThemeEdu = {
  default: {
    '--color-primary': foundationColors['jpl-violet'],
    '--color-primary-lighter': foundationColors['jpl-violet-lighter'],
    '--color-primary-light': foundationColors['jpl-violet-light'],
    '--color-primary-dark': foundationColors['jpl-violet-dark'],
    '--color-primary-darker': foundationColors['jpl-violet-darker'],
    '--color-secondary': foundationColors['jpl-red'],
    '--color-secondary-light': foundationColors['jpl-red-light'],
    '--color-secondary-dark': foundationColors['jpl-red-dark'],
    '--color-secondary-darker': foundationColors['jpl-red-darker'],
    '--color-action': foundationColors['jpl-teal'],
    '--color-action-light': foundationColors['jpl-teal-light'],
    '--color-action-dark': foundationColors['jpl-teal-dark'],
    '--color-action-darker': foundationColors['jpl-teal-darker']
  },
  dark: {
    '--color-primary': foundationColors['jpl-violet-light'],
    '--color-primary-lighter': foundationColors['jpl-violet-lighter'],
    '--color-primary-light': foundationColors['jpl-violet-light'],
    '--color-primary-dark': foundationColors['jpl-violet'],
    '--color-primary-darker': foundationColors['jpl-violet-dark'],
    '--color-secondary': foundationColors['jpl-red-light'],
    '--color-secondary-light': foundationColors['jpl-red-light'],
    '--color-secondary-dark': foundationColors['jpl-red'],
    '--color-secondary-darker': foundationColors['jpl-red-dark'],
    '--color-action': foundationColors['jpl-teal-light'],
    '--color-action-light': foundationColors['jpl-teal-light'],
    '--color-action-dark': foundationColors['jpl-teal'],
    '--color-action-darker': foundationColors['jpl-teal-dark']
  },
  gray: {
    '--color-primary': foundationColors['jpl-violet-dark'],
    '--color-primary-lighter': foundationColors['jpl-violet-light'],
    '--color-primary-light': foundationColors['jpl-violet'],
    '--color-primary-dark': foundationColors['jpl-violet-darker'],
    '--color-primary-darker': foundationColors['jpl-violet-darker'],
    '--color-secondary': foundationColors['jpl-red-dark'],
    '--color-secondary-light': foundationColors['jpl-red'],
    '--color-secondary-dark': foundationColors['jpl-red-darker'],
    '--color-secondary-darker': foundationColors['jpl-red-darker'],
    '--color-action': foundationColors['jpl-teal-dark'],
    '--color-action-light': foundationColors['jpl-teal'],
    '--color-action-dark': foundationColors['jpl-teal-darker'],
    '--color-action-darker': foundationColors['jpl-teal-darker']
  }
}

export const ThemeInternal = {
  default: {
    '--color-primary': foundationColors['jpl-red'],
    '--color-primary-lighter': foundationColors['jpl-red-lighter'],
    '--color-primary-light': foundationColors['jpl-red-light'],
    '--color-primary-dark': foundationColors['jpl-red-dark'],
    '--color-primary-darker': foundationColors['jpl-red-darker'],
    '--color-secondary': foundationColors['jpl-teal'],
    '--color-secondary-light': foundationColors['jpl-teal-light'],
    '--color-secondary-dark': foundationColors['jpl-teal-dark'],
    '--color-secondary-darker': foundationColors['jpl-teal-darker'],
    '--color-action': 'var(--color-secondary)',
    '--color-action-light': 'var(--color-secondary-light)',
    '--color-action-dark': 'var(--color-secondary-dark)',
    '--color-action-darker': 'var(--color-secondary-darker)'
  },
  dark: {
    '--color-primary': foundationColors['jpl-red-light'],
    '--color-primary-lighter': foundationColors['jpl-red-lighter'],
    '--color-primary-light': foundationColors['jpl-red-light'],
    '--color-primary-dark': foundationColors['jpl-red'],
    '--color-primary-darker': foundationColors['jpl-red-dark'],
    '--color-secondary': foundationColors['jpl-teal-light'],
    '--color-secondary-light': foundationColors['jpl-teal-light'],
    '--color-secondary-dark': foundationColors['jpl-teal'],
    '--color-secondary-darker': foundationColors['jpl-teal-dark'],
    '--color-action': 'var(--color-secondary)',
    '--color-action-light': 'var(--color-secondary-light)',
    '--color-action-dark': 'var(--color-secondary-dark)',
    '--color-action-darker': 'var(--color-secondary-darker)'
  },
  gray: {
    '--color-primary': foundationColors['jpl-red-dark'],
    '--color-primary-lighter': foundationColors['jpl-red-light'],
    '--color-primary-light': foundationColors['jpl-red'],
    '--color-primary-dark': foundationColors['jpl-red-darker'],
    '--color-primary-darker': foundationColors['jpl-red-darker'],
    '--color-secondary': foundationColors['jpl-teal-dark'],
    '--color-secondary-light': foundationColors['jpl-teal'],
    '--color-secondary-dark': foundationColors['jpl-teal-darker'],
    '--color-secondary-darker': foundationColors['jpl-teal-darker'],
    '--color-action': 'var(--color-secondary)',
    '--color-action-light': 'var(--color-secondary-light)',
    '--color-action-dark': 'var(--color-secondary-dark)',
    '--color-action-darker': 'var(--color-secondary-darker)'
  }
}

export default {
  ...foundationColors,
  ...grayScaleColors,
  ...semanticColors,
  ...socialColors,
  ...themeVariantColors
}
