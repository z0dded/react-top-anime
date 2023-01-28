import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/css/main.css";
import { APIContextProvider } from "./context/APIcontext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <APIContextProvider>
        <App />
      </APIContextProvider>
    </Router>
  </React.StrictMode>
);
