import React from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import "./styles/navbar.css";
import NavBar from "./components/Navbar";


const App = () => {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
