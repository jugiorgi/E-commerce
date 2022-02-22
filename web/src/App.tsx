import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./hooks/useCart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyle />
        <Header />
        <AppRoutes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
