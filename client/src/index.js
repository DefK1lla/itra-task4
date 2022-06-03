import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import App from './App';
import { store } from "./reducers";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
