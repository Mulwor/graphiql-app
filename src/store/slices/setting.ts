import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type SettingState = {
  isDark: boolean
  lang: 'ru' | 'en'
}

const initialState: SettingState = {
  isDark: false,
  lang: 'en',
}

const slice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setIsDark: (state, action: PayloadAction<Pick<SettingState, 'isDark'>>) => {
      state.isDark = action.payload.isDark
    },
    setLang: (state, action: PayloadAction<Pick<SettingState, 'lang'>>) => {
      state.lang = action.payload.lang
    },
  },
})

export const { reducer: settingReducer, actions: settingActions } = slice
