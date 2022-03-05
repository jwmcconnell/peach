import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import "typeface-roboto";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme";

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
