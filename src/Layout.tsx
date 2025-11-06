import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    // some nav items might be whole routes (e.g. alumni)
    if (id === "alumni") {
      navigate("/alumni");
      setCurrentPage(id);
      return;
    }

    // Try to scroll to section on the current page
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentPage(id);
      return;
    }

    // If section not found (we might be on another route) navigate home then scroll
    navigate("/");
    setTimeout(() => {
      const e = document.getElementById(id);
      if (e) {
        e.scrollIntoView({ behavior: "smooth", block: "start" });
        setCurrentPage(id);
      }
    }, 80);
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}