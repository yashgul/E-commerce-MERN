import { useState } from "react";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import Register from "./components/register/Register";
function App() {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/products" element={<Products />}></Route>

        <Route path="/register" element={<Register />}></Route>

        <Route path="/login" element={<>LOG IN</>}></Route>

        <Route path="/" element={<>About Us</>}></Route>

        <Route path="*" element={<>404</>}></Route>
      </Routes>
    </>
  );
}

export default App;
