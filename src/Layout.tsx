import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const navigate = useNavigate();

  // map friendly names to routes (keeps code explicit and easy to extend)
  const routeMap: Record<string, string> = {
    alumni: "/alumni",
    // add other top-level names here if needed: contact: "/contact", etc.
  };

  const handleNavigate = (target: string) => {
    // if the Navbar passes a full path (starts with "/"), just navigate there
    if (target.startsWith("/")) {
      navigate(target);
      setCurrentPage(target.replace("/", "") || "home");
      return;
    }

    // if the target is a named top-level route, navigate there
    if (routeMap[target]) {
      navigate(routeMap[target]);
      setCurrentPage(target);
      return;
    }

    // otherwise it's a section id: try to scroll; if not found, navigate home with state
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentPage(target);
      return;
    }

    // navigate to home and pass the intended section through location.state
    navigate("/", { state: { scrollTo: target } });
    setCurrentPage(target);
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
