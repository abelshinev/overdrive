import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { TeamPage } from "./pages/TeamSection";
import { GalleryPage } from "./pages/GalleryPage";
import { MilestonesPage } from "./pages/MilestonesPage";
import { SponsorsPage } from "./pages/SponsorsPage";
import { Toaster } from "./components/ui/sonner";
import LoadingScreen from "./components/LoadingScreen";
import { RSETPage } from "./pages/RSETPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showSplash, setShowSplash] = useState(true);
  const [splashFading, setSplashFading] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrentPage(id);
    }
  };

  // Handles scrolling when coming back from another route or directly via URL
  useEffect(() => {
    // Priority: state.scrollTo > pathname section
    const pathSection = location.pathname.substring(1); // remove leading '/'
    const target = location.state?.scrollTo || (pathSection && pathSection !== "home" ? pathSection : null);

    if (target) {
      setTimeout(() => scrollToSection(target), 100);
    }
  }, [location]);

  // Show company loading splash for 700ms on first mount
  useEffect(() => {
    // After 700ms start fade, then unmount after fade duration (300ms)
    const t1 = setTimeout(() => setSplashFading(true), 700);
    const t2 = setTimeout(() => setShowSplash(false), 700 + 300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <LoadingScreen visible={showSplash} fade={splashFading} />
      <div className="">
        <div id="home"><HomePage onNavigate={scrollToSection} /></div>
        <div id="rset"><RSETPage /></div>
        <div id="events"><EventsPage /></div>
        {/* <div id="team"><TeamPage /></div> */}
        <div id="gallery"><GalleryPage /></div>
        <div id="milestones"><MilestonesPage /></div>
        <div id="sponsors"><SponsorsPage /></div>
        <Toaster />
      </div>
    </>
  );
}
