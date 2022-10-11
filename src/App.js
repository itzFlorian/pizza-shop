import Header from "./components/Header";
import Contact from "./components/Contact"
import Main from "./components/Main"
import ShoppingCart from "./components/ShoppingCart"
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [shoppingCart, setShoppingCart] = useState([])

  return (
    <div className="App">
      <Header/>
      <Search/>
      <Routes>
        <Route path="/" element={<Navigate to="/main"/>} />
        <Route path="/main" element={<Main shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
        <Route path="/shopping-cart" element={<ShoppingCart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </div>
  );
}

export default App;
