import { materialDarkInit, materialLightInit } from '@uiw/codemirror-themes-all'

export const material = (theme: 'light' | 'dark') => {
  const options = {
    settings: {
      fontFamily: 'Fira Code',
      lineHighlight: theme === 'light' ? '#FAFAFA' : '#00324B',
      background: theme === 'light' ? '#FAFAFA' : '#00324B',
      gutterBackground: theme === 'light' ? '#FAFAFA' : '#00324B',
    },
  }

  return theme === 'light' ? materialLightInit(options) : materialDarkInit(options)
}
