import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { Provider } from 'react-redux'
import { store,persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <App />
      </StrictMode>
    </PersistGate>
  </Provider>
)