import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Astra from "./Astra";
import Wsst from "./Wsst";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/astra" element={<Astra />} />
          <Route path="/projects/wsst" element={<Wsst />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
