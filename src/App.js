import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CurrentGames from "./pages/CurrentGames";
import UpcomingGames from "./pages/UpcomingGames";
import Varahan from "./pages/Varahan";
import About from "./pages/About";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/EcoPlayStudios" element={<Home />} />
            <Route path="/EcoPlayStudios/currentgames" element={<CurrentGames />} />
            <Route path="/EcoPlayStudios/upcominggames" element={<UpcomingGames />} />
            <Route path="/EcoPlayStudios/varahan" element={<Varahan />} />
            <Route path="/EcoPlayStudios/about" element={<About />} />
            <Route path="/EcoPlayStudios/investors" element={<Investors />} />
            <Route path="/EcoPlayStudios/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
