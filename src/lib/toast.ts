import { toast } from 'react-toastify'

import { store } from '@/store'

export const notify = (msg: string) => {
  const isDark = store.getState().setting.isDark

  return toast.error(msg, {
    theme: isDark ? 'dark' : 'light',
  })
}
