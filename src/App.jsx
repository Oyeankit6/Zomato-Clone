/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavBar from "./components/Navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/cart/Cart";
import Placeorder from "./pages/placeorder/Placeorder";
import Footer from "./components/Footer/Footer.jsx";
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";

const App = () => {
  let [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
