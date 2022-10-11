import Header from "./components/Header";
import Contact from "./components/Contact"
import Main from "./components/Main"
import ShoppingCart from "./components/ShoppingCart"
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Search from "./components/Search";


function App() {


  return (
    <div className="App">
      <Header/>
      <Search/>
      <Routes>
        <Route path="/" element={<Navigate to="/main"/>} />
        <Route path="/main" element={<Main />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </div>
  );
}

export default App;
