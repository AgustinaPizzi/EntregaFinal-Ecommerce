import { BrowserRouter, Routes, Route } from "react-router-dom";
import Envios from "./componentes/Envios/Envios";
import Navbar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./componentes/CartWidget/CartWidget";
import Footer from "./componentes/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/envio" element={<Envios />} />
        <Route path="/cart" element={<CartWidget />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
