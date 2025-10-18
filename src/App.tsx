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

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "events":
        return <EventsPage />;
      case "team":
        return <TeamPage />;
      case "gallery":
        return <GalleryPage />;
      case "milestones":
        return <MilestonesPage />;
      case "sponsors":
        return <SponsorsPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
