import React from "react";
import {MantineProvider} from "@mantine/core";
import {theme} from "./theme";

type ThemeProviderProps = {
  children: React.ReactNode;
}

const ThemeProvider:React.FC<ThemeProviderProps> = ({children}) => {
  return (
    <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={theme}
    >
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
