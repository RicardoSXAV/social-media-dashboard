import ReactDOM from "react-dom";
import App from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext";

import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    <GlobalStyles />
  </>,
  document.getElementById("root")
);
