import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider, Global } from "@emotion/react";
import { GlobalStyle } from "styles/GlobalStyle";
import { theme } from "styles/theme";

ReactDOM.render(
  <>
    <Global styles={GlobalStyle} />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
