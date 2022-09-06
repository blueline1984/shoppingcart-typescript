import { Routes, Route } from "react-router-dom";
import Item from "./pages/Item";
import Discount from "./pages/Discount";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/discount" element={<Discount />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
