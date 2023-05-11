import '@/index.css'
import 'react-toastify/dist/ReactToastify.css'
import './i18n'

import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from '@/App'
import { store } from '@/store'

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Provider>
  </StrictMode>,
)
