import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/pages/home/Home";
import Navbar from "./componentes/layouts/navbar/Navbar";
import Footer from "./componentes/layouts/footer/Footer";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./componentes/pages/cart/CartContainer";
import ItemDetailContainer from "./componentes/pages/itemDetail/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />

          <Route path={"/category/:categoryName"} element={<Home />} />

          <Route path={"/cart"} element={<CartContainer />} />

          <Route
            path={"/productDetail/:id"}
            element={<ItemDetailContainer />}
          />

          <Route path="*" element={<h1>ERROR 404 NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

//EL ASTERISCO * HACE REFERENCIA A 'TODO'
//dos propiedades: path (adonde quiero que se muestre) y element (que quiero mostrar)

export default App;
