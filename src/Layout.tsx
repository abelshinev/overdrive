import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState("home");

  // Map friendly names to routes
  const routeMap: Record<string, string> = {
    home: "/",
    alumni: "/alumni",
  };

  // Sync highlight with route path
  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    setCurrentPage(path);
  }, [location]);

  const handleNavigate = (target: string) => {
    // If full path (starts with "/"), navigate there directly
    if (target.startsWith("/")) {
      navigate(target);
      return;
    }

    // If named route in routeMap, go there
    if (routeMap[target]) {
      navigate(routeMap[target]);
      return;
    }

    // Otherwise try scrolling to section within the current page
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // If section doesn’t exist on this route, navigate home and store scroll target
    navigate("/", { state: { scrollTo: target } });
  };

  // On load, scroll to section if specified in location.state
  useEffect(() => {
    const scrollTarget = (location.state as { scrollTo?: string })?.scrollTo;
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
