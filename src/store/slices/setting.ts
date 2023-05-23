import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type SettingState = {
  isDark: boolean
}

const initialState: SettingState = {
  isDark: false,
}

const slice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setIsDark: (state, action: PayloadAction<Pick<SettingState, 'isDark'>>) => {
      state.isDark = action.payload.isDark
    },
  },
})

export const { reducer: settingReducer, actions: settingActions } = slice
