// Dedicated file for managing tailwind theme colors

export const foundationColors = {
  'jpl-red': '#E31937',
  'jpl-red-light': '#E73B54',
  'jpl-red-dark': '#C1152E',
  'jpl-red-darker': '#5C0411',
  'jpl-aqua': '#489FDF',
  blue: '#8BCBFA',
  'dark-blue': '#004562',
  green: '#14C97A'
}

export const internalColors = {
  'jpl-sky-blue': '#0080A4', // TODO: update with different color
  'jpl-sky-blue-light': '#00a0cc', // TODO: update with different color
  'jpl-sky-blue-dark': '#006480', // TODO: update with different color
  'jpl-sky-blue-darker': '#003c4d' // TODO: update with different color
}

export const eduColors = {
  'edu-purple': '#9438E0',
  'edu-purple-light': '#A85EE6',
  'edu-purple-dark': '#741EBB',
  'edu-purple-darker': '#33283D',
  'edu-teal': '#007E99',
  'edu-teal-light': '#00a7cc', // TODO: update with different color
  'edu-teal-dark': '#005366', // TODO: update with different color
  'edu-teal-darker': '#002a33', // TODO: update with different color
  'edu-peach': '#FF5555'
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
  'action-color': 'var(--color-action-color)',
  'action-color-light': 'var(--color-action-color-light)',
  'action-color-dark': 'var(--color-action-color-dark)',
  'action-color-darker': 'var(--color-action-color-darker)',
  'action-color-hover': 'var(--color-action-color-dark)',
  'emphasis-color': 'var(--color-emphasis-color)',
  'emphasis-color-light': 'var(--color-emphasis-color-light)',
  'emphasis-color-dark': 'var(--color-emphasis-color-dark)',
  'emphasis-color-darker': 'var(--color-emphasis-color-darker)',
  'emphasis-color-hover': 'var(--color-emphasis-color-dark)'
}

// www default
export const ThemeWww = {
  default: {
    '--color-action-color': foundationColors['jpl-red'],
    '--color-action-color-light': foundationColors['jpl-red-light'],
    '--color-action-color-dark': foundationColors['jpl-red-dark'],
    '--color-action-color-darker': foundationColors['jpl-red-darker'],
    '--color-emphasis-color': 'var(--color-action-color)',
    '--color-emphasis-color-light': 'var(--color-action-color-light)',
    '--color-emphasis-color-dark': 'var(--color-action-color-dark)',
    '--color-emphasis-color-darker': 'var(--color-action-color-darker)'
  },
  dark: {
    '--color-action-color': foundationColors['jpl-red-light'],
    '--color-action-color-light': foundationColors['jpl-red-light'],
    '--color-action-color-dark': foundationColors['jpl-red'],
    '--color-action-color-darker': foundationColors['jpl-red-dark']
  }
}

export const ThemeEdu = {
  default: {
    '--color-action-color': eduColors['edu-teal'],
    '--color-action-color-light': eduColors['edu-teal-light'],
    '--color-action-color-dark': eduColors['edu-teal-dark'],
    '--color-action-color-darker': eduColors['edu-teal-darker'],
    '--color-emphasis-color': eduColors['edu-purple'],
    '--color-emphasis-color-light': eduColors['edu-purple-light'],
    '--color-emphasis-color-dark': eduColors['edu-purple-dark'],
    '--color-emphasis-color-darker': eduColors['edu-purple-darker']
  },
  dark: {
    '--color-action-color': eduColors['edu-teal-light'],
    '--color-action-color-light': eduColors['edu-teal-light'],
    '--color-action-color-dark': eduColors['edu-teal'],
    '--color-action-color-darker': eduColors['edu-teal-dark'],
    '--color-emphasis-color': eduColors['edu-purple-light'],
    '--color-emphasis-color-light': eduColors['edu-purple-light'],
    '--color-emphasis-color-dark': eduColors['edu-purple'],
    '--color-emphasis-color-darker': eduColors['edu-purple-dark']
  }
}

export const ThemeInternal = {
  default: {
    '--color-action-color': internalColors['jpl-sky-blue'],
    '--color-action-color-light': internalColors['jpl-sky-blue-light'],
    '--color-action-color-dark': internalColors['jpl-sky-blue-dark'],
    '--color-action-color-darker': internalColors['jpl-sky-blue-darker'],
    '--color-emphasis-color': 'var(--color-action-color)',
    '--color-emphasis-color-light': 'var(--color-action-color-light)',
    '--color-emphasis-color-dark': 'var(--color-action-color-dark)',
    '--color-emphasis-color-darker': 'var(--color-action-color-darker)'
  },
  dark: {
    '--color-action-color': internalColors['jpl-sky-blue-light'],
    '--color-action-color-light': internalColors['jpl-sky-blue-light'],
    '--color-action-color-dark': internalColors['jpl-sky-blue'],
    '--color-action-color-darker': internalColors['jpl-sky-blue-dark']
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
