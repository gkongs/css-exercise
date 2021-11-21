import ReactDOM from "react-dom";
import Routes from "./Routes";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "styles/GlobalStyle";
import { theme } from "styles/theme";
import reset from "./styles/reset";

ReactDOM.render(
  <>
    <GlobalStyle styles={reset} />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
