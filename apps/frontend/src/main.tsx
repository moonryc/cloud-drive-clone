import React, {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import {Provider} from "react-redux";
import store from "./app/redux/store"
import "./index.css"
import ThemeProvider from "./app/theme/ThemeProvider";
import {MantineProvider} from "@mantine/core";
import {NotificationsProvider} from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <NotificationsProvider>
    <ThemeProvider>
    <Provider store={store}>
      <App/>
    </Provider>
    </ThemeProvider>
      </NotificationsProvider>
    </MantineProvider>
  </StrictMode>
);
