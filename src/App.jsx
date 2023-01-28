import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import { AnimeDetails } from "./components/AnimeDetails";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
