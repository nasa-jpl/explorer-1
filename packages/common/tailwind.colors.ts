// Dedicated file for managing tailwind theme colors

export const jplRed = {
  lighter: '#E73B54',
  light: '#E73B54',
  base: '#E31937',
  dark: '#C1152E',
  darker: '#5C0411'
}

export const jplTeal = {
  lighter: '#99D1DF',
  light: '#4BA7BE',
  base: '#10829E',
  dark: '#006077',
  darker: '#004050'
}

export const jplViolet = {
  lighter: '#C4AAF6',
  light: '#905FEC',
  base: '#6019E3',
  dark: '#3C00AB',
  darker: '#280073'
}

export const foundationColors = {
  'jpl-red-light': jplRed.light,
  'jpl-red': jplRed.base,
  'jpl-red-dark': jplRed.dark,
  'jpl-red-darker': jplRed.darker,
  'jpl-aqua': '#489FDF',
  blue: '#8BCBFA',
  'dark-blue': '#004562',
  green: '#14C97A'
}

export const internalColors = {
  'jpl-sky-blue-light': jplTeal.light,
  'jpl-sky-blue': jplTeal.base,
  'jpl-sky-blue-dark': jplTeal.dark,
  'jpl-sky-blue-darker': jplTeal.darker
}

export const eduColors = {
  'jpl-purple-light': jplViolet.light,
  'jpl-purple': jplViolet.base,
  'jpl-purple-dark': jplViolet.dark,
  'jpl-purple-darker': jplViolet.darker,
  'jpl-teal-light': jplTeal.light,
  'jpl-teal': jplTeal.base,
  'jpl-teal-dark': jplTeal.dark,
  'jpl-teal-darker': jplTeal.darker
}

export const semanticColors = {
  'alert-gold': '#FFBA32',
  'alert-gold-light': '#FFF9EB',
  'disabled-gray': '#D8D8D8', // same as Light Mid Gray
  'error-red': '#C1152E', // same as JPL Red Dark
  'error-red-light': '#FFE8EB',
  'focus-blue': '#1871C9',
  'focus-blue-light': '#E8F1FA',
  'success-green': '#33A17B',
  'success-green-light': '#E1F5EE'
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
  'primary-light': 'var(--color-primary-light)',
  'primary-dark': 'var(--color-primary-dark)',
  'primary-darker': 'var(--color-primary-darker)',
  'primary-hover': 'var(--color-primary-dark)',
  secondary: 'var(--color-secondary)',
  'secondary-light': 'var(--color-secondary-light)',
  'secondary-dark': 'var(--color-secondary-dark)',
  'secondary-darker': 'var(--color-secondary-darker)',
  'secondary-hover': 'var(--color-secondary-dark)',
  action: 'var(--color-action)',
  'action-light': 'var(--color-action-light)',
  'action-dark': 'var(--color-action-dark)',
  'action-darker': 'var(--color-action-darker)',
  'action-hover': 'var(--color-action-dark)'
}

// www default
export const ThemeWww = {
  default: {
    '--color-primary': foundationColors['jpl-red'],
    '--color-primary-light': foundationColors['jpl-red-light'],
    '--color-primary-dark': foundationColors['jpl-red-dark'],
    '--color-primary-darker': foundationColors['jpl-red-darker'],
    '--color-secondary': 'var(--color-primary)',
    '--color-secondary-light': 'var(--color-primary-light)',
    '--color-secondary-dark': 'var(--color-primary-dark)',
    '--color-secondary-darker': 'var(--color-primary-darker)',
    '--color-action': 'var(--color-primary)',
    '--color-action-light': 'var(--color-primary-light)',
    '--color-action-dark': 'var(--color-primary-dark)',
    '--color-action-darker': 'var(--color-primary-darker)'
  },
  dark: {
    '--color-primary': foundationColors['jpl-red-light'],
    '--color-primary-light': foundationColors['jpl-red-light'],
    '--color-primary-dark': foundationColors['jpl-red'],
    '--color-primary-darker': foundationColors['jpl-red-dark']
  }
}

export const ThemeEdu = {
  default: {
    '--color-primary': eduColors['jpl-purple'],
    '--color-primary-light': eduColors['jpl-purple-light'],
    '--color-primary-dark': eduColors['jpl-purple-dark'],
    '--color-primary-darker': eduColors['jpl-purple-darker'],
    '--color-secondary': foundationColors['jpl-red'],
    '--color-secondary-light': foundationColors['jpl-red-light'],
    '--color-secondary-dark': foundationColors['jpl-red-dark'],
    '--color-secondary-darker': foundationColors['jpl-red-darker'],
    '--color-action': eduColors['jpl-teal'],
    '--color-action-light': eduColors['jpl-teal-light'],
    '--color-action-dark': eduColors['jpl-teal-dark'],
    '--color-action-darker': eduColors['jpl-teal-darker']
  },
  dark: {
    '--color-primary': eduColors['jpl-purple-light'],
    '--color-primary-light': eduColors['jpl-purple-light'],
    '--color-primary-dark': eduColors['jpl-purple'],
    '--color-primary-darker': eduColors['jpl-purple-dark'],
    '--color-secondary': foundationColors['jpl-red-light'],
    '--color-secondary-light': foundationColors['jpl-red-light'],
    '--color-secondary-dark': foundationColors['jpl-red'],
    '--color-secondary-darker': foundationColors['jpl-red-dark'],
    '--color-action': eduColors['jpl-teal-light'],
    '--color-action-light': eduColors['jpl-teal-light'],
    '--color-action-dark': eduColors['jpl-teal'],
    '--color-action-darker': eduColors['jpl-teal-dark']
  }
}

export const ThemeInternal = {
  default: {
    '--color-primary': internalColors['jpl-sky-blue'],
    '--color-primary-light': internalColors['jpl-sky-blue-light'],
    '--color-primary-dark': internalColors['jpl-sky-blue-dark'],
    '--color-primary-darker': internalColors['jpl-sky-blue-darker'],
    '--color-secondary': 'var(--color-primary)',
    '--color-secondary-light': 'var(--color-primary-light)',
    '--color-secondary-dark': 'var(--color-primary-dark)',
    '--color-secondary-darker': 'var(--color-primary-darker)',
    '--color-action': 'var(--color-primary)',
    '--color-action-light': 'var(--color-primary-light)',
    '--color-action-dark': 'var(--color-primary-dark)',
    '--color-action-darker': 'var(--color-primary-darker)'
  },
  dark: {
    '--color-primary': internalColors['jpl-sky-blue-light'],
    '--color-primary-light': internalColors['jpl-sky-blue-light'],
    '--color-primary-dark': internalColors['jpl-sky-blue'],
    '--color-primary-darker': internalColors['jpl-sky-blue-dark']
  }
}

export default {
  ...foundationColors,
  ...internalColors,
  ...eduColors,
  ...grayScaleColors,
  ...semanticColors,
  ...socialColors,
  ...themeVariantColors,
  // ...uiColors,
  transparent: 'transparent',
  current: 'currentColor'
}
