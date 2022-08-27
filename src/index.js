import App from 'components/App';
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
          <BrowserRouter basename='/goit-react-hw-08-phonebook/'>
            <App/>
          </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);