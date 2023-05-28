import '@/index.css'
import 'react-toastify/dist/ReactToastify.css'
import './i18n'

import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { App } from '@/App'
import { Preloader } from '@/components/Preloader'
import { persistor, store } from '@/store'

createRoot(document.querySelector('#root') as HTMLElement).render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Provider store={store}>
      <PersistGate
        loading={<Preloader />}
        persistor={persistor}
      >
        <Suspense fallback={<Preloader />}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </ErrorBoundary>,
)
