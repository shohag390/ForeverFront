import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Prodect from "./Pages/Prodect";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./Pages/Verify";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Prodect />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
