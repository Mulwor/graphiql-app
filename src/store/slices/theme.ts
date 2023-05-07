import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type ThemeState = {
  isDark: boolean
}

const initialState: ThemeState = {
  isDark: false,
}

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setIsDark: (state, action: PayloadAction<ThemeState>) => {
      state.isDark = action.payload.isDark
    },
  },
})

export const { reducer: themeReducer, actions: themeActions } = slice
