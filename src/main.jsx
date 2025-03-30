import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//7 product provider wrap miknim
import ProductProvider from "./context/ProductContext.jsx";
//16 sidebarprovider ro wrap mikonim
import SidebarProvider from "./context/SidebarContext.jsx";
//22 cart provider
import CartProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
