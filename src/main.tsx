import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import { AlumniPage } from "./pages/AlumniPage";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all pages that should include Navbar + Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/rset" element={<App />} />
          <Route path="/events" element={<App />} />
          <Route path="/team" element={<App />} />
          <Route path="/gallery" element={<App />} />
          <Route path="/milestones" element={<App />} />
          <Route path="/sponsors" element={<App />} />
          <Route path="/alumni" element={<AlumniPage />} />
          {/* other child routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
