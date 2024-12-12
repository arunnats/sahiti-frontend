import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import Workshops from "./pages/Workshops";
import Contact from "./pages/Contact";
import Debate from "./pages/Debate";

import Navbar from "./components/Navbar";
import MarqueeOrange from "./components/Common/MarqueeOrange";
import Footer from "./components/Common/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/debate" element={<Debate />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
