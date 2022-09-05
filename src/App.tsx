import { Routes, Route } from "react-router-dom";
import Item from "./pages/Item";
import Discount from "./pages/Discount";
import ShoppingCart from "./pages/ShoppingCart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
