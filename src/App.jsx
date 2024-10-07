import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/pages/home/Home";
import Navbar from "./componentes/layouts/navbar/Navbar";
import Footer from "./componentes/layouts/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/carrito"} element={<h1>holaholahola</h1>} />
        <Route path="*" element={<h1>ERROR 404 NOT FOUND</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

//EL ASTERISCO * HACE REFERENCIA A 'TODO'
//dos propiedades: path (adonde quiero que se muestre) y element (que quiero mostrar)

export default App;
