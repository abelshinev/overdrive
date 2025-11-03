import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { TeamPage } from "./pages/TeamPage"; // or import AlumniPage from "./pages/AlumniPage";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/alumni" element={<TeamPage />} />
        {/* add other top-level routes here if needed */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
