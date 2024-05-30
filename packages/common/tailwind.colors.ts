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
  action: 'var(--color-action)',
  'action-light': 'var(--color-action-light)',
  'action-dark': 'var(--color-action-dark)',
  'action-darker': 'var(--color-action-darker)',
  'action-hover': 'var(--color-action-dark)',
  emphasis: 'var(--color-emphasis)',
  'emphasis-light': 'var(--color-emphasis-light)',
  'emphasis-dark': 'var(--color-emphasis-dark)',
  'emphasis-darker': 'var(--color-emphasis-darker)',
  'emphasis-hover': 'var(--color-emphasis-dark)'
}

// www default
export const ThemeWww = {
  default: {
    '--color-action': foundationColors['jpl-red'],
    '--color-action-light': foundationColors['jpl-red-light'],
    '--color-action-dark': foundationColors['jpl-red-dark'],
    '--color-action-darker': foundationColors['jpl-red-darker'],
    '--color-emphasis': 'var(--color-action)',
    '--color-emphasis-light': 'var(--color-action-light)',
    '--color-emphasis-dark': 'var(--color-action-dark)',
    '--color-emphasis-darker': 'var(--color-action-darker)'
  },
  dark: {
    '--color-action': foundationColors['jpl-red-light'],
    '--color-action-light': foundationColors['jpl-red-light'],
    '--color-action-dark': foundationColors['jpl-red'],
    '--color-action-darker': foundationColors['jpl-red-dark']
  }
}

export const ThemeEdu = {
  default: {
    '--color-action': eduColors['edu-teal'],
    '--color-action-light': eduColors['edu-teal-light'],
    '--color-action-dark': eduColors['edu-teal-dark'],
    '--color-action-darker': eduColors['edu-teal-darker'],
    '--color-emphasis': eduColors['edu-purple'],
    '--color-emphasis-light': eduColors['edu-purple-light'],
    '--color-emphasis-dark': eduColors['edu-purple-dark'],
    '--color-emphasis-darker': eduColors['edu-purple-darker']
  },
  dark: {
    '--color-action': eduColors['edu-teal-light'],
    '--color-action-light': eduColors['edu-teal-light'],
    '--color-action-dark': eduColors['edu-teal'],
    '--color-action-darker': eduColors['edu-teal-dark'],
    '--color-emphasis': eduColors['edu-purple-light'],
    '--color-emphasis-light': eduColors['edu-purple-light'],
    '--color-emphasis-dark': eduColors['edu-purple'],
    '--color-emphasis-darker': eduColors['edu-purple-dark']
  }
}

export const ThemeInternal = {
  default: {
    '--color-action': internalColors['jpl-sky-blue'],
    '--color-action-light': internalColors['jpl-sky-blue-light'],
    '--color-action-dark': internalColors['jpl-sky-blue-dark'],
    '--color-action-darker': internalColors['jpl-sky-blue-darker'],
    '--color-emphasis': 'var(--color-action)',
    '--color-emphasis-light': 'var(--color-action-light)',
    '--color-emphasis-dark': 'var(--color-action-dark)',
    '--color-emphasis-darker': 'var(--color-action-darker)'
  },
  dark: {
    '--color-action': internalColors['jpl-sky-blue-light'],
    '--color-action-light': internalColors['jpl-sky-blue-light'],
    '--color-action-dark': internalColors['jpl-sky-blue'],
    '--color-action-darker': internalColors['jpl-sky-blue-dark']
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
