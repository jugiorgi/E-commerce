import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import AppRoutes from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
