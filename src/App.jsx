import { Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import { AnimeDetails } from "./pages/AnimeDetails";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Completed } from "./pages/Completed";
import { Watching } from "./pages/Watching";
import { PlanToWatch } from "./pages/PlanToWatch";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/watching" element={<Watching />} />
        <Route path="/plan-to-watch" element={<PlanToWatch />} />
      </Routes>
    </div>
  );
}

export default App;
