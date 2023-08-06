import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals.js';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore.js';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import { HelmetProvider } from 'react-helmet-async';

const persistedStore = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <App />
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
