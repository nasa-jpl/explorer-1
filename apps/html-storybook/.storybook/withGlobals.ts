import { useEffect, useGlobals } from 'storybook/preview-api'

const getConfig = (config) => {
  // default values
  let defaultMethod: string = 'css'
  let options: string[] | undefined = undefined
  let method: string | undefined = undefined

  if (typeof config === 'object') {
    // get options
    if ('options' in config) {
      options = config.options
    }
    // handle method
    if ('method' in config) {
      // case insensitive comparisons
      if (config.method.toUpperCase() === 'css'.toUpperCase()) {
        method = 'css'
      } else if (config.method) {
        method = 'data-attr'
      } else {
        // use "css" method if not specified
        method = defaultMethod
      }
    } else {
      method = defaultMethod
    }
  }

  // otherwise undefined
  else {
    options = undefined
    method = undefined
  }

  return { options, method }
}

export const withGlobals = (StoryFn, context) => {
  const { themesConfig, variantsConfig } = context.globals
  const { options, method } = getConfig(themesConfig)
  const { options: variantOptions, method: variantMethod } = getConfig(variantsConfig)
  const [{ theme, variant }, updateGlobals] = useGlobals()
  const isInDocs = context.viewMode === 'docs'

  // disable usage of updateGlobals in docs
  if (!isInDocs) {
    // check for value in local storage
    useEffect(() => {
      const savedVariant = window.localStorage.getItem('data-variant')

      // default to using the first theme available
      if (options && options.length > 0) {
        updateGlobals({ theme: options[0] })
      }

      // handle variant
      if (savedVariant) {
        // update theme attribute and save it to local storage
        updateGlobals({ variant: savedVariant })
      } else {
        // set it to the first theme
        if (variantOptions && variantOptions.length > 0) {
          updateGlobals({ variant: variantOptions[0] })
        }
      }
    }, [])
  }

  // handle theme method
  if (method === 'css') {
    const savedTheme = window.localStorage.getItem('data-theme')
    useEffect(() => {
      if (theme) {
        document.documentElement.classList.remove(savedTheme)
        document.documentElement.classList.add(theme)
        window.localStorage.setItem('data-theme', theme)
      }
    }, [theme])
  } else if (method === 'data-attr') {
    useEffect(() => {
      if (theme) {
        document.documentElement.setAttribute('data-theme', theme)
        window.localStorage.setItem('data-theme', theme)
      }
    }, [theme])
  }

  // handle variant method
  if (variantMethod === 'css') {
    useEffect(() => {
      if (variant) {
        const savedVariant = window.localStorage.getItem('data-variant')
        document.body.classList.remove(savedVariant)
        document.body.classList.add(variant)
        window.localStorage.setItem('data-variant', variant)
      }
    }, [variant])
  } else if (variantMethod === 'data-attr') {
    useEffect(() => {
      if (variant) {
        document.body.setAttribute('data-variant', variant)
        window.localStorage.setItem('data-variant', variant)
      }
    }, [variant])
  }

  return StoryFn()
}

export const globalTypes = {
  themesConfig: {
    defaultValue: {
      themes: ['Default', 'EDU', 'Internal'],
      method: 'css'
    }
  },
  variantsConfig: {
    defaultValue: {
      variants: ['ThemeVariantLight', 'ThemeVariantDark', 'ThemeVariantGray'],
      method: 'css'
    }
  },
  theme: {
    description: 'Global Theme',
    defaultValue: 'defaultTheme',
    toolbar: {
      title: 'Theme',
      // https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon
      icon: 'eye',
      items: [
        {
          value: 'defaultTheme',
          icon: 'home',
          title: 'Default Theme'
        },
        { value: 'ThemeEdu', icon: 'globe', title: 'EDU Theme' },
        { value: 'ThemeInternal', icon: 'key', title: 'Internal Theme' }
      ],
      dynamicTitle: true
    }
  },
  variant: {
    description: 'Theme Variant',
    defaultValue: 'ThemeVariantLight',
    toolbar: {
      title: 'Variant',
      // https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon
      icon: 'eye',
      items: [
        {
          value: 'ThemeVariantLight',
          icon: 'circlehollow',
          title: 'Light Variant'
        },
        { value: 'ThemeVariantDark', icon: 'circle', title: 'Dark Variant' },
        { value: 'ThemeVariantGray', icon: 'contrast', title: 'Gray Variant' }
      ],
      dynamicTitle: true
    }
  }
}
