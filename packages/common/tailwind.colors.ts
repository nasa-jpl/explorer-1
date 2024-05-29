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

// export const uiColors = {
//   'action-color': foundationColors['jpl-red'],
//   'action-color-light': foundationColors['jpl-red-light'],
//   'action-color-dark': foundationColors['jpl-red-dark'],
//   'action-color-darker': foundationColors['jpl-red-darker'],
//   'emphasis-color': foundationColors['jpl-red'],
//   'emphasis-color-dark': foundationColors['jpl-red-dark'],
//   'highlight-color': foundationColors['jpl-red'],
//   'highlight-color-dark': foundationColors['jpl-red-dark']
// }

// custom css vars
export const themeVariantColors = {
  'theme-color': 'var(--color-theme-color)',
  'theme-color-light': 'var(--color-theme-color-light)',
  'theme-color-dark': 'var(--color-theme-color-dark)',
  'theme-color-darker': 'var(--color-theme-color-darker)'
}

// www default
export const ThemeWww = {
  default: {
    '--color-theme-color': foundationColors['jpl-red'],
    '--color-theme-color-light': foundationColors['jpl-red-light'],
    '--color-theme-color-dark': foundationColors['jpl-red-dark'],
    '--color-theme-color-darker': foundationColors['jpl-red-darker']
  },
  dark: {
    '--color-theme-color': foundationColors['jpl-red-light'],
    '--color-theme-color-light': foundationColors['jpl-red-light'],
    '--color-theme-color-dark': foundationColors['jpl-red'],
    '--color-theme-color-darker': foundationColors['jpl-red-dark']
  }
}

export const ThemeEdu = {
  default: {
    '--color-theme-color': eduColors['edu-teal'],
    '--color-theme-color-light': eduColors['edu-teal-light'],
    '--color-theme-color-dark': eduColors['edu-teal-dark'],
    '--color-theme-color-darker': eduColors['edu-teal-darker']
  },
  dark: {
    '--color-theme-color': eduColors['edu-teal-light'],
    '--color-theme-color-light': eduColors['edu-teal-light'],
    '--color-theme-color-dark': eduColors['edu-teal'],
    '--color-theme-color-darker': eduColors['edu-teal-dark']
  }
}

export const ThemeInternal = {
  default: {
    '--color-theme-color': internalColors['jpl-sky-blue'],
    '--color-theme-color-light': internalColors['jpl-sky-blue-light'],
    '--color-theme-color-dark': internalColors['jpl-sky-blue-dark'],
    '--color-theme-color-darker': internalColors['jpl-sky-blue-darker']
  },
  dark: {
    '--color-theme-color': internalColors['jpl-sky-blue-light'],
    '--color-theme-color-light': internalColors['jpl-sky-blue-light'],
    '--color-theme-color-dark': internalColors['jpl-sky-blue'],
    '--color-theme-color-darker': internalColors['jpl-sky-blue-dark']
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
