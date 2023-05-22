import '@/index.css'
import 'react-toastify/dist/ReactToastify.css'
import './i18n'

import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from '@/App'
import { Preloader } from '@/components/Preloader'
import { store } from '@/store'

createRoot(document.querySelector('#root') as HTMLElement).render(
  <Provider store={store}>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </Provider>,
)
