import { useEffect, useGlobals } from '@storybook/preview-api'

const getThemes = (themesConfig) => {
  // default values
  let defaultMethod: string = 'css'
  let options: string[] | undefined = undefined
  let method: string | undefined = undefined

  if (typeof themesConfig === 'object') {
    // handle theme
    if ('themeSwitcher' in themesConfig) {
      if (Array.isArray(themesConfig.defaultValue) && themesConfig.defaultValue.length > 0) {
        options = themesConfig.defaultValue
      } else {
        options = undefined
      }
    }

    // handle method
    if ('method' in themesConfig) {
      // case insensitive comparisons
      if (themesConfig.method.toUpperCase() === 'data-theme'.toUpperCase()) {
        method = 'data-theme'
      } else if (themesConfig.method.toUpperCase() === 'css'.toUpperCase()) {
        method = 'css'
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
  const { themesConfig } = context.globals
  const { options, method } = getThemes(themesConfig)
  const [{ theme }, updateGlobals] = useGlobals()
  const isInDocs = context.viewMode === 'docs'

  // disable usage of updateGlobals in docs
  if (!isInDocs) {
    // check for value in local storage
    useEffect(() => {
      const savedTheme = window.localStorage.getItem('data-theme')
      if (savedTheme) {
        // update theme attribute and save it to local storage
        updateGlobals({ theme: savedTheme })
      } else {
        // set it to the first theme
        if (options && options.length > 0) {
          updateGlobals({ theme: options[0] })
        }
      }
    }, [])
  }

  if (method === 'css') {
    useEffect(() => {
      if (theme) {
        document.documentElement.setAttribute('class', theme)
        window.localStorage.setItem('data-theme', theme)
      }
    }, [theme])
  } else if (method === 'data-theme') {
    useEffect(() => {
      if (theme) {
        document.documentElement.setAttribute('data-theme', theme)
        window.localStorage.setItem('data-theme', theme)
      }
    }, [theme])
  }

  return StoryFn()
}
