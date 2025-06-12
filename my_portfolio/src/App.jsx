import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./containers/about/index";
import Home from "./containers/home/index";
import Resume from "./containers/resume/index";
import Skills from "./containers/skills/index";
import Portfolio from "./containers/portfolio/index";
import Contact from "./containers/contact/index";
const App = () => {
  return (
    <div className="App">
      {/* particles.js*/}

      {/* navbar */}

      {/* main content*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
