import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {persist, store} from "./config/redux/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persist}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
          </PersistGate>
      </Provider>

  </React.StrictMode>
);


reportWebVitals();
