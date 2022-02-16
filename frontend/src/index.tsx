import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./styles/styles";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById("root")
);