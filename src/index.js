
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import ParticlesBackground from "components/particles/ParticlesBackground";
import Home from "components/Home/Home";
import CanvasAnimation from "components/particles/CanvasAnimation";
import About from "components/About/About";
import Innovation from "components/Innovation/Innovation";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <CanvasAnimation />
  <BrowserRouter>
  
    <Routes>
     
      
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />

      <Route path="/innovation" element={<Innovation />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>

  </>
);
