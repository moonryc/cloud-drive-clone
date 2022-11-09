import React, {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import {Provider} from "react-redux";
import store from "./app/redux/store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </StrictMode>
);
