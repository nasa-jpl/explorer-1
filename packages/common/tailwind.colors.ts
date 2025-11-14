// Dedicated file for managing tailwind theme colors

export const jplRed = {
  lighter: '#FDCFD5',
  light: '#EA435B',
  base: '#E31937',
  dark: '#BD142E',
  darker: '#900B1F',
  darkest: '#3A040C'
}

export const jplOrange = {
  lighter: '#FCDECF',
  light: '#EC905F',
  base: '#E36019',
  dark: '#AB3C00',
  darker: '#732800',
  darkest: '#3B1500'
}

export const jplYellow = {
  lighter: '#FCF6CF', // intentionally the same as 'light'
  light: '#FCF6CF',
  base: '#E3C519',
  dark: '#B69B00',
  darker: '#897500',
  darkest: '#5C4F00'
}

export const jplTeal = {
  lighter: '#CFF3FC',
  light: '#4BA7BE',
  base: '#0F7E99',
  dark: '#006077',
  darker: '#004050',
  darkest: '#002129'
}

export const jplBlue = {
  lighter: '#CFECFC',
  light: '#199CE3',
  base: '#0076B6',
  dark: '#005989',
  darker: '#003C5C',
  darkest: '#001F2F'
}

export const jplViolet = {
  lighter: '#EBE0FE',
  light: '#854FEC',
  base: '#6019E3',
  dark: '#3C00AB',
  darker: '#280073',
  darkest: '#15003B'
}

export const jplMagenta = {
  lighter: '#FEDFF3', // intentionally the same as 'light'
  light: '#FEDFF3',
  base: '#E3199C',
  dark: '#B60076',
  darker: '#890059',
  darkest: '#5C003C'
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
  'jpl-magenta-darker': jplMagenta.darker,
  green: '#14C97A'
}

export const grayScaleColors = {
  white: '#FFFFFF',
  'off-white': '#FAFAFA',
  'gray-light': '#F5F5F5',
  'gray-light-mid': '#D8D8D8',
  'gray-mid': '#949494',
  'gray-mid-dark': '#6F6F6F',
  'gray-dark': '#222222',
  black: '#000000'
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
  ...themeVariantColors,
  transparent: 'transparent',
  current: 'currentColor'
}
