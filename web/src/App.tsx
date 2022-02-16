import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
