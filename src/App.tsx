import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { TeamPage } from "./pages/TeamSection";
import { GalleryPage } from "./pages/GalleryPage";
import { MilestonesPage } from "./pages/MilestonesPage";
import { SponsorsPage } from "./pages/SponsorsPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentPage(id);
    }
  };

  // Handles scrolling when coming back from another route
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      setTimeout(() => scrollToSection(target), 100);
    }
  }, [location]);

  return (
    <div className="space-y-20">
      <div id="home"><HomePage onNavigate={scrollToSection} /></div>
      <div id="events"><EventsPage /></div>
      <div id="team"><TeamPage /></div>
      <div id="gallery"><GalleryPage /></div>
      <div id="milestones"><MilestonesPage /></div>
      <div id="sponsors"><SponsorsPage /></div>
      <Toaster />
    </div>
  );
}
