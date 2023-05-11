import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type SettingState = {
  isDark: boolean
  isRu: boolean
}

const initialState: SettingState = {
  isDark: false,
  isRu: false,
}

const slice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setIsDark: (state, action: PayloadAction<Pick<SettingState, 'isDark'>>) => {
      state.isDark = action.payload.isDark
    },
    setIsRu: (state, action: PayloadAction<Pick<SettingState, 'isRu'>>) => {
      state.isRu = action.payload.isRu
    },
  },
})

export const { reducer: settingReducer, actions: settingActions } = slice
