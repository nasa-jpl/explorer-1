import type { Config } from 'tailwindcss'
import type { CustomThemeConfig } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const foundationColors = {
  'jpl-red': '#E31937',
  'jpl-red-light': '#E73B54',
  'jpl-red-dark': '#C1152E',
  'jpl-red-darker': '#5C0411',
  'jpl-aqua': '#489FDF',
  blue: '#8BCBFA',
  'dark-blue': '#004562',
  green: '#14C97A'
}

const internalColors = {
  'jpl-sky-blue': '#0080A4', // TODO: update with different color
  'jpl-sky-blue-light': 'red', // '#00a0cc', // TODO: update with different color
  'jpl-sky-blue-dark': '#006480', // TODO: update with different color
  'jpl-sky-blue-darker': '#003c4d' // TODO: update with different color
}

const eduColors = {
  'edu-purple': '#9438E0',
  'edu-purple-light': '#A85EE6',
  'edu-purple-dark': '#741EBB',
  'edu-purple-darker': '#33283D',
  'edu-teal': '#007E99',
  'edu-teal-light': '#00a7cc', // TODO: update with different color
  'edu-teal-dark': '#005366', // TODO: update with different color
  'edu-peach': '#FF5555'
}

const semanticColors = {
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

const grayScale = {
  white: '#FFFFFF',
  'off-white': '#FAFAFA',
  'gray-light': '#F5F5F5',
  'gray-light-mid': '#D8D8D8',
  'gray-mid': '#949494',
  'gray-mid-dark': '#6F6F6F',
  'gray-dark': '#222222',
  black: '#000000'
}

const socialColors = {
  facebook: '#3b5998',
  twitter: '#000000',
  instagram: '#dd2a7b',
  youtube: '#ff0000',
  reddit: '#ff4500'
}

const uiColors = {
  'action-color': foundationColors['jpl-red'],
  'action-color-light': foundationColors['jpl-red-light'],
  'action-color-dark': foundationColors['jpl-red-dark'],
  'action-color-darker': foundationColors['jpl-red-darker'],
  'emphasis-color': foundationColors['jpl-red'],
  'emphasis-color-dark': foundationColors['jpl-red-dark'],
  'highlight-color': foundationColors['jpl-red'],
  'highlight-color-dark': foundationColors['jpl-red-dark']
}

const ThemeVariantColors = {
  'theme-color': 'var(--color-theme-color)',
  'theme-color-light': 'var(--color-theme-color-light)',
  'theme-color-dark': 'var(--color-theme-color-dark)',
  'theme-color-darker': 'var(--color-theme-color-darker)'
}
const themeColors = {
  ...ThemeVariantColors,
  ...foundationColors,
  ...internalColors,
  ...eduColors,
  ...grayScale,
  ...semanticColors,
  ...socialColors,
  ...uiColors,
  transparent: 'transparent',
  current: 'currentColor'
}

// Font stack optimised for built-in fonts of each major operating system, with support for emojis.
// Only displayed if the site’s web fonts fail to load.
// See https://polaris.shopify.com/design/typography#section-font-stack.
const fallbackFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  'San Francisco',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'sans-serif',
  // See https://css-tricks.com/snippets/css/system-font-stack/#method-1-system-fonts-at-the-element-level.
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji'
]
const defaultTheme: Partial<CustomThemeConfig> = {
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
    '3xl': '1800px',
    '4xl': '1900px',
    // Media queries to detect the user’s input modality real, non-simulated hover support.
    'can-hover': { raw: '(hover: hover)' },
    'no-hover': { raw: '(hover: none)' }
  },
  container: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      // See documentation for container widths and breakpoints setup.
      '2xl': '1320px',
      '3xl': '1320px'
    },
    padding: '1rem' // use .px-0 as needed to override default padding
  },
  colors: themeColors,
  fontFamily: {
    primary: ['Metropolis', ...fallbackFontStack],
    secondary: ['Archivo Narrow', 'Metropolis', ...fallbackFontStack]
  },
  fontWeight: {
    // Commenting out anything Tailwind provides by default but we don’t use for this project.
    // thin: '100',
    // extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
    // black: 900,
  },
  fontSize: {
    // These go to eleven. Avoid using single font sizes directly,
    // instead use component classes that combine the appropriate desktop and mobile font sizes.
    '11xl': '6.25rem', // 100px
    '10xl': '4.5rem', // 72px
    '9xl': '3.5rem', // 56px
    '8xl': '2.75rem', // 44px
    '7xl': '2.5rem', // 40px
    '6xl': '2rem', // 32px
    '5xl': '1.75rem', // 28px
    '4xl': '1.625rem', // 26px
    '3xl': '1.5rem', // 24px
    '2xl': '1.375rem', // 22px
    xl: '1.25rem', // 20px
    lg: '1.125rem', // 18px
    base: '1rem', // 16px
    sm: '0.875rem', // 14px
    xs: '0.75rem' // 12px
  },
  lineHeight: {
    // Basic set of line heights. Major text styles tend to have their custom line height.
    none: '1',
    tighter: '1.125',
    tight: '1.25',
    // snug: '1.375',
    normal: '1.5',
    relaxed: '1.75' // Default Tailwind is 1.625.
    // loose: '2',
  },
  letterSpacing: {
    tightest: '-2px',
    tighter: '-1px',
    tight: '-0.5px',
    normal: '0',
    // wide: '0.5px',
    wider: '1px'
    // widest: '2px',
  },
  scale: {
    0: '0',
    50: '.5',
    75: '.75',
    90: '.9',
    95: '.95',
    100: '1',
    103: '1.03', // custom
    105: '1.05',
    110: '1.1',
    125: '1.25',
    150: '1.5'
  },
  gradientColorStops: {
    ...themeColors,
    // Custom color stops for action hover effects
    'transparent-w50': 'transparent 50%',
    'transparent-w25': 'transparent 25%',
    'jpl-red-w50': foundationColors['jpl-red'] + ' 50%',
    'jpl-red-dark-w50': foundationColors['jpl-red-dark'] + ' 50%',
    'jpl-red-darker-w50': foundationColors['jpl-red-darker'] + ' 50%',
    'jpl-red-light-w50': foundationColors['jpl-red-light'] + ' 50%',
    'jpl-sky-blue-w50': foundationColors['jpl-sky-blue'] + ' 50%',
    'jpl-sky-blue-dark-w50': foundationColors['jpl-sky-blue-dark'] + ' 50%',
    'white-w50': grayScale.white + ' 50%',
    'gray-dark-w50': grayScale['gray-dark'] + ' 50%',
    'facebook-w50': socialColors.facebook + ' 50%',
    'twitter-w50': socialColors.twitter + ' 50%',
    'instagram-w50': socialColors.instagram + ' 50%',
    'youtube-w50': socialColors.youtube + ' 50%',
    'reddit-w50': socialColors.reddit + ' 50%',
    'transparent-black-90': 'rgba(0 0 0 / 90%)',
    'transparent-black-75': 'rgba(0 0 0 / 75%)',
    'transparent-black-50': 'rgba(0 0 0 / 50%)',
    'transparent-black-25': 'rgba(0 0 0 / 25%)',
    'transparent-black-25-w50': 'rgba(0 0 0 / 25%) 50%',
    'theme-color-w50': 'var(--color-theme-color)' + ' 50%',
    'theme-color-dark-w50': 'var(--color-theme-color-dark)' + ' 50%',
    'theme-color-darker-w50': 'var(--color-theme-color-darker)' + ' 50%',
    'theme-color-light-w50': 'var(--color-theme-color-light)' + ' 50%',
    'action-color-w50': foundationColors['jpl-red'] + ' 50%',
    'action-color-dark-w50': foundationColors['jpl-red-dark'] + ' 50%',
    'action-color-darker-w50': foundationColors['jpl-red-dark'] + ' 50%',
    'action-color-light-w50': foundationColors['jpl-red-light'] + ' 50%'
  },
  checkbox: {
    display: 'inline-block',
    verticalAlign: 'top',
    flexShrink: 0,
    borderColor: grayScale['gray-dark'],
    borderWidth: 0,
    borderRadius: 0
  },
  extend: {
    animation: {
      fadeIn: 'fadeIn 500ms ease-in forwards',
      fadeOut: 'fadeOut 500ms ease-out forwards',
      fadeInSlow: 'fadeIn 1000ms ease-in forwards',
      fadeOutSlow: 'fadeOut 1000ms ease-out forwards',
      scaleIn: 'scaleIn 300ms ease-in forwards',
      rotate: 'rotate 1s linear infinite'
    },
    borderWidth: {
      3: '3px'
    },
    boxShadow: {
      jpl: '-4px 5px 60px 0 rgba(0, 0, 0, 0.1)'
    },
    inset: {
      // tailwind 2.0 will include these automatically
      '1/2': '50%',
      18: '4.5rem',
      28: '7rem'
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      },
      fadeOut: {
        '100%': { opacity: '1' },
        '0%': { opacity: '0' }
      },
      scaleIn: {
        '0%': { transform: 'scale(0)' },
        '100%': { transform: 'scale(1)' }
      },
      rotate: {
        '100%': { transform: 'rotate(360deg)' }
      }
    },
    maxHeight: {
      none: 'none'
    },
    minWidth: {
      12: '3rem'
    },
    minHeight: {
      none: 'none',
      '1/4': '25%',
      '1/2': '50%',
      18: '4.5rem',
      28: '7rem',
      66: '16rem',
      100: '25rem'
    },
    opacity: {
      15: '0.15',
      30: '0.30',
      40: '0.40',
      90: '0.90',
      98: '0.98'
    },
    spacing: {
      '2px': '2px',
      14: '3.5rem',
      14.5: '3.625rem',
      18: '4.5rem',
      22: '5.5rem',
      25: '6.25rem',
      26: '6.5rem',
      28: '7rem',
      29: '7.25rem',
      30: '7.5rem',
      35: '8.75rem',
      36: '9rem',
      38: '9.5rem',
      40: '10rem',
      72: '17.5rem',
      80: '20rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem'
    },
    transitionDuration: {
      2000: '2000ms',
      2500: '2500ms',
      3000: '3000ms',
      3500: '3500ms',
      5000: '5000ms'
    },
    transitionProperty: {
      'border-opacity': 'border-opacity'
    },
    translate: {
      '-3/7': '-42.8571429%'
    },
    zIndex: {
      60: '60'
    }
  }
}

const ThemeInternal = {
  colors: {
    // 'theme-color': 'var(--color-theme-color)',
    // 'theme-color-light': internalColors['jpl-sky-blue-light'],
    // 'theme-color-dark': internalColors['jpl-sky-blue-dark'],
    'action-color': internalColors['jpl-sky-blue'],
    'action-color-light': internalColors['jpl-sky-blue-light'],
    'action-color-dark': internalColors['jpl-sky-blue-dark'],
    'emphasis-color': internalColors['jpl-sky-blue'],
    'emphasis-color-dark': internalColors['jpl-sky-blue-dark']
  },
  gradientColorStops: {
    // 'theme-color-w50': internalColors['jpl-sky-blue'] + ' 50%',
    // 'theme-color-dark-w50': internalColors['jpl-sky-blue-dark'] + ' 50%',
    // 'theme-color-darker-w50': internalColors['jpl-sky-blue-dark'] + ' 50%',
    // 'theme-color-light-w50': internalColors['jpl-sky-blue-light'] + ' 50%',
    'action-color-w50': internalColors['jpl-sky-blue'] + ' 50%',
    'action-color-dark-w50': internalColors['jpl-sky-blue-dark'] + ' 50%',
    'action-color-darker-w50': internalColors['jpl-sky-blue-darker'] + ' 50%',
    'action-color-light-w50': internalColors['jpl-sky-blue-light'] + ' 50%'
  }
}

export default {
  mode: 'jit',
  darkMode: 'class',
  theme: defaultTheme,
  plugins: [
    require('@tailwindcss/forms'),
    /**
     * CSS Custom properties from design tokens.
     */
    // require('tailwindcss-themer')({
    //   defaultTheme: {
    //     extend: {
    //       colors: defaultTheme.colors,
    //       gradientColorStops: defaultTheme.gradientColorStops
    //     }
    //   },
    //   themes: [
    //     // {
    //     //   name: 'internal-dark',
    //     //   selectors: ['.ThemeInternalDark'],
    //     //   extend: {
    //     //     colors: {
    //     //       ...ThemeInternal.colors,
    //     //       'theme-color': 'var(--colors-theme-color)',
    //     //       'theme-color-light': internalColors['jpl-sky-blue-light'],
    //     //       'theme-color-dark': internalColors['jpl-sky-blue']
    //     //     },
    //     //     gradientColorStops: {
    //     //       ...ThemeInternal.gradientColorStops,
    //     //       'theme-color-w50': internalColors['jpl-sky-blue-light'] + ' 50%',
    //     //       'theme-color-dark-w50': internalColors['jpl-sky-blue'] + ' 50%',
    //     //       'theme-color-darker-w50': internalColors['jpl-sky-blue'] + ' 50%',
    //     //       'theme-color-light-w50': internalColors['jpl-sky-blue-light'] + ' 50%'
    //     //     }
    //     //   }
    //     // },
    //     {
    //       name: 'edu',
    //       selectors: ['.ThemeEdu', '[data-theme="edu"]'],
    //       extend: {
    //         colors: {
    //           // 'theme-color': eduColors['edu-teal'],
    //           // 'theme-color-light': eduColors['edu-teal-light'],
    //           // 'theme-color-dark': eduColors['edu-teal-dark'],
    //           'action-color': eduColors['edu-teal'],
    //           'action-color-light': eduColors['edu-teal-light'],
    //           'action-color-dark': eduColors['edu-teal-dark'],
    //           'emphasis-color': eduColors['edu-purple'],
    //           'emphasis-color-dark': eduColors['edu-purple-dark']
    //         },
    //         gradientColorStops: {
    //           // 'theme-color-w50': eduColors['edu-teal'] + ' 50%',
    //           // 'theme-color-dark-w50': eduColors['edu-teal-dark'] + ' 50%',
    //           // 'theme-color-darker-w50': eduColors['edu-teal-dark'] + ' 50%',
    //           // 'theme-color-light-w50': eduColors['edu-teal-light'] + ' 50%',
    //           'action-color-w50': eduColors['edu-teal'] + ' 50%',
    //           'action-color-dark-w50': eduColors['edu-teal-dark'] + ' 50%',
    //           'action-color-darker-w50': eduColors['edu-teal-dark'] + ' 50%',
    //           'action-color-light-w50': eduColors['edu-teal-light'] + ' 50%'
    //         }
    //       }
    //     },
    //     {
    //       name: 'internal',
    //       selectors: ['.ThemeInternal', '[data-theme="internal"]'],
    //       extend: ThemeInternal
    //     }
    //   ]
    // }),
    plugin(({ addBase }) => {
      addBase({
        ':root': {
          '--color-theme-color': foundationColors['jpl-red'],
          '--color-theme-color-light': foundationColors['jpl-red-light'],
          '--color-theme-color-dark': foundationColors['jpl-red-dark'],
          '--color-theme-color-darker': foundationColors['jpl-red-darker']
          // '--gradientColorStop-theme-color-dark-w50': 'pink',
          // '--gradientColorStop-theme-color-darker-w50': 'green',
          // '--gradientColorStop-theme-color-light-w50': 'blue'
        },
        '.ThemeVariantDark': {
          '--color-theme-color': 'pink',
          '--color-theme-color-light': 'green',
          '--color-theme-color-dark': 'blue',
          '--color-theme-color-darker': 'purple'
          // '--gradientColorStop-theme-color-dark-w50': 'pink',
          // '--gradientColorStop-theme-color-darker-w50': 'green',
          // '--gradientColorStop-theme-color-light-w50': 'blue'
        },
        '.ThemeInternal .ThemeVariantDark': {
          '--color-theme-color': 'blue',
          '--color-theme-color-light': 'pink',
          '--color-theme-color-dark': 'green',
          '--color-theme-color-darker': 'fuchsia'
          // '--gradientColorStop-theme-color-dark-w50': 'pink',
          // '--gradientColorStop-theme-color-darker-w50': 'green',
          // '--gradientColorStop-theme-color-light-w50': 'purple'
        }
      })
    })
  ],
  safelist: [
    'ThemeVariantDark',
    'ThemeVariantLight',
    'ThemeEdu',
    'ThemeInternal',
    'to-theme-color-dark-w50'
  ],
  future: {
    hoverOnlyWhenSupported: true
  },
  content: []
} satisfies Config
