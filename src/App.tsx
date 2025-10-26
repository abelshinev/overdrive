import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { TeamPage } from "./pages/TeamPage";
import { GalleryPage } from "./pages/GalleryPage";
import { MilestonesPage } from "./pages/MilestonesPage";
import { SponsorsPage } from "./pages/SponsorsPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <div id="home"><HomePage onNavigate={setCurrentPage} /></div>
      <div id="events"><EventsPage /></div>
      <div id="team"><TeamPage /></div>
      <div id="gallery"><GalleryPage /></div>
      <div id="milestones"><MilestonesPage /></div>
      <div id="sponsors"><SponsorsPage /></div>
      <Toaster />
      <Footer />
    </div>
  );
}
