import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <h1>Hello, world!</h1>
    </ThemeProvider>
  );
}

export default App;
