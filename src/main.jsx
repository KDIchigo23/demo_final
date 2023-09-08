import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/HomePage/HomePage.jsx";
import About from "./Pages/About.jsx";
import Product from "./Pages/Product.jsx";
import Layout from "./Layout/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
