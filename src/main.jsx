import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/scss/main.scss";
import { APIContextProvider } from "./context/APIcontext";
import { FilteredAnimeProvider } from "./context/FilteredAnimeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <APIContextProvider>
        <FilteredAnimeProvider>
          <App />
        </FilteredAnimeProvider>
      </APIContextProvider>
    </Router>
  </React.StrictMode>
);
