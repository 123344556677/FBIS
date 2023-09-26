import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";
import Home from "components/Home/Home";
import About from "components/About/About";
import Contact from "components/Contact/Contact";
import Services from "components/Services/Services";
import Testimonials from "components/Testimonials/Testimonials";
import Projects from "components/Portfolio/Portfolio";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </>
);
