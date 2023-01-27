import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

import AdminOrderList from "./components/adminOrderList/AdminOrderList";
import AdminItemList from "./components/adminItemList/AdminItemList";

import { createContext, useEffect, useState } from "react";
import { ThemeContextProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Routes>
          <Route path="/adminOrderList" element={<AdminOrderList />}></Route>

          <Route path="/adminItemList" element={<AdminItemList />}></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/products" element={<Products />}></Route>

          <Route path="/register" element={<Register />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/" element={<>About Us</>}></Route>

          <Route path="*" element={<>404</>}></Route>
        </Routes>
      </ThemeContextProvider>
    </>
  );
}

export default App;
